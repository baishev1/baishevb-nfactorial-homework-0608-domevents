let playPause = document.getElementById("playpause");
let playPauseVideo = document.getElementById("video");
let playPauseAudio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
let volumeSlider = document.getElementById("volume")

volumeSlider.addEventListener("input", (event) => {
  playPauseAudio.volume = event.target.value / 100;
})
playPause.addEventListener("click",  (event) => {
    if(playPauseVideo.paused){
        playPauseVideo.play();
        playPauseAudio.play();
        togglePlaybtn();
    }
    else{
        playPauseVideo.pause();
        playPauseAudio.pause();
        console.log(playPause.classList.contains('fa-play'));
        togglePlaybtn();
    }
})
 function togglePlaybtn(){
    playPause.classList.toggle('fa-play');
    playPause.classList.toggle('fa-pause');
 }
 function progressValue() {
    progressBar.max = playPauseAudio.duration;
    progressBar.value = playPauseAudio.currentTime;

    currentTime.textContent = formatTime(playPauseAudio.currentTime);
    durationTime.textContent = formatTime(playPauseAudio.duration);
  }

  setInterval(progressValue, 500);

  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  function changeProgressBar() {
    track.currentTime = progressBar.value;
  }

  progressBar.addEventListener("click", changeProgressBar);

  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);



