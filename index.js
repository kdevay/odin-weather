const states = [
    ['alabama', 'AL'],
    ['alaska', 'AK'],
    ['arizona', 'AZ'],
    ['arkansas', 'AR'],
    ['california', 'CA'],
    ['colorado', 'CO'],
    ['connecticut', 'CT'],
    ['delaware', 'DE'],
    ['florida', 'FL'],
    ['georgia', 'GA'],
    ['hawaii', 'HI'],
    ['idaho', 'ID'],
    ['illinois', 'IL'],
    ['indiana', 'IN'],
    ['iowa', 'IA'],
    ['kansas', 'KS'],
    ['kentucky', 'KY'],
    ['louisiana', 'LA'],
    ['maine', 'ME'],
    ['maryland', 'MD'],
    ['massachusetts', 'MA'],
    ['michigan', 'MI'],
    ['minnesota', 'MN'],
    ['mississippi', 'MS'],
    ['missouri', 'MO'],
    ['montana', 'MT'],
    ['nebraska', 'NE'],
    ['nevada', 'NV'],
    ['new Hampshire', 'NH'],
    ['new Jersey', 'NJ'],
    ['new Mexico', 'NM'],
    ['new York', 'NY'],
    ['north Carolina', 'NC'],
    ['north Dakota', 'ND'],
    ['ohio', 'OH'],
    ['oklahoma', 'OK'],
    ['oregon', 'OR'],
    ['pennsylvania', 'PA'],
    ['rhode Island', 'RI'],
    ['south Carolina', 'SC'],
    ['south Dakota', 'SD'],
    ['tennessee', 'TN'],
    ['texas', 'TX'],
    ['utah', 'UT'],
    ['vermont', 'VT'],
    ['virginia', 'VA'],
    ['washington', 'WA'],
    ['west Virginia', 'WV'],
    ['wisconsin', 'WI'],
    ['wyoming', 'WY'] 
];

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

function findState(string){
    string = string.toLowerCase();
    for (let i = 0; i < 50; i++){
        if (string === states[i][0]){
            return states[i][1];
        }
    }
    return false;
}

function findDescription(id) {
    return weatherCodes[id];
}
const heading = document.getElementById('location');
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
    document.getElementById('low'),
    document.getElementById('wUnit'),
    document.getElementById('pUnit')
];

function clearDisplay(element) {
    element.textContent = ''
}
weather.forEach(clearDisplay);
clearDisplay(errMessage);
icon.style.display = 'none'

const urls = {
    geo: {start: 'http://api.openweathermap.org/geo/1.0/direct?q=', end: '&limit=1&appid=d0a94ad4220c8e5634a0b81bf7e35a30'},
    weather: {start: 'https://api.openweathermap.org/data/2.5/weather?lat=', mid: '&lon=', end:'&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial'},
    icon: {start: 'http://openweathermap.org/img/wn/', end: '@2x.png'}
};

async function getWeather() {
    weather.forEach(clearDisplay);
    clearDisplay(errMessage);
    try {
        // Format user inputs
        let stateCode, displayLocation, searchTerm, tempName;
        const cityName = !city.value ? '' : city.value.replaceAll(' ', '_');
        const stateName = !state.value ? '' : state.value.replaceAll(' ', '_');
        const countryName = country.value;
        // Require country name
        if (!countryName){
            errMessage.textContent = 'Country name required.'
            return;
        // If searching US, find state code for URL
        } else if (countryName === 'US' && stateName !== '') {
            stateCode = findState(stateName);
            if (!stateCode){
                errMessage.textContent = 'No results were found for this state name: "' + stateName + '".';
                return;
            }
            searchTerm = cityName + ',' + stateCode + ',' + countryName ;
        // If searching outside of US use state name in URL
        } else {
            searchTerm = cityName + ',' + stateName + ',' + countryName;
        }

        // Find location's latitude / longitude
        const geoResponse = await fetch( urls.geo.start + searchTerm + urls.geo.end, {mode: 'cors'})
        const geoData = await geoResponse.json()
        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        // Find location's weather
        const response = await fetch(urls.weather.start + lat + urls.weather.mid + lon + urls.weather.end, {mode: 'cors'})
        const data = await response.json()

        // Add weather data to display
        weather[0].textContent = findDescription(data.weather[0].id); // description
        weather[1].textContent = Math.round(data.wind.speed) + ' '; // wind speed
        weather[3].textContent = data.main.humidity + '%'; // humidity
        weather[5].textContent = Math.round(data.main.temp) + '°' + units.imp.temp;
        weather[6].textContent = Math.round(data.main.feels_like) + '°';
        weather[7].textContent = Math.round(data.main.temp_max) + '°';
        weather[8].textContent = Math.round(data.main.temp_min) + '°';
        weather[9].textContent = units.imp.speed;
        weather[10].textContent = units.pressure.mercury;
        
        // If wind speed is 0 hide wind direction
        if (data.wind.speed === '0'){ 
            weather[2].style.display = 'none'; 
        } else { // Display wind direction
            weather[2].textContent = windDirection.findQuadrant(data.wind.deg);
        }
        
        // Convert air pressure from millibar to inHG
        let airPress = Math.round(data.main.pressure / 33.864);
        weather[4].textContent = airPress + ' ';

        // Display weather icon
        let imgSrc = urls.icon.start + data.weather[0].icon  + urls.icon.end;
        icon.src = imgSrc;
        icon.style.display = 'block';

        // Display location name
        tempName = document.getElementById(countryName).textContent;
        if (cityName === '' && stateName === ''){
            displayLocation = tempName;
        } else if (cityName !== '' && stateName !== '') {
            displayLocation = cityName.replaceAll('_', ' ') + ', ' + stateName;
        } else if (cityName !== '' && stateName === ''){
            displayLocation = cityName.replaceAll('_', ' ') + ', ' + tempName;
        } else if (cityName === '' && stateName !== ''){
            displayLocation = stateName.replaceAll('_', ' ') + ', ' + tempName;
        }
        heading.textContent = displayLocation;

    } catch {
        errMessage.textContent = "No results were found for these search terms."
    }
}

search.addEventListener('click', getWeather);
// API key:
// d0a94ad4220c8e5634a0b81bf7e35a30
// geocode API:
// http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',' + country + '&limit=1&appid=d0a94ad4220c8e5634a0b81bf7e35a30
// weather API:
// https://api.openweathermap.org/data/2.5/weather?lat=29.950793lon=-90.075713&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial
// icon url format: 
// 'http://openweathermap.org/img/wn/' + data.weather.icon + '@2x.png'
// https://api.openweathermap.org/data/2.5/weather?lat=-33.8698439&lon=151.2082848&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial
// lat":,"lon":151.2082848,