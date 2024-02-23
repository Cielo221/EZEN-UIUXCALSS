// const newP = document.createElement("p"); // 태그 만들기
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode); //자식으로 넣을 요소 정의

// document.body.appendChild(newP);

// const orderButton = document.querySelector("#order");
// const title = document.querySelector("#container h2");
// const orderInfo = document.querySelector("#orderInfo");

// orderButton.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const TextNode = document.createTextNode(title.innerText);
//     newP.appendChild(TextNode);
//     newP.style.fontSize = "1.2rem";
//     newP.style.color = "crimson";
//     orderInfo.appendChild(newP);
//   },
//   { once: true } //한번 이상의 클릭했을 때 더이상 안나오게 하는것
// );

const newImg = document.createElement("img");
const srcNode = document.createAttribute("src"); // 속성을 만든다. 속성은 appendChild 쓸 수가 없다.
srcNode.value =
  "https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
console.log(newImg);
