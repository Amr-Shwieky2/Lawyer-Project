import React from 'react';
import "../../pages/Home/Home.css"
import "../../pages/Specialty/Specialty.css"

function ServiceCard({ service, selectedOptions, handleOptionSelect }) {
  return (
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
  );
}

export default ServiceCard;
