const alertURL = 'json/alerts.json';
const alerts = document.querySelector(".weatherwarning");

async function getAlerts() {
    let response = await fetch(alertURL);
    if (response.ok) {
        let data = await response.json();
        displayAlerts(data);
    } else {
        throw Error(response.statusText);
    }
}

function displayAlerts(data) {
    let headline = document.createElement('h2');
    let severity = document.createElement('p');
    let instruction = document.createElement('p');
    let sender = document.createElement('p');

    headline.textContent = `${data.headline}`;
    severity.textContent = `Severity: ${data.severity}`;
    instruction.textContent = `Instructions: ${data.instruction}`;
    sender.textContent = `Sender: ${data.sender}`;

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div#weatherwarning').appendChild(headline);
    document.querySelector('div#weatherwarning').appendChild(severity);
    document.querySelector('div#weatherwarning').appendChild(instruction);
    document.querySelector('div#weatherwarning').appendChild(sender);
};

getAlerts()

const dismiss = document.querySelector('.dismiss');
dismiss.addEventListener('click', closeFunction);

function closeFunction() {
    this.parentElement.style.display = 'none';
}