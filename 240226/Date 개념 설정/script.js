// const today = new Date();
// console.log(today.getFullYear());
// const theDay = new Date("2025-02-25");
// const theDay = new Date(2025, 2, 25);
// console.log(theDay);

// const object = new object();
// const arr = new Array();

//프로그래밍 언어에는 예를 들어 어떤 특정한 개체를 생성 할때
// const book1 = {
//   title: "자바스크립트",
//   price: 30000,
//   publishing: "2025-05-05",
// };

// class Book {
//   constructor(title, price, publishing) {
//     this.title = title;
//     this.price = price;
//     this.publishing = publishing;
//   }
// }
// 클래스로 생선된 함수라는 것을 인지하기 위해 앞에 대문자로 구분한다.

// const book2 = new Book("자바스크립트", 30000, "2025-05-05");
// console.log(book2);

// const today = new Date();
// const nowMonth = today.getMonth() + 1;
// const nowDate = today.getDate();
// document.write("<h1>오늘 날짜 정보 </h1>");
// document.write(`현재 월 : ${nowMonth}월 <br />`);
// document.write(`현재 월 : ${nowDate}일`);

// const open = new Date("2024-01-09");
// const theMonth = open.getMonth() + 1;
// const theDate = open.getDate();

// document.write("<h1>개강일 날짜 정보 </h1>");
// document.write(`현재 월 : ${theMonth}월 <br />`);
// document.write(`현재 월 : ${theDate}일`);

// 밀리초
// 1밀리초 = 1/1000초
// 1초 = 1000밀리초
// 1분 = 60초(60 * 1000 = 60000밀리초)
// 1시간 = 60분 (60 * 60 * 1000 = 3,600,000밀리초)
// 1일 24시간 (24 * 60 * 60 * 1000)

const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);

const diffDate = theDate.getTime() - today.getTime();
console.log(diffDate);

const result = Math.floor(diffDate / (24 * 60 * 60 * 1000));
console.log(result);

document.write(`연말 D-day : ${result}일 남음`);
