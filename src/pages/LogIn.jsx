import React, { useState } from 'react';
import './style/LogIn.css';
import { auth, db } from '../config/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [login, setLogin] = useState(true);
  const history = useNavigate();
  const usersRef = collection(db, 'users');

  const getEmailByUsername = async () => {
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const userData = doc.data();
      return userData.email;
    } else {
      throw new Error("Username not found");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const email = await getEmailByUsername();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      history('/Dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(usersRef, {
          email,
          username,
        });
        history('/Specialty');
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert('Passwords do not match');
    }
   
  };

  return (
    <div className="LogIn-page">
      <div className="form background">
        <form className="login-form">
          <div className="form-content">
            <h3>{login ? 'Sign In' : 'Sign Up'}</h3>
  
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
  
            {!login && (
              <>
                <label htmlFor="email">Email</label>
                <input
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            )}
  
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
  
            {!login && (
              <>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </>
            )}
  
            <button
              className="bun"
              type="button"
              onClick={login ? handleSignIn : handleSignUp}
            >
              {login ? 'Sign In' : 'Sign Up'}
            </button>
  
            {login ? (
              <button
                className="bun"
                type="button"
                onClick={() => setLogin(false)}
              >
                Create a new account
              </button>
            ) : (
              <button
                className="bun"
                type="button"
                onClick={() => setLogin(true)}
              >
                Already have an account?
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}  

export default LogIn;
