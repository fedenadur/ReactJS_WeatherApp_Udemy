import React from 'react'
import WeatherIcons from 'react-weathericons'
import {CLOUD,CLOUDY,SUN,
RAIN,WINDY,
SNOW, THUNDER, DRIZZLE} from './../../../constantes/weathers';
import PropTypes from 'prop-types'
import './styles.css'

const stateToIconName = weatherState => {
    switch (weatherState){
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "day-cloudy";
        case RAIN:
            return "rain";
            case SUN:
            return "day-sunny";
        case WINDY:
            return "windy";
        case SNOW:
            return "snow";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "day-cloudy";
        
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className="weatherIcons"name={stateToIconName(weatherState)} size="4x"/>)
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">Cº</span>
    </div>)
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}

export default WeatherTemperature;