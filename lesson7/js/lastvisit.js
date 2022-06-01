// initialize display elements
let elapsed = document.querySelector("#lastVisit");

// get the stored value in localStorage
const lastvisit = Number(localStorage.getItem("lastvisit"));

// Calculate time between visits
const currentvisit = Date.now() - lastvisit;

// Convert time between visits into days
const daysbetween = currentvisit / (1000 * 60 *60 * 24);

// Create string update to be returned
elapsed.textContent = `Days since your last visit: ${Math.round(daysbetween)}`;

// store the new number of visits value
localStorage.setItem("lastvisit", Date.now());
