let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

//variables
//gato
let gatoX = 0;
let gatoY = 0;
//comida
let comidaX = 0;
let comidaY = 0;
//constantes
const ANCHO_GATO = 50;
const ALTO_GATO = 50;
const ANCHO_COMIDA = 30;
const ALTO_COMIDA = 30;
const VELOCIDAD_GATO = 15;

//funciones
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#040457");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#ff0000");
}

function iniciarJuego() {
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}

function mover(direccion) {
    if (direccion === "arriba") gatoY -= VELOCIDAD_GATO;
    if (direccion === "abajo") gatoY += VELOCIDAD_GATO;
    if (direccion === "izquierda") gatoX -= VELOCIDAD_GATO;
    if (direccion === "derecha") gatoX += VELOCIDAD_GATO;
    graficarGato();
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    gatoX -= 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
}

document.getElementById("btnArriba").onclick = () => mover("arriba");
document.getElementById("btnAbajo").onclick = () => mover("abajo");
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => mover("derecha");