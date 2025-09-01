import styles from './Dashboard.module.css'
import HeadOfficeDashboard from '../dashboards/HeadOfficeDashboard'
import RiderDashboard from '../dashboards/RiderDashboard'
import ManagerDashboard from '../dashboards/ManagerDashboard'
import AdminDashboard from '../dashboards/AdminDashboard'
import VendorDashboard from '../dashboards/VendorDashboard'

const Dashboard = ({ role, onLogout }) => {
  const renderRoleDashboard = () => {
    switch(role.toLowerCase()) {
      case 'head office':
        return <HeadOfficeDashboard />;
      case 'rider':
        return <RiderDashboard />;
      case 'manager':
        return <ManagerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'vendor':
        return <VendorDashboard />;
      default:
        return (
          <section className={styles.dashboard}>
            <div className="container">
              <h2>Welcome to Your Dashboard</h2>
              <p>You have successfully logged in as <span className={styles.role}>{role}</span></p>
              <button className="btn btn-outline" onClick={onLogout}>Logout</button>
            </div>
          </section>
        );
    }
  };

  return (
    <>
      {renderRoleDashboard()}
    </>
  )
}

export default Dashboard