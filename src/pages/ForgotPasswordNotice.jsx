// pages/ForgotPasswordNotice.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordNotice = () => {
  const navigate = useNavigate();
  const [recoveryMethod, setRecoveryMethod] = useState('email');
  const [contactInfo, setContactInfo] = useState('');

  const handleRecovery = (e) => {
    e.preventDefault();
    // In a real app, you would send the recovery request based on the selected method
    alert(`Recovery instructions will be sent via ${recoveryMethod} to ${contactInfo}`);
    navigate('/login');
  };

  return (
    <div className="auth-page forgot-password-page">
      <h2>Password Recovery</h2>
      <p>Select how you would like to receive password reset instructions:</p>
      
      <form className="auth-form" onSubmit={handleRecovery}>
        <div className="form-group">
          <label>Recovery Method</label>
          <select 
            value={recoveryMethod} 
            onChange={(e) => setRecoveryMethod(e.target.value)}
            className="recovery-select"
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>
            {recoveryMethod === 'email' ? 'Email Address' : 
             recoveryMethod === 'sms' ? 'Mobile Number' : 'WhatsApp Number'}
          </label>
          <input 
            type="text" 
            placeholder={
              recoveryMethod === 'email' ? 'Enter your email address' : 
              'Enter your phone number'
            } 
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required 
          />
        </div>
        
        <button type="submit" className="auth-button">
          Send Recovery Instructions
        </button>
      </form>
      
      <p className="auth-link">
        <a href="#" onClick={() => navigate('/login')}>Back to login</a>
      </p>
    </div>
  );
};

export default ForgotPasswordNotice;