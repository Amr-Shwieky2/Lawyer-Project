import React from 'react';
import "../HeroSection/HeroSection.css"
import './LawyerItem.css'; 

function LawyerItem({ OfficeName, Address, specialty, Experience, email, setShowRequest }) {
  return (
    <tr>
      <td>{OfficeName}</td>
      <td>{Address}</td>
      <td>
        {specialty && specialty.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </td>
      <td>{Experience}</td>
      <td>
        <button className='home-btn' onClick={() => setShowRequest(email)}>Request Callback</button>
      </td>
    </tr>
  );
}

export default LawyerItem;
