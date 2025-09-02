import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout"> {/* This will NOT have background */}
      <div className="dashboard-container">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;