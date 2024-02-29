// 원기둥의 부피 = 밑면적 x 높이
// 밑면적 = 파이 x ((지름 /2) 제곱)
// 생성자 함수 혹은 class를 활용해서 코드 작성

//1. 지름과 높이 result 값이 나오는 것을 정의 한다.
//2. 계산하기 버튼에 이벤트를 부여
//3. 계산하기 버튼을 눌렀을 때 사용자의 input에 넣은 값을 가져옴
//4. 값을 계산하기
//5. 출력되어진 값을 result 공간에 나타나게 하기

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다.`);

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");
console.log(form);

class Cylinder {
  constructor(cylinderDianmeter, cylinderHeight) {
    this.diameter = cylinderDianmeter;
    this.height = cylinderHeight;
  }

  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
  result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
});

// const form = document.querySelector("form");
// const button = document.querySelector("input[type='submit']");
// const result = document.querySelector("#result");
// let diameter = document.querySelector("#cyl-diameter").value;
// let height = document.querySelector("#cyl-height").value;

// class Cylinder {
//   constructor(cylinderDiameter, cylinderHeight) {
//     this.diameter = cylinderDiameter;
//     this.height = cylinderHeight;
//   }

//   getVolume() {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   }
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const diameterValue = diameter.value;
//   const heightValue = height.value;

//   if (diameterValue === "" || heightValue === "") {
//     result.innerText = "지름값과 높이값을 입력하세요!";
//   } else {
//     const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
//     result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`;
//   }
// });
