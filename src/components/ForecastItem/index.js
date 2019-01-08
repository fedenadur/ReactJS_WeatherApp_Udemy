import React from 'react';
import PropTypes from 'prop-types'
import WeatherData from '../../components/WeatherLocation/WeatherData/index'




const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <div>{weekDay} - {hour} hs</div>
        <div><WeatherData data= {data}></WeatherData></div>
    </div>    
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number,
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired
    })
}

export default ForecastItem