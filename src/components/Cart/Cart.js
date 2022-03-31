import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart} = props;
  // add total price // total shipping price
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  // tax 
  const tax = +(total * 0.1).toFixed(2);
  // grand Total
  const grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div className='cart'>
          <h4>Order summery</h4>
          <p>Selected Items: {cart.length}</p>
          <p>Total Price: ${total} </p>
          <p>Total Shipping: ${shipping}</p>
          <p>Tax: {tax} </p>
          <h5> Grand Total: ${grandTotal}</h5>
          {props.children}
    </div>
  );
};

export default Cart;