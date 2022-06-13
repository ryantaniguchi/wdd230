// Hamburger menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Date functions
const datefield = document.querySelector(".date");
const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// Current date
datefield.innerHTML = `${currentdate}`;

let meetandgreet = document.querySelector('#meetandgreet');

let day = now.getDay();

if(day == 1 || day == 2){
    meetandgreet.style.display = "block";
}

const dismiss = document.querySelector('.dismiss');
dismiss.addEventListener('click', closeFunction);
function closeFunction() {
    this.parentElement.style.display='none';
}


// Footer content
const options = {year: "numeric"}
const currentyear = now.toLocaleDateString("en-US", options);
document.querySelector("#footertext").innerHTML = `&copy;${currentyear} Black Forest Chamber ║ Ryan Taniguchi ✧ ║ WDD 230 Project ║ Last modification: ${document.lastModified}`;