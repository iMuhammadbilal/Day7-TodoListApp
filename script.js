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
    const taskText = taskInput.value.trim(); // take the value of the input and remove any whitespace
    console.log(taskText);
    
    if (taskText === '') return; // if the input is empty, return
    
    const taskItem = document.createElement('li'); // create a new list item
    console.log(taskItem);
    

    // add the task text and buttons to the list item
    taskItem.innerHTML = `  
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
    <button class="complete-btn">✔</button>
    <button class="edit-btn">✏</button>
    <button class="delete-btn">❌</button>
    </div>
    `;
    taskList.appendChild(taskItem);  // add the list item to the task list
    taskInput.value = ''; // clear the input field
}


// Handle Task Actions (Complete, Edit, Delete)
function handleTaskAction(event) {
    const target = event.target;  // get the element that was clicked
    console.log(target);
    const taskItem = target.closest('li'); // find the closest list item
    console.log(taskItem);

    if (target.classList.contains('complete-btn')) { // check if the element has the complete-btn class
        taskItem.classList.toggle('completed'); // toggle the completed class on the list item
        taskItem.querySelector('.task-text').style.textDecoration = taskItem.classList.contains('completed') ? 'line-through' : 'none'; // add or remove line-through style
    } else if (target.classList.contains('edit-btn')) { // check if the element has the edit-btn class
        const newText = prompt('Edit Task:', taskItem.querySelector('.task-text').textContent); // prompt the user for new text
        if (newText) taskItem.querySelector('.task-text').textContent = newText; // if the user entered text, update the task text
    } else if (target.classList.contains('delete-btn')) { // check if the element has the delete-btn class
        alert('Are you sure you want to delete this task?'); // confirm the delete action
        taskItem.remove(); // remove the list item from the task list
    }   
}



// Filter Tasks
function filterTaskList() {
    const filterValue = filterTasks.value; // get the value of the filter select element
    const tasks = taskList.querySelectorAll('li'); // get all the list items

    tasks.forEach(task => { // loop through each list item
        if (filterValue === 'all') { // check the filter value
            task.style.display = 'flex'; // show the list item
        } else if (filterValue === 'completed') { // check the filter value
            task.style.display = task.classList.contains('completed') ? 'flex' : 'none'; // show the list item if it has the completed class
        } else if (filterValue === 'pending') { // check the filter value 
            task.style.display = !task.classList.contains('completed') ? 'flex' : 'none'; // show the list item if it does not have the completed class
        }
    });
}




// Toggle Theme (Dark/Light)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
