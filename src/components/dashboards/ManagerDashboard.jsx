import styles from './ManagerDashboard.module.css';

const ManagerDashboard = () => {
  const teamStats = {
    totalRiders: 15,
    activeRiders: 12,
    totalDeliveries: 245,
    pendingDeliveries: 18,
    revenue: 125000
  };

  return (
    <div className={styles.managerDashboard}>
      <div className={styles.header}>
        <h1>Manager Dashboard</h1>
        <div className={styles.controls}>
          <button className={styles.controlBtn}>Generate Report</button>
          <button className={styles.controlBtn}>Manage Team</button>
        </div>
      </div>

      <div className={styles.overview}>
        <h2>Team Overview</h2>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewCard}>
            <h3>Total Riders</h3>
            <div className={styles.overviewValue}>{teamStats.totalRiders}</div>
          </div>
          <div className={styles.overviewCard}>
            <h3>Active Riders</h3>
            <div className={styles.overviewValue}>{teamStats.activeRiders}</div>
          </div>
          <div className={styles.overviewCard}>
            <h3>Total Deliveries</h3>
            <div className={styles.overviewValue}>{teamStats.totalDeliveries}</div>
          </div>
          <div className={styles.overviewCard}>
            <h3>Pending Deliveries</h3>
            <div className={styles.overviewValue}>{teamStats.pendingDeliveries}</div>
          </div>
          <div className={styles.overviewCard}>
            <h3>Revenue</h3>
            <div className={styles.overviewValue}>Rs. {teamStats.revenue}</div>
          </div>
        </div>
      </div>

      <div className={styles.teamPerformance}>
        <h2>Team Performance</h2>
        <div className={styles.performanceList}>
          <div className={styles.performanceItem}>
            <span>Binod Sunuwar</span>
            <span>25 deliveries</span>
            <span className={styles.performanceGood}>95% success</span>
          </div>
          <div className={styles.performanceItem}>
            <span>Rajesh Sharma</span>
            <span>18 deliveries</span>
            <span className={styles.performanceAverage}>85% success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;