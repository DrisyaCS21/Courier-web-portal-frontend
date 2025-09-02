// pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobile: '',
    confirmPassword: '',
    role: 'courier',
    accountType: 'individual',
    privacy: false
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Register button clicked!');
    
    // SIMPLE NAVIGATION - Remove this later when you add real auth
    navigate('/dashboard', { state: { role: registerData.role || 'user' } });
  };

  const goToLogin = (e) => {
    e.preventDefault();
    console.log('Login link clicked!');
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="auth-page register-page">
      <h2>Create Account</h2>
      <p className="subtitle">Join our courier service network</p>
      
      <form className="auth-form" onSubmit={handleRegister}>
        <div className="account-type-toggle">
          <button 
            type="button"
            className={registerData.accountType === 'individual' ? 'active' : ''}
            onClick={() => setRegisterData({...registerData, accountType: 'individual'})}
          >
            Individual
          </button>
          <button 
            type="button"
            className={registerData.accountType === 'business' ? 'active' : ''}
            onClick={() => setRegisterData({...registerData, accountType: 'business'})}
          >
            Business
          </button>
        </div>
        
        <div className="form-group">
          <label>Full Name *</label>
          <input 
            type="text" 
            name="fullname"
            placeholder="Enter your full name" 
            value={registerData.fullname}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Email Address *</label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email address" 
            value={registerData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Password *</label>
          <input 
            type="password" 
            name="password"
            placeholder="Create a password" 
            value={registerData.password}
            onChange={handleInputChange}
            required 
          />
          <div className="password-requirements">
            Must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.
          </div>
        </div>
        
        <div className="form-group">
          <label>Courier Service</label>
          <select 
            name="role"
            value={registerData.role}
            onChange={handleInputChange}
          >
            <option value="courier">Courier</option>
            <option value="dispatcher">Dispatcher</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Mobile Number *</label>
          <input 
            type="tel" 
            name="mobile"
            placeholder="Enter your mobile number" 
            value={registerData.mobile}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group checkbox-group">
          <input 
            type="checkbox" 
            name="privacy"
            id="privacy"
            checked={registerData.privacy}
            onChange={handleInputChange}
            required 
          />
          <label htmlFor="privacy">I agree to the Terms of Service and Privacy Policy</label>
        </div>
        
        <button type="submit" className="auth-button">
          Create Account
        </button>
      </form>
      
      <p className="auth-link">
        Already have an account? <a href="#" onClick={goToLogin}>Login here</a>
      </p>
    </div>
  );
};

export default Register;