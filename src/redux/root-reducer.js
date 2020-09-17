// combines all of the root reducer together
import { combineReducers } from 'redux'; // comes form the redux library;
import userReducer from './user/user.reducer'; // import from user.reducer.js

// exporting combineReducers
export default combineReducers({
    // return a object that had a property of user
    user: userReducer
})

// we still have to bring into our store and instantiate**create an object using functions**
