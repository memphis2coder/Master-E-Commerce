import React from 'react';
import PreviewCollectionCard from '../previewCollectionCard/previewCollectionCard';

import './PreviewCollection.scss';

const PreviewCollection = ({title, items}) => { // receive title and items as props, data comes from shopPage
    return (
        <div className="preview-set">
            <h1 className='title'>{title}</h1>  
                <div className="preview-item">
                    {
                        items
                            .filter((item, index) => index < 4) // show only four items
                            .map((item) => (
                            // send item data to previewcollectioncard component
                            <PreviewCollectionCard key={item.id} item={item} /> 
                            ))
                    }
                </div>
        </div>
    )
};

export default PreviewCollection;

