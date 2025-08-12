// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Install react-router-dom

function Header() {
return (
    <header>
    <div className="container">
        <div className="logo">
        <img src="TIH-Logo.png" alt="Transformer Innovation Hub Logo" />
        <span className="brand-name">Transformer Innovation Hub</span>
        </div>
        <nav className="main-nav">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>
        </nav>
        {/* ... Icons and cart count ... */}
    </div>
    </header>
);
}

export default Header;