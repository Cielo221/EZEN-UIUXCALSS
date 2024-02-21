//1. 사용자가 입력한 2개의 숫자를 찾아온다.
//2. 출력될 공간을 정의한다.
//3. 계산하기 버튼을 클릭했을 때, result 공간에 값을 출력해준다.
//4. 값을 출력시켜주기 위한 연산작업이 필요한다.
//5, 최대공약수에 대한 개념이 필요하다.

const firstNum = document.querySelector("#number1");
const secondNum = document.querySelector("#number2");
const button = document.querySelector("form input[type='submit']");
const result = document.querySelector("#result");

const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  let GCD = 0;
  for (let i = 1; i < max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
