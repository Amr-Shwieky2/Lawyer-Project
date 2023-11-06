import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import '../../components/HeroSection/HeroSection.css';
import '../Home/Home.css';
import { useUserData } from '../../hooks/useUserData';
import { usePasswordChange } from '../../hooks/usePasswordChange';
import { useSignOut } from '../../hooks/useSignOut';
import UserGreeting from './../../components/UserGreeting/UserGreeting';
import PasswordSection from './../../components/PasswordSection/PasswordSection';
import SignOutButton from './../../components/SignOutButton/SignOutButton';
import Admin from './../../components/Admin/Admin';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';


const Dashboard = () => {
  const { user, username, email } = useUserData();
  const clientRequestRef = collection(db, 'RequestLawyer');
  const [clientData, setClientData] = useState([]);

  const makeFirstLetterLowerCase = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const tempData = await getDocs(clientRequestRef);
      const tempClientData = tempData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const filteredClientData = tempClientData.filter((data) => makeFirstLetterLowerCase(data.LawyerEmail) === email);
      setClientData(filteredClientData);
      console.log(clientData);
    };

    fetchData();
  }, []);

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
    <>
      <div className="container">
        <div className="side">
          <h1 className="title">Dashboard</h1>
          <UserGreeting user={user} username={username} />
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
          <SignOutButton handleSignOut={handleSignOut} />
        </div>
      </div>
      {username === 'admin' && <Admin />}
    </>
  );
};

export default Dashboard;