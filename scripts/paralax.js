document.addEventListener('DOMContentLoaded', function() {
  const welcomeSection = document.getElementById('powitanie');
    const bg = welcomeSection.querySelector('::before');
    const bg_decor = welcomeSection.querySelector('::after');
    const txt = document.getElementById('powitanie_content');
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    welcomeSection.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    if (bg) {
      bg.style.transform = 'translateZ(-1px) scale(2) translateY(' + scrollPosition * 0.2 + 'px)';
      }
    if (bg_decor) {
      bg_decor.style.transform = 'translateZ(1px) scale(2) translateY(' + scrollPosition * 1 + 'px)';
      }
    if (txt) {
      txt.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
      }
    
  });
});