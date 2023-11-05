import React, { useState } from 'react';
import { Services,  inputFields } from '../../data';
import '../../pages/Home/Home.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import '../../components/CallbackForm/CallbackForm.css';
import './Specialty.css';
import '../Home/Home.css';
import '../../components/About/About.css';

function Specialty() {
  const LawyerDataRef = collection(db, 'LawyerData');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [LawyerInf, setLawyerInf] = useState({
    OfficeName: '',
    email: '',
    phone: '',
    Fax: '',
    Address: '',
    Website: '',
    Experience: '',
    specialty: [],
  });
  const navigate = useNavigate();

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      const updatedOptions = selectedOptions.filter((item) => item !== option);
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLawyerInf((prevLawyerInf) => ({
      ...prevLawyerInf,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(LawyerDataRef, {
        ...LawyerInf,
        specialty: selectedOptions,
        phone: Number(LawyerInf.phone),
      });

      setLawyerInf({
        OfficeName: '',
        email: '',
        phone: '',
        Fax: '',
        Address: '',
        Website: '',
        Experience: '',
        specialty: [],
      });

      navigate('/');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form:', error);
    }
  };

  
  return (
    <>
      <section className="Lawyer-inf">
        <h1 className="center">WHAT IS YOUR SPECIALTY</h1>
        <div className="cards">
          {Services.data.map((service) => (
            <div className="card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h2>
                {service.title} 
                <input
                  type="checkbox"
                  value={service.category}
                  checked={selectedOptions.includes(service.category)}
                  onChange={() => handleOptionSelect(service.category)}
                  className="custom-checkbox"
                /> 
              </h2>
              
            </div>
          ))}
        </div>

        <div className="horizontal-line"></div>
        <div className="center">
          <div className="vl"></div>
        </div>
        
        <h1 className="center">WRITE YOUR INFORMATION</h1>
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
      </section>
    </>
  );
}

export default Specialty;