const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearAll = document.getElementById("clearAll");





addTask.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

  
    if (taskText.length < 3) {
        alert("Task must be at least 3 characters.");
        return;
    }

   
    if (taskText.length > 40) {
        alert("Task cannot be more than 40 characters.");
        return;
    }

    const li = document.createElement("li");

    li.classList.add("list-group-item", "task");

    const span = document.createElement("span");

    span.textContent = taskText;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("btn","btn-danger","btn-sm");

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    
    taskInput.value = "";
});


clearAll.addEventListener("click", function () {

    taskList.innerHTML = "";

});