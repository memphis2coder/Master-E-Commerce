import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  cartItem: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
          // always return the original state
        ...state,
        hidden: !state.hidden
      };
      // add a new case to add items to cart
      case CartActionTypes.ADD_ITEM:
        return {
          // always return the original state
          ...state,
          cartItem: [...state.cartItem, action.payload]
        };
    default:
      return state;
  }
};

export default cartReducer;

