const button = document.querySelector("button");

const togglePlay = () => {
  const video = document.querySelector("video");
  if (video.paused) {
    button.innerText = "pause";
    video.play();
  } else {
    button.innerText = "play";
    video.pause();
  }
};

button.addEventListener("click", togglePlay);
