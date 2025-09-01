import { useState } from 'react';
import styles from './HeadOfficeDashboard.module.css';

const HeadOfficeDashboard = () => {
  const [selectedDate, setSelectedDate] = useState('2025-08-31');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - in real app, this would come from API
  const stats = {
    requests: 42,
    senders: 28,
    bookings: 35,
    packages: 67,
    collection: 8900,
    cash: 4500,
    online: 3200,
    credit: 1200,
    successfulDeliveries: 58,
    failedDeliveries: 4,
    codCollection: 8900
  };

  return (
    <div className={styles.headOfficeDashboard}>
      <div className={styles.header}>
        <h1>CS Express</h1>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Type and press ENTER to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.content}>
        {/* Left Sidebar - Navigation */}
        <div className={styles.sidebar}>
          <h3>Dashboard</h3>
          <ul>
            <li className={styles.menuCategory}>Bookings</li>
            <ul className={styles.submenu}>
              <li>Customer</li>
              <ul className={styles.subsubmenu}>
                <li>Manifests</li>
                <li>Packages</li>
                <li>Rate Sheet</li>
              </ul>
            </ul>
            
            <li className={styles.menuCategory}>Transactions</li>
            <ul className={styles.submenu}>
              <li>User</li>
              <ul className={styles.subsubmenu}>
                <li>Complaints</li>
              </ul>
            </ul>
          </ul>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Statistics Section */}
          <div className={styles.statsSection}>
            <h2>Requests | August 31, 2024</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>Requests</h3>
                <div className={styles.statValue}>{stats.requests}</div>
              </div>
              <div className={styles.statCard}>
                <h3>Senders</h3>
                <div className={styles.statValue}>{stats.senders}</div>
              </div>
              <div className={styles.statCard}>
                <h3>Bookings</h3>
                <div className={styles.statValue}>{stats.bookings}</div>
              </div>
              <div className={styles.statCard}>
                <h3>Packages</h3>
                <div className={styles.statValue}>{stats.packages}</div>
              </div>
              <div className={styles.statCard}>
                <h3>Collection</h3>
                <div className={styles.statValue}>Rs. {stats.collection}</div>
              </div>
              <div className={styles.statCard}>
                <h3>Cash</h3>
                <div className={styles.statValue}>Rs. {stats.cash}</div>
              </div>
              <div className={styles.statCard}>
                <h3>Online</h3>
                <div className={styles.statValue}>Rs. {stats.online}</div>
              </div>
              <div className={styles.statCard}>
                <h3>Credit</h3>
                <div className={styles.statValue}>Rs. {stats.credit}</div>
              </div>
            </div>
          </div>

          {/* Deliveries Section */}
          <div className={styles.deliveriesSection}>
            <h2>Deliveries</h2>
            <div className={styles.deliveriesGrid}>
              <div className={styles.deliveryCategory}>
                <h4>Successful</h4>
                <div className={styles.deliveryValue}>{stats.successfulDeliveries}</div>
              </div>
              <div className={styles.deliveryCategory}>
                <h4>Failed</h4>
                <div className={styles.deliveryValue}>{stats.failedDeliveries}</div>
              </div>
              <div className={styles.deliveryCategory}>
                <h4>COD Collection</h4>
                <div className={styles.deliveryValue}>Rs. {stats.codCollection}</div>
              </div>
            </div>

            <div className={styles.dateSection}>
              <h4>August 31, 2025</h4>
              <div className={styles.dateStats}>
                <div className={styles.dateStat}>
                  <span className={styles.dateStatValue}>0</span>
                </div>
                <div className={styles.dateStat}>
                  <span className={styles.dateStatValue}>0</span>
                </div>
                <div className={styles.dateStat}>
                  <span className={styles.dateStatValue}>Rs. 0</span>
                </div>
              </div>
            </div>

            <div className={styles.userSection}>
              <h4>Binod Sunuwar</h4>
              <div className={styles.userStats}>
                <div className={styles.userStat}>
                  <span className={styles.userStatLabel}>Pickups</span>
                  <span className={styles.userStatValue}>0</span>
                </div>
                <div className={styles.userStat}>
                  <span className={styles.userStatLabel}>Deliveries</span>
                  <span className={styles.userStatValue}>0</span>
                </div>
                <div className={styles.userStat}>
                  <span className={styles.userStatLabel}>Failed</span>
                  <span className={styles.userStatValue}>0</span>
                </div>
                <div className={styles.userStat}>
                  <span className={styles.userStatLabel}>COD Collection</span>
                  <span className={styles.userStatValue}>Rs. 0</span>
                </div>
              </div>
            </div>

            <button className={styles.downloadButton}>
              <i className="fas fa-download"></i>
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadOfficeDashboard;