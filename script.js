const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterTasks = document.getElementById('filterTasks');
const themeToggle = document.getElementById('themeToggle');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskAction);
filterTasks.addEventListener('change', filterTaskList);
themeToggle.addEventListener('click', toggleTheme);




// Add Task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
    <button class="complete-btn">✔</button>
    <button class="edit-btn">✏</button>
    <button class="delete-btn">❌</button>
    </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}


// Handle Task Actions (Complete, Edit, Delete)
function handleTaskAction(event) {
    const target = event.target;
    const taskItem = target.closest('li');

    if (target.classList.contains('complete-btn')) {
        taskItem.classList.toggle('completed');
        taskItem.querySelector('.task-text').style.textDecoration = taskItem.classList.contains('completed') ? 'line-through' : 'none';
    } else if (target.classList.contains('edit-btn')) {
        const newText = prompt('Edit Task:', taskItem.querySelector('.task-text').textContent);
        if (newText) taskItem.querySelector('.task-text').textContent = newText;
    } else if (target.classList.contains('delete-btn')) {
        alert('Are you sure you want to delete this task?');
        taskItem.remove();
    }   
}



// Filter Tasks
function filterTaskList() {
    const filterValue = filterTasks.value;
    const tasks = taskList.querySelectorAll('li');

    tasks.forEach(task => {
        if (filterValue === 'all') {
            task.style.display = 'flex';
        } else if (filterValue === 'completed') {
            task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
        } else if (filterValue === 'pending') {
            task.style.display = !task.classList.contains('completed') ? 'flex' : 'none';
        }
    });
}




// Toggle Theme (Dark/Light)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
