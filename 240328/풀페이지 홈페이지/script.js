new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem) => {
    if (new_elem.index == 2) {
      console.log("hello");
      sec2();
    }
    if (old_elem.index == 2) {
      console.log("goodbye");
      sec2_reset();
    }
  },
});

// 네비게이션 이벤트
const navBtn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");

// 슬라이더
const sec2Title = document.querySelector("#sec2 h1.title");
const sec2Slider = document.querySelector("#sec2 .slider_wrap");

console.log(sec2Title, sec2Slider);
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

const sec2 = () => {
  sec2Title.style.cssText = `opacity = 1; transform = translateX(50px);`;
  sec2Title.style.cssText = `opacity = 1; transform = translateX(-50px);`;
};
const sec2_reset = () => {
  sec2Title.style.cssText = `opacity = 1; transform = translateX(-50px);`;
  sec2Title.style.cssText = `opacity = 1; transform = translateX(50px);`;
};

// sec2Title.style.transform = translateX("50px");
// sec2Title.style.opacity = 1;

sec2Title.style.cssText = `
opacity = 1;
transform = translateX(50px);
`;
