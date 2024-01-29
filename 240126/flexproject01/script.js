const btn = document.querySelector(".munu_toggle_btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
