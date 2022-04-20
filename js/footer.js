// Determines current year so it can be placed in the footer.
const options = {year: "numeric"}
const currentyear = new Date().toLocaleDateString("en-US", options);
document.querySelector("#currentyear").innerHTML = `&copy; ${currentyear} ║ Ryan Taniguchi ║ Utah`;

// Determines when the file was last modified.
document.getElementById("lastmodified").innerHTML = `Last modified: ${document.lastModified}`;
