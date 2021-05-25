import React from 'react';
import {
  clearItemfromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import './checkout-items.style.scss';

const CheckOutItems = ({ cartItem, dispatch }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>

      <span className='price'>${price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemfromCart(cartItem))}>
        &#10005;
      </div>
    </div>
  );
};
export default connect(null, null)(CheckOutItems);
