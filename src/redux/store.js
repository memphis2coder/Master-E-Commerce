import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist' // redux presist
import logger from 'redux-logger'; // nice to have when debugging redux code

import rootReducer from './root-reducer'; // combinedReducer is our rootReducer

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);



