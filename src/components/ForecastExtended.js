import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import './styles.css';
import TransformForecast from '../services/transformForecast'

const api_key ="fb6c4e641dc82cf7ecf6a557ebfc58cf";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor(){
        super();

        this.state = {
            forecastData: null
        };
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`
        fetch(url_forecast)
        .then(
            data => 
                { 
                    return data.json();
                }
            )
        .then(forecast_data => {
                console.log(forecast_data);
                const forecastData = TransformForecast(forecast_data);
                console.log(forecastData);
                this.setState({forecastData})
        })
    }

    renderForecastItemDays() {
        return this.state.forecastData.map(forecast => (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data = {forecast.data}></ForecastItem>));        
    }

    renderProgress() {
        return <h4>Cargando pronostico extendidio...</h4>;
    }


    render() {
        const {city} = this.props;
        const { forecastData} = this.state;

        return (
            <div>
            <h2 className='forcast-title '>Pronostico Extendido para {city}</h2>
            {forecastData ? 
                this.renderForecastItemDays({forecastData}) :
                this.renderProgress()
                }            
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended