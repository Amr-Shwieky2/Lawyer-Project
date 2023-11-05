import React from 'react';
import LawyerItem from './LawyerItem';
import "../pages/style/Home.css";

function List({ items, setShowRequest }) {
  return (
    <div>
      <div className='cards'>
        {items && items.map((Item) => (
          <LawyerItem key={Item.id} {...Item} setShowRequest={setShowRequest} />
        ))}
      </div>
    </div>
  );
}


export default List;
