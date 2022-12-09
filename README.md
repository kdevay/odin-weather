# odin-weather
Weather Forecast App:
- search for a specific location to get the weather
- toggle Fahrenheit / Celsius
- change the look of the page based on the weather 
- add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.

Attributions:
- key for translating wind from degree to cardinal directions: 
    http://snowfence.umn.edu/Components/winddirectionanddegreeswithouttable3.htm

OpenWeather - relevant documentation excerpts
- API key:
        d0a94ad4220c8e5634a0b81bf7e35a30
- Geocode API call:
        http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',' + country + '&limit=1&appid=d0a94ad4220c8e5634a0b81bf7e35a30
- Weather API call:
        https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=imperial
- icon url format: 
        'http://openweathermap.org/img/wn/' + data.weather.icon + '@2x.png'
- sample response (truncated for relevance):
        base: "stations"
        clouds:
            all: 75
        cod: 200
        coord:
            lat: 29.9508
            lon: -90.0757
        main:
            feels_like: 75.52
            humidity: 75
            pressure: 1016
            temp: 74.82
            temp_max: 77
            temp_min: 71.06
        weather: 
            Array(0):
                    {
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d'
                    }
            length: 1
        wind:                                       
            deg: 190            
            speed: 12.66