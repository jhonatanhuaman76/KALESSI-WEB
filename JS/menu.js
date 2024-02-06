let menu = document.getElementById('menu-ham');
let menu_bar = document.getElementById('menu-bar');
let cerrar = document.getElementById('cerrar-bar');
let body = document.getElementById('body');
let overlay = document.getElementById('overlay');

menu_bar.addEventListener('click', function () {
	menu.classList.add('menu--show');
  body.classList.add('body--hidden');
  overlay.classList.add('overlay-slider-bar-active');
});

cerrar.addEventListener('click', function () {
	menu.classList.remove('menu--show');
  body.classList.remove('body--hidden');
  overlay.classList.remove('overlay-slider-bar-active');
});

