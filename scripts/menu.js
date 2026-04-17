document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const scrollThreshold = 10;

    toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
        toggle.style.display = menu.classList.contains("open") ? "none" : "block";
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold && menu.classList.contains("open")) {
            menu.classList.remove("open");
            toggle.style.display = "block";
        }
    });
});
