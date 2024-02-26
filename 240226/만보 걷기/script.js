// 사용자로부터 "오늘부터 며칠간 만 보 걷기"를 했는지 물어보고 임의 숫자를 받으세요
// 00일 연속 달성 출력 될 수 있도록 해주세요!

// 1.사용자에게 임이의 날짜를 받기
// 2.사용자의 날 정의하기
// 3.들어갈 숫자의 값 정의 하기
// 4. 날짜 계산하기

const userQuery = prompt("시작한 날짜를 입력해주세요!", "ex.2024-02-26");

const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedtime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedtime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;

// const userQuery = prompt(
//   "만보 걷기를 시작한 날짜를 입력해주세요! ☺",
//   "ex.2024-01-13"
// );

// const today = new Date();
// const userDate = new Date(userQuery);
// const result = document.querySelector("#result");

// const passedTime = today.getTime() - userDate.getTime();
// const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

// result.innerText = passedDay;
