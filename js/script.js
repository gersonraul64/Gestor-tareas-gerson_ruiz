//Seleccionar los elementos

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.querySelector('#addTaskButton');

const taskList = document.querySelector('#taskList');

// Agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();
   

    if (taskText === '') {
        alert("Por favor, agrega una tarea");
        return;
    }
    
    //Crear las tareas dentro li
    const taskItem = document.createElement('li');
    const buttonborrar = document.createElement('button')
    buttonborrar.type = 'button'
    buttonborrar.className = 'botonborrar'
    buttonborrar.id = 'delTaskButton'
    buttonborrar.innerHTML = '🗑️';
    const buttonOK = document.createElement('button')
    buttonOK.type = 'button'
    buttonOK.className = 'botonOK'
    buttonOK.innerText = '✔️';
    
    taskItem.textContent = taskText;
    
    taskList.appendChild(taskItem)  
    taskItem.appendChild(buttonborrar) 
    taskItem.appendChild(buttonOK);
    
    //limpiar input
    taskInput.value='';
    
}

// Evento al boton

addTaskButton.addEventListener('click', addTask)


const deleteButton = document.getElementById('delTaskButton');


$(delTaskButton).addEventListener('click', prueba)


// document.getElementById('taskList').addEventListener('submit', prueba)
// function prueba() {
//       alert('enviando formulario');
    

    // console.log(document.getElementById('taskList').value)
   
    // e.preventDefault();

// }

// const deleteButton = document.querySelector('#delTaskButton');
//Configurar las tareas

// deleteButton.textContent = "Eliminar";
// deleteButton.addEventListener('click', deleteTask);

// const taskTextNode = document.createTextNode(taskText);
// const deleteButton = document.createElement('button');

