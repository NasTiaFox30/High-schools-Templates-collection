const contactButton = document.querySelector('.contact-button');
const contactBGBox = document.getElementById('contactBG-box');
const contactContent = document.getElementById('contact-content');

contactBGBox.addEventListener('click', closeContact);
contactContent.addEventListener('click', function(event) {
    event.stopPropagation();
});

if (contactButton) {
    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (contactBGBox) {
            contactBGBox.classList.toggle('show');
        } else {
            console.warn("Contact section not found.");
        }
    });
}

function closeContact() {
     contactBGBox.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function () { 
    const urlParams = new URLSearchParams(window.location.search);
    const showForm = urlParams.get('showContactForm');

    // Відкриття форми при завантаженні сторінки, якщо є параметр
    if (showForm === 'true' && contactBGBox) {
    // Чекаємо, доки сторінка повністю завантажиться
    setTimeout(() => {
        contactBGBox.classList.add('show');
    }, 100);
}
});