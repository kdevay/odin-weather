// All US states and their abbreviations
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

// Custom descriptions based on weather code
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

// Imperial and metric units
const units = {
    pressure: {
        mercury: 'inHG',
    },
    imperial: {
        speed: 'mph',
        temp: 'F',
    },
    metric: {
        speed: 'm/s',
        temp: 'C',
    },
};

// An object for assigning cardinal direction based on wind angle
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

// Dom elements
const content = document.getElementById('content');
const heading = document.getElementById('location');
const errMessage = document.getElementById('error');
const search = document.getElementById('search');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const unit = document.getElementById('units');
const icon = document.getElementById('icon');
const throbDiv = document.getElementById('load');
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
// If searching in US, display state input
country.addEventListener('change', function(e) {
    if (e.target.value === 'US') {
        state.style.display = 'block';
    }
});

// API call URL's and icon URL
const urls = {
    geo: [
        'https://api.openweathermap.org/geo/1.0/direct?q=', 
        '&limit=1&appid=d0a94ad4220c8e5634a0b81bf7e35a30'
    ],
    weather: [
    'https://api.openweathermap.org/data/2.5/weather?lat=',
    '&lon=', 
    '&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units='
    ],
    icon: [
        'https://openweathermap.org/img/wn/', 
        '@2x.png'
    ],
    getUrl(input, char){
        if (char === 'w'){ // Weather url
            return(this.weather[0] + input[0] + this.weather[1] + input[1] + 
            this.weather[2] + unit.value);
        } else if (char === 'l'){ // Geocode url
            return(this.geo[0] + input + this.geo[1]);
        } else { // Icon url
            return(this.icon[0] + input + this.icon[1]);
        }
    }
};

// Searches states array for UI state name
function findState(string){
    string = string.toLowerCase();
    for (let i = 0; i < 50; i++){
        if (string === states[i][0]){
            return states[i][1];
        }
    }
    return false;
}

// Finds weather description based on weather code
function findDescription(id) {
    return weatherCodes[id];
}

// Changes color scheme based on weather/ day/night
function addStyle(icon, code) {
    let brightCodes = [800, 801, 802, 601, 621, 600, 620, 615, 612, 500, 520];
    let isBlue = brightCodes.includes(code);
    let guide = icon.slice(-1);
    let hiBox = document.getElementById('hiBox');
    let loBox = document.getElementById('loBox');
    // set body color
    if (guide === 'n') { // nighttime body & hiBox / loBox
        document.body.style.backgroundColor = '#8c8195';
        hiBox.style.backgroundColor = '#98aaaf';
        loBox.style.backgroundColor = '#c4d1d5';
        return;
    } else if (guide === 'd'  && isBlue) { // sunny/daytime body  
        document.body.style.backgroundColor = '#93b8ac';
    } else { // cloudy body 
        document.body.style.backgroundColor = '#779188';
    }
    hiBox.style.backgroundColor = '#efa55c';
    loBox.style.backgroundColor = '#efd77c';
    return;
}


// Clears previous user inputs from DOM
function clearDisplay(element) {
    element.textContent = ''
}

// Clear all content from page
weather.forEach(clearDisplay);
clearDisplay(errMessage);
icon.style.display = 'none';
state.style.display = 'none';

async function getWeather() {
    weather.forEach(clearDisplay);
    clearDisplay(errMessage);
    try {
        // Display throbber
        throbDiv.style.display = 'flex';

        // Format user inputs
        let stateCode, displayLocation, searchNames, tempName;
        const type = unit.value;
        const cityName = !city.value ? '' : city.value.replaceAll(' ', '_');
        const stateName = !state.value ? '' : state.value.replaceAll(' ', '_');
        const countryName = country.value;
        
        if (!unit.value) { // Require imperial/metric units
            errMessage.textContent = 'Error: Units required.';
            return;
        } else if (!countryName){ // Require country name
            errMessage.textContent = 'Error: Country name required.';
            return;
        } else if (countryName === 'US') { // If searching US,
            if (stateName === '') { // require state name
                errMessage.textContent = 'Error: State name required.';
                return;
            }
            // find state code for URL
            stateCode = findState(stateName);
            if (!stateCode) { // If state code not found
                errMessage.textContent = 'No results were found for this state name: "' + stateName + '"';
                return;
            } 
            searchNames = cityName + ',' + stateCode + ',' + countryName ;
        } else {
            // If searching outside of US use state name in URL
            searchNames = cityName + ',' + stateName + ',' + countryName;
        }

        // Find location's latitude / longitude
        const urlLL = urls.getUrl(searchNames, 'l');
        const geoResponse = await fetch(urlLL, {mode: 'cors'})
        const geoData = await geoResponse.json();
        const latLon = [geoData[0].lat, geoData[0].lon];

        // Find location's weather
        const urlW = urls.getUrl(latLon, 'w');
        const response = await fetch(urlW, {mode: 'cors'});
        const data = await response.json();

        // Hide throbber
        throbDiv.style.display = 'none';

        // Add weather data to display
        weather[0].textContent = findDescription(data.weather[0].id); // description
        weather[1].textContent = Math.round(data.wind.speed) + ' '; // wind speed
        weather[3].textContent = data.main.humidity + '%'; // humidity
        weather[5].textContent = Math.round(data.main.temp) + '°' + units[type].temp; // current temp
        weather[6].textContent = Math.round(data.main.feels_like) + '°'; // feels like
        weather[7].textContent = Math.round(data.main.temp_max) + '°'; // high
        weather[8].textContent = Math.round(data.main.temp_min) + '°'; // low
        weather[9].textContent = units[type].speed; // wind speed units
        weather[10].textContent = units.pressure.mercury; // barometric pressure units

        // If wind speed is 0 hide wind direction
        if (data.wind.speed === '0'){ 
            weather[2].style.display = 'none'; 
        } else { // Display wind direction
            weather[2].textContent = windDirection.findQuadrant(data.wind.deg);
        }

        // Convert barometric pressure from millibar to inHG
        let airPress = Math.round(data.main.pressure / 33.864);
        weather[4].textContent = airPress + ' ';

        // Display weather icon
        let imgSrc = urls.getUrl(data.weather[0].icon); // UNICORN
        icon.src = imgSrc;
        icon.style.display = 'block';

        // Change style to match weather
        addStyle(data.weather[0].icon, data.weather[0].id);

        // Display location name
        tempName = document.getElementById(countryName).textContent;
        if (cityName !== '' && stateName !== '') {
            displayLocation = cityName.replaceAll('_', ' ') + ', ' + stateName;
        } else if (cityName !== '' && stateName === ''){
            displayLocation = cityName.replaceAll('_', ' ') + ', ' + tempName;
        }
        heading.textContent = displayLocation;
        content.style.display = 'grid';

    } catch {
        content.style.display = 'none';
        errMessage.textContent = "No results were found for these search terms."
    }
}

search.addEventListener('click', getWeather);