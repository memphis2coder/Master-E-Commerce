import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
          // always return the original state
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;

