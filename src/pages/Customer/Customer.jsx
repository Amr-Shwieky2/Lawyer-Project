import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { Services } from '../../data';
import '../Specialty/Specialty.css';
import '../Home/Home.css';
import './Customer.css'
import CallbackForm from './../../components/CallbackForm/CallbackForm';
import Categories from './../../components/Categories/Categories';
import List from './../../components/List/List';

const allCategories = ['all', ...Services.data.map((item) => item.category)];

function Customer() {
  // State
  const [listItems, setListItems] = useState([]);
  const [listLawyers, setListLawyers] = useState([]);
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
  }, [db]);

  useEffect(() => {
    setListLawyers(listItems);
  }, [listItems]);

    // Filter items by category
    const filterItems = (category) => {
      console.log(category);
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
      // console.log(category);
      for (let i = 0; i < listItems.length; i++) {
        for (let j = 0; j < listItems[i].specialty.length; j++) {
          // console.log(listItems[i].specialty[j]);
          if (category === listItems[i].specialty[j]) {
            // console.log(listItems[i]);
            newList.push(listItems[i]);
            break;
          }
        }
      }
      if(newList){
        return newList;
      }else{
        return [];
      }
    };

  return (
    <>
      {showRequest ? (
          <div className='request-container'>
            <div className='Lawyer-info Lawyer-info1'>
              <h1 className="center">WRITE YOUR INFORMATION FOR THE LAWYER</h1>
              <CallbackForm user={showRequest} />
            </div>
          </div>
      ) : (
        <div className='Lawyer-info'>
          <div className='center'>
            <Categories categories={categories} filterItems={filterItems} />
          </div>
          <List items={listLawyers} setShowRequest={setShowRequest} />
        </div>
      )}
    </>
  );
}

export default Customer;
