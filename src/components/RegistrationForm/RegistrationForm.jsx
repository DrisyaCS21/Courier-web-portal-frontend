import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrationForm.module.css';

const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    userType: 'head office'
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (onRegister) {
      onRegister(formData.userType);
    }
    
    navigate('/dashboard');
  };

  const roles = [
    { value: 'head office', label: 'Head Office', icon: 'fas fa-building' },
    { value: 'manager', label: 'Manager', icon: 'fas fa-user-tie' },
    { value: 'admin', label: 'Admin', icon: 'fas fa-cog' },
    { value: 'rider', label: 'Rider', icon: 'fas fa-motorcycle' },
    { value: 'vendor', label: 'Vendor', icon: 'fas fa-store' }
  ];

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <div className={styles.authHeader}>
          <h1>Create Account</h1>
          <p>Join our courier service network</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.authFormContent}>
          <div className={styles.formGroup}>
            <label>Full Name *</label>
            <input 
              type="text" 
              name="fullName"
              placeholder="Enter your full name" 
              value={formData.fullName}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email Address *</label>
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email address" 
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
              placeholder="Create a password" 
              value={formData.password}
              onChange={handleInputChange}
              required 
            />
            <div className={styles.passwordRequirements}>
              Must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Confirm Password *</label>
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm your password" 
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required 
            />
            {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <div className={styles.errorMessage}>
                Passwords do not match
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Mobile Number *</label>
            <input 
              type="tel" 
              name="mobile"
              placeholder="Enter your mobile number" 
              value={formData.mobile}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label>Role *</label>
            <div className={styles.roleSelection}>
              {roles.map((role) => (
                <div
                  key={role.value}
                  className={`${styles.roleOption} ${formData.userType === role.value ? styles.selected : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, userType: role.value }))}
                >
                  <i className={role.icon}></i>
                  <span>{role.label}</span>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.authBtn}>Create Account</button>

          <div className={styles.authFooter}>
            <p>Already have an account? <a href="/login">Login here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;