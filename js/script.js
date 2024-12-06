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
    const buttonBorrar = document.createElement('button')
    buttonBorrar.type = 'button'
    buttonBorrar.className = 'botonborrar'
    buttonBorrar.id = 'borrado'
    buttonBorrar.innerText = '🗑️';
    const buttonOK = document.createElement('button')
    buttonOK.type = 'button'
    buttonOK.className = 'botonOK'
    buttonOK.innerText = '✔️';
    
    taskItem.textContent = taskText;
    
    taskList.appendChild(taskItem)  
    taskItem.appendChild(buttonBorrar) 
    taskItem.appendChild(buttonOK);
    
    //limpiar input
    taskInput.value='';
    
}

// Evento al boton
addTaskButton.addEventListener('click', addTask)

const delTaskButton = document.querySelector('#borrado');
buttonBorrar.click = prueba()
delTaskButton.addEventListener('click', addTask)





// document.getElementById('taskList').addEventListener('submit', prueba)
// function prueba() {
//       alert('enviando formulario');
    

    // console.log(document.getElementById('taskList').value)
   
    // e.preventDefault();

// }

//Configurar las tareas

// deleteButton.textContent = "Eliminar";
// deleteButton.addEventListener('click', deleteTask);

// const taskTextNode = document.createTextNode(taskText);
// const deleteButton = document.createElement('button');

