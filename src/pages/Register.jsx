import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobile: '',
    confirmPassword: '',
    role: '',
    accountType: 'individual',
    privacy: false
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Register button clicked!');
    
    // SIMPLE NAVIGATION - Remove this later when you add real auth
    navigate('/dashboard', { state: { role: registerData.role || 'user' } });
  };

  const goToLogin = (e) => {
    e.preventDefault();
    console.log('Login link clicked!');
    navigate('/login');
  };

  return (
    <RegistrationForm 
      registerData={registerData} 
      setRegisterData={setRegisterData} 
      handleRegister={handleRegister} 
      goToLogin={goToLogin} 
    />
  );
};

export default Register;