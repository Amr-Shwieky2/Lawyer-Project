import React from 'react';
import "../pages/style/Home.css";
import "./style/HeroSection.css"

function LawyerItem({ OfficeName, Address, specialty, Experience, email, setShowRequest }) {
  return (
    <>
      <div className="card">
        <h2>Name: {OfficeName}</h2>
        <h4>Address: {Address}</h4>
        <h4>SPECIALTY OF THE LAWYER :</h4>
        {specialty && specialty.map((category) => (
          <h5 key={category}>{category}</h5>
        ))}
        <h5>Experience: {Experience}</h5>
        <button className ='home-btn' onClick={() => setShowRequest(email)}>Request Callback</button>
      </div>
    </>
  );
}

export default LawyerItem;
