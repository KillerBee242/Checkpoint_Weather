document.getElementById('search-button').addEventListener('click', () => {
    let city = document.getElementById('city-input').value;
    if(city) {
        fetchWeatherData(city)
    }
});

async function fetchWeatherData(city) {
    const apiKey = "154a7f449c3f41978c3132803242012";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message);
        } else {
            displayWeatherData(data);
        }
    } catch (error) {
        alert('An error occured. Please try again !');
        console.error(error);
    }
}

function displayWeatherData(data) {
    const weatherInfo = `
    
    <h2 class="text-xl font-bold text-white"> ${data.location.name}</h2>
    <p class="text-xl text-white">Temperature : ${data.current.temp_c}°C</p>
    <p class="text-xl text-white">Description : ${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}" alt="Weather icon">

    `;
    document.getElementById('weather-info').innerHTML = weatherInfo ;
}