// let arr = [1, 2, 3, 4];
// let arrstr = ["a", "b", "c"];
// let arr01 = [];

// console.log(arr[0]);
// console.log(arrstr.length);

// let var1 = Symbol();
// let var2 = Symbol();

// console.log(var1 === var2);

// let id = Symbol();

// const member01 = {
//   name: "kim",
//   [id]: 12345,
// };

// member01.id = 6789;

// const member02 = {
//   name: "kim",
//   id: 12345,
// };

// console.log(member02);

// const member01 = {
//   name: "Park",
//   id: "abc",
// };

// let grade = Symbol("grade");
// member01[grade] = "VIP";
// console.log(member01);

// const fnc = function () {
//   console.log("test");
// };

// 익명함수
// 함수는 이렇게 작성하는 것이 기본 문법
// function fnc01() {

// }

// let str = "20";
// let num = 10;

// let result = Number(str) + num;
// console.log(result);

// let result01 = str - num;
// console.log(result01);

// console.log(Number("20"));

// const userAge = parseInt(prompt("당신의 나이를 입력하세요!"));
// console.log(typeof userAge);

// console.log(parseInt(false));

// const userHot = parseFloat(prompt("당신이 체온을 입력해주세요"));

// console.log(userHot);

// let num = null;

// console.log(typeof num.toString());

// console.log(typeof String(null));

// String(false);

// console.log(Boolean("hi"));

const fah = Number(prompt("당신의 화씨온도를 입력하세요."));
const cel = ((fah - 32) / 1.8).toFixed(1);

document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다!`);
