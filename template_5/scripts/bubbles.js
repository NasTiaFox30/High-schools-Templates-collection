const bubbleContainers = document.querySelectorAll('.bubbles');

bubbleContainers.forEach(container => {
    const bubbleCount = 20;

        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // size  10-50px
            const size = Math.random() * 40 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            bubble.style.left = `${Math.random() * 100}%`;

            bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;

            bubble.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(bubble);
        }
});
        

