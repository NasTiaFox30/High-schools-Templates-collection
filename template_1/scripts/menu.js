document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const scrollThreshold = 50;

    toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            menu.classList.remove("open");
            
        } else {
            element.classList.add('open');
        }
    });
});
