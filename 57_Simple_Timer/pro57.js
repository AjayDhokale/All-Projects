document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.querySelector('#reset');
    const playBtn = document.querySelector('#play');
    const timerEl = document.querySelector('#timer');
    const root = document.querySelector(':root');
    const timeEnter = document.querySelector('.enter-time');
    const minutesInputField = document.getElementById('input-min');
    const secondsInputField = document.getElementById('input-sec');

    let totalSeconds = 0; // Default value
    let currentSeconds = totalSeconds;
    let playing = false;
    let timerInterval;

    // Initial setup
    timerEl.innerText = formatTime(totalSeconds);
    
    // Play button toggle for play/pause
    playBtn.addEventListener('click', () => {
        playing = !playing;
        playBtn.classList.toggle('play');
        playBtn.classList.toggle('custom-bg');
        
        const playIcon = playBtn.querySelector('i');
        playIcon.classList.toggle('fa-play');
        playIcon.classList.toggle('fa-pause');
    });

    // Reset button event listener
    resetBtn.addEventListener('click', resetAll);

    // Enter time event listener
    timeEnter.addEventListener('click', () => {
        const minutesInput = parseInt(minutesInputField.value) || 0;
        const secondsInput = parseInt(secondsInputField.value) || 0;
        totalSeconds = (minutesInput * 60) + secondsInput;

        timerEl.innerText = formatTime(totalSeconds)

        if (totalSeconds > 0) {
            currentSeconds = totalSeconds;
            playing = false;
            run(); // Start the timer with new value
        } else {
            timerEl.innerText = "00:00";
        }
    });

    // Run the timer
    function run() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (playing) {
                currentSeconds -= 1;
                if (currentSeconds <= 0) {
                    clearInterval(timerInterval);
                    resetAll();
                }
                timerEl.innerText = formatTime(currentSeconds);
                root.style.setProperty('--degrees', calcDeg());
            }
        }, 1000);
    }

    // Format the time
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const newSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
    }

    // Calculate the degrees for the timer circle
    function calcDeg() {
        return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
    }

    // Reset all values
    function resetAll() {
        playing = false;
        clearInterval(timerInterval);
        playBtn.classList.remove('play');
        playBtn.classList.remove('custom-bg');
        
        const playIcon = playBtn.querySelector('i');
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        
        currentSeconds = totalSeconds;
        timerEl.innerText = "00:00";
        root.style.setProperty('--degrees', '0deg');

        // Clear the input fields
        minutesInputField.value = '';
        secondsInputField.value = '';
    }
});
