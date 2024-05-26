import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 10.00, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: 15.00, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Product 3', price: 20.00, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Product 4', price: 25.00, image: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Product 5', price: 30.00, image: 'https://via.placeholder.com/200' },
  { id: 6, name: 'Product 6', price: 35.00, image: 'https://via.placeholder.com/200' },
  { id: 7, name: 'Product 7', price: 40.00, image: 'https://via.placeholder.com/200' },
  { id: 8, name: 'Product 8', price: 45.00, image: 'https://via.placeholder.com/200' },
  { id: 9, name: 'Product 9', price: 50.00, image: 'https://via.placeholder.com/200' },
  { id: 10, name: 'Product 10', price: 55.00, image: 'https://via.placeholder.com/200' }
];

const Home = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <header>
        <h1>Welcome to My Shop</h1>
        <div id="cart">
          <h2>Cart</h2>
          <ul id="cart-items">
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)} className="remove-from-cart">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main>
        {products.map(product => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
            </Link>
            <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
