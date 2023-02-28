//Función para el menu 
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}

//función para mostrar el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//función animación habilidades
window.scroll = function() {
    efectoHabilidades()
};
    
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}

//función validación de formulario
const form = document.getElementById('form');
const nombre = document.getElementById('nombre-completo');
const email = document.getElementById('email');
const tema = document.getElementById('tema');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', e => {
	e.preventDefault();
	let condicion = checkInputs();
    if (condicion == true) {
        enviarFormulario();
    }
});           

function checkInputs() {
	
    const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const temaValue = tema.value.trim();
	const mensajeValue = mensaje.value.trim();
    let condicion = true;

    if(nombreValue === '' || nombreValue.length <= 5 ) {
		setErrorFor(nombre, 'Debe ingresar su Nombre *');
        condicion = false;
	} else {
		setSuccessFor(nombre);
	}

    if(emailValue === '') {
		setErrorFor(email, 'Debe ingresar su email *');
        condicion = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido *');
        condicion = false;
	} else {
		setSuccessFor(email);
	}
	
    if(temaValue === '' || temaValue.length < 4) {
		setErrorFor(tema, 'Debe ingresar un tema *');
        condicion = false;
	} else {
		setSuccessFor(tema);
	}

    if(mensajeValue === '' || mensajeValue.length <= 4) {
		setErrorFor(mensaje, 'Debe ingresar su mensaje *');
        condicion = false;
	} else{
		setSuccessFor(mensaje);
	}
    return condicion;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Mensaje enviado exitosamente!";
}






