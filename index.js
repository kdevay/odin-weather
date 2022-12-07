import weatherCodes from weatherCodes.js;
console.log(weatherCodes[200]);
const errMessage = document.getElementById('error');
const search = document.getElementById('search');
const input = document.getElementById('input');
const weather = document.getElementById('weather');
const windDir = document.getElementById('windDir');
const windSpeed = document.getElementById('windSpeed'); // check unit
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure'); // check unit
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feelsLike');
const high = document.getElementById('high');
const low = document.getElementById('low');
const windDirection = {
    NE: {num: 0, names: ['N', 'NNE', 'NE', 'ENE', 'E']},
    ES: {num: 90, names: ['E', 'ESE', 'SE', 'SSE', 'S']},
    SW: {num: 180, names:['S', 'SSW', 'SW', 'WSW', 'W']},
    WN: {num: 270, names: ['W', 'WNW', 'NW', 'NNW', 'N']},
    find(num, AB){
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
    findQuadrant(num){
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
}
function findDescription (string) {
    //
}

// async function getCoordinates(){
//     //
// }
//d0a94ad4220c8e5634a0b81bf7e35a30
//https://api.openweathermap.org/data/2.5/weather?lat=29.950793lon=-90.075713&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial
// icon url format: http://openweathermap.org/img/wn/{icon}@2x.png
async function getWeather() {
    try {
        // let searchTerm = input.value;
        // const response = await fetch('API' + searchTerm, {mode: 'cors'})
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=29.950793&lon=-90.075713&appid=d0a94ad4220c8e5634a0b81bf7e35a30&units=imperial', {mode: 'cors'})
        const data = await response.json()
        console.log(data);
        weather.textContent = findDescription(data.weather[0].main); // 'Clouds' or 'Rain'
        if (data.wind.speed === 0){
            // hide wind info
        }
        windDir.textContent = data.wind.deg // direction
        windSpeed.textContent = data.wind.speed // mph
        humidity.textContent = data.main.humidity
        pressure.textContent = data.main.pressure // check unit
        temp.textContent = data.main.temp
        feelsLike.textContent = data.main.feels_like
        high.textContent = data.main.temp_max
        low.textContent = data.main.temp_min
        // weather.textContent = data.data.images.original.url;
    } catch {
        getApology();
        errMessage.textContent = "No results were found for these search terms."
    }
}

search.addEventListener('click', getWeather);

