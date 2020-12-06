import React from 'react'
import {withRouter} from 'react-router-dom';

import './MenuItem.scss'

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
    return (
        <div className="menu-item-container">
            <div className={`${size} menu-item`} 
                style={{backgroundImage: `url(${imageUrl})`}} 
                onClick={() => history.push(`${match.url}${linkUrl}`)} // dynamic url links are created using this method
                >   
                    <div className="content">
                        <h2 className="title">{title}</h2>
                        <span className="subtitle">Shop</span>
                    </div>
            </div>
        </div>
    )
};

export default withRouter(MenuItem); // get access to the history object’s properties and the closest <Route>