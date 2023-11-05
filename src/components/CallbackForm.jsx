import React, { useEffect, useState } from 'react';
import './style/CallbackForm.css';
import './style/HeroSection.css';
import { db } from '../config/firebase-config.js';
import { collection, addDoc } from 'firebase/firestore'; // Added addDoc for writing data
import { initialFormData } from '../data';

function CallbackForm({user}) {
  const [formData, setFormData] = useState(initialFormData);
  const CallbackDataRef = collection(db, 'Callback');
  const RequestLawyerDataRef = collection(db, 'RequestLawyer');

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
      if(user === 'Guest'){
        await addDoc(CallbackDataRef, {
          ...formData,
          contactNumber: Number(formData.contactNumber),
        });
      }else{
        await addDoc(RequestLawyerDataRef, {
          ...formData,
          contactNumber: Number(formData.contactNumber),
          LawyerEmail: user,
        });
      }

      // Clear the form fields after submission
      setFormData(initialFormData);

    } catch (error) {
      alert('Error submitting the form:', error);
    }
  };

  function renderInput(type, name, placeholder) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required
      />
    );
  }
  
  return (
    <div className="callback-form">
      <form >
        <div className="form-group">
          {[
            { type: "text", name: "name", placeholder: "Name" },
            { type: "email", name: "email", placeholder: "Email Address" },
          ].map((input) => renderInput(input.type, input.name, input.placeholder))}
        </div>
        <div className="form-group">
          {[
            { type: "tel", name: "contactNumber", placeholder: "Contact Number" },
            { type: "text", name: "subject", placeholder: "Subject" },
          ].map((input) => renderInput(input.type, input.name, input.placeholder))}
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button className="home-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CallbackForm;