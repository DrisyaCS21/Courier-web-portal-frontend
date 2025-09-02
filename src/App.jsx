import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ForgotPasswordNotice from './pages/ForgotPasswordNotice';
import './App.css';

function App() {
  const [userRole, setUserRole] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleRegister = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUserRole('');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            } 
          />
          <Route 
            path="/login" 
            element={
              <AuthLayout>
                <Login onLogin={handleLogin} />
              </AuthLayout>
            } 
          />
          <Route 
            path="/register" 
            element={
              <AuthLayout>
                <Register onRegister={handleRegister} />
              </AuthLayout>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <DashboardLayout>
                <Dashboard role={userRole} onLogout={handleLogout} />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/forgot-password-notice" 
            element={
              <AuthLayout>
                <ForgotPasswordNotice />
              </AuthLayout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;