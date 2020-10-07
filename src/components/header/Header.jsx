import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'; // connect makes our component a super component
import { auth } from '../../firebase/firebase';
import {createStructuredSelector} from 'reselect';
// components
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import './Header.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo" to="/">
                HOME
            </Link>
            <div className="menu">
                <Link className="menu-link" to="/shop">Shop</Link>
                <Link className="menu-link" to="/contact">Contact</Link>

                {
                    currentUser?
                    <div className="menu-link" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="menu-link" to="/signin">Sign In</Link>
                }
                <CartIcon />
            </div>
            
            { 
                hidden ? null : // if hidden is true render nothing 
                <CartDropdown/>
            }
        </div>
    )
};

////////////////////////// react-redux connecting header to store data  /////////////////
// 1. currentUser and selectCartHidden is using reselect 
// 2. destructure to pass user and cart
const mapStateToProps = (state) => createStructuredSelector({ // createStructureSelector is from reselect
    // return a object 
    // 1. currentUser is using memorize using selectCurrentUser using reselect
    // 2. hidden is using memorize using selectCurrentUser using reselect
    currentUser: selectCurrentUser, // pick the right selector
    hidden: selectCartHidden // pick the right selector
});

// connect function is what brings redux store into the react components
export default connect(mapStateToProps)(Header); // mapStateToProps is passed into connect
