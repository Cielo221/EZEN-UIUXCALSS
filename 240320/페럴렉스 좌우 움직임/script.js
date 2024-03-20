const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const subpageImage = document.querySelector(".subPage .parallaxImage");

//도착했을 때 마우스 좌표
let x = 0;
// 따라가는 마우스 좌표
let targetX = 0;
//속도
const speed = 0.1;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      //각자 다른 스크롤 값
      item.style.transform = `translateY(${-scrollNum / (5 * index)}px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  //중심 좌표점을 가운데로
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.2) translate(${-targetX / 50}px)`;
  imageAll[5].style.transform = `scale(1.2) translate(${targetX / 20}px)`;

  window.requestAnimationFrame(loop);
};
loop();
