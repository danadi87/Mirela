let now = new Date();
let h3 = document.querySelector("h3");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
} else {
  hours = `${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
} else {
  minutes = `${minutes}`;
}
h3.innerHTML = `${day} ${hours}:${minutes}`;
function enterCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let searchInput = document.querySelector("#city-input");
  city.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", enterCity);
function weatherConditions(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.speed);
  document.querySelector("#precipitation").innerHTML = Math.round(
    response.data.precipitation
  );
}
let conditions = document.querySelector("#weather-conditions");
conditions.addEventListener("submit", weatherConditions);
function showPosition(position) {
  let apiKey = "ff7ebdc6e7879a14c24fac0169b98522";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric";
  axios.get(apiUrl).then(weatherConditions);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
