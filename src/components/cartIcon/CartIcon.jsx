import React from 'react';
import {connect} from 'react-redux'; // use connect to connect this component to cart.action
import {toggleCartHidden} from '../../redux/cart/cart.action'; // bringing in the action for toggle cart

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; // this is the svg image
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

// reselect
import {createStructuredSelector} from 'reselect';
import './CartIcon.scss';

// toggleCartHidden comes from redux cart.action redux folder
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
  
  const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
  const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);