// document.write("<h1>컴퓨터 & 나의 가위.바위.보 맞추기 게임 </h1>");

//나: 가위. 바위. 보
//컴: 가위. 바위. 보 (*랜덤)

// 나 & 컴 => 일치, 불일치
// 컴 : random => 1,2,3

// const game = prompt("가위, 바위, 보 중 선택하세요", "ex.가위 바위 보");
// let gameNum = 0;

// switch (game) {
//   case "가위":
//     gameNum = 1;
//     break;
//   case "바위":
//     gameNum = 2;
//     break;
//   case "보":
//     gameNum = 3;
//     break;
//   default:
//     alert("잘못 작성했습니다!");
//     location.reload();
// }

// const com = Math.ceil(Math.random() * 3);
// document.write(`<img src = "./images/math_img_${com}.jpg">`);

// if (gameNum === com) {
//   document.write("컴퓨터와 동일합니다.");
// } else {
//   document.write("컴퓨터와 동일하지 않습니다.");
// }
// console.log(gameNum, com);

const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];
const show = (user, computer, message) => {
  userChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
  console.log();
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
