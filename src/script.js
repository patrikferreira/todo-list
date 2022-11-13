// variables
const addTask = document.getElementById('addTask');
const taskField = document.getElementById('taskField');
const todoList = document.getElementById('list');
const infoFoot = document.getElementById('foot');
const showDate = document.getElementById('date')
const date = new Date();
const year = date.getFullYear()
const month = (date.getMonth() + 1)
const day = date.getDate()

// show date
showDate.innerText = `${day}/${month}/${year}`;

// array tasks
let tasks = [];

// add task event button
addTask.addEventListener('click', () => {
    if(tasks.length < 7 && taskField.value !== '') {
        tasks.push(taskField.value);
        showTask();
    } else if (tasks.length < 7 && taskField.value == '') {
        infoFoot.classList.add('infoFoot')
        infoFoot.innerText = 'Digite uma tarefa';
    } else {
        infoFoot.classList.add('infoFoot')
        infoFoot.innerText = 'Máximo de tarefas atingido!'
    }
});

// show task function
function showTask() {
    todoList.innerHTML = '';
    for(let index = 0; index < tasks.length; index++) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('task')
        const taskLi = document.createElement('li');
        taskLi.innerText = tasks[index];
        const taskRemove = document.createElement('span');
        taskRemove.classList.add('trash');
        taskRemove.innerHTML = '<i class="fa-solid fa-trash"></i>';

        todoList.appendChild(todoDiv);
        todoDiv.appendChild(taskLi);
        todoDiv.appendChild(taskRemove);

        taskRemove.addEventListener('click', () => {
            removeTask(taskLi);
          });

        taskField.value = '';
    }
}

// remove task function
function removeTask(elemento) {
    tasks = tasks.filter((element) => {
      return element !== elemento.innerText;
    });
    showTask();
  }