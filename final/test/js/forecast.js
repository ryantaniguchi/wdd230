const place = "London"

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=imperial&appid=3af250634d071cb3f84c2c5c48e9d30a`


async function apiFetch() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();