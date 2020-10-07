import {createSelector} from 'reselect';

// create selectUser selector
const selectUser = state => state.user;

// create currentUser selector
export const selectCurrentUser = createSelector(
    // create array of users
    [selectUser],
    (user) => user.currentUser
);

