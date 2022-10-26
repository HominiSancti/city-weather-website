const apiKey = "9ef3579f897720b700d86100f0d3821c";
const apiCountryURL = "https://countryflagsapi.com/png/";
const weatherIconURL = "https://openweathermap.org/img/wn/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const weatherContainer = document.querySelector("#weather-data");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  const res = await fetch(apiWeatherURL);
  const data = await res.json();
  return data;
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);
  const cityName = data.name;
  const temp = parseInt(data.main.temp) + " °C";
  const desc = data.weather[0].description; 
  const weatherIcon = weatherIconURL + data.weather[0].icon + ".png";
  const countryFlag = apiCountryURL + data.sys.country;
  const humidity = `${data.main.humidity}%`;
  const windSpeed = `${data.wind.speed}km/h`;

  cityElement.textContent = cityName;
  tempElement.textContent = temp;
  descElement.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
  weatherIconElement.setAttribute("src", weatherIcon);
  countryElement.setAttribute("src", countryFlag);
  humidityElement.textContent = humidity;
  windElement.textContent = windSpeed;

  weatherContainer.classList.remove('hidden');
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  showWeatherData(city);

})

cityInput.addEventListener("keyup", (e) => {
  if(e.code === "Enter") {
    const city = e.target.value;
    showWeatherData(city);
  }
})