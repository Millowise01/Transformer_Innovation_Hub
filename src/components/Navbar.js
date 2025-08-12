import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/images/TIH-Logo.png" alt="TIH Logo" />
        <span>Transformer Hub</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/community">Community</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/sustainable-art">Sustainable Art</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;