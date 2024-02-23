// 1.버튼과 네비 정의
// 2. 버튼을 눌렀을 때 네비가 오른 쪽에서 왼쪽으로 나오게 함
// 2-1. 이때 버튼은 네비의 왼쪽에 있음
// 3. 버튼을 다시 눌렀을 때 네비는 사라지고 버튼만 남게 함

const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
