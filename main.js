sonidosPedos = ['complaining-fart.mp3', 'fart.mp3', 'fart-lol.mp3', 'perfect-fart.mp3', 'wet-fart.mp3'];

reacciones = ['Rico', 'Qué olorcito', 'Uf, amigo', '¿Te hiciste caca?', 'Jugoso']

// Función para agarrar un pedo al azar
let pedoSeleccionado;

function elegirPedo () {
    let indiceAleatorio = Math.floor (Math.random()*5);
    pedoSeleccionado = sonidosPedos[indiceAleatorio];
}

// Función para elegir reacción al azar
let reaccionSeleccionada;

function elegirReaccion () {
    let indiceAleatorio = Math.floor (Math.random()*5);
    reaccionSeleccionada = reacciones[indiceAleatorio];
}

// Elijo pedo y reacción inicial
elegirPedo();
elegirReaccion();

// Boton que reproduce sonido del pedo
botonPedos = document.getElementById('fart-button');

botonPedos.onclick = () => {
    let audio = new Audio ('./assets/farts/' + pedoSeleccionado);
    audio.play();

    Toastify({
        text: reaccionSeleccionada,
        duration: 3000,
        gravity: "bottom",
        position: "center",
        style: {
          background: "linear-gradient(to right, #FFBD6D, #A55B1D)",
        },
        offset: {
            y: 50
          },
      }).showToast();

    elegirPedo();
    elegirReaccion();

}




