import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { Services } from '../../data';
import '../Specialty/Specialty.css';
import CallbackForm from './../../components/CallbackForm/CallbackForm';
import Categories from './../../components/Categories/Categories';
import List from './../../components/List/List';

const allCategories = ['all', ...Services.data.map((item) => item.category)];

function Customer() {
  // State
  const [listItems, setListItems] = useState([]);
  const [listLawyers, setListLawyers] = useState(listItems);
  const [categories, setCategories] = useState(allCategories);
  const [showRequest, setShowRequest] = useState(null);

  // Firestore reference
  const approvedRef = collection(db, 'ApprovedOnSite');

  // Fetch data from Firebase
  useEffect(() => {
    const getCallbackData = async () => {
      try {
        const tempData = await getDocs(approvedRef);
        setListItems(tempData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    getCallbackData();
  }, [approvedRef]);

  // Filter items by category
  const filterItems = (category) => {
    if (category === 'all') {
      setListLawyers(listItems);
    } else {
      const newItems = lawyersByCategory(category);
      setListLawyers(newItems);
    }
  };

  // Filter lawyers by category
  const lawyersByCategory = (category) => {
    const newList = [];
    for (let i = 0; i < listItems.length; i++) {
      for (let j = 0; j < listItems[i].specialty.length; j++) {
        if (category === listItems[i].specialty[j]) {
          newList.push(listItems[i]);
          break;
        }
      }
    }
    return newList;
  };

  return (
    <>
      {showRequest ? (
        <div className='Lawyer-inf'>
          <CallbackForm user={showRequest} />
        </div>
      ) : (
        <div className='Lawyer-inf'>
          <Categories categories={categories} filterItems={filterItems} />
          <List items={listLawyers} setShowRequest={setShowRequest} />
        </div>
      )}
    </>
  );
}

export default Customer;
