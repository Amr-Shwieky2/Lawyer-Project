import React from 'react';
import "../../pages/Home/Home.css";
import LawyerItem from './../LawyerItem/LawyerItem';

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
