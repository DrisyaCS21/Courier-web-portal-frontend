import React from 'react';
// Correct import paths based on your folder structure
import HeadOfficeDashboard from '../components/dashboards/HeadOfficeDashboard';
import RiderDashboard from '../components/dashboards/RiderDashboard';
import ManagerDashboard from '../components/dashboards/ManagerDashboard';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import VendorDashboard from '../components/dashboards/VendorDashboard';

const Dashboard = ({ role, onLogout }) => {
  const renderRoleDashboard = () => {
    switch(role?.toLowerCase()) {
      case 'head office':
        return <HeadOfficeDashboard onLogout={onLogout} />;
      case 'rider':
        return <RiderDashboard onLogout={onLogout} />;
      case 'manager':
        return <ManagerDashboard onLogout={onLogout} />;
      case 'admin':
        return <AdminDashboard onLogout={onLogout} />;
      case 'vendor':
        return <VendorDashboard onLogout={onLogout} />;
      default:
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Welcome to Your Dashboard</h2>
            <p>You have successfully logged in as <strong>{role || 'User'}</strong></p>
            <button 
              onClick={onLogout}
              style={{
                padding: '0.8rem 1.5rem',
                background: 'transparent',
                color: '#e74c3c',
                border: '2px solid #e74c3c',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        );
    }
  };

  return renderRoleDashboard();
};

export default Dashboard;