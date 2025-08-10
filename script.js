// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select required DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item
        const li = document.createElement('li');

        // Append a text node with the task text (separate from the button)
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add onclick event to remove the task item
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add click event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener for Enter key on the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
