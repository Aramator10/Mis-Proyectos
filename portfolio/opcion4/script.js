document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            
            window.scrollTo({
                top: offsetTop - 80, // Ajustamos para el header fijo
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('load', () => {
    // Progress bars animation
    document.querySelectorAll('.progress').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Set default volume for all videos
    document.querySelectorAll('video').forEach(video => {
        // Set volume immediately
        video.volume = 0.3;
        
        // Also set volume when video loads to ensure it works
        video.addEventListener('loadedmetadata', () => {
            video.volume = 0.3;
        });
    });
});