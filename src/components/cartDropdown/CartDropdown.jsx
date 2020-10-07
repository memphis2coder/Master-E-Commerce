import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
// redux
import { connect } from 'react-redux';
// reselect
import {createStructuredSelector} from 'reselect';


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// this connects to redux and component
const mapStateToProps = createStructuredSelector({
    // we dont need to use state
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);