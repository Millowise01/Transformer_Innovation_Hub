import React from 'react';

const Community = () => {
  return (
    <div className="container">
      <h1>Our Community</h1>
      <div className="community-content">
        <section className="community-intro">
          <p>
            Join our growing community of eco-conscious individuals, artists, and innovators 
            who are passionate about sustainability and creative transformation.
          </p>
        </section>
        
        <section className="community-features">
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Connect</h3>
              <p>Meet like-minded individuals who share your passion for sustainability</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Learn</h3>
              <p>Participate in workshops and learn new upcycling techniques</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-hands-helping"></i>
              <h3>Contribute</h3>
              <p>Share your own creations and inspire others in the community</p>
            </div>
          </div>
        </section>
        
        <section className="join-community">
          <h2>Ready to Join?</h2>
          <p>Become part of our sustainable art community today!</p>
          <button className="button">Join Community</button>
        </section>
      </div>
    </div>
  );
};

export default Community;