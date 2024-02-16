// if(조건식 => true) {
//   //실행문이 실행됨
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다!");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// const score = Number(prompt("프로그램 점수 : "));

// // 예외조항 처리
// // if문은 중첩, 반복해서 사용가능
// if (score !== null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C학점");
//   }
// }

// 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지를 확인한 후 알림창을 활용해서 사용자에게 짝수 혹은 홀수 입니다. 라는 메세지를 출력

//1. 사용자에게 숫자 값을 받는다.
//2. 숫자가 짝수인지 홀수인지 정의한다.
//3. 값에 따라서 문구를 정한다.
//4. 최종적으로 사용자에게 메세지를 출력한다.

// const uerPickNum = Number(prompt("숫자를 입력하세요!"));
// if (uerPickNum !== null) {
//   if (uerPickNum % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다!");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다!");
//   }
// }

// if (uerPickNum != null) {
//   const resetnum = Number(uerPickNum);
//   resetnum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다");
// } else {
//   alert("취소하셨습니다.");
// }

//사용자에게 1~12까지의 숫자 중 하나를 받으세요. 전달받은 숫자에 따라서 다음과 같은 알림메세지가 출력되게 해주세요.

// 사용자가 입력한 숫자 : 9 ~ 11 => 독서의 계절 가을이네요
// 사용자가 입력한 숫자 : 6 ~ 8 => 여행하기 좋은 여름이네요
// 사용자가 입력한 숫자 : 3 ~ 5 => 햇살 가득한 봄이네요
// 사용자가 입력한 숫자 : 12 ~ 2 => 스키의 계정 겨울이네요

// 1. 사용자의 숫자를 입력
// 2. 숫자를 입력했을 때 분류되는 값을 정의
// 3. 숫자에 맞춰서 알림창
// 4. 최종적으로 메세지를 보냄

// let month = prompt("현재는 몇 월 인가요?", "ex.2");

// if (month !== null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계정 가을이네요");
//   } else if (month >= 8 && month <= 6) {
//     alert("여행하기 좋은 여름이네요");
//   } else if (month >= 5 && month <= 3) {
//     alert("햇살 가득한 봄이네요");
//   } else if (month >= 13) {
//     alert("존재하지 않은 월 입니다.");
//   } else {
//     alert("스키의 계정 겨울이네요");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 아이디와 패스워드 값을 받으세요 그리고 해당 아이디와 패스워드가 다음과 값다면 "반갑습니다. 어서오세요" 라는 알림 메세지를 출력해라.

//id : ezenit / pw : 1234
// 그런데, 만약 id만 일치하고, pw가 틀렸을 경우에는 "비밀번호를 확인해주세요" 라는 알림 메세지를 출력하고, 만약 id와 pw 둘다 틀렸을 경우에는 "아이디를 확인해주세요!" 라는 알림 메세지를 출력

// const id = "ezenit";
// const pw = 1234;

// const userId = prompt("당신의 아이디는?");

// if (userId === id) {
//   const userPw = Number(prompt("당신의 비밀번호는?"));
//   if (userPw === pw) {
//     alert(`${userId}님 반갑습니다!`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다!");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다!");
//   location.reload();
// }

// switch ((조건식) => 참) {
//   case 1:
//     실행문;
//     break;
//   case 2:
//     실행문;
//     break;
//   case 3:
//     실행문;
//     break;
//   case 4:
//     실행문;
//     break;
//   case 5:
//     실행문;
//     break;
// }

// const subject = prompt("신청할 과목을 선택하세요", "1-html, 2-css, 3-js");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("html을 신청하셨습니다.");
//       break;
//     case "2":
//       alert("css을 신청하셨습니다.");
//       break;
//     case "3":
//       alert("js을 신청하셨습니다.");
//       break;
//     default:
//       alert("잘못입력하셨습니다.");
//   }
// } else {
//   alert("취소하셨습니다");
// }

//사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요
//쇼핑몰 후보 : 쿠팡 쥐마켓 11번가 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면, prompt창에 "확인" 버튼을 클릭하는 순간, 해당 쇼핑몰로 바로 이동하게 만들어주세요
// window 객체안에 location 객체는 어딘가로 이동하도록 해주는 객체
// location 객체 안에 href 속성 => 경로를 지정해주는 속성
// 쿠팡을 사용자가 선택했다면, location.href = "http://www.coupang.com" 결과값을 설정하면, 쿠팡사이트로 이동할 수 있습니다.

const shopingMall = prompt(
  "즐겨찾는 쇼핑몰을 알려주세요",
  "1-쿠팡, 2-G마켓, 3- 11번가, 4-마켓컬리"
);

if ((shopingMall = null)) {
  switch (shopingMall) {
    case "1":
      alert("쿠팡을 선택하셨습니다.");
      location.href = "http://www.coupang.com";
      break;
    case "2":
      alert("G마켓을 선택하셨습니다.");
      location.href = "http://www.coupang.com";
      break;
    case "3":
      alert("11번가를 선택하셨습니다.");
      location.href = "http://www.coupang.com";
      break;
    case "4":
      alert("마켓컬리를 선택하셨습니다.");
      location.href = "http://www.coupang.com";
      break;
  }
}
