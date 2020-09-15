// combines all of the root reducer together
import { combineReducer } from 'redux'; // comes form the redux library;

import {userReducer} from './user/user.reducer';

export default combineReducer({
    user: userReducer
});

// we still have to bring into our store and instantiate**create an object using functions**
