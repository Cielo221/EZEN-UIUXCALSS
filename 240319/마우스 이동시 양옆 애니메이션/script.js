const contentAll = document.querySelectorAll(".contentWrap img");
const [shadow, date, human, textImg] = contentAll;

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translatex(${targetX / 35}px)`;
  date.style.transform = `translatex(${targetX / 20}px)`;
  human.style.transform = `translatex(${-targetX / 20}px)`;
  textImg.style.transform = `translatex(${-targetX / 20}px)`;

  window.requestAnimationFrame(loop);
};
loop();
