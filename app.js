// app.js

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const deadline = document.getElementById('deadline').value;

    if (taskInput.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = createTaskItem(taskInput, deadline);

        taskList.appendChild(taskItem);
        clearInputFields();
    }
}

function createTaskItem(taskInput, deadline) {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        toggleCompleted(this);
    };

    taskItem.appendChild(checkbox);
    taskItem.innerHTML += ` ${taskInput}`;

    if (deadline) {
        taskItem.innerHTML += ` - Deadline: ${deadline}`;
    }

    return taskItem;
}

function toggleCompleted(checkbox) {
    const taskItem = checkbox.parentNode;
    taskItem.classList.toggle('completed', checkbox.checked);
}

function clearTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';  // Clear all tasks
}

function deleteSelectedTasks() {
    const taskList = document.getElementById('taskList');
    const taskItems = taskList.getElementsByTagName('li');

    // Loop through task items and remove selected ones
    for (let i = taskItems.length - 1; i >= 0; i--) {
        const checkbox = taskItems[i].getElementsByTagName('input')[0];
        if (checkbox.checked) {
            taskList.removeChild(taskItems[i]);
        }
    }
}

function clearInputFields() {
    document.getElementById('taskInput').value = '';
    document.getElementById('deadline').value = '';
}
