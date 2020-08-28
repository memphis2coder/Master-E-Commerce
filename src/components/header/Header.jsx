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
                <Link className="menu-link" to="/contact">SHOP</Link>
                <Link className="menu-link" to="/shop">CONTACT</Link>
            </div>
        </div>
    )
}
