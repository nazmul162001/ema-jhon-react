import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className='shop-container'>
      <div className="review-items-container">
        {
          cart.map(product => <ReviewItem 
          key = {product.id}
          product = {product}
          />)
        }
      </div>
      <div className="cart-container">
        <Cart cart = {cart} />
      </div>
    </div>
  );
};

export default Orders;