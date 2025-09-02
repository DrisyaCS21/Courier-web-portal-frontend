import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1>Effortless Shipping, Limitless Solutions</h1>
          <p>With Chandra Surya Express, focus on growing your online business while we take care of the logistics. Reach out today and let us simplify your e-commerce journey!</p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.visualContent}>
          <div className={styles.trackingCard}>
            <h3>Track Your Shipment</h3>
            <div className={styles.trackingInput}>
              <input type="text" placeholder="Enter Tracking ID" />
              <button>Track</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

export default Hero;