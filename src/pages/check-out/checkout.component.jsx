import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckOutItems from '../../components/checkout-items/checkout-items.component';
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItems key={cartItem.id} cartItem={cartItem}></CheckOutItems>
      ))}
      <div className='total'>
        <span>TOTAL:${total}</span>
        <div className='test-warning'>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp:01/22 -CVV: 123
        </div>
      </div>
      <StripCheckoutButton price={total}></StripCheckoutButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps, null)(CheckOutPage);
