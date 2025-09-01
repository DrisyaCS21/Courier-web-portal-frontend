import styles from './VendorDashboard.module.css';

const VendorDashboard = () => {
  const vendorStats = {
    totalOrders: 45,
    pendingOrders: 5,
    deliveredOrders: 35,
    totalEarnings: 25000,
    averageRating: 4.5
  };

  return (
    <div className={styles.vendorDashboard}>
      <div className={styles.header}>
        <h1>Vendor Dashboard</h1>
        <div className={styles.vendorInfo}>
          <span>ABC Store</span>
          <span>⭐ {vendorStats.averageRating}</span>
        </div>
      </div>

      <div className={styles.statsOverview}>
        <h2>Business Overview</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Total Orders</h3>
            <div className={styles.statValue}>{vendorStats.totalOrders}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Pending Orders</h3>
            <div className={styles.statValue}>{vendorStats.pendingOrders}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Delivered Orders</h3>
            <div className={styles.statValue}>{vendorStats.deliveredOrders}</div>
          </div>
          <div className={styles.statCard}>
            <h3>Total Earnings</h3>
            <div className={styles.statValue}>Rs. {vendorStats.totalEarnings}</div>
          </div>
        </div>
      </div>

      <div className={styles.ordersSection}>
        <h2>Recent Orders</h2>
        <div className={styles.ordersList}>
          <div className={styles.orderItem}>
            <span>#ORD12345</span>
            <span>2 packages</span>
            <span className={styles.statusDelivered}>Delivered</span>
          </div>
          <div className={styles.orderItem}>
            <span>#ORD12346</span>
            <span>1 package</span>
            <span className={styles.statusPending}>Pending</span>
          </div>
        </div>
      </div>

      <div className={styles.quickActions}>
        <h2>Quick Actions</h2>
        <div className={styles.actionButtons}>
          <button className={styles.actionBtn}>
            <i className="fas fa-plus"></i>
            Create New Order
          </button>
          <button className={styles.actionBtn}>
            <i className="fas fa-file-invoice"></i>
            View Invoices
          </button>
          <button className={styles.actionBtn}>
            <i className="fas fa-chart-line"></i>
            Sales Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;