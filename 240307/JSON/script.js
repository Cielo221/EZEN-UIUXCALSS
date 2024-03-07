// 서버 & 통신

// JSON  : Javasript Object Notation
// 자바스크립트 객체 표기법

const obj = {
  title: "title",
  price: 15000,
};

// 만약 Js언어를 그대로 가지고, 서버 구현 & 데이터 베이스 구축
//1) 프론트엔드 개발 vs 백엔드 개발 => 연봉 차이 x
//2) 태초에 JS => 웹브라우저에서만 사용 할 수 있도록 만든 한정적인 제약 언어

const student = {
  name: "영심이",
  major: "체육교육",
  grade: 3,
};

const json = JSON.stringify(student);
console.log(student);
console.log(json);
