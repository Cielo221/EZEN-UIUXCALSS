//추첨
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //전체
  const seed = document.querySelector("#seed");
  //명 뽑기
  const total = document.querySelector("#total");
  //번호
  const result = document.querySelector("#result");

  let winner = new Set();
  for (let i = 0; i < total.value; i++) {
    let picked = Math.floor(Math.random() * seed.value) + 1;
    winner.add(`${picked}번, `);
  }

  result.innerText = `당첨자 : ${Array.from(winner).join("")}`;
  // if (winner.size !== total.value) {
  //   for (let i = 0; i < total.value; i++) {
  //     let picked = Math.floor(Math.random() * seed.value) + 1;
  //     winner.add(`${picked}번, `);
  //   }
  // } else {
  //   result.innerText = `당첨자 : ${Array.from(winner).join("")}`;
  // }
});
