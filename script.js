let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="update-btn" onclick="updateTask(${index})">Update</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateTask(index) {
    const newTaskText = prompt('Update task:', tasks[index]);
    
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        renderTasks();
    }
}

window.onload = renderTasks;
