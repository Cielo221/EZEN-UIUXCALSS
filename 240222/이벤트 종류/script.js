// window.onload = alert("안녕하세요!");

// const body = document.querySelector("body");

// const button = document.querySelector("button");

// const btnFnc = () => {
//   document.body.style.backgroundColor = "green";
// };

// button.onclick = btnFnc;

// button.onclick = () => {
//   body.style.backgroundColor = "green";
// };

//변수 뒤에 붙을 수 있는건 두가지 밖에 없다.
//button.onclick : 속성
// 메서드

// const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = `
//   code : ${event.code},
//   key ; ${event.key}
//   `;
// };

// const button = document.querySelector("button");

// // button.onclick = () => {
// //   document.body.style.backgroundColor = "aqua";
// // };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// const form = document.querySelector("form");
// const button = document.querySelector("input[type = 'submit']");

// form.addEventListener("submit", () => {});

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const word = document.querySelector("input[type='text']").value;
//   const result = document.querySelector(".result");
//   const count = word.length;
//   result.innerText = count;

//   if (count >= 10) {
//   } else {
//     alert("아이디는 10자 이상이어야 합니다.");
//   }
// });
//value : 사용자가 입력한 값을 찾아오게 해준다.
//length : 문자열 혹은 배열의 총 길이를 확인

// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `;
});
