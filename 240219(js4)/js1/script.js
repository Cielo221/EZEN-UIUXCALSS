// 초보 레벨
// let num = 0;
// num += 1;
// num += 2;

// 중급 단계
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

// 고급 단계
// 재활용이 가능한 코드 업그레이드 (중급은 못함)
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// } // 함수 구현

// calcSum(20); //함수 호출

// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요."));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요."));

//클래스 함수
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다.`);
// }

// 익명함수
// const sum = function (a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다.`);
// };

// 화살표 함수
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다.`);
// };
// sum(userNum01, userNum02);

//return문
// const num = Number(prompt("숫자를 몇 까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// calcSum(num);
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다.`);

// const userNum01 = Number(prompt("첫번째 숫자!"));
// const userNum02 = Number(prompt("두번째 숫자!"));
// const userNum03 = Number(prompt("세번째 숫자!"));

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }
// //c = 10, 기본 매개 변수
// console.log(multiple(1, 2, 3));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }
// calcSum(5);

// const hi = "hello";

// function greeting() {
//   console.log(hi);
// }

// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change();
// console.log(hi);

// const factor = 5;

// function calc() {
//   return num * factor;
// }

// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)
// }`);

// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 ; ${sum}`);
// }

// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 ; ${sum}`);
// })(1, 2);

//hoistion 기법
// 무언가를 끌어올린다.
// class 함수는 hoisting / 화살표 & 익명 x
// example();

// function example = () => {
//   console.log("hello");
// }

// const example01 = function () {
//   console.log("hello");
// };

// const example01 = () => "hello";

// example01();

// let hi = function () {
//   return `안녕하세요`;
// };

// console.log(hi());

// 화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return 문을 생략해도 문제없이 작동가능!
// let hi = () => `안녕하세요`;

// console.log(hi());

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => a + b;

// 변수 선언시. let, const, var 사용하지 않으면 무조건 전역변수화!
// function greeting() {
//   hi = "hello";
// }
// const hi = "hello";
// function greeting() {}

// greeting();
// console.log(hi);

// 콜백 함수
//

// const btn = document.querySelector("button");
// const display = () => {
//   alert("오늘도 화이팅 입니다!")
// }
// btn.addEventListener("click", display)

// btn.addEventListener("click", () => {
//   alert("오늘도 화이팅 입니다!");
// });

// const showData = (name, age) => {
//   alert(`안녕하세요! ${name}님 나이가 ${age} 이군요!`);
// };

// const getData = (callback) => {
//   const uerName = prompt("이름을 입력하세요.");
//   const uerAge = prompt("나이를 입력하세요.");
//   callback(uerName, uerAge);
// };

// getData(showData);

// showData();

// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };

// console.log(`init(30, 20) : ${init(30, 20)}`);

// const addNum = (a, b) => {
//   return a + b;
// };

// console.log(addNum(1, 3, 5, 7));

// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째 좋아하는 과일은 ${second}`;
//   return str01;
// };

// console.log(displayFavorites("사과", "포도", "토마토"));

//window 운영체제 => 내장 함수 사용
//JS => 싱글스레드로 작동하는 객체지향 프로그래밍 언어

// const greeting = () => {
//   console.log("안녕하세요!");
// };

/// 1000밀리초 = 1초

// setInterval(greeting, 2000);

// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

// clearInterval :특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수
// 단락회로평가

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

//setTimeout() : 특정시간이 경과한 이후에 작동하게 만드는 함수
// setTimeout(() => {
//   console.log("안녕하세요");
// }, 3000);
