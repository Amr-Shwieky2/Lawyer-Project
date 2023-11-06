import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase-config';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from 'firebase/firestore';
import '../../pages/Dashboard/Dashboard.css';
import '../HeroSection/HeroSection.css';
import '../../pages/Home/Home.css';

function Admin() {
  const [updateData, setUpdateData] = useState(0);
  const [callbackData, setCallbackData] = useState([]);
  const [LawyerData, setLawyerData] = useState([]);
  const [ApprovedData, setApprovedData] = useState([]);
  const LawyerDataRef = collection(db, 'LawyerData');
  const CallbackDataRef = collection(db, 'Callback');
  const ApprovedRef = collection(db, 'ApprovedOnSite');

  useEffect(() => {
    const getCallbackData = async () => {
      const tempData1 = await getDocs(CallbackDataRef);
      const tempData2 = await getDocs(LawyerDataRef);
      const tempData3 = await getDocs(ApprovedRef);

      setCallbackData(tempData1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLawyerData(tempData2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setApprovedData(tempData3.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCallbackData();
  }, [updateData]);

  const deleteCallback = async (id) => {
    const callbackDoc = doc(db, 'Callback', id);
    await deleteDoc(callbackDoc);
    setUpdateData(updateData + 1);
  };

  const approveLawyer = async (id) => {
    const selectedLawyer = LawyerData.find((lawyer) => lawyer.id === id);
    try {
        await addDoc(ApprovedRef, selectedLawyer);

        const LawyerDataDoc = doc(db, 'LawyerData', id);
        await deleteDoc(LawyerDataDoc);
        setUpdateData(updateData + 1);

    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <h1 className="center title">Free Callback</h1>
      <div className="cards">
        {callbackData.map((callback) => (
          <div className="card" key={callback.id}>
            <h2>Name: {callback.name}</h2>
            <h3>Email: {callback.email}</h3>
            <h4>Phone: {callback.contactNumber}</h4>
            <h5>Subject: {callback.subject}</h5>
            <h6>Description: {callback.description}</h6>
            <button
              className="home-btn"
              onClick={() => {
                deleteCallback(callback.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <h1 className="center title">The New Lawyers</h1>
      <div className="cards">
        {LawyerData.map((lawyer) => (
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
            <button
              className="home-btn"
              onClick={() => {
                approveLawyer(lawyer.id);
              }}
            >
              Approve
            </button>
          </div>
        ))}
      </div>
      
      <h1 className="center title">Lawyers on the Site</h1>
      <div className="cards">
        {ApprovedData.map((lawyer) => (
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
      </div>
    </>
  );
}

export default Admin;
