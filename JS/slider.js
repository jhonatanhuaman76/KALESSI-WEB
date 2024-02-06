//Arreglo que contiene las imagenes
let imagenes = ["url('Images/bannerInicio1.png')", "url('Images/bannerInicio2.png')", "url('Images/bannerInicio3.png')"];

//Variable que guarda el div que tendra las imagenes
let slider = document.querySelector('.slider');
slider.style.backgroundImage = imagenes[0];

//Variables que guarda los botones para cambiar de imagen
let sliderIzquierdo = document.querySelector('.btn-slider-left');
let sliderDerecho = document.querySelector('.btn-slider-right');

//Variable contador para cambiar imagen según posición del arreglo
let contador = 0;

//Variable para controlar la animacion
let animacion = false;

//Funcion para cambiar a la derecha
function moverDerecha() {
  if (!animacion) {
    animacion = true;
		contador++;
		if (contador > imagenes.length - 1) {
			contador = 0;
		}
    slider.style.backgroundImage = imagenes[contador];
    setTimeout(function () {
      animacion = false;
    },1000)
  }
}

//Funcion para cambiar a la izquierda
function moverIzquierda() {
  if(!animacion) { 
    animacion = true;
    contador--;
		if (contador < 0) {
			contador = imagenes.length - 1;
		}
    slider.style.backgroundImage = imagenes[contador];
    setTimeout(function () {
			animacion = false;
		}, 1000);
  }
}

//Variable que almacena el intervalo en que se cambiará la imagen automaticamente
let intervalo = setInterval(moverDerecha, 3000);

//Evento al dar click en el boton derecha
sliderDerecho.addEventListener('click', function () {
	clearInterval(intervalo);
	moverDerecha();
	intervalo = setInterval(moverDerecha, 3000);
});

//Evento al dar click en el boton izquierdo
sliderIzquierdo.addEventListener('click', function () {
	clearInterval(intervalo);
	moverIzquierda();
	intervalo = setInterval(moverDerecha, 3000);
});


//Evento de click en el boton corazon
let corazon = document.querySelectorAll(".corazon");

for (let i = 0; i < corazon.length; i++){
	corazon[i].addEventListener('mouseenter', corazonRojo);
	corazon[i].addEventListener("mouseleave", corazonNormal);
}

function corazonRojo() {
	for (let i = 0; i < corazon.length; i++){
		corazon[i].src = 'Images/corazon-rojo.png';
	}
}

function corazonNormal() {
	for (let i = 0; i < corazon.length; i++) {
		corazon[i].src = 'Images/corazon.png';
	}
}