import React from 'react'
import CustomButton from '../customButton/CustomButton';

// bring in redux & add cart item action
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

import './previewCollectionCard.scss';

// this data is being sent from previewcollection
function previewCollectionCard({ item, addItem }) {
    const {name, price, imageUrl} = item;
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
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton> 
        </div>
    )
};

// connect collectionCard and add item redux
const mapDispatchToProps = (dispatch) => ({
    // return a object
    // this function is receiving item and passing into addItem action
    // now we can add addItem into previewCollectionCard as a prop
    addItem: (item) => dispatch(addItem(item))
});

// pass null cuz we are not taking any state
export default connect(null,mapDispatchToProps)(previewCollectionCard);
