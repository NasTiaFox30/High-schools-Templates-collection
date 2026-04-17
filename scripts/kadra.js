document.querySelectorAll('.teacher-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        const activeCard = document.querySelector('.teacher-card.flipped');
        if (activeCard) {
            activeCard.classList.remove('flipped');
        }
        this.classList.add('flipped');
    });
});