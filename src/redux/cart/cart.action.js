import CartActionTypes from './cart.types';

// this function makes the action
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  // we dont need a payload cuz no data is needed
});


