import convert from 'convert-units'
import {CLOUDY,THUNDER, DRIZZLE, RAIN, SNOW,SUN} from './../constantes/weathers'

const getTemp = temp => {
    return Number(convert(temp).from('K').to('C').toFixed(0));
}

const getWeatherState = weather => {
    const {id} = weather[0];
    
    if (id < 300){
        return THUNDER;
    } else if (id < 400){
        return DRIZZLE;
    } else if (id < 600){
        return RAIN;
    } else if (id < 700){
        return SNOW;
    } else if (id === 800){
        return SUN;
    } else return CLOUDY;
}

const transformWeather = weather_data => {
    const {humidity,temp} = weather_data.main;
    const {weather} = weather_data;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather);
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        wind: `${speed} m/s`,
        weatherState
    }

    return data;
}

export default transformWeather