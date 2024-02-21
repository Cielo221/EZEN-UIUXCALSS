//1. 버튼 불러온다.
//2. 아래 디테일을 불러온다.
//3. 버튼을 눌렀을 때 아래가 나오게 한다.

const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
