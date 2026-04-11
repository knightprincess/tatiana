// Timers del Landing Page
window.onload = function() {
    // A los 4 segundos (4000 ms), aparece la pregunta de abajo hacia arriba
    setTimeout(function() {
        let pregunta = document.getElementById('pregunta-img');
        pregunta.style.opacity = '1';
        pregunta.style.transform = 'translateY(0)';
    }, 4000);

    // A los 6 segundos (6000 ms), aparecen los botones
    setTimeout(function() {
        let botones = document.getElementById('botones-landing');
        botones.style.opacity = '1';
    }, 6000);
};

// Si ella dice que "No"
function rechazar() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('pantalla-negra').style.display = 'flex';
}

// Si ella dice que "Sí", entramos al Zine
function empezarZine() {
    document.getElementById('landing-page').style.display = 'none';
    document.body.style.backgroundImage = 'none'; // Sacamos el fondo para que el zine se vea en negro
    document.getElementById('zine-container').style.display = 'block';
}

// Navegar entre las 12 páginas
function nextPage(current) {
    document.getElementById('page-' + current).classList.remove('active');
    let next = current + 1;
    if(document.getElementById('page-' + next)) {
        document.getElementById('page-' + next).classList.add('active');
    }
}

// Lógica del Video en la Página 9
function abrirVideo(event) {
    event.stopPropagation(); // Evita que el clic se registre en el fondo y lo cierre automáticamente
    let contenedor = document.getElementById('youtube-container');
    contenedor.style.display = 'block';
}

// Cerrar el video si toca cualquier otra parte de la pantalla
document.addEventListener('click', function(event) {
    let contenedorVideo = document.getElementById('youtube-container');
    let palabraSol = document.getElementById('palabra-sol');

    // Si el video está abierto, y no hizo clic ni en el video ni en el botón "sol", se cierra.
    if (contenedorVideo.style.display === 'block' && 
        !contenedorVideo.contains(event.target) && 
        event.target !== palabraSol) {
        
        contenedorVideo.style.display = 'none';
        
        // Pausar el video de YouTube recargando el iframe
        let iframe = document.getElementById('video-iframe');
        let src = iframe.src;
        iframe.src = src; 
    }
});
