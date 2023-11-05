import React from 'react';
import "./About.css";
import "../../pages/Home/Home.css";
import { BiColumns, BiSolidLandmark } from "react-icons/bi";
import { GoCodeOfConduct, GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';

const data = [
  {
    icon: <BiColumns />,
    count: 2286,
    label: "Solved cases",
  },
  {
    icon: <GoPerson />,
    count: 20,
    label: "Staff Members",
  },
  {
    icon: <BiSolidLandmark />,
    count: 15,
    label: "Partners Linked",
  },
  {
    icon: <GoCodeOfConduct />,
    count: 2500,
    label: "Happy Clients",
  },
];

function About() {
  return (
    <>
      <section id="about">
        <div className="Company">
          <img src="/image/lawyer.jpg" alt="lawyer" /> 
          <div>
            <div className="horizontal-line"></div> 
            <h1 style={{ color: "white" }}>
              AT GOLDENBLATT, WE'RE DRIVEN BY THE SHARED VISION OF SUCCESS, NOT FEES.
            </h1>
            <Link style={{ textDecoration: "none" }} to="/">
              <h5 className="btn-gld">
                KNOW MORE <i className="fas fa-chevron-right"></i> 
              </h5>
            </Link>
          </div>
        </div>

        <div className='data-icon'>
          {data.map((item, index) => (
            <div className='data-item' key={index}>
              <h1 id='icon'>{item.icon}</h1> 
              <h1>{item.count}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About;
