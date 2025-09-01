import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <i className="fas fa-shipping-fast"></i>
            <span>Chandra Surya Express</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#" onClick={() => navigate('/')}>Home</a>
            <a href="#">Services</a>
            <a href="#">Tracking</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <button 
              className="btn btn-outline" 
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header