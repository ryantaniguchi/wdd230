const requestURL = 'json/temples.json';
const temples = document.querySelector(".maintemple");
const cards = document.querySelector('.cards');

// Calls functions to display temple data, then calls fetchWeather to pull weather data associated with that location
async function apiFetch() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    let coordinates = displayTemples(data.temples);
    let latitude = coordinates[0];
    let longitude = coordinates[1];
    // Creates weatherURL based on coordinates for the selected temple
    const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=imperial&appid=3af250634d071cb3f84c2c5c48e9d30a`
    console.log(weatherURL)
    // Calls fetchWeather using weatherURL associated with temple location
    fetchWeather(weatherURL);
  } else {
    throw Error(response.statusText);
  }
}

// Displays random temple and associated data on the homepage
function displayTemples(data) {
  // Create elements to add to the document
  const randomIndex = Math.floor(Math.random() * data.length);
  const item = data[randomIndex];
  let card = document.createElement('section');
  let name = document.createElement('h2');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let image = document.createElement('img');
  let history = document.createElement('p');

  let latitude = item.latitude;
  let longitude = item.longitude;

  name.textContent = `${item.name}`;
  address.textContent = `Address: ${item.address}`;
  phone.textContent = `Phone: ${item.phone}`;
  email.textContent = `Email: ${item.email}`;
  history.textContent = `History: ${item.history}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  image.setAttribute('src', item.image);
  image.setAttribute('alt', `Outside image of ${item.name}`);
  image.setAttribute('loading', 'lazy');

  card.appendChild(name);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(history);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.maintemple').appendChild(card);
  return [latitude, longitude];
};

// Calls function to display weather forecasts based on provided coordinates
async function fetchWeather(weatherURL) {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Add weather forecasts to index.html page
function displayResults(weatherData) {
  for (let i = 0; i < 3; i++) {
    let time = weatherData.daily[i];
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let temperature = document.createElement('p');
    let humidity = document.createElement('p');
    let image = document.createElement('img');
    let weather = document.createElement('p');

    const date = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full"
    }).format(new Date(time.dt * 1000));

    if (i == 0) {
      h3.textContent = `Today's Weather`;
    } else {
      h3.textContent = `Forecast for ${date}`;
    }

    const desc = toTitleCase(time.weather[0].description);
    temperature.textContent = `Temp: ${time.temp.day} °F`;
    humidity.textContent = `Humidity: ${time.humidity}%`;
    weather.textContent = desc

    image.setAttribute('src', `https://openweathermap.org/img/w/${time.weather[0].icon}.png`)
    image.setAttribute('alt', desc)
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '50px');
    image.setAttribute('height', '50px');

    card.classList.add('weathercard')

    card.appendChild(h3);
    card.appendChild(image)
    card.appendChild(weather)
    card.appendChild(temperature);
    card.appendChild(humidity);

    cards.appendChild(card);
  };
}

// Capitalizes words in the weather description
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

apiFetch()