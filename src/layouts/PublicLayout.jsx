import React from 'react';

const PublicLayout = ({ children }) => (
  <div className="layout public-layout">
    <header className="header">
      <h2>Courier Service</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
    <main>{children}</main>
  </div>
);

export default PublicLayout;