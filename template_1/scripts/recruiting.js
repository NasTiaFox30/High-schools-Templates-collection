document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.recruit-board');
    const showFormButton = document.querySelector('.show-form-button');
    const backButton = document.querySelector('.back-button');

    showFormButton.addEventListener('click', () => {
        board.classList.add('flipped');
    });

    backButton.addEventListener('click', () => {
        board.classList.remove('flipped');
    });
});