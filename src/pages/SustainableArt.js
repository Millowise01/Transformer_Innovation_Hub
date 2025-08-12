import React from 'react';

const SustainableArt = () => {
  return (
    <div className="sustainable-art">
      <section className="hero">
        <div className="hero-content">
          <h1>Sustainable Art</h1>
          <p>Creating beautiful art while protecting our environment</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="section-header">
            <h2>Eco-Friendly Creations</h2>
            <p>Discover art made from recycled and sustainable materials</p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-recycle"></i>
              </div>
              <h3>Recycled Materials</h3>
              <p>Transform waste into beautiful art pieces that tell a story of sustainability.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Natural Elements</h3>
              <p>Using organic materials to create stunning works that connect with nature.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Environmental Impact</h3>
              <p>Every piece contributes to reducing waste and promoting environmental awareness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainableArt;