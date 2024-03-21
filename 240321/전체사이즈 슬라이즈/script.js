const buttons = document.querySelectorAll("label");
const tabItems = document.querySelector(".items");
const h1 = tabItems.querySelectorAll("h1");
console.log(h1);

console.log(tabItems);
buttons.forEach((button, index) => {
  // 버튼 클릭시 옆으로 페이지 넘기기
  button.addEventListener("click", () => {
    tabItems.style.left = `-${index * 100}%`;

    //네비게이션 색상 선택
    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");

    //글자 transform
    h1.forEach((title) => title.classList.remove("active"));
    h1[index].classList.add("active");
  });
});
