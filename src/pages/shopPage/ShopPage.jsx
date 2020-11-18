import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import SHOP_DATA from './shopData.js'; 

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA // this comes from pages folder in shopPage folder
        }
    }

    render() {
        // destructuring
        const { collections } = this.state // this is from this.state = collections
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} /> // previewCollection componenet
                ))}
            </div>
        ); 
    }
}

export default ShopPage;