import React from 'react';
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


const Dashboard = () => {
  const { user, username, email } = useUserData();
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
