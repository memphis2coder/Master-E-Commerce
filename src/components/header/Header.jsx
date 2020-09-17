import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'; // connect makes our component a super component
import { auth } from '../../firebase/firebase';

import './Header.scss';

const Header = ({ currentUser }) => {
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
                
            </div>
        </div>
    )
};

////////////////////////// react-redux connecting header to store data  /////////////////
// 1.how do i get the SET_CURRENT_USER from user.reducer
const mapStateToProps = state => ({ // state is the root-reducer
    // return a object 
    currentUser : state.user.currentUser // current user value
});

// connect function is what brings redux store into the react components
export default connect(mapStateToProps)(Header); // currentUser is passed into connect
