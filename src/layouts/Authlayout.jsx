// layouts/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Courier Service</h1>
          <p>Fast and reliable delivery solutions</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;