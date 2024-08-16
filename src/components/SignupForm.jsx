
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    roles: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      console.log('User registered:', response.data);
      // Aquí podrías almacenar el token o redirigir al usuario
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />
      </div>
      <div>
        <label>Roles (opcional):</label>
        <input type="text" name="roles" onChange={handleChange} placeholder="Ej: admin,user" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
