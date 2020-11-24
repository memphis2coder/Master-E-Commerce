import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item';
import './collectionPage.styles.scss';

const CollectionPage = ({match}) => {
    console.log(match.params.collectionId);
    return (
        <div className='collection-page'>
            <h2>collection page</h2>
        </div>
    );
};

export default CollectionPage;