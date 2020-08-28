import React from 'react'

import './previewCollectionCard.scss';

export default function previewCollectionCard({item}) {
    return (
        <div className="previewCard"
            style={{backgroundImage: `url(${item.imageUrl})`}} >
            <div className="previewContent">
                <p>{item.name}</p>
                <button>Add to cart</button>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

// "previewCard"