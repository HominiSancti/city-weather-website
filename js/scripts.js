const apiKey = "9ef3579f897720b700d86100f0d3821c";
const apiCountry = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const showWeatherData = (city) => {
  alert(city);
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  showWeatherData(city);

})