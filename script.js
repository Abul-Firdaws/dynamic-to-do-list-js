document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Update local storage based on current tasks
    function updateLocalStorage() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            const taskText = li.firstChild.textContent || li.firstChild.nodeValue;
            tasks.push(taskText.trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to the list and optionally save to local storage
    function addTask(taskText = taskInput.value.trim(), save = true) {
        if (!taskText) {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function () {
            taskList.removeChild(li);
            updateLocalStorage();  // Update storage after removal
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';

        if (save) {
            updateLocalStorage(); // Save tasks after adding
        }
    }

    // Load tasks from local storage on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    loadTasks();

    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
