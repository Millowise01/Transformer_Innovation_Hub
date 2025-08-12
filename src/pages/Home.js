import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to Transformer Innovation Hub</h1>
        <p>Transforming waste into beautiful, sustainable art pieces</p>
        <button className="button">Explore Our Collection</button>
      </section>
      
      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-recycle"></i>
            <h3>Eco-Friendly</h3>
            <p>All our products are made from recycled materials</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-palette"></i>
            <h3>Artistic</h3>
            <p>Unique designs created by talented local artists</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-heart"></i>
            <h3>Community</h3>
            <p>Supporting local communities and sustainable practices</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;