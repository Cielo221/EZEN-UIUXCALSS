const bar = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    bar.classList.add("active");
  } else {
    bar.classList.remove("active");
  }
});
