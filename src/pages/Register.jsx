import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Register = ({ onRegister }) => {
  return <RegistrationForm onRegister={onRegister} />;
};

export default Register;