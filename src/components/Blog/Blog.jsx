import React from 'react';
import { VscQuote } from "react-icons/vsc";
import { teamData } from '../../data';
import "./Blog.css"; 

function Blog() {
  return (
    <section id='blog'>
      <div className='horizontal-line'></div> 
      <div className='cards_1'>
        {teamData.map((item, index) => (
          <div className='card' key={index}>
            <img src={item.image} alt={item.name} /> 
            <h1>{item.name}</h1>
            <h5>{item.role}</h5>
          </div>
        ))}
      </div>

      <div className='cont'>
        <div className='says'>
          <h1>WHAT OUR CLIENTS SAYS</h1> 
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus facere,
            voluptatum velit debitis ad dolores? Eos cupiditate eaque, modi quidem aliquid
            nesciunt, tenetur incidunt perferendis, vero ratione error consectetur recusandae
            alias fugit cum magnam. Eos exercitationem perspiciatis culpa voluptate aperiam.
          </p>
          <h4>Bernard Robert</h4>
          <div className='icon-btw'>
            <h1><VscQuote id='icon' /></h1> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
