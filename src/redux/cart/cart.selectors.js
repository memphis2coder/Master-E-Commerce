import { createSelector } from 'reselect';

// input selector, function that gets the whole state and return 1 item in this case its cart
const selectCart = (state) => state.cart;

// selectCartItem is a property in cart, use createSelector call
export const selectCartItems = createSelector(
    // a array of input selectors 1st argument
    [selectCart],
    // return the value we want 
    cart => cart.cartItems
);

// create selector for hidden cart
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

// make our cartitem count selector, use createSelector
export const selectCartItemsCount = createSelector(
    // pass in selectCartItems
    [selectCartItems],
    // reduce return our total count of items
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity,
            0
        )
);

// checkout page get the total items in cart
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
);






