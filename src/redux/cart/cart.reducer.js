import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils'

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
      // add or remove item quantity
      case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
      // i want to delete the item and also update the old state
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;

