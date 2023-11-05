import React from 'react';
import { inputFields } from '../../data';
import "../../pages/Specialty/Specialty.css"
import "../HeroSection/HeroSection.css"

function InformationForm({ LawyerInf, handleChange, handleSubmit }) {
  return (
    <div className="specialty-form">
      <form onSubmit={handleSubmit}>
        <div className="specialty-group">
          {inputFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={LawyerInf[field.name]}
              onChange={handleChange}
              required={field.name !== 'Fax' && field.name !== 'Address' && field.name !== 'Website'}
            />
          ))}
        </div>
        <textarea
          name="Experience"
          placeholder="Experience"
          value={LawyerInf.Experience}
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

export default InformationForm;
