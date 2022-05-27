 import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import {displayTasks} from './readTasks.js';

 export const addTask = (evento) => {
 	evento.preventDefault(); // evita se recarge la pagina 

 	const list = document.querySelector('[data-list]');
 	const input = document.querySelector('[data-form-input]');
	const calendar = document.querySelector("[data-form-date]");

	const value = input.value;
	const date = calendar.value;
	const dateFormat = moment(date).format("DD/MM/YYYY");

	if(value =="" || date ==""){
		return 
	}
 	
 	input.value = "" // para limpiar el input
	calendar.value = ""

	const complete = false; 


	const taskObjet = {
		value, 
		dateFormat,
		complete, 
		id: uuid.v4(),

	};

	list.innerHTML = "";

	const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
	taskList.push(taskObjet);
	localStorage.setItem('tasks', JSON.stringify(taskList));

	displayTasks();
 };

// crea la estructura html tomar los datos y agreagrarla donde corresponde
export const createTask = ({ value,dateFormat, complete, id }) => {
	//const task = document.querySelector('[date-task]');
	const task = document.createElement("li");
		task.classList.add("card");
	//agregamos codigo de javascript dentro del html ${}
	const taskContent = document.createElement("div");

	const check = checkComplete(id);

	if (complete) {
		console.log('Completada');
		check.classList.toggle("fas");
		check.classList.toggle("completeIcon");// clase que genere yo para ponerle colo al icono
		check.classList.toggle("far");
	}

	const titleTask = document.createElement("spna");
		titleTask.classList.add("task");
		titleTask.innerText = value;
		taskContent.appendChild(check);
		taskContent.appendChild(titleTask);
	      
    //task.innerHTML = content // ponemos la info del usuario que pone en el input en nuestra card
    const dateElement = document.createElement("span");
	    dateElement.innerHTML= dateFormat;
	    task.appendChild(taskContent);
	    task.appendChild(dateElement);
	    task.appendChild(deleteIcon(id));
	    
    return task;
}


