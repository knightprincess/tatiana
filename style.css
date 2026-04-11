@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Space+Mono&display=swap');

body {
    margin: 0;
    padding: 0;
    background-color: #0a0a0a;
    /* ACÁ VA TU FONDO DE PANTALLA RESPONSIVO */
    background-image: url('fondo.jpg'); 
    background-size: cover;
    background-position: center;
    color: #f4f4f4;
    font-family: 'Space Mono', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

/* Pantalla Negra */
#pantalla-negra {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    z-index: 9999;
    letter-spacing: 2px;
}

/* Landing Page */
#landing-page {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Efecto Hoja de Calcar */
#zine-blur-container {
    position: absolute;
    width: 250px; /* Ajustá esto según el tamaño de tu zine */
    height: 350px;
    z-index: 1;
}

#zine-fondo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hoja-de-calcar {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(255, 255, 255, 0.4); /* Blanco semi-transparente */
    backdrop-filter: blur(4px); /* El desenfoque real */
}

/* Imágenes del Landing */
#nombre-tatiana {
    width: 300px; /* Ajustá al tamaño de tu imagen */
    max-width: 80%;
    z-index: 2;
}

#pregunta-img {
    width: 200px;
    max-width: 60%;
    margin-top: 30px;
    z-index: 2;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease;
}

/* Botones */
#botones-landing {
    margin-top: 20px;
    z-index: 2;
    opacity: 0;
    transition: opacity 1s ease;
}

.btn-group { display: flex; gap: 15px; }

button {
    background: rgba(0, 0, 0, 0.5);
    color: #f4f4f4;
    border: 1px solid #f4f4f4;
    padding: 10px 25px;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(2px);
}

button:hover { background: #f4f4f4; color: #0a0a0a; }

/* Contenedor del Zine */
#zine-container {
    width: 100%;
    max-width: 500px;
    height: 100vh;
    position: relative;
    background: #0a0a0a; /* Fondo negro puro para la lectura */
}

.page {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s ease;
}

.page.active {
    opacity: 1;
    visibility: visible;
}

.img-zine {
    width: 90%;
    max-height: 70vh;
    object-fit: contain;
    margin-bottom: 20px;
}

.next-btn {
    font-style: italic;
    border: none;
    border-bottom: 1px solid #f4f4f4;
    padding: 5px 10px;
}

/* El Video en Página 9 */
#palabra-sol {
    position: absolute;
    cursor: pointer;
    font-style: italic;
    font-weight: bold;
    color: #ffd700; /* Color dorado para el texto interactivo */
    text-shadow: 0px 0px 8px rgba(255, 215, 0, 0.6);
    /* Vas a tener que mover el top y left para que coincida donde está el sol en tu imagen */
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
}

#youtube-container {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 150px;
    z-index: 10;
    box-shadow: 0px 0px 30px rgba(255, 200, 100, 0.3);
}

iframe { width: 100%; height: 100%; border-radius: 10px; }

.final-btns { position: absolute; bottom: 10%; }
