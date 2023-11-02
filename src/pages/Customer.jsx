import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Services } from '../data';
import List from '../components/List';
import { db } from '../config/firebase-config';
import Categories from '../components/Categories';
import "./style/Specialty.css"

function Customer() {
    const ApprovedRef = collection(db, 'ApprovedOnSite');
    const [ListItems, setListItems] = useState([]); // This is the data coming from Firebase
    const [ListLawyers, setListLawyers] = useState([]); // This is the data that you want to filter
    const [categories, setCategories] = useState(['all']); 

    useEffect(() => {
        const getCallbackData = async () => {
            try {
                const tempData = await getDocs(ApprovedRef);
                setListItems(tempData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                setListLawyers(ListItems);

            } catch (error) {
                // Handle any potential errors here
                console.error('Error fetching data from Firebase:', error);
            }
        };

        getCallbackData();

        
        setCategories(['all', ...Services.data.map((item) => item.category)]);
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
                    break; // Use break to exit the inner loop when a match is found
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
            {/* <div className="cards">
                {ListLawyers.map((lawyer) => (
                <div className="card" key={lawyer.id}>
                    <h2>Name: {lawyer.OfficeName}</h2>
                    <h3>Email: {lawyer.email}</h3>
                    <h3>Phone: {lawyer.phone}</h3>
                    <h3>Fax: {lawyer.Fax}</h3>
                    <h4>Address: {lawyer.Address}</h4>
                    <h4>Website: {lawyer.Website} </h4>
                    <div>
                    <h4>SPECIALTY OF THE LAWYER :</h4>
                    {lawyer.specialty.map((category) => (
                        <h5 key={category}>{category}</h5>
                        ))}
                    </div>
                    <h6>Experience: {lawyer.Experience}</h6>
                </div>
                ))}
            </div> */}
        </>
    );
}

export default Customer;
