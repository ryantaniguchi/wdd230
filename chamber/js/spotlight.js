const requestURL = 'json/data.json';
const cards = document.querySelector("#spotlight");

async function getAffiliates() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    const affiliates = selectAffiliates(data);
    displayAffiliates(affiliates)
  } else {
    throw Error(response.statusText);
  }
}

function randomSelect(data) {
  const randomindex = Math.floor(Math.random() * data.length)
  const spotlights = data[randomindex]
  // Removes the selected item so it is not selected twice
  data.splice(randomindex, 1)
  return spotlights
}

function selectAffiliates(data) {
  const members = data.affiliates.filter(affiliate =>
    affiliate.membership == "Gold" || affiliate.membership == "Silver")
  let spotlightArray = [];
  for (let i = 0; i < 3; i++) {
    spotlightArray.push(randomSelect(members))
  }
  return spotlightArray
}

function displayAffiliates(data) {
  // Create elements to add to the document
  data.forEach(affiliate => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let website = document.createElement('p');
    let quote = document.createElement('p');
    let image = document.createElement('img');
    let membership = document.createElement('p');

    h3.textContent = `${affiliate.name}`;
    quote.textContent = `${affiliate.quote}`;
    phone.textContent = `Phone: ${affiliate.phone}`;
    email.textContent = `Email: ${affiliate.email}`;
    website.textContent = `Website: ${affiliate.website}`;
    membership.textContent = `${affiliate.membership} Member`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', affiliate.image);
    image.setAttribute('alt', `Company logo of ${affiliate.name}, Black Forest Chamber of Commerce Affiliiate`);
    image.setAttribute('loading', 'lazy');

    card.classList.add('coloredborder')
    quote.classList.add('italics')
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(quote);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(membership);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div#spotlight').appendChild(card);
  });
}
getAffiliates()