import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import '../../components/HeroSection/HeroSection.css';
// import '../Home/Home.css';
import { useUserData } from '../../hooks/useUserData';
import { usePasswordChange } from '../../hooks/usePasswordChange';
import { useSignOut } from '../../hooks/useSignOut';
import UserGreeting from './../../components/UserGreeting/UserGreeting';
import PasswordSection from './../../components/PasswordSection/PasswordSection';
import SignOutButton from './../../components/SignOutButton/SignOutButton';
import Admin from './../../components/Admin/Admin';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Dashboard = () => {
  const { user, username, email } = useUserData();
  const clientRequestRef = collection(db, 'RequestLawyer');
  const [clientData, setClientData] = useState([]);
  const [showInputs, setShowInputs] = useState(false);

  const handleButtonClick = () => {
    setShowInputs(!showInputs);
  };
  

  const makeFirstLetterLowerCase = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const tempData = await getDocs(clientRequestRef);
      const tempClientData = tempData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(tempClientData);
      console.log(email);
      const filteredClientData = tempClientData.filter((data) => makeFirstLetterLowerCase(data.LawyerEmail) === email);
      setClientData(filteredClientData);
      console.log(clientData);
    };

    fetchData();
  }, [db, email]);

  const {
    confirmPassword,
    setConfirmPassword,
    password,
    setPassword,
    isPasswordMatch,
    setIsPasswordMatch,
    passwordError,
    setPasswordError,
    handleChangePassword,
  } = usePasswordChange();
  const handleSignOut = useSignOut();

  return (
    <div className='hero'>
      {username === 'admin' ? (
        <div className='dash-admin'>
          <Admin />
        </div>
      ) : (
        <div className='data'>
          <h1 className="center title-dash">ReCallback</h1>
          <div className="cards">
            {clientData ? (
              clientData.map((callback) => (
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
                    Done
                  </button>
                </div>
              ))
            ) : (
              <h1 className='title-dash'>YOU DO NOT HAVE ANY CLIENT</h1>
            )}
          </div>
        </div>
      )}

      <div className="container-dash">
        <div className="side">
          <h1 className="title-dash">Dashboard</h1>
          <UserGreeting user={user} username={username} />
          <div className="option-button-container">
            <button className={showInputs ? 'dashboard-btn' : 'dashboard-btn'} onClick={handleButtonClick}>
            {showInputs ? (
                <>
                  Hide Inputs <AiOutlineUp />
                </>
              ) : (
                <>
                  Change Password <AiOutlineDown />
                </>
              )}
            </button>
            {showInputs && (
              <PasswordSection
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                password={password}
                setPassword={setPassword}
                isPasswordMatch={isPasswordMatch}
                setIsPasswordMatch={setIsPasswordMatch}
                passwordError={passwordError}
                setPasswordError={setPasswordError}
                handleChangePassword={handleChangePassword}
              />
            )}
          </div>  
          <SignOutButton handleSignOut={handleSignOut} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;