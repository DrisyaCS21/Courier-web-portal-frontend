// App.jsx
import React from 'react';
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
                <Login />
              </AuthLayout>
            } 
          />
          <Route 
            path="/register" 
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <DashboardLayout>
                <Dashboard />
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