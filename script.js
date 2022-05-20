(() => {
 const btn = document.querySelector('[data-form-btn]');

const creatTask = (evento) =>{
	evento.preventDefault(); // evita se recarge la pagina 
	const input = document.querySelector('[data-form-input]');
	const value = input.value;
	//const task = document.querySelector('[date-task]');
	const list = document.querySelector('[data-list]');
	const task = document.createElement("li");
	task.classList.add("card");
	input.value = "" // para limpiar el input
	//agregamos codigo de javascript dentro del html ${}
	const taskContent = document.createElement("div")
	taskContent.appendChild(checkComplete())
	const titleTask = document.createElement("spna")
	titleTask.classList.add("task")
	titleTask.innerText = value;
	taskContent.appendChild(titleTask);

	const content = `          
            <i class="fas fa-trash-alt trashIcon icon"></i>`;        
    //task.innerHTML = content // ponemos la info del usuario que pone en el input en nuestra card
    task.appendChild(taskContent);

    list.appendChild(task);

}

//Arrow functions o funciones anonimas 
btn.addEventListener("click", creatTask);

const checkComplete = () =>{
	const i = document.createElement("i"); // genero <i class="far fa-check-square icon"></i>
	i.classList.add('far','fa-check-square','icon');
	i.addEventListener("click",completeTask);
	return i;
}

//Immediatly invoked function expression IIFE => el usuario no debe tener acceso a nuestras funciones 
const completeTask = (event) => {
	const element = event.target;
	element.classList.toggle("fas");
	element.classList.toggle("completeIcon");// clase que genere yo para ponerle colo al icono
	element.classList.toggle("far");

};

})();