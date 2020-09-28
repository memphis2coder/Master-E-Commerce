import React from 'react';
import {connect} from 'react-redux'; // use connect to connect this component to cart.action
import {toggleCartHidden} from '../../redux/cart/cart.action'; // bringing in the action for toggle cart

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; // this is the svg image

import './CartIcon.scss';

// toggleCartHidden comes from redux cart.action redux folder
const CartIcon = ({toggleCartHidden}) => { // pass toggleCartHidden as a argument
    return (
        // toogleCartHidden is a function?
        <div className="cart-icon" onClick={toggleCartHidden}> 
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
};

// function that toggles the cart also connects to redux action
const mapDispatchToProps = dispatch => ({ // dispatch connects this componenet to redux
    // return a object
    // return a function
    toggleCartHidden: () => dispatch(toggleCartHidden()) // dispatch makes the action happen
});

// null is passed as the default
export default connect(null, mapDispatchToProps)(CartIcon);