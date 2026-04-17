function parallaxIcons(containerSelector) {
  const container = document.querySelector(containerSelector);
  const icons = container.querySelectorAll('i');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    icons.forEach((icon, index) => {
      // Зсув для різних іконок, щоб був ефект глибини
      // const speed = 0.1 + index * 0.05;
      icon.style.transform = `translateY(-${scrollY * 0.1}px) rotate(${index * 15}deg)`;
    });
  });
}

parallaxIcons('.decorative-icons');