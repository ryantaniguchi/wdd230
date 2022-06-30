const requestURL = 'json/data.json';
const cards = document.querySelector(".cards");

async function getAffiliates() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    displayAffiliates(data);
  } else {
    throw Error(response.statusText);
  }
}

function displayAffiliates(data) {
  // Create elements to add to the document
  data.affiliates.forEach(affiliate => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let phone = document.createElement('p');
    let email = document.createElement('a');
    let website = document.createElement('a');
    let image = document.createElement('img');
    let membership = document.createElement('p');

    h3.textContent = `${affiliate.name}`;
    phone.textContent = `${affiliate.phone}`;
    email.innerHTML = `${affiliate.email}`;
    website.innerHTML = `${affiliate.website}`;
    membership.textContent = `${affiliate.membership} Member`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', affiliate.image);
    image.setAttribute('alt', `Company logo of ${affiliate.name}, Black Forest Chamber of Commerce Affiliiate`);
    image.setAttribute('loading', 'lazy');

    card.classList.add('card')
    card.classList.add('coloredborder')
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(membership);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  });
}

getAffiliates()

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
  cards.classList.add("grids");
  cards.classList.remove("lists");
});

listbutton.addEventListener("click", () => {
  cards.classList.add("lists");
  cards.classList.remove("grids");
});