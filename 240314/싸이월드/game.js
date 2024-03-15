//Game
const search = document.querySelector(".word_text form");

const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myWord = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firatword = myWord[0];
  // console.log(word, myWord, lastword, firatword);

  if (lastword === firatword) {
    document.querySelector("#result").innerText = "정답입니다! o(〃＾▽＾〃)o";
    document.querySelector("word").innerText = myWord;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다! (；′⌒`)";
    document.querySelector("#myword").value = "";
  }
};

search.addEventListener("submit", gameStart);

// Lotto game
const button = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `재추첨하겠습니다! ╚(•⌂•)╝`;
  }
};

button.addEventListener("click", startLotto);
