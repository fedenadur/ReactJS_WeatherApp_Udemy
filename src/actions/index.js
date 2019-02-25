import TransformForecast from './../services/transformForecast';
import TransformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload})

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload})
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload})

const api_key ="fb6c4e641dc82cf7ecf6a557ebfc58cf";
const url = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast";
const url_weather = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`

        dispatch(setCity(payload));

        const state = getState();

        const date = state.cities[payload] && state.cities[payload].forescastDataDate;

        const now = new Date();

        if(date && (now - date ) < (1 * 60 * 1000)){
            return;
        }

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(forecast_data => {
                const forecastData = TransformForecast(forecast_data);
                dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;

            fetch(api_weather).then( data => {
                return data.json();
            }).then( weather_data => {                
                const weather = TransformWeather(weather_data);

                dispatch(setWeatherCity({city, weather}));
            });
        })        
    }
};