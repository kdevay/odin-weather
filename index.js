const weatherCodes = {
    200: 'thunderstorm and light rain',
    230: 'thunderstorm and light rain',
    231: 'thunderstorm and light rain',
    232: 'thunderstorm and light rain',
    201: 'thunderstorm and rain',
    202: 'thunderstorm and heavy rain',
    210: 'light thunderstorm',
    211: 'thunderstorm',
    212: 'heavy thunderstorm',
    221: 'heavy thunderstorm', 
    313: 'heavy rain and scattered showers',
    314: 'heavy rain and scattered showers',
    300: 'drizzle',
    301: 'drizzle',
    302: 'rain',
    310: 'light rain',
    311: 'drizzle ',
    312: 'rain',
    321: 'rain',
    500: 'light rain',
    520: 'light rain',
    521: 'rain',
    501: 'moderate rain',
    502: 'heavy rain',
    522: 'heavy rain',
    531: 'heavy rain',
    503: 'very heavy rain',
    504: 'extreme rain',
    511: 'freezing rain',
    601: 'snow',
    621: 'snow',
    600: 'light snow',
    620: 'light snow',
    602: 'heavy snow',
    622: 'heavy snow',
    616: 'rain and snow',
    615: 'light rain and snow',
    611: 'sleet',
    612: 'light sleet',
    613: 'heavy sleet',
    701: 'misty',
    711: 'smoky',
    721: 'hazy',
    731: 'sand / dust whirls',
    741: 'foggy',
    751: 'sandy',
    761: 'dusty',
    762: 'volcanic ash',
    771: 'squalls',
    781: 'tornado',
    800: 'clear sky',
    801: 'scattered clouds',
    802: 'cloudy',
    803: 'very cloudy',
    804: 'overcast'
};

const units = {
    pressure: {
        mercury: 'inHG',
    },
    imp: {
        speed: 'mph',
        temp: 'F',
    },
    metric: {
        speed: 'm/s',
        temp: 'C',
    },
};

const windDirection = { 
    NE: {num: 0, names: ['north', 'NNE', 'NE', 'ENE', 'east']},
    ES: {num: 90, names: ['east', 'ESE', 'SE', 'SSE', 'south']},
    SW: {num: 180, names:['south', 'SSW', 'SW', 'WSW', 'west']},
    WN: {num: 270, names: ['west', 'WNW', 'NW', 'NNW', 'north']},
    find(num, AB) {
        let i = AB.num;
        if (num >= (0 + i) && num < (11.25 + i)){
            return AB.names[0];
        }
        if (num >= (11.25 + i) && num < (33.75 + i)){
            return AB.names[1];
        }
        if (num >= (33.75 + i) && num < (56.25 + i)){
            return AB.names[2];
        }
        if (num >= (56.25 + i) && num < (78.75 + i)){
            return AB.names[3];
        } 
        if (num >= (78.75 + i) ){ return AB.names[4];}
    },
    findQuadrant(num) {
        if (num < 90){
            return this.find(num, this.NE);
        } else if (num < 180) {
            return this.find(num, this.ES);
        } else if (num < 270) {
            return this.find(num, this.SW);
        } else {
            return this.find(num, this.WN);
        }
    }
};

function findDescription (id) {
    return weatherCodes[id];
}

const errMessage = document.getElementById('error');
const search = document.getElementById('search');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const icon = document.getElementById('icon');
const weather = [
    document.getElementById('description'), 
    document.getElementById('windSpeed'), 
    document.getElementById('windDir'), 
    document.getElementById('humidity'), 
    document.getElementById('pressure'), 
    document.getElementById('temp'), 
    document.getElementById('feelsLike'), 
    document.getElementById('high'), 
    document.getElementById('low')
];

function clearDisplay(element) {
    element.textContent = ''
}
weather.forEach(clearDisplay);
clearDisplay(errMessage);
icon.style.display = 'none'

const APIs = {
    geo: {start: 'http://api.openweathermap.org/geo/1.0/direct?q=', end: '&limit=1&appid=d0a94ad4220c8e5634a0b81bf7e35a30'},
    weather: {start: 'https://api.openweathermap.org/data/2.5/weather?lat=', mid: '&lon=', end:'&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial'},
    icon: {start: 'http://openweathermap.org/img/wn/', end: '@2x.png'}
};
// async function getCoordinates(){
// geocode lookup: replace spaces with '_'
// http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',' + country + '&limit=1&appid=d0a94ad4220c8e5634a0b81bf7e35a30
//d0a94ad4220c8e5634a0b81bf7e35a30
//https://api.openweathermap.org/data/2.5/weather?lat=29.950793lon=-90.075713&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial
// icon url format: 'http://openweathermap.org/img/wn/' + data.weather.icon + '@2x.png'

async function getWeather() {
    try {
        const cityName = !city.value ? '' : city.value;
        const stateName = !state.value ? '' : state.value;
        const countryName = country.value;
        if (!countryName){
            // display error message
            return;
        }
        const searchTerm = cityName + stateName + countryName;
        const geoResponse = await fetch( APIs.geo.start + searchTerm + APIs.geo.end, {mode: 'cors'})
        const geoData = await geoResponse.json()
        console.log(geoData);
        // const lat = 
        // const lon = 
        // const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial', {mode: 'cors'})
        // const data = await response.json()
        // weather[0].textContent = findDescription(data.weather[0].id);
        // weather[1].textContent = Math.round(data.wind.speed) + ' ' + units.imp.speed;
        // if (data.wind.speed === '0'){ // If wind speed is 0
        //     weather[2].style.display = 'none'; // Hide wind direction
        // } else {
        //     weather[2].textContent = windDirection.findQuadrant(data.wind.deg);
        // }
        // weather[3].textContent = data.main.humidity + '%'
        // // Convert air pressure from millibar to inHG
        // let airPress = Math.round(data.main.pressure / 33.864);
        // weather[4].textContent = airPress + ' ' + units.pressure.mercury;
        // weather[5].textContent = Math.round(data.main.temp) + '°' + units.imp.temp;
        // weather[6].textContent = Math.round(data.main.feels_like) + '°';
        // weather[7].textContent = Math.round(data.main.temp_max) + '°';
        // weather[8].textContent = Math.round(data.main.temp_min) + '°';
        // let imgSrc = 'http://openweathermap.org/img/wn/' + data.weather[0].icon  + '@2x.png';
        // icon.src = imgSrc;
        // icon.style.display = 'block';
    } catch {
        errMessage.textContent = "No results were found for these search terms."
    }
}

search.addEventListener('click', getWeather);

