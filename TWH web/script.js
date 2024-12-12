// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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

