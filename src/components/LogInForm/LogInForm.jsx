import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryMethod, setRecoveryMethod] = useState('email');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication - In real app, verify credentials
    const role = determineRole(formData.email); // Function to determine role
    if (onLogin) {
      onLogin(role);
    }
    navigate('/dashboard');
  };

  const determineRole = (email) => {
    // Simple role determination logic - replace with actual authentication
    const roles = ['head office', 'manager', 'admin', 'rider', 'vendor'];
    return roles[Math.floor(Math.random() * roles.length)];
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    // Handle password recovery logic
    navigate('/forgot-password-notice');
  };

  if (showRecovery) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authForm}>
          <div className={styles.authHeader}>
            <h1>Password Recovery</h1>
            <p>Choose recovery method</p>
          </div>

          <div className={styles.recoveryMethods}>
            <div 
              className={`${styles.recoveryMethod} ${recoveryMethod === 'email' ? styles.selected : ''}`}
              onClick={() => setRecoveryMethod('email')}
            >
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </div>
            <div 
              className={`${styles.recoveryMethod} ${recoveryMethod === 'sms' ? styles.selected : ''}`}
              onClick={() => setRecoveryMethod('sms')}
            >
              <i className="fas fa-sms"></i>
              <span>SMS</span>
            </div>
            <div 
              className={`${styles.recoveryMethod} ${recoveryMethod === 'whatsapp' ? styles.selected : ''}`}
              onClick={() => setRecoveryMethod('whatsapp')}
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </div>
          </div>

          <form onSubmit={handleRecovery}>
            <div className={styles.formGroup}>
              <label>
                {recoveryMethod === 'email' ? 'Email Address' : 
                 recoveryMethod === 'sms' ? 'Mobile Number' : 'WhatsApp Number'} *
              </label>
              <input 
                type={recoveryMethod === 'email' ? 'email' : 'tel'} 
                placeholder={`Enter your ${recoveryMethod === 'email' ? 'email address' : 'mobile number'}`}
                required 
              />
            </div>

            <button type="submit" className={styles.authBtn}>Send Recovery Link</button>
          </form>

          <div className={styles.authFooter}>
            <p className={styles.backLink} onClick={() => setShowRecovery(false)}>
              <i className="fas fa-arrow-left"></i> Back to Login
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <div className={styles.authHeader}>
          <h1>Courier Service</h1>
          <p>Fast and reliable delivery solutions</p>
        </div>

        <form onSubmit={handleLogin} className={styles.authFormContent}>
          <div className={styles.formGroup}>
            <label>Email *</label>
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Password *</label>
            <input 
              type="password" 
              name="password"
              placeholder="Enter your password" 
              value={formData.password}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className={styles.formOptions}>
            <label className={styles.checkboxContainer}>
              <input 
                type="checkbox" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <span className={styles.checkmark}></span>
              Remember me
            </label>
            
            <span className={styles.forgotLink} onClick={() => setShowRecovery(true)}>
              Forgot password?
            </span>
          </div>

          <button type="submit" className={styles.authBtn}>Login</button>

          <div className={styles.authFooter}>
            <p>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;