// layouts/DashboardLayout.jsx
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;