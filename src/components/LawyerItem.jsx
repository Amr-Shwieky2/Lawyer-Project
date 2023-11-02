import React from 'react';
import "../pages/style/Home.css";

function LawyerItem({ OfficeName, Address, specialty, Experience }) {
  return (
    <>
      <div className="card">
        <h2>Name: {OfficeName}</h2>
        <h4>Address: {Address}</h4>
        <h4>SPECIALTY OF THE LAWYER :</h4>
        {specialty && specialty.map((category) => (
          <h5 key={category}>{category}</h5>
        ))}
        <h5>Experience:{Experience}</h5>
      </div>
    </>
  );
}

export default LawyerItem;
