//day and time
let now = new Date();

function currentDayTime() {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[now.getDay()];

  let hour = now.getHours();
  let minute = now.getMinutes();

  let displayDay = document.querySelector("div#current-date");

  if (minute < 10) {
    displayDay.innerHTML = `${day}, ${hour}:0${minute}`;
  } else {
    displayDay.innerHTML = `${day}, ${hour}:${minute}`;
  }
}
currentDayTime();

//City name display
function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("h1.city");
  city.innerHTML = `${cityInput.value}`;
}

// Show city & temp
function searchEngine(event) {
  event.preventDefault();
  
  let apiKey = "fdeebaf7e5260bc95803113646d25a38";
  let userCity = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}

function currentTemp(response) {
  console.log(response);
  let city = document.querySelector("h1.city");
  city.innerHTML = response.data.name;
  let temperature = document.querySelector("#current-temp");
  temperature.innerHTML = `Currently ${Math.round(response.data.main.temp)}°C`;
  let weather = document.querySelector("h2.weather");
  weather.innerHTML = response.data.weather[0].main;
  let wind = document.querySelector("#current-wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed} m/s`;
  let humidity = document.querySelector("#current-humidity");
  humidity.innerHTML = `, humidity: ${response.data.main.humidity}%`;
}

let cityButton = document.querySelector("#city-form");
cityButton.addEventListener("submit", searchEngine);



//Convert to celcius
//function convertToC(event) {
  //event.preventDefault();
  //let celcius = document.querySelector("#current-temp");
  //celcius.innerHTML = `25°C`;
//}
//let celciusLink = document.querySelector("#celcius");
//celciusLink.addEventListener("click", convertToC);

//Convert to Farenheit
//function convertToF(event) {
  //event.preventDefault();
  //let farenheit = document.querySelector("#current-temp");
  //farenheit.innerHTML = `77°F`;
//}
//let farenheitLink = document.querySelector("#farenheit");
//farenheitLink.addEventListener("click", convertToF);
