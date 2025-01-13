// script.js
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const seekBar = document.getElementById('seek-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
});

// Stop functionality
stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  playPauseButton.textContent = 'Play';
});

// Update seek bar and time
audio.addEventListener('timeupdate', () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Update audio time when seek bar is changed
seekBar.addEventListener('input', () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});

// Display duration
audio.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(audio.duration);
});

// Helper function to format time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}
