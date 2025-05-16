// Script para efectos de revelación al scrollear
window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
});

// Ejecutar una vez al cargar para mostrar elementos visibles inicialmente
window.dispatchEvent(new Event('scroll'));