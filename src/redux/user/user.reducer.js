// Initial State is for before any action happens, it is the state needed when the app first load and user do no action
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => { // function that gets the state object & action
    switch (action.type) {
        // check if case of action.type is = SET_CURRENT_USER then return the new object. 
        case 'SET_CURRENT_USER':
            return {
                ...state, // always return the original state
                currentUser: action.payload // action.payload is just the data that was sent along in the original action. 
            }
        default:
            return state;
    }
};

export default userReducer