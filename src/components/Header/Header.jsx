import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="https://chandrasuryaexpress.com/images/cs-logo.svg" alt="Chandra Surya Express" />
          <span>Chandra Surya Express</span>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#tracking">Tracking</a>
          <a href="#contact">Contact</a>
          <a href="/login" className={styles.loginBtn}>Login</a>
        </nav>

        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;