import React, { useState } from 'react';

const Shop = () => {
  const [products] = useState([
    { id: 1, name: 'Recycled Bottle Lamp', price: 45, image: '/assets/images/Light1.jpg' },
    { id: 2, name: 'Plastic Art Sculpture', price: 65, image: '/assets/images/plastic.jpg' },
    { id: 3, name: 'Wood Wall Art', price: 85, image: '/assets/images/Wood wall art.jpg' },
    { id: 4, name: 'Eco-Friendly Decor', price: 35, image: '/assets/images/Wall Deco.jpeg' },
    { id: 5, name: 'Sustainable Map Art', price: 55, image: '/assets/images/Map on the wall.jpeg' },
    { id: 6, name: 'Recycled Wood Piece', price: 75, image: '/assets/images/wood.jpg' }
  ]);

  return (
    <div className="container">
      <h1>Our Sustainable Art Collection</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <button className="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;