const videoContainer = document.querySelector(".video-container");
const video = document.querySelector(".preview-video");
const thumbnail = document.querySelector(".thumbnail");
const playPauseBtn = document.querySelector("#playPauseBtn");
const muteBtn = document.querySelector("#muteBtn");

const updatePlauPauseBtn = () => {
    playPauseBtn.textContent = video.paused ? "play" : "pause";
}

const updateMuteBtn = () => {
    muteBtn.textContent = video.muted ? "unmute" : "mute"
}

videoContainer.addEventListener("mouseenter", () => {
    video.play();
    video.style.opacity = "1";
    thumbnail.style.opacity = "0"
    updatePlauPauseBtn();
})

videoContainer.addEventListener("mouseleave", () => {
    video.pause();
    video.style.opacity = "0";
    thumbnail.style.opacity = "1"
    updatePlauPauseBtn();
})


playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    updatePlauPauseBtn();
})

muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    updateMuteBtn();
})  