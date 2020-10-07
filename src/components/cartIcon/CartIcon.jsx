import React from 'react';
import {connect} from 'react-redux'; // use connect to connect this component to cart.action
import {toggleCartHidden} from '../../redux/cart/cart.action'; // bringing in the action for toggle cart

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; // this is the svg image
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

// reselect
import {createStructuredSelector} from 'reselect';
import './CartIcon.scss';

// toggleCartHidden comes from redux cart.action redux folder
const CartIcon = ({toggleCartHidden, itemCount}) => { // pass toggleCartHidden as a argument
    return (
        // toogleCartHidden is a function?
        <div className="cart-icon" onClick={toggleCartHidden}> 
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
};

/////////////////// REDUX AND RESELECT ///////////////////////////////////

// function that toggles the cart also connects to redux action
const mapDispatchToProps = dispatch => ({ // dispatch connects this componenet to redux
    // return a object
    // return a function
    toggleCartHidden: () => dispatch(toggleCartHidden()) // dispatch makes the action happen
});

// function to show the total number of items in cart connection to cart.reducer.js
// this is a selector & i need to use reselect to save the data so it doesnt refresh all the time
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount // no state is needed with selector
});

// pass in mapDispatchToProps and MapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);