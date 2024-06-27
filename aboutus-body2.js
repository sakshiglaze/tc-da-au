document.addEventListener('DOMContentLoaded', function() {
    const dot = document.querySelector('.timeline-dot');
    const timelineSection = document.querySelector('.sec4bottom');
    
    function updateDotPosition() {
        const sectionRect = timelineSection.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight && sectionTop + sectionHeight > 0) {
            const progress = (viewportHeight - sectionTop) / (viewportHeight + sectionHeight);
            const dotPosition = Math.min(Math.max(progress * sectionHeight, 0), sectionHeight - dot.offsetHeight);
            dot.style.top = `${dotPosition}px`;
        }
    }

    window.addEventListener('scroll', updateDotPosition);
    window.addEventListener('resize', updateDotPosition);
    
    // Initial position update
    updateDotPosition();
});

