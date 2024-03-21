/** 어떤 축을 중심으로 돌아가는가? Y축
 * 원 = 360도
 * 아이템 = 8개
 * 360/8 = 45
 * => 아이템들을 45도로 틀어야 원이 된다.
 */
const circle = document.querySelector("#circle");
const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    // css에서 만들어 놓은 애니메이션은 Js에서 멈추고 싶을 때 = animationPlayState
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});

console.log(circle, articles);
