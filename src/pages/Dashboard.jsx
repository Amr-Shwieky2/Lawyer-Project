import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import './style/Dashboard.css';
import '../components/style/HeroSection.css';
import '../pages/style/Home.css';
import Admin from '../components/Admin';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [Users, setUsers] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const history = useNavigate();
  const usersRef = collection(db, 'users');

  useEffect(() => {
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
  
    const fetchData = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
          setUser(authUser);
          setEmail(capitalizeFirstLetter(authUser.email));
  
          try {
            const data = await getDocs(usersRef);
            const usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(usersData);
  
            const foundUser = usersData.find((user) => user.email === email);
            if (foundUser) {
              setUsername(foundUser.username);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        } else {
          history('/logIn');
        }
      });
  
      return () => unsubscribe();
    };
  
    fetchData();
  }, [history, email, usersRef]);

  const handleChangePassword = async () => {
    if (newPassword === confirmPassword) {
      if (newPassword) {
        try {
          const currentUser = auth.currentUser;
          await currentUser.updatePassword(newPassword);
          alert('Password changed successfully');
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert('Please enter a new password');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      history('/logIn');
    });
  };

  return (
    <>
      <div className="container">
        <div className="side">
          <h1 className="title">Dashboard</h1>
          <p className="greeting">Welcome, {username ? username : 'Guest'}!</p>
          <input
            className="input"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="btn">
            <button className="home-btn" onClick={handleSignOut}>
              Sign Out
            </button>
            <button className="home-btn" onClick={handleChangePassword}>
              Change Password
            </button>
          </div>
        </div>
      </div>
      {username === 'admin' && <Admin />}
  </>
  );
};

export default Dashboard;
