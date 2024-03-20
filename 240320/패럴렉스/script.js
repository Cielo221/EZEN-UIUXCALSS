const mainHeader = document.querySelector(".mainHeader");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const covertitle = coverWrap.querySelector(".coverTitle");
const dimd = coverWrap.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");

/**innerHeight = 컴퓨터 모니터가 보여주는 값
 * outerHeight = 컴퓨터 상단까지 포함한 값
 */

const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
// 포지션 픽스드로 주었기 때문에 위에 공간 높이 만큼 마진을 준다.
contentWrap.style.marginTop = coverHeight + "px";

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

const scrollEvent = () => {
  // 전체 스크롤
  const scrollNum = window.scrollY;
  // 스크롤이 가능한 높이
  // const documentHeight = document.body.scrollHeight - coverHeight;
  // 마진값을 주었기 때문에 coverHeight을 안넣어도 됨
  const documentHeight = document.body.scrollHeight;

  const per = percent(scrollNum, documentHeight) + "%";

  //프로그레스 바
  progressBar.style.width = per;

  //스크롤 내릴때 해더 보이기
  if (scrollNum >= coverHeight) {
    mainHeader.classList.add("fixed");
  } else {
    mainHeader.classList.remove("fixed");
    //스크롤시 글씨속도 줄이기
    covertitle.style.top = -scrollNum / 5 + "px";
    //스크롤시 이미지 속도
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    //투명도
    dimd.style.backgroundColor = `rgba(0,0,0,${0.1 + scrollNum / 700})`;
  }
};

window.addEventListener("scroll", scrollEvent);
