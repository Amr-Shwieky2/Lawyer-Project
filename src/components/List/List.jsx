import React from 'react';
import './List.css'; 
import LawyerItem from '../LawyerItem/LawyerItem';

function List({ items, setShowRequest }) {
  return (
    <div className="lawyer-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Specialties</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map((item) => (
            <LawyerItem key={item.id} {...item} setShowRequest={setShowRequest} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
