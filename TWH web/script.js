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

// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    
    // Crear el overlay y el contenedor de la imagen
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-image';
    overlay.appendChild(lightboxImg);
    body.appendChild(overlay);

    // Añadir click listeners a todas las imágenes de la galería
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function(e) {
            overlay.style.display = 'block';
            lightboxImg.src = this.src;
            e.stopPropagation();
            
            // Asegurar que la imagen se cargue antes de mostrar
            lightboxImg.onload = () => {
                setTimeout(() => {
                    overlay.classList.add('active');
                    lightboxImg.classList.add('active');
                }, 10);
            };
        });
    });

    // Cerrar el lightbox al hacer click fuera de la imagen
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            lightboxImg.classList.remove('active');
            
            // Esperar a que termine la animación antes de ocultar
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    });

    // Añadir efecto de tecla ESC para cerrar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'block') {
            overlay.click();
        }
    });
});

