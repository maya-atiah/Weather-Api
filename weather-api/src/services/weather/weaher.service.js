import { WeatherConst } from "../../shared/weather.const"

 const GetWeatherData = (cityName) => {

    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=${WeatherConst.API_KEY}`

    let data = '';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(results => data = results.json())

    return data;
}

export default GetWeatherData;