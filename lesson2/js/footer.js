// Determines current year and the date when the file was last modified so they can be placed in the footer.
const options = {year: "numeric"}
const currentyear = new Date().toLocaleDateString("en-US", options);
document.querySelector("#footertext").innerHTML = `&copy; ${currentyear} ║ Ryan Taniguchi ║ Last modified: ${document.lastModified}`;
