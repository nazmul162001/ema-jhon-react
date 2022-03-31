
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
  const {product, handleRemoveProduct} = props;
  const {name, img, price, shipping, quantity} = props.product;
  return (
    <div className='review-item'>
      <div>
        <img src= {img} alt="" />
      </div>
      <div className='review-items-details-container'>
          <div className="review-item-details">
            <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
            <p className="price">Price:$ <span className='orange-color'>{price}</span></p>
            <p className="shipping">Shipping:$<small className="shipping-price">{shipping}</small></p>
            <p><small>{quantity}</small></p>
          </div>
          <div className="delete-container">
            <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
              <FontAwesomeIcon className='delete-icon' icon = {faTrashAlt} ></FontAwesomeIcon>
            </button>
          </div>
      </div>
    </div>
  );
};

export default ReviewItem;