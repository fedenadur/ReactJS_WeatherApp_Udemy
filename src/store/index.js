import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { city} from './../reducers/city';

const initialState = {
    city:'Buenos Aires, ar'
};

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(city, initialState, composeEnchancers(applyMiddleware(thunk)));
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
