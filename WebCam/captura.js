
const video = document.createElement('video');
video.id = 'video';
video.setAttribute('playsinline', true);
video.setAttribute('autoplay', true);
video.setAttribute('width', 320);
video.setAttribute('height', 240);

const contenedorVideo = document.createElement('div');
contenedorVideo.classList.add('contenedor-video');
contenedorVideo.appendChild(video);

const capturarBoton = document.createElement('button');
capturarBoton.id = 'capturar';
capturarBoton.innerText = 'Capturar';

const botonDescargar = document.createElement('button');
botonDescargar.id = 'botonDescargar';
botonDescargar.innerText = 'Descargar Foto';
botonDescargar.disabled = true;

const botonNuevaFoto = document.createElement('button');
botonNuevaFoto.id = 'botonNuevaFoto';
botonNuevaFoto.innerText = 'Tomar otra foto';
botonNuevaFoto.disabled = true;

const contenedorControles = document.createElement('div');
contenedorControles.classList.add('contenedor-controles');
contenedorControles.appendChild(capturarBoton);
contenedorControles.appendChild(botonDescargar);
contenedorControles.appendChild(botonNuevaFoto);

const lienzo = document.createElement('canvas');
lienzo.id = 'lienzo';
lienzo.setAttribute('width', 320);
lienzo.setAttribute('height', 240);

document.body.appendChild(contenedorVideo);
document.body.appendChild(contenedorControles);
document.body.appendChild(lienzo);

const elementoMensajeError = document.createElement('span');
elementoMensajeError.id = 'elementoMensajeError';

const restricciones = {
    audio: true,
    video: {
        width: 320,
        height: 240
    }
};
let stream;
let estaTransmitiendo = false;

async function inicializar() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(restricciones);
        exito(stream);
    } catch (e) {
        elementoMensajeError.innerHTML = `Error de navigator.getUserMedia: ${e.toString()}`;
    }
}

function exito(stream) {
    window.stream = stream;
    video.srcObject = stream;
}

inicializar();

var contexto = lienzo.getContext('2d');
capturarBoton.addEventListener("click", function() {
    contexto.drawImage(video, 0, 0, 320, 240);
    botonDescargar.disabled = false;
    botonNuevaFoto.disabled = false;
});

botonDescargar.addEventListener('click', () => {
    const a = document.createElement('a');
    a.download = 'foto.png';
    a.href = lienzo.toDataURL('image/png');
    a.click();
});

botonNuevaFoto.addEventListener('click', () => {
    lienzo.getContext('2d').clearRect(0, 0, lienzo.width, lienzo.height);
    botonDescargar.disabled = true;
    botonNuevaFoto.disabled = true;
});
