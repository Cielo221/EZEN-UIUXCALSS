//navigation
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "color : #000; background : #fff";
  menuGame.style = "color : #fff; background : #808080";
  menuJukebox.style = "color : #fff; background : #808080";
};

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "color : #fff; background : #808080";
  menuGame.style = "color : #000; background : #fff";
  menuJukebox.style = "color : #fff; background : #808080";
};

const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "color : #fff; background : #808080";
  menuGame.style = "color : #fff; background : #808080";
  menuJukebox.style = "color : #000; background : #fff";
};

menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
menuHome.addEventListener("click", homeChange);
