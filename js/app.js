function adivinarNumero() {

let numero = Number(document.getElementById("numero").value);
let resultado = document.getElementById("resultado");
let valor = document.getElementById("numero").value;

if (valor === "") {
resultado.innerHTML = "";
}

else if (numero === 7) {
resultado.innerHTML = "Acertaste, super good";
}

else if (numero > 7) {
resultado.innerHTML = "Es un numero mas bajito.";
}

else {
resultado.innerHTML = "Es un numero mas alto.";
}

}


document.addEventListener("DOMContentLoaded", function() {

let campoNumero = document.getElementById("numero");

if (campoNumero) {
campoNumero.addEventListener("input", adivinarNumero);
}

});


function mostrarFavorito() {

let opcion = document.getElementById("favoritos").value;
let informacion = document.getElementById("informacion");

if (opcion === "libro") {

informacion.innerHTML = `
<h3>Mi libro favorito</h3>
<p>Siddhartha</p>
<img src="https://images.cdn2.buscalibre.com/fit-in/360x360/97/82/97822208af909f07ea67963d470b5171.jpg"
alt="Portada del libro Siddhartha">
`;

}

else if (opcion === "pelicula") {

informacion.innerHTML = `
<h3>Mi pelicula favorita</h3>
<p>Girl, Interrupted</p>
<img src="https://m.media-amazon.com/images/M/MV5BMGRmZTllNTMtOTYxNC00YTY4LWE0YTMtMzkwMDdlMjVlNmZhXkEyXkFqcGc@._V1_.jpg"
alt="Imagen de Girl, Interrupted">
`;

}

else if (opcion === "artistas") {

informacion.innerHTML = `
<h3>Mis artistas favoritos</h3>

<p>Anuel AA</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePocG_5Z8lR9N7HwKPQbzNUWgaBFsxDBnjkxIRFwpz42rF4InSgY4eEjV&s=10"
alt="Anuel AA">

<p>Lana Del Rey</p>
<img src="https://i.pinimg.com/736x/82/af/5a/82af5a885fcf67284250f7d5808e28ae.jpg"
alt="Lana Del Rey">
`;
}

else {

informacion.innerHTML = "<p>Aqui aparecera tu seleccion</p>";

}

}

function mostrarMensaje() {

alert("u are very funny");

}