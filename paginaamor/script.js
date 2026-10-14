
function abrirCarta() {
    const carta = document.getElementById("carta");

    carta.classList.add("abierta");

    carta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function cerrarCarta() {
    const carta = document.getElementById("carta");

    carta.classList.remove("abierta");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// CREAR ESTRELLAS EN EL CIELO

const cielo = document.getElementById("cielo-estrellado");

if (cielo) {
    for (let i = 0; i < 70; i++) {

        const estrella = document.createElement("span");

        estrella.classList.add("estrella-magica");
        estrella.textContent = "✦";

        // Posición aleatoria
        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";

        // Tamaño aleatorio
        estrella.style.fontSize =
            (Math.random() * 10 + 5) + "px";

        // Cada estrella brilla a un ritmo distinto
        estrella.style.animationDelay =
            Math.random() * 3 + "s";

        cielo.appendChild(estrella);
    }
}
// CORAZONES AL PULSAR LA PÁGINA

document.addEventListener("click", function(evento) {

    const corazon = document.createElement("span");

    corazon.classList.add("corazon-flotante");

    // Elegir un corazón al azar
    const corazones = ["❤️", "💗", "💖", "💕", "💜"];
    corazon.textContent =
        corazones[Math.floor(Math.random() * corazones.length)];

    // Colocarlo donde se hizo clic
    corazon.style.left = evento.clientX + "px";
    corazon.style.top = evento.clientY + "px";

    document.body.appendChild(corazon);

    // Eliminarlo cuando termine la animación
    setTimeout(function() {
        corazon.remove();
    }, 2000);

});
// CONTADOR DE NUESTRA HISTORIA

const fechaInicio = new Date(2022, 7, 30, 0, 0, 0);

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia < 0) {
        return;
    }

    const dias = Math.floor(diferencia / 86400000);
    const horas = Math.floor((diferencia % 86400000) / 3600000);
    const minutos = Math.floor((diferencia % 3600000) / 60000);
    const segundos = Math.floor((diferencia % 60000) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

