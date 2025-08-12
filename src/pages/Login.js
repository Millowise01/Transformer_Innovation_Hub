import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="login-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="auth-form card">
              <h2>Login</h2>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">Login</button>
              
              <div className="auth-links">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;