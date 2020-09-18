import React from 'react'
import CustomButton from '../customButton/CustomButton';

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
            <CustomButton inverted>Add to cart</CustomButton>
        </div>
    )
}

export default previewCollectionCard;
