import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import ProductListing from './components/ProductListing';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard'; // Import Dashboard
import ContactUsForm from './components/ContactUsForm'; // Import Contact Us form

const root = createRoot(document.getElementById('root')); // Create root

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* New route for Dashboard */}
        <Route path="/contact" element={<ContactUsForm />} /> {/* New route for Contact Us */}
      </Routes>
    </Router>
  </React.StrictMode>
);
