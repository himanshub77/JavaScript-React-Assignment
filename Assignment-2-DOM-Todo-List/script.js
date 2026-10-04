function addTask() {

    // Get the input element
    let taskInput = document.getElementById("taskInput");

    // Get the entered task
    let taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Get the task list
    let taskList = document.getElementById("taskList");

    // Create a new list item
    let listItem = document.createElement("li");

    // Create span for task text
    let taskSpan = document.createElement("span");

    taskSpan.innerText = taskText;

    taskSpan.classList.add("task-text");

    // Mark task as completed when clicked
    taskSpan.onclick = function () {
        taskSpan.classList.toggle("completed");
    };

    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.classList.add("delete-btn");

    // Delete task when button is clicked
    deleteButton.onclick = function () {
        listItem.remove();
    };

    // Add task text and delete button to list item
    listItem.appendChild(taskSpan);

    listItem.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(listItem);

    // Clear input box
    taskInput.value = "";
}