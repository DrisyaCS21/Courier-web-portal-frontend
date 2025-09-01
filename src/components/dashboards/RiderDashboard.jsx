import styles from './RiderDashboard.module.css';

const RiderDashboard = () => {
  const todayStats = {
    deliveries: 12,
    pickups: 8,
    successful: 10,
    failed: 2,
    codCollection: 4500
  };

  return (
    <div className={styles.riderDashboard}>
      <div className={styles.header}>
        <h1>Rider Dashboard</h1>
        <div className={styles.date}>August 31, 2025</div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🚚</div>
          <div className={styles.statInfo}>
            <h3>Today's Deliveries</h3>
            <div className={styles.statValue}>{todayStats.deliveries}</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📦</div>
          <div className={styles.statInfo}>
            <h3>Today's Pickups</h3>
            <div className={styles.statValue}>{todayStats.pickups}</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>✅</div>
          <div className={styles.statInfo}>
            <h3>Successful</h3>
            <div className={styles.statValue}>{todayStats.successful}</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>❌</div>
          <div className={styles.statInfo}>
            <h3>Failed</h3>
            <div className={styles.statValue}>{todayStats.failed}</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>💰</div>
          <div className={styles.statInfo}>
            <h3>COD Collection</h3>
            <div className={styles.statValue}>Rs. {todayStats.codCollection}</div>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <h2>Quick Actions</h2>
        <div className={styles.actionButtons}>
          <button className={styles.actionBtn}>
            <i className="fas fa-map-marker-alt"></i>
            View Delivery Route
          </button>
          <button className={styles.actionBtn}>
            <i className="fas fa-qrcode"></i>
            Scan Package
          </button>
          <button className={styles.actionBtn}>
            <i className="fas fa-money-bill-wave"></i>
            COD Collection
          </button>
          <button className={styles.actionBtn}>
            <i className="fas fa-exclamation-circle"></i>
            Report Issue
          </button>
        </div>
      </div>

      <div className={styles.pendingTasks}>
        <h2>Pending Deliveries</h2>
        <div className={styles.taskList}>
          <div className={styles.taskItem}>
            <span className={styles.taskId}>#PKG12345</span>
            <span className={styles.taskAddress}>Kathmandu, Nepal</span>
            <span className={styles.taskStatus}>Out for delivery</span>
          </div>
          <div className={styles.taskItem}>
            <span className={styles.taskId}>#PKG12346</span>
            <span className={styles.taskAddress}>Lalitpur, Nepal</span>
            <span className={styles.taskStatus}>Pending pickup</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;