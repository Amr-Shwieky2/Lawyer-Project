import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Services } from '../data';
import List from '../components/List';
import { db } from '../config/firebase-config';
import Categories from '../components/Categories';
import "./style/Specialty.css"
const allCategories = ['all', ...Services.data.map((item) => item.category)];

function Customer() {
    const ApprovedRef = collection(db, 'ApprovedOnSite');
    const [ListItems, setListItems] = useState([]); // This is the data coming from Firebase
    const [ListLawyers, setListLawyers] = useState(ListItems); // This is the data that you want to filter
    const [categories, setCategories] = useState(allCategories); 

    useEffect(() => {
        const getCallbackData = async () => {
            try {
                const tempData = await getDocs(ApprovedRef);
                setListItems(tempData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            } catch (error) {
                console.error('Error fetching data from Firebase:', error);
            }
        };

        getCallbackData();
        
    }, []);

    const filterItems = (category) => {
        if (category === 'all') {
            setListLawyers(ListItems);

        } else {
            const newItems = LawyersByCategory(category);
            setListLawyers(newItems);
        }
    };

    const LawyersByCategory = (category) => {
        const newList = [];
        for (let i = 0; i < ListItems.length; i++) {
            for (let j = 0; j < ListItems[i].specialty.length; j++) {
                if (category === ListItems[i].specialty[j]) {
                    newList.push(ListItems[i]);
                    break; 
                }
            }
        }
        return newList;
    }

    return (
        <>
            <div className='Lawyer-inf'>
                <Categories categories={categories} filterItems={filterItems}/>
                <List items={ListLawyers}/>
            </div>
            
        </>
    );
}

export default Customer;
