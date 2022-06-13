const requestURL = 'https://ryantaniguchi.github.io/wdd230/lesson9/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const affiliates = jsonObject['affiliates'];
    affiliates.forEach(displayAffiliates);
  });

function displayAffiliates(affiliate) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let website = document.createElement('p');
  let image = document.createElement('img');
  let membership = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${affiliate.name}`;
  phone.textContent = `Phone: ${affiliate.phone}`;
  email.textContent = `Email: ${affiliate.email}`;
  website.textContent = `Website: ${affiliate.website}`;
  membership.textContent = `${affiliate.membership} Member`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  image.setAttribute('src', affiliate.image);
  image.setAttribute('alt', `Company logo of ${affiliate.name}, Black Forest Chamber of Commerce Affiliiate`);
  image.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(website);
  card.appendChild(membership);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}
  