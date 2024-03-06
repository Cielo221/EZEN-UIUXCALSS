const button = document.querySelector("button");
const result = document.querySelector("#result");

//로또의 규칙
// 한번 추첨시 : 6개의 숫자가나와야함, 중복되면 안됨
// 각각의 6개의 숫자 : 최대 45까지 가능
// 1~45까지의 구간 숫자, 랜덤 => 수학객체 random()*45

//반복문 6번

// 중복 값 ㄴ => set()
//add()

//result 공간에 출력!
//innertext
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
  console.log(myNumber);
};

button.addEventListener("click", lottoPlay);
