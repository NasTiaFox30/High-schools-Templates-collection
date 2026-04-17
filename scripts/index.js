// Scroll news section
const scrollContainer = document.getElementById("aktualnosci");
const leftBtn = document.querySelector(".scroll-button.left");
const rightBtn = document.querySelector(".scroll-button.right");

leftBtn.addEventListener("click", () => {
scrollContainer.scrollBy({ left: -320, behavior: 'smooth' });
});

rightBtn.addEventListener("click", () => {
scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
});
