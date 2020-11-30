import React from 'react'
// components
import CheckoutItem from '../../components/checkout-item/checkout-item';
// redux
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
// reselect
import { createStructuredSelector } from 'reselect';
// stripe
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
// styles
import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
      <StripeCheckoutButton price={total} />
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  });
  
  export default connect(mapStateToProps)(CheckoutPage);