import styles from './LoginForm.module.css'

const LoginForm = ({ loginData, setLoginData, handleLogin, goToRegister }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <section className={styles.formSection}>
      <div className="container">
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Login</h2>
          <p className={styles.formSubtitle}>Access your account to manage your shipments</p>
          
          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter your email address" 
                value={loginData.email}
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
                placeholder="Enter your password" 
                value={loginData.password}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formOptions}>
              <div className={styles.formCheck}>
                <input 
                  type="checkbox" 
                  id="remember" 
                  name="remember"
                  checked={loginData.remember}
                  onChange={handleChange}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className={styles.forgotLink}>Forgot password?</a>
            </div>
            
            <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
              Sign In
            </button>
            
            <div className={styles.formFooter}>
              <p>Don't have an account? <a href="#" onClick={goToRegister}>Create one</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginForm