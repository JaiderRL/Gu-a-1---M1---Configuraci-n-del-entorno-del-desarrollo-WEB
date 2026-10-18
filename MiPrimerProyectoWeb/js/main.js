const datosCuriosos = [
    "El término \"inteligencia artificial\" se usó por primera vez en 1956, en la conferencia de Dartmouth.",
    "Los asistentes de voz convierten el sonido en texto antes de entender lo que se les pide.",
    "Muchos filtros de correo no deseado usan IA para separar el spam de los mensajes reales.",
    "Las recomendaciones de series y canciones se basan en lo que usted y personas similares han visto o escuchado."
];

const botonDatoCurioso = document.getElementById("btnDato");
const parrafoDatoCurioso = document.getElementById("datoCurioso");
const textoAnioActual = document.getElementById("anio");

let posicionDatoActual = 0;

function mostrarSiguienteDatoCurioso() {
    parrafoDatoCurioso.textContent = datosCuriosos[posicionDatoActual];
    posicionDatoActual = (posicionDatoActual + 1) % datosCuriosos.length;
}

function mostrarAnioActual() {
    textoAnioActual.textContent = new Date().getFullYear();
}

botonDatoCurioso.addEventListener("click", mostrarSiguienteDatoCurioso);
mostrarAnioActual();

console.log("Página cargada correctamente.");
