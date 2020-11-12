import React from 'react';
import './CartDropdown.scss';
// components
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cart-item/CartItem';
// react router
import {withRouter} from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
// reselect
import {createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));