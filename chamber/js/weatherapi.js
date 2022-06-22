// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#speed');
const windchill = document.querySelector(".windchill");
const captionDesc = document.querySelector('figcaption');

const latitude = 39.7392
const longitude = -104.9847

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=3af250634d071cb3f84c2c5c48e9d30a`;

apiFetch(url);

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
        console.log(error);
  }
}

function  displayResults(weatherData) {
    const t = weatherData.main.temp.toFixed(0);
    const s = weatherData.wind.speed;


    if ((t <= 50) && (s >= 3)) {
        const f = 35.74 + (0.6215 * t) - (35.775 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        windchill.textContent = f.toFixed(1) + "°F";
    }    

    currentTemp.innerHTML = `<strong>${t}</strong>`;
    windSpeed.innerHTML = s;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}


