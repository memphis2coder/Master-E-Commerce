import CartActionTypes from './cart.types';
import {addItemToCart} from './car.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
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
          // action.payload is the item we want to add
          cartItems: addItemToCart(state.cartItems, action.payload)
        };
    default:
      return state;
  }
};

export default cartReducer;

