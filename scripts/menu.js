document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu-links");
    const _divider = document.querySelector("._divider");
    const scrollThreshold = 60;

    toggle.addEventListener("click", function () {
        menu.classList.toggle("open");
        _divider.classList.toggle("hide");
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold && menu.classList.contains("open")) {
            menu.classList.remove("open");
            _divider.classList.add("hide");
        }
    });
});
