import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Product.css';

const products = [
  { id: 1, name: 'Product 1', price: 10.00, description: 'Description for Product 1', reviews: ['Great product!', 'Very useful.'], options: { colors: ['Red', 'Blue'], sizes: ['S', 'M', 'L'] }, image: 'https://via.placeholder.com/400' },
  { id: 2, name: 'Product 2', price: 15.00, description: 'Description for Product 2', reviews: ['Excellent quality.', 'Will buy again.'], options: { colors: ['Green', 'Yellow'], sizes: ['M', 'L'] }, image: 'https://via.placeholder.com/400' },
  // Add more product details here
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <Link to="/" className="back-button">Back to Home</Link>
        <h1 className="product-detail-title">{product.name}</h1>
      </div>
      <img src={product.image} alt={product.name} className="product-detail-image"/>
      <p className="product-detail-description">{product.description}</p>
      <p className="product-detail-price">${product.price.toFixed(2)}</p>
      <div className="product-detail-options">
        <h3>Options:</h3>
        <div>
          <strong>Colors:</strong>
          {product.options.colors.map(color => (
            <span key={color} className="option">{color}</span>
          ))}
        </div>
        <div>
          <strong>Sizes:</strong>
          {product.options.sizes.map(size => (
            <span key={size} className="option">{size}</span>
          ))}
        </div>
      </div>
      <div className="product-detail-reviews">
        <h3>Reviews:</h3>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
