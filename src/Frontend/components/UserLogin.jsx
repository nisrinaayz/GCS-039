import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css'; // Importing a new CSS file for styling
import axios from 'axios'; // Import axios for making API calls

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      setMessage('Login successful!');
      // Store the token if needed
      navigate('/dashboard'); // Redirect to dashboard page
    } catch (error) {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
