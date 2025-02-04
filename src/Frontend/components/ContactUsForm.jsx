import React, { useState } from 'react';
import './UserForm.css'; // Importing the existing CSS file for styling

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                title: '',
                message: ''
            });
        } else {
            alert('Failed to send message.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Contact Customer Support</h2>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
                <label>Reason for Contact</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Contact Us</button>
        </form>
    );
};

export default ContactUsForm;
