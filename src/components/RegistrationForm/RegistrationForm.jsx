import { useState } from 'react'
import styles from './RegistrationForm.module.css'

const RegistrationForm = ({ registerData, setRegisterData, handleRegister, goToLogin }) => {
  const [selectedAccountType, setSelectedAccountType] = useState('individual')
  const [passwordStrength, setPasswordStrength] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value)
    }
  }

  const checkPasswordStrength = (password) => {
    if (password.length === 0) {
      setPasswordStrength('')
      return
    }

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const isLongEnough = password.length >= 8

    const strength = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, isLongEnough].filter(Boolean).length

    if (strength <= 2) {
      setPasswordStrength('weak')
    } else if (strength <= 4) {
      setPasswordStrength('medium')
    } else {
      setPasswordStrength('strong')
    }
  }

  const handleAccountTypeChange = (type) => {
    setSelectedAccountType(type)
    setRegisterData(prev => ({
      ...prev,
      accountType: type
    }))
  }

  return (
    <section className={styles.formSection}>
      <div className="container">
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Create Account</h2>
          <p className={styles.formSubtitle}>Join our courier service network</p>
          
          <div className={styles.roleSelection}>
            <div 
              className={`${styles.roleOption} ${selectedAccountType === 'individual' ? styles.selected : ''}`}
              onClick={() => handleAccountTypeChange('individual')}
            >
              <i className="fas fa-user"></i>
              <h3>Individual</h3>
            </div>
            <div 
              className={`${styles.roleOption} ${selectedAccountType === 'business' ? styles.selected : ''}`}
              onClick={() => handleAccountTypeChange('business')}
            >
              <i className="fas fa-building"></i>
              <h3>Business</h3>
            </div>
          </div>
          
          <form onSubmit={handleRegister}>
            <div className={styles.formGroup}>
              <label htmlFor="fullname">Full Name *</label>
              <input 
                type="text" 
                id="fullname" 
                name="fullname"
                placeholder="Enter your full name" 
                value={registerData.fullname}
                onChange={handleChange}
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter your email address" 
                value={registerData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password *</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Create a password" 
                value={registerData.password}
                onChange={handleChange}
                required 
              />
              {passwordStrength && (
                <div className={styles.passwordStrength}>
                  <span>Strength: </span>
                  <span className={styles[passwordStrength]}>
                    {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                  </span>
                </div>
              )}
              <small>Must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.</small>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mobile">Mobile Number *</label>
              <input 
                type="tel" 
                id="mobile" 
                name="mobile"
                placeholder="Enter your mobile number" 
                value={registerData.mobile}
                onChange={handleChange}
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword"
                placeholder="Confirm your password" 
                value={registerData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="role">Register as *</label>
              <select 
                id="role" 
                name="role"
                value={registerData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select your role</option>
                <option value="rider">Rider</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
                <option value="head-office">Head Office</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            <div className={styles.formCheck}>
              <input 
                type="checkbox" 
                id="privacy" 
                name="privacy"
                checked={registerData.privacy}
                onChange={handleChange}
                required
              />
              <label htmlFor="privacy">
                I have read and agree to the Privacy Policy for Chandra Surya Express.
              </label>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
              Create Account
            </button>

            <div className={styles.formFooter}>
              <p>Already have an account? <a href="#" onClick={goToLogin}>Sign in</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm