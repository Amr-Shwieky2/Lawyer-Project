import React from 'react';
import { Link } from 'react-router-dom';
import "./style/HeroSection.css";

function HeroSection() {
  return (
    <section id="main">
      <div className='content'>
        <h1>YOU DESERVE THE BEST DEFENSE LAWYER</h1>
        <button className="home-btn">
          <Link to="/Customer">
            KNOW MORE <i className="fas fa-chevron-right"></i>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
