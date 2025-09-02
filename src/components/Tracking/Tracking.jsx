// components/Tracking/Tracking.jsx
import React, { useState } from 'react';
import styles from './Tracking.module.css';

const Tracking = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId) {
      // In a real app, this would redirect to tracking details
      alert(`Tracking shipment: ${trackingId}`);
    }
  };

  return (
    <section id="tracking" className={styles.tracking}>
      <div className="container">
        <div className={styles.trackingContent}>
          <div className={styles.textContent}>
            <h2>Real-Time Shipment Tracking</h2>
            <p>Stay informed about your delivery with our advanced tracking system. Get real-time updates and estimated time of arrival.</p>
            
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>📍</div>
                <div className={styles.benefitText}>
                  <h4>Live Location Tracking</h4>
                  <p>Track your shipment in real-time on the map</p>
                </div>
              </div>
              
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🔔</div>
                <div className={styles.benefitText}>
                  <h4>Instant Notifications</h4>
                  <p>Get alerts for important delivery milestones</p>
                </div>
              </div>
              
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>📊</div>
                <div className={styles.benefitText}>
                  <h4>Delivery Analytics</h4>
                  <p>Access detailed reports on your shipment history</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.trackingForm}>
            <div className={styles.formCard}>
              <h3>Track Your Shipment</h3>
              <form onSubmit={handleTrack}>
                <div className={styles.inputGroup}>
                  <label htmlFor="tracking-id">Enter Tracking ID</label>
                  <input
                    type="text"
                    id="tracking-id"
                    placeholder="e.g., CS123456789"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.trackButton}>Track Shipment</button>
              </form>
              
              <div className={styles.exampleIds}>
                <p>Example Tracking IDs:</p>
                <ul>
                  <li>CS123456789</li>
                  <li>CS987654321</li>
                  <li>CS456789123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;