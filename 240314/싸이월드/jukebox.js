const songs = document.querySelectorAll(".albumTable_song");
for (let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").play();
    // currentTarget - 형제 요소
    // 오디오 중에서 제일 가까이에 있는걸로 가지고 와라. closest()
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").pause();
  });
}
