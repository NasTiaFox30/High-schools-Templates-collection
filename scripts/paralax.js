function paralaxEffect(elem) {
  const paralaxSection = document.getElementById(elem);
  const bg = paralaxSection.querySelector('::before');
  const bg_decor = paralaxSection.querySelector('::after');
  const content = document.getElementById(elem +'_content');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    paralaxSection.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    if (bg) {
      bg.style.transform = 'translateZ(-1px) scale(2) translateY(' + scrollPosition * 0.2 + 'px)';
    }
    if (bg_decor) {
      bg_decor.style.transform = 'translateZ(1px) scale(2) translateY(' + scrollPosition * 1 + 'px)';
    }
    if (content) {
      content.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
    }
  });
}