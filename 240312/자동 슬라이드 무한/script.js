const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
console.log(slideCount);
const slideWidth = 200;
const slidemargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

/**최초 인덱스값  */
let currentIndex = 0;

/**li style setting */
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newslideCount = currentSlides.length;
  console.log(newslideCount);
  const newWidth = `${
    (slideWidth + slidemargin) * newslideCount - slidemargin
  }px`;
  slides.style.width = newWidth;
};
updateWidth();

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slidemargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};
setInitialPos();

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};
makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slidemargin)}px`;
  currentIndex = num;
  console.log(num);
  console.log(currentIndex, slideCount);
  if (currentIndex === slideCount || currentIndex === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIndex = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

nextBtn.addEventListener("click", () => {
  moveSlide(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIndex - 1);
});

// auto slide

const autoSlide = () => {
  timer = setInterval(() => {
    moveSlide(currentIndex + 1);
  }, 3000);
};
autoSlide();

const stopSlide = () => {
  clearInterval(timer);
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});
