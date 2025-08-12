import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Recycled Art Piece', price: 45.00, quantity: 1, image: '/item1.jpg' },
    { id: 2, name: 'Sustainable Sculpture', price: 120.00, quantity: 2, image: '/item2.jpg' }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Shopping Cart</h1>
          <p>Review your selected items</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <h3>Your cart is empty</h3>
              <a href="/shop" className="btn btn-primary mt-4">Continue Shopping</a>
            </div>
          ) : (
            <div className="cart-content">
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item card">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="price">${item.price.toFixed(2)}</p>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary card">
                <h3>Order Summary</h3>
                <div className="summary-line">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="summary-line total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <a href="/checkout" className="btn btn-primary">Proceed to Checkout</a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;