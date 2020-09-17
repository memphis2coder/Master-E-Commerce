import {UserActionTypes} from './user.types'; // import UserActionTypes to prevent typos

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // import UserActionTypes to prevent typos
    payload: user
});

