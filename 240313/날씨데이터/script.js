import { API_KEY } from "./env.js";

const getCurrentWather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}b&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}℃ `;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
};

const getPosition = (Position) => {
  const { latitude, longitude } = Position.coords;
  getCurrentWather(latitude, longitude);
};

const errorHandler = (error) => {
  const noti = document.querySelector(".noti");
  noti.style.display = "block";
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("geolacation is not available");
}
