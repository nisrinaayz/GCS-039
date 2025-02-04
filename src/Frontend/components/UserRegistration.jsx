import React, { useState } from 'react';
import './UserForm.css'; // Importing a new CSS file for styling
import axios from 'axios'; // Import axios for making API calls

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setMessage('Registration successful!');
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
