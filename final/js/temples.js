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
    let button = document.createElement('button');

    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinances = document.createElement('p');
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
    button.textContent = `Click to like this Temple`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', `Outside image of ${temple.name}`);
    image.setAttribute('loading', 'lazy');

    button.classList.add('linkbutton');
    button.classList.add('bluebackground');

    if (temple.name == "Laie Temple") {
      button.classList.add('laiebutton')
      button.setAttribute('onclick', 'laieCounter()');
    } else if (temple.name == "Washington D.C. Temple") {
      button.classList.add('wdcbutton')
      button.setAttribute('onclick', 'wdcCounter()');
    } else if (temple.name == "Salt Lake Temple") {
      button.classList.add('slbutton')
      button.setAttribute('onclick', 'slCounter()');
    } else if (temple.name == "San Diego California Temple") {
      button.classList.add('sdbutton')
      button.setAttribute('onclick', 'sdCounter()');
    }

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(button);
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

function laieCounter() {
  if (localStorage.laiecount) {
    localStorage.laiecount = Number(localStorage.laiecount) + 1;
  } else {
    localStorage.laiecount = 0;
  }
  document.getElementById("laiecount").innerHTML = localStorage.laiecount;
}

function slCounter() {
  if (localStorage.slcount) {
    localStorage.slcount = Number(localStorage.slcount) + 1;
  } else {
    localStorage.slcount = 0;
  }
  document.getElementById("slcount").innerHTML = localStorage.slcount;
}

function sdCounter() {
  if (localStorage.sdcount) {
    localStorage.sdcount = Number(localStorage.sdcount) + 1;
  } else {
    localStorage.sdcount = 0;
  }
  document.getElementById("sdcount").innerHTML = localStorage.sdcount;
}

function wdcCounter() {
  if (localStorage.wdccount) {
    localStorage.wdccount = Number(localStorage.wdccount) + 1;
  } else {
    localStorage.wdccount = 0;
  }
  document.getElementById("wdccount").innerHTML = localStorage.wdccount;
}