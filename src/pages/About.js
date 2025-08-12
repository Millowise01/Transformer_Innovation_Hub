import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About Transformer Innovation Hub</h1>
      <div className="about-content">
        <p>
          At Transformer Innovation Hub, we believe in the power of transformation. 
          Our mission is to turn waste materials into beautiful, functional art pieces 
          that not only serve a purpose but also tell a story of sustainability and creativity.
        </p>
        <p>
          Founded with the vision of creating a more sustainable future, we work with 
          local artists and communities to transform discarded materials into unique 
          pieces of art that bring beauty to your space while protecting our environment.
        </p>
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>To transform waste into wonder, creating sustainable art that inspires and educates.</p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>A world where creativity and sustainability go hand in hand, reducing waste while creating beauty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;