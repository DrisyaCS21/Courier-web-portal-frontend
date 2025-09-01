import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const systemStats = {
    totalUsers: 45,
    activeUsers: 38,
    totalPackages: 1245,
    systemUptime: '99.9%',
    revenue: 450000
  };

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.header}>
        <h1>Admin Dashboard</h1>
        <div className={styles.adminControls}>
          <button className={styles.adminBtn}>User Management</button>
          <button className={styles.adminBtn}>System Settings</button>
          <button className={styles.adminBtn}>Database Backup</button>
        </div>
      </div>

      <div className={styles.systemOverview}>
        <h2>System Overview</h2>
        <div className={styles.systemGrid}>
          <div className={styles.systemCard}>
            <h3>Total Users</h3>
            <div className={styles.systemValue}>{systemStats.totalUsers}</div>
          </div>
          <div className={styles.systemCard}>
            <h3>Active Users</h3>
            <div className={styles.systemValue}>{systemStats.activeUsers}</div>
          </div>
          <div className={styles.systemCard}>
            <h3>Total Packages</h3>
            <div className={styles.systemValue}>{systemStats.totalPackages}</div>
          </div>
          <div className={styles.systemCard}>
            <h3>System Uptime</h3>
            <div className={styles.systemValue}>{systemStats.systemUptime}</div>
          </div>
          <div className={styles.systemCard}>
            <h3>Total Revenue</h3>
            <div className={styles.systemValue}>Rs. {systemStats.revenue}</div>
          </div>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h2>Recent Activity</h2>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <span>New user registered - Vendor "ABC Store"</span>
            <span>2 minutes ago</span>
          </div>
          <div className={styles.activityItem}>
            <span>Package #PKG12345 delivered successfully</span>
            <span>15 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;