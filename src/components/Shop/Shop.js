import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useProducts();
  // use state for handle click 
  const [cart, setCart] = useState([]);

  // set LocalStorage 
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  },[products]);
  



  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product
          key = {product.id}
          product = {product}
          handleAddToCart = {handleAddToCart}

          ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart = {cart}>
          <Link to='/orders'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;