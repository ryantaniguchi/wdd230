const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    displayProphets(data);
  } else {
    throw Error(response.statusText);
  }
}

function displayProphets(data) {
  // Create elements to add to the document
  data.prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
});
}

getProphets();