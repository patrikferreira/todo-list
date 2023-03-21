import Task from "./classes/Task.js";
const taskField = document.getElementById('taskField');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const msgError = document.getElementById('msg');
let taskArr = [];
let id = 0;
addTask.addEventListener('click', () => {
    if (taskField.value == '')
        return;
    if (taskArr.length < 10) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        const taskLi = document.createElement('li');
        taskLi.innerText = taskField.value;
        taskLi.classList.add('taskLi');
        const taskCheck = document.createElement('button');
        taskCheck.classList.add('check');
        taskCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
        const taskRemove = document.createElement('button');
        taskRemove.classList.add('trash');
        taskRemove.innerHTML = '<i class="fa-solid fa-trash"></i>';
        taskList.appendChild(taskDiv);
        taskDiv.appendChild(taskLi);
        taskDiv.appendChild(taskCheck);
        taskDiv.appendChild(taskRemove);
        const task = new Task(taskField.value, taskDiv, ++id, taskCheck, taskRemove, false);
        taskArr.push(task);
        // check task
        taskCheck.addEventListener('click', () => {
            task.isChecked = !task.isChecked;
            refreshHtmlState();
        });
        // remove task
        taskRemove.addEventListener('click', () => {
            removeTask(task);
        });
        // refresh html
        refreshHtmlState();
    }
    else {
        msgError.innerText = 'Máximo de tarefas atingidas!';
    }
});
// function removeTask
function removeTask(taskRemove) {
    taskArr = taskArr.filter(task => {
        return task.id !== taskRemove.id;
    });
    refreshHtmlState();
}
// function refresh html state
function refreshHtmlState() {
    taskList.innerHTML = '';
    taskField.value = '';
    msgError.innerText = '';
    taskArr.forEach(task => {
        taskList.appendChild(task.html);
        task.isChecked ? task.html.children[0].classList.add('checkLi') : task.html.children[0].classList.remove('checkLi');
        task.isChecked ? task.html.children[1].classList.add('checkBtn') : task.html.children[1].classList.remove('checkBtn');
    });
}
