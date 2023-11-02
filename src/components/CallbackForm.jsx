import React, { useEffect, useState } from 'react';
import './style/CallbackForm.css';
import './style/HeroSection.css';
import { db } from '../config/firebase-config.js';
import { collection, getDocs, addDoc } from 'firebase/firestore'; // Added addDoc for writing data

function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: Number,
    subject: '',
    description: '',
  });

  const CallbackDataRef = collection(db, 'Callback');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the form data to the Firestore collection
      await addDoc(CallbackDataRef, formData);

      // Clear the form fields after submission
      setFormData({
        name: '',
        email: '',
        contactNumber: Number,
        subject: '',
        description: '',
      });

    } catch (error) {
      alert('Error submitting the form:', error);
    }
  };

  return (
    <div className="callback-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button className="home-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CallbackForm;
