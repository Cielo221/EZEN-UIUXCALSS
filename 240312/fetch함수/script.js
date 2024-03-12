/** API
 * Application programming Interface
 */

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "student-2.json", true);
// xhr.send();

// const renderHTML = (contents) => {
//   let output = "";
//   for (let content of contents) {
//     output += `
//     <h2>${content.name}</h2>
//     <ul>
//       <li>전공 : ${content.major}</li>
//       <li>학년 : ${content.grade}</li>
//     </ul>
//     <hr/>
//     `;
//   }
//   document.querySelector("#result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText); // json을 객체로 바꿈
//     renderHTML(students);
//   }
// };

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
    <ul>
      <li>전공 : ${student.major}</li>
      <li>학년 : ${student.grade}</li>
    </ul>
    <hr/>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  });
/**fetch -> open(), send() / response.json() -> json을 객체로 바꿈 / promise로 바뀌기 떄문에 then()을 쓸 수 있음 */
