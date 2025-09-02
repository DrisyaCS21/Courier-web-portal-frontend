import React, { useState } from 'react';

const Dashboard = () => {
  // Sample data for the dashboard
  const [dashboardData] = useState({
    activeShipments: 12,
    delivered: 45,
    pending: 7,
    recentActivities: [
      'Package #1234 delivered successfully',
      'New shipment created #5678',
      'Package #9012 out for delivery',
      'Payment received for shipment #3456',
      'Package #7890 arrived at sorting facility'
    ]
  });

  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome back, User!</h1>
        <p>Here's your shipping overview</p>
      </div>
      
      <div className="stats">
        <div className="stat-card">
          <h3>Active Shipments</h3>
          <p className="stat-number">{dashboardData.activeShipments}</p>
        </div>
        <div className="stat-card">
          <h3>Delivered</h3>
          <p className="stat-number">{dashboardData.delivered}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p className="stat-number">{dashboardData.pending}</p>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {dashboardData.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn">Create New Shipment</button>
          <button className="action-btn">Track Package</button>
          <button className="action-btn">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;