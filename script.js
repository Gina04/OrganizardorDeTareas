const btn = document.querySelector('[data-form-btn]');

const creatTask = (evento) =>{
	evento.preventDefault(); // evita se recarge la pagina 
	const input = document.querySelector('[data-form-input]');
	console.log(input.value);
}

//Arrow functions o funciones anonimas 
btn.addEventListener("click", creatTask)