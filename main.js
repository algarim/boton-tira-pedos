sonidosPedos = ['complaining-fart.mp3', 'fart.mp3', 'fart-lol.mps', 'perfect-fart.mp3', 'wet-fart.mp3'];

// Función para agarrar un pedo al azar
let pedoSeleccionado;

function elegirPedo () {
    let indiceAleatorio = Math.floor (Math.random()*4);
    pedoSeleccionado = sonidosPedos[indiceAleatorio];
}

elegirPedo();

// Create a custom toast with an image
function createCustomToastWithImage(urlImagen) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
  
    const image = document.createElement('img');
    image.src = './assets/img/'+ urlImagen;
    image.classList.add('toast-image');
  
    const message = document.createElement('span');
    message.textContent = 'Rico pedo, amigo';
  
    toast.appendChild(image);
    toast.appendChild(message);
  
    // Use Toastify-js to display the custom toast
    Toastify({
      text: toast.outerHTML,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: 'bottom',
      position: 'center',
    }).showToast();
  }

// Boton que reproduce sonido del pedo
botonPedos = document.getElementById('fart-button');

botonPedos.onclick = () => {
    let audio = new Audio ('./assets/farts/' + pedoSeleccionado);
    audio.play();

    createCustomToastWithImage();

    elegirPedo();
}




