import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import the CSS file
import ProductListing from './components/ProductListing';
import ContactUsForm from './components/ContactUsForm'; // Import the Contact Us form
import UserLogin from './components/UserLogin'; // Import UserLogin component
import UserRegistration from './components/UserRegistration'; // Import UserRegistration component

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="app-container">
      <h1 className="welcome-text">Welcome to<br />PASAR ONLINE!</h1>
      <div className="profile-container">
        <div style={{ width: '40px', height: '40px', backgroundColor: 'blue' }} onClick={toggleDropdown}></div>
        {showDropdown && (
          <div className="dropdown-menu">
            <Link to="/login" className="dropdown-item">Login</Link>
            <Link to="/register" className="dropdown-item">Register</Link>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegistration />} />
      </Routes>
      <ProductListing />
    </div>
  );
};

export default App;
