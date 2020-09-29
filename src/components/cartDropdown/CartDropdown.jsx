import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cart-item/CartItem';

// redux
import {connect} from 'react-redux';

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
  
  const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });
  
  export default connect(mapStateToProps)(CartDropdown);