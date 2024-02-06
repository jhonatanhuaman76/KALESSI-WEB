//Base de datos en forma de Array
let productos = [
	{ id: 1, nombre: 'Chaqueta negra de cuero', precio: 50.0, imagen: 'Images/card1.png'},
	{ id: 2, nombre: 'Vestido largo de verano', precio: 35.0, imagen: 'Images/card2.png'},
	{ id: 3, nombre: 'Sueter gigante con cinturon', precio: 60.0, imagen: 'Images/card3.png'},
	{ id: 4, nombre: 'Chaqueta Jean', precio: 30.0, imagen: 'Images/card4.png'},
	{ id: 5, nombre: 'Sudadera con capucha Azul', precio: 45.0, imagen: 'Images/card5.png'},
	{ id: 6, nombre: 'Sudadera con capucha Azul', precio: 45.0, imagen: 'Images/card5.png', desc: true, precioDes: 4 },
];

//Obtener el valor del parámetro "id" de la URL
let urlParams = new URLSearchParams(window.location.search);
let productoId = urlParams.get('id');

//Buscar el producto correspondiente en el array por su ID
let producto = productos.find(function (item) {
	return item.id === parseInt(productoId);
});

//Mostrar datos en el HTML

if (producto) {
	let nombreProducto = document.getElementById('nombre-producto');
	let precioProducto = document.getElementById('precio-producto');
	let imgProducto = document.getElementById('img-producto');
	let precioDescuento = document.getElementById('precio-des-producto');
	let etiquetaDesc = document.getElementById('etiq-des');

	nombreProducto.textContent = producto.nombre;
	precioProducto.textContent = 'S/' + producto.precio.toFixed(2);
	imgProducto.src = producto.imagen;

	if (producto.desc == true) {
		precioDescuento = producto.precioDes;
	} else {
		precioDescuento.style.display = 'none';
		etiquetaDesc.style.display = 'none';
	}
}
