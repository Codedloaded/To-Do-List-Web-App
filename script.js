const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearAll = document.getElementById("clearAll");

const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");



function updateTaskCount() {

    const count = taskList.children.length;

    if (count === 0) {

        taskCount.textContent = "0 tasks";

        emptyMessage.style.display = "block";

    } else {

        if (count === 1) {
            taskCount.textContent = "1 task";
        } else {
            taskCount.textContent = count + " tasks";
        }

        emptyMessage.style.display = "none";
    }
}



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

    li.classList.add(
        "list-group-item",
        "task"
    );


    // Task text
    const span = document.createElement("span");

    span.textContent = taskText;


    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add(
        "btn",
        "btn-danger",
        "btn-sm"
    );


    // Complete task
    span.addEventListener("click", function () {

        span.classList.toggle("completed");

    });


    // Delete task
    deleteButton.addEventListener("click", function () {

        li.remove();

        updateTaskCount();

    });


    // Add elements to li
    li.appendChild(span);

    li.appendChild(deleteButton);


    // Add li to list
    taskList.appendChild(li);


    // Clear input
    taskInput.value = "";


    // Update count
    updateTaskCount();

});


// Clear all tasks
clearAll.addEventListener("click", function () {

    taskList.innerHTML = "";

    updateTaskCount();

});


// Run when page loads
updateTaskCount();