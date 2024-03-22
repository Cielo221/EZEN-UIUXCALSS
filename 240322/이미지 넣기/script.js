const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.font = "italic 60px serif";
// ctx.fillText("환영합니다~", 50, 70);
// // 폰트 정의

// ctx.font = "bold 60px sans-serif";
// ctx.fillText("안녕히가십시오", 50, 150);

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, 300, 200);
};
// (img, x, y, width, height)
// 이미의 속성값을 연결했을 때 이미지를 그려라~

// img.src = "./cat.jpg";

img.src = "./20240322_131231.png";
