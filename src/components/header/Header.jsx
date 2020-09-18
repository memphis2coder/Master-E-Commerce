import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'; // connect makes our component a super component
import { auth } from '../../firebase/firebase';
// components
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

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
// 1.how do i get the SET_CURRENT_USER from user.reducer
// 2. destructure to pass user and cart
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({ // state is the root-reducer
    // return a object 
    // 1. i want user value that will give me the userReducer from root-reducer.js USER
    // 2. then i want the currentUser value from user.reducer CURRENTUSER
    currentUser, // 
    hidden
});

// connect function is what brings redux store into the react components
export default connect(mapStateToProps)(Header); // mapStateToProps is passed into connect
