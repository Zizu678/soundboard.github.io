document.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to each sound button
    const soundButtons = document.querySelectorAll(".sound-button");
    const topStopButton = document.getElementById("topStopButton");
    const bottomStopButton = document.getElementById("bottomStopButton");
    let currentAudio = null;

    soundButtons.forEach(button => {
        button.addEventListener("click", function() {
            const audioId = button.id.replace("sound", "audio");
            const audio = document.getElementById(audioId);

            if (audio !== currentAudio) {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                currentAudio = audio;
            }

            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
                currentAudio = null;
            }
        });
    });

    // Add click event listeners to the top and bottom stop buttons
    topStopButton.addEventListener("click", function() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    });

    bottomStopButton.addEventListener("click", function() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    });
});