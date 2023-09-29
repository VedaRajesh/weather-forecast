document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const getWeatherButton = document.getElementById("get-weather-button");
    const cityInput = document.getElementById("city-input");
    const weatherInfo = document.getElementById("weather-info");

    getWeatherButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
                    const description = data.weather[0].description;
                    const weatherHtml = `<p>Temperature: ${temperature} &deg;C</p><p>Condition: ${description}</p>`;
                    weatherInfo.innerHTML = weatherHtml;
                })
                .catch(error => {
                    console.error(error);
                    weatherInfo.innerHTML = "City not found.";
                });
        } else {
            weatherInfo.innerHTML = "Please enter a city name.";
        }
    });
});
