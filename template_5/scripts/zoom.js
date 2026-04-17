//YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('schoolVideo');
}

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
            if (photoBGBox.classList.contains('show') && player) {
                player.playVideo();
            }
        } else {
            console.warn("section not found.");
        }
    });
}

function closeContact() {
    photoBGBox.classList.remove('show');
    if (player) {
        player.pauseVideo();
    }
}