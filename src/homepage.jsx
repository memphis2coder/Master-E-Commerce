import React from 'react'
import './homepage.scss';

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Mens</h2>
                        <span className="sub-title">Shop</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Womans</h2>
                        <span className="sub-title">Shop</span>
                    </div>
                </div>
            </div>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Shirts</h2>
                        <span className="sub-title">Shop</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Pants</h2>
                        <span className="sub-title">Shop</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h2 className="title">Accessories</h2>
                        <span className="sub-title">Shop</span>
                    </div>
                </div>
            </div>   
        </div>
    )
}

