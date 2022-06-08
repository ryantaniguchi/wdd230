const formtimestamp = document.querySelector("#submitdate");
const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// Current date
formtimestamp.innerHTML = `${currentdate}`;
