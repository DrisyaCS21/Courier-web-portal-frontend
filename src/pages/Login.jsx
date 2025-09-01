import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login button clicked!');
    
    // SIMPLE NAVIGATION - Remove this later when you add real auth
    navigate('/dashboard', { state: { role: 'user' } });
  };

  const goToRegister = (e) => {
    e.preventDefault();
    console.log('Register link clicked!');
    navigate('/register');
  };

  return (
    <LoginForm 
      loginData={loginData} 
      setLoginData={setLoginData} 
      handleLogin={handleLogin} 
      goToRegister={goToRegister} 
    />
  );
};

export default Login;