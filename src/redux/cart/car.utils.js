// utility functions allow us to keep our files clean
// and organize functions that we may need in multiple files in one location

// function to add items to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    // check if cart item exist
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            // if both ids match add 1
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // if the cart item is not found return a new array, also return cartItemToAdd with 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
