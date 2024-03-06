// iterable object = 이터러블 객체
// iterable : 순차적인, 순서대로 무언가로 처리할 수 있는
// "순서"대로 무언가의 연산작업을 처리할 수 있는 객체
// "순서" => index값처럼 순번 할당 값
// 일반 객체 !=> 이터러블 객체
// 문자열, 배열, Map, Set => 이터러블 객체

// 태생이 이터러블 객체가 아니더라도 이 요소들을 이터러블한 속성으로 변경시켜서 반복문을 사용 할 수 있도록 하기 위한 목적

//이터러블한 객체가 어떤 속성 & 특징

//iterable object 특징
//1) for...of 반복문 사용 가능
//2) ...전개연산자 구문 사용
//3) 구조 분해 할당이 가능

// const hi = "hello";

// for (let ch of hi) {
//   console.log(ch);
// }

// const chArray = [...hi];
// console.log(chArray);

// const [ch1, ch2] = hi;
// console.log(ch1, ch2);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr);

//배열이 이터러블한 객체가 되기 위해서 클래스 생성자 함수에는 심볼이 존재하는데, "Symbol.interator" => 심볼 함수가 존재하기 때문에 배열은 이터러블한 객체가 될 수 있음

//이터러블한 객체가 되기 위해서는 해당 객체에 반드시 인터레이터 객체의 함수를 갖고 있어야 한다.

//Symbol.interator => next()

// 유사배열 => for /

// 이터러블하지 않은 객체 => 이터러블한 객체로 변환
// 제너레이터 라는 함수를 사용
// 객체를 생성하는 것 자체가 생성자 함수 혹은 class를 활용해서 프로토타입 => 인스턴스화 하는 구조

const fnc = () => {
  console.log("1");
  console.log("2");
  console.log("3");
};

fnc();

//제너레이터 함수
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

//제너레이터 객체
let g1 = gen();

const g2 = gen();

for (let i of g2) {
  console.log(i);
}
