// 오늘 옆에 있는 친구들과 점심
// 짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕
// 상기 메뉴를 랜덤으로 1개 메뉴를 선택해서 웹 브라우저에 출력될 수 있도록 출력

// let lunchNum = 0;
// const lunch = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];

// switch (lunch) {
//   case "짜장면":
//     lunchNum = 1;
//     break;
//   case "돈가스":
//     lunchNum = 2;
//     break;
//   case "부대찌개":
//     lunchNum = 3;
//     break;
//   case "회덮밥":
//     lunchNum = 4;
//     break;
//   case "마라탕":
//     lunchNum = 5;
//     break;
// }

// window.onload = () => {
//   const lunchCount = 5;
//   const randomNumber = Math.ceil(Math.random() * lunchCount);
//   document.write(`${lunchNum}`);
// };

const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
const menuNum = Math.floor(Math.random() * menu.length);
const result = menu[menuNum];
document.write(result);
