import React from 'react'

import './previewCollectionCard.scss';

function previewCollectionCard({ id, name, price, imageUrl }) {
    return (
        <div className="previewCard">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="previewCard-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}

export default previewCollectionCard;
