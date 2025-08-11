document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const scrollThreshold = 60;

    toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold && menu.classList.contains("open")) {
            menu.classList.remove("open");
        }
    });
});
