// Updated Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showForgotPassword) {
      navigate('/forgot-password-notice');
    } else {
      // Handle login logic
      navigate('/dashboard');
    }
  };

  return (
    <div className="auth-page login-page">
      <h2>{showForgotPassword ? 'Reset Password' : 'Login to Your Account'}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        {!showForgotPassword && (
          <>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input 
                  type="checkbox" 
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              
              <div className="forgot-password-link">
                <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot your password?</a>
              </div>
            </div>
          </>
        )}
        
        <button type="submit" className="auth-button">
          {showForgotPassword ? 'Reset Password' : 'Login'}
        </button>
      </form>
      
      {showForgotPassword && (
        <p className="auth-link">
          <a href="#" onClick={() => setShowForgotPassword(false)}>Back to login</a>
        </p>
      )}
      
      <p className="auth-link">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;