function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const datefield = document.querySelector(".date");
const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `${currentdate}`;

const options = {year: "numeric"}
const currentyear = now.toLocaleDateString("en-US", options);
document.querySelector("#footertext").innerHTML = `&copy;${currentyear} Black Forest Chamber ║ Ryan Taniguchi ✧ ║ WDD 230 Project ║ Last modification: ${document.lastModified}`;