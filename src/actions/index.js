import TransformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload})

const api_key ="fb6c4e641dc82cf7ecf6a557ebfc58cf";
const url = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`

        dispatch(setCity(payload));

        //voy a activar en el estado una activador de busqueda de datos
        return fetch(url_forecast).then(
            // data => { return data.json(); }
            data => (data.json())
        ).then(forecast_data => {
                const forecastData = TransformForecast(forecast_data);
                // this.setState({forecastData})

                //modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};