let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

//variables
//gato
let gatoX = 0;
let gatoY = 0;
//comida
let comidaX = 0;
let comidaY = 0;

//puntos
let puntos = 0;

//constantes
const ANCHO_GATO = 50;
const ALTO_GATO = 50;
const ANCHO_COMIDA = 30;
const ALTO_COMIDA = 30;
const VELOCIDAD_GATO = 15;
const LIMITE_X = canvas.width - ANCHO_GATO;
const LIMITE_Y = canvas.height - ALTO_GATO;

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
    //comidaX = canvas.width - ANCHO_COMIDA;
    //comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    aparecerComida();
}

function mover(direccion) {
    if (direccion === "arriba") gatoY -= VELOCIDAD_GATO;
    if (direccion === "abajo") gatoY += VELOCIDAD_GATO;
    if (direccion === "izquierda") gatoX -= VELOCIDAD_GATO;
    if (direccion === "derecha") gatoX += VELOCIDAD_GATO;
    graficarGato();
}

function actualizarPantalla() {
    limpiarCanvas();
    graficarGato();
    graficarComida();
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    if (gatoX > 0) {
        gatoX -= 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }

}

function moverDerecha() {
    if (gatoX < LIMITE_X) {
        gatoX += 10;
        limpiarCanvas();
        graficarGato();
        graficarComida()
        detectarColision();
    }

}

function moverArriba() {
    if (gatoY > 0) {
        gatoY -= 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function moverAbajo() {
    if (gatoY < LIMITE_Y) {
        gatoY += 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function detectarColision() {
    if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY) {
        alert("Deliciosa Comida!!\u{1F601}");
        aparecerComida();
        puntos++;
        mostrarEnSpan("puntos", puntos);
    }
}

function aparecerComida() {
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
    actualizarPantalla();
}



document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();