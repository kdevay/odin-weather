# odin-weather
Weather Forecast App

- search for a specific location to get the weather
- toggle Fahrenheit / Celsius

style
- change the look of the page based on the weather 

OOO
- console.log() the weather data for that location
- return an object with only the data requires for the app
- create form for users' location input
- display the data on page
- add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.

OpenWeather - relevant documentation excerpts
- API call:
    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=imperial

- sample response:
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

Attributions:
- translating wind from degree to cardinal directions: 
    http://snowfence.umn.edu/Components/winddirectionanddegreeswithouttable3.htm




















































