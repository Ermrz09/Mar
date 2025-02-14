// Obtener la luna y la carta
const moon = document.getElementById('moon');
const letter = document.getElementById('letter');

// Función para mostrar la carta al hacer clic en la luna
moon.addEventListener('click', () => {
    letter.style.display = 'block'; // Mostrar la carta
    letter.style.animation = 'showLetter 4s forwards'; // Activar la animación de la carta
});
