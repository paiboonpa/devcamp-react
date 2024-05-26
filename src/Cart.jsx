import React, { useState } from 'react';
import './cart.css';

const initialCart = [
  { id: 1, name: 'Product 1', price: 600, quantity: 1, image: 'https://via.placeholder.com/100', store: 'Toshino Official Store', discount: '1%' },
  { id: 2, name: 'Product 2', price: 70, quantity: 1, image: 'https://via.placeholder.com/100', store: 'Srisangdaw Official Store', discount: '' },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, quantity) => {
    setCart(cart.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-header">
            <span>{item.store}</span>
            <button onClick={() => handleRemoveItem(item.id)} className="remove-button">Remove</button>
          </div>
          <div className="cart-item-content">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <span className="cart-item-total">Total: ${item.price * item.quantity}</span>
              {item.discount && <span className="cart-item-discount">Discount: {item.discount}</span>}
            </div>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Amount: ${totalAmount}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
