// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <img src="https://chandrasuryaexpress.com/images/cs-logo.svg" alt="Chandra Surya Express" />
              <span>Chandra Surya Express</span>
            </div>
            <p>Your trusted partner for reliable and efficient courier services across the nation.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Services</h3>
            <ul>
              <li><a href="#">Express Delivery</a></li>
              <li><a href="#">E-Commerce Logistics</a></li>
              <li><a href="#">Cash on Delivery</a></li>
              <li><a href="#">Warehousing</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Contact Us</h3>
            <ul>
              <li>📍 123 Logistics Street, City, Country</li>
              <li>📞 +1 234 567 8900</li>
              <li>✉️ info@chandrasuryaexpress.com</li>
              <li>🕒 Mon-Fri: 8AM - 6PM</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Chandra Surya Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;