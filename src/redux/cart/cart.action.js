import CartActionTypes from './cart.types';

// this function makes the action
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  // we dont need a payload cuz no data is needed
});

// this functions adds a new item to cart
// action type objects can be type and payload
// playload equals to the item(data)
// now bring this into our component so i can use it
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});



