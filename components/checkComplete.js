const checkComplete = (id) =>{
	const i = document.createElement("i"); // genero <i class="far fa-check-square icon"></i>
	i.classList.add('far','fa-check-square','icon');
	i.addEventListener("click",(event)=>completeTask(event, id));
	return i;
};

//Immediatly invoked function expression IIFE => el usuario no debe tener acceso a nuestras funciones 
const completeTask = (event, id) => {
	const element = event.target;
	element.classList.toggle("fas");
	element.classList.toggle("completeIcon");// clase que genere yo para ponerle colo al icono
	element.classList.toggle("far");



	const tasks = JSON.parse(localStorage.getItem("tasks"))
	const index = tasks.findIndex(item => item.id == id)
	console.log(index);
	tasks[index]["complete"] = !tasks[index]["complete"]
	localStorage.setItem("tasks", JSON.stringify(tasks));

};

export default checkComplete;