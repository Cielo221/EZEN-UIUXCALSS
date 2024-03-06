const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "Typescript"];

const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);

const result = document.querySelector("#result");
// result.innerHTML = `
// <ul>
// ${[...resultList]
//   .map((subject) => {
//     `<li>${subject}</li>`;
//   })
//   .join("")}
// </ul>
// `;
result.innerHTML = `
<ul>
${[...result].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
