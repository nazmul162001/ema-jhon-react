import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  return (
    <div className='cart'>
          <h2>Order summery</h2>
          <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Cart;