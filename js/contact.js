const contactButton = document.querySelector('.contact-button');
const contactBGBox = document.getElementById('contactBG-box');
const contactContent = document.getElementById('contact-content');
const closeBtn = document.getElementById('close-contact');

contactBGBox.addEventListener('click', closeContact);
closeBtn.addEventListener('click', closeContact);
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

    if (showForm === 'true' && contactBGBox) {
    setTimeout(() => {
        contactBGBox.classList.add('show');
    }, 100);
}
});