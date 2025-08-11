const zoomPhoto = document.querySelector('.zoom-photo');
const photoBGBox = document.getElementById('photoBG-box');
const photoContent = document.getElementById('photo-content');

photoBGBox.addEventListener('click', closeContact);
photoContent.addEventListener('click', function(event) {
    event.stopPropagation();
});

if (zoomPhoto) {
    zoomPhoto.addEventListener('click', function(event) {
        event.preventDefault();
        if (photoBGBox) {
            photoBGBox.classList.toggle('show');
        } else {
            console.warn("section not found.");
        }
    });
}

function closeContact() {
     photoBGBox.classList.remove('show');
}