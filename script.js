const btn = document.querySelector('[data-form-btn]');

const creatTask = (evento) =>{
	evento.preventDefault(); // evita se recarge la pagina 
	const input = document.querySelector('[data-form-input]');
	const value = input.value;
	//const task = document.querySelector('[date-task]');
	const list = document.querySelector('[data-list]');
	const task = document.createElement("li");
	task.classList.add("card");
	input.value = "" // para limpiar el imput
	//agregamos codigo de javascript dentro del html ${}
	const content = `<div>
              <i class="far fa-check-square icon"></i>
              <span class="task">${value}</span> 
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;        
    task.innerHTML = content // ponemos la info del usuario que pone en el input en nuestra card
    
    list.appendChild(task);

	console.log(content);
}

//Arrow functions o funciones anonimas 
btn.addEventListener("click", creatTask)