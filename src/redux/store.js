import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; // nice to have when debugging redux code

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

