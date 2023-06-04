import React, { useState } from 'react';
import '../Page2/main.css'
const DentalSuppliesPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`Added ${product.name} to the cart!`);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1.',
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2.',
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of product 3.',
      image: 'product3.jpg',
    },
  ];

  return (
    <div className="container">
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Dental Supplies</h1>
          <p className="hero-subtitle">Providing high-quality dental products for professionals</p>
        </div>
      </section>
      <section className="product-section">
        <div className="product-list">
          <div className="product-card">
            <img className="product-image" src="product1.jpg" alt="Product 1" />
            <h3 className="product-name">Product 1</h3>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="product-button">Add to Cart</button>
          </div>
          {/* Add more product cards here */}
        </div>
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">© 2023 Dental Supplies. All rights reserved.</p>
    </footer>
  </div>
  );
};

export default DentalSuppliesPage;
