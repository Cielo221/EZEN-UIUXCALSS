/** input 태그를 통해서 사용자에게 어던 숫자를 받을 것 입니다.
 *
 * 사용자가 숫자를 입력한 후 "입력"버튼을 클릭하게 되면, 다음과 같은 조건에 따라서 아래와 결과가 출력되게 할 것입니다.
 *
 * 만약, 10보다 큰 숫자를 입력했다면, 알림창을 통해서 "10보다 작은 숫자를 입력하세요!"라는 메세지가 출력되게 할것 이고,
 *
 * 만약, 10보다 작은 숫자가 입력했다면 result라는 공간에 해당 숫자가 출력되도록 할 것 입니다.
 *
 * 단, 해당 코드를 어제 배운 try, catch, finally문을 활용해서 코드를 작성해 보세요
 *
 * try문 : 실행문을 작성한 공간
 * cahch 문 : 만약 에러가 발생하게 되었을 때, 에러 메세지를 출력시켜줄 수 있는 함수
 * finally문 : 상단 실행문이 정상 혹은 에러와 관계없이 무조건 실행되는 공간
 */

const userNumber = document.querySelector("#user-number");
const button = document.querySelector("form");

const resultNumber = (e) => {
  e.preventDefault();
  let n = userNumber.value;
  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요!";
    }
    n = Number(n);
    if (n < 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n >= 10) {
      throw "10보다 작은 숫자를 입력하세요!";
    }
  } catch (err) {
    alert(err);
  } finally {
    userNumber.value = "";
  }
};

button.addEventListener("submit", resultNumber);
