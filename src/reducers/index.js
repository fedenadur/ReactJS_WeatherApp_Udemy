import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {cities, 
    getWeatherCities as _getWeatherCities,
    getForecastDataFromCities as _getForecastDataFromCities} from './cities';
import {city} from './city';

export default combineReducers({
    cities, 
    city
});

//Esto es un selector
export const getCity = createSelector( state => state.city, city => city);

//Esto es un selector
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities );