import React, {Component} from 'react';
import {Preloader} from 'react-materialize'
import Location from './Location'
import WeatherData from './WeatherData/index'
import './styles.css'
import transformWeather from './../../services/transformWeather'
import PropTypes from 'prop-types'
// import CircularProgress from 'material-ui/CircularProgress'

const api_key ="fb6c4e641dc82cf7ecf6a557ebfc58cf";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {
    constructor({city}){
        super();

        this.state = {
            data:null, 
            city
        }
    }
     
    handleUpdateClick = () => {
        const {city} = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`
        fetch(api_weather)
        .then(data => {
            return data.json();
        })
        .then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({
                data
            });
        })
    }
    
    componentWillMount() {
        this.handleUpdateClick();
        // console.log("componentWillMount");
    }

    componentDidMount() {
        // console.log("componentDidMount");
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log("componentWillUpdate")
    }    
    
    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate")
    }
    
    
    render = () => {
        // const {city, data} = this.state;
        const {onWeatherLocationClick} = this.props;
        const {data} = this.state;

        return (
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={this.state.city}/>
            {data ? <WeatherData data={this.state.data}/> : 
            <Preloader size="big"/>}
            {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
        </div>)
    }  
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;