import React from 'react';
import { Services } from '../../data';
import { Link } from 'react-router-dom';
import "./Cases.css";
import "../../pages/Home/Home.css";

function Cases() {
    return (
      <section id="cases">
        <h2>ADVICE ON A FULL RANGE OF CORPORATE LAW MATTERS</h2>
        <div className="cards">
          {Services.data.map(service => (
            <div className="card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to="/">
                <h5 className="btn-gld">
                  KNOW MORE <i className="fas fa-chevron-right"></i>
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Cases;
