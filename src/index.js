import "./styles.css";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const API_KEY = "WELTMCRR8K842VYHZAQW8PVNE";
const degUnit = "°C";
const countryDisplay = document.getElementById("country");
const temperatureDisplay = document.getElementById("temperature");
const conditionDisplay = document.getElementById("condition");
const query = document.getElementById('query');

document.getElementById("input-form").addEventListener('submit', (e) => {
   e.preventDefault();
});

document.getElementById("new-img").addEventListener("click", () => {
    grabCurrentConditions();
});

async function getWeatherInfo(query) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?key=${API_KEY}&unitGroup=metric`);
    const result = await response.json();
    return result;
}

async function grabCurrentConditions() {
    const data = await getWeatherInfo(query.value);
    const location = data.resolvedAddress;
    const currCondition = data.currentConditions;
    countryDisplay.innerText = location;
    temperatureDisplay.innerText = `${currCondition.temp}${degUnit}`;
    conditionDisplay.innerText = currCondition.conditions;
}

grabCurrentConditions();