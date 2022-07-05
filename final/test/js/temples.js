const requestURL = 'json/temples.json';
const temples = document.querySelector(".temples");

async function getTemples() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    displayTemples(data);
  } else {
    throw Error(response.statusText);
  }
}

function displayTemples(data) {
  // Create elements to add to the document
  data.temples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let image = document.createElement('img');

    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinances = document.createElement('img');
    let session = document.createElement('p');
    let closure = document.createElement('p');

    name.textContent = `${temple.name}`;
    address.textContent = `Address: ${temple.address}`;
    phone.textContent = `Phone: ${temple.phone}`;
    email.textContent = `Email: ${temple.email}`;
    services.textContent = `Services: ${temple.services}`;
    history.textContent = `History: ${temple.history}`;
    ordinances.textContent = `Ordinance Schedule: ${temple.ordinanceschedule}`;
    session.textContent = `Sessions: ${temple.sessionschedule}`;
    closure.textContent = `Closed: ${temple.templeclosureschedule}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', `Outside image of ${temple.name}`);
    image.setAttribute('loading', 'lazy');

    // card.classList.add('card')
    // card.classList.add('coloredborder')
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address)
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinances);
    card.appendChild(session);
    card.appendChild(closure);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.temples').appendChild(card);
});
}

getTemples()