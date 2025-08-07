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