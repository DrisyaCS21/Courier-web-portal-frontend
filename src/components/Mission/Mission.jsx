// components/Mission/Mission.jsx
import React from 'react';
import styles from './Mission.module.css';

const Mission = () => {
  return (
    <section id="about" className={styles.mission}>
      <div className="container">
        <div className={styles.missionContent}>
          <div className={styles.textContent}>
            <div className="section-header" style={{textAlign: 'left'}}>
              <h2>Missions and Values</h2>
              <p>Our commitment to excellence in logistics and customer service</p>
            </div>
            
            <div className={styles.missionStatement}>
              <p>
                Our mission is to provide seamless and secure courier solutions, ensuring the timely and safe delivery of our client's shipments. We aim to exceed expectations through innovation, reliability, and a customer-centric approach.
              </p>
            </div>
            
            <div className={styles.values}>
              <div className={styles.value}>
                <div className={styles.valueIcon}>⏱</div>
                <div className={styles.valueContent}>
                  <h4>Reliability</h4>
                  <p>Our commitment to on-time deliveries and consistent service quality.</p>
                </div>
              </div>
              
              <div className={styles.value}>
                <div className={styles.valueIcon}>👥</div>
                <div className={styles.valueContent}>
                  <h4>Customer-Centric Approach</h4>
                  <p>We prioritize your needs and satisfaction in everything we do.</p>
                </div>
              </div>
              
              <div className={styles.value}>
                <div className={styles.valueIcon}>💡</div>
                <div className={styles.valueContent}>
                  <h4>Innovation</h4>
                  <p>Embracing the latest technology to improve our services continuously.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.visualContent}>
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;