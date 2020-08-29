import React from 'react'
import {Link} from 'react-router-dom';

import './Header.scss';

export default function Header() {
    return (
        <div className="header">
            <Link className="logo" to="/">
                HOME
            </Link>
            <div className="menu">
                <Link className="menu-link" to="/shop">Shop</Link>
                <Link className="menu-link" to="/contact">Contact</Link>
                <Link className="menu-link" to="/signin">Sign In</Link>
            </div>
        </div>
    )
}
