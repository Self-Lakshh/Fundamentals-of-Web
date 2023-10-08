// mock database for weather lookup
const mockWeatherData = {
    "london": { temp: 15, desc: "Light Rain showers" },
    "new york": { temp: 22, desc: "Sunny and Warm" },
    "tokyo": { temp: 19, desc: "Moderate Breeze" }
};

const searchBtn = document.querySelector("#search-btn");
const cityNameInput = document.querySelector("#city-name");
const weatherDisplay = document.querySelector("#weather-display");
const displayCity = document.querySelector("#display-city");
const displayTemp = document.querySelector("#display-temp");
const displayDesc = document.querySelector("#display-desc");
const errorMsg = document.querySelector("#error-message");

searchBtn.addEventListener("click", () => {
    const val = cityNameInput.value.trim().toLowerCase();
    
    if (!val) {
        showError("Please enter a valid city name.");
        return;
    }
    
    // Check if mockup contains city data
    if (mockWeatherData[val]) {
        errorMsg.classList.add("hidden");
        displayCity.textContent = cityNameInput.value.trim();
        displayTemp.innerHTML = `${mockWeatherData[val].temp}&deg;C`;
        displayDesc.textContent = mockWeatherData[val].desc;
        weatherDisplay.classList.remove("hidden");
    } else {
        // Fallback for custom cities
        errorMsg.classList.add("hidden");
        displayCity.textContent = cityNameInput.value.trim();
        displayTemp.innerHTML = `20&deg;C`;
        displayDesc.textContent = "Clear sky";
        weatherDisplay.classList.remove("hidden");
    }
});

function showError(msg) {
    weatherDisplay.classList.add("hidden");
    errorMsg.textContent = msg;
    errorMsg.classList.remove("hidden");
}