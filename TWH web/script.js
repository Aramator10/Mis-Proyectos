// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Verificar si debe recargar la página
window.onload = function() {
    if (localStorage.getItem('shouldReload')) {
        localStorage.removeItem('shouldReload');
        window.location.reload();
    }
};

// Crear el overlay para las imágenes
const overlay = document.createElement('div');
overlay.className = 'image-overlay';
document.body.appendChild(overlay);

// Función para manejar el clic en las imágenes
document.querySelectorAll('.member-card img, .gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const clonedImg = this.cloneNode();
        overlay.innerHTML = '';
        overlay.appendChild(clonedImg);
        overlay.classList.add('active');
    });
});

// Cerrar el overlay al hacer clic
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});

