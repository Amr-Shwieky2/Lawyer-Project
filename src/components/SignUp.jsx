import React, { useState } from 'react';
import "../pages/style/LogIn.css"
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth, db } from '../config/firebase-config';
import { collection, addDoc } from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom'; 

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useNavigate(); 

  const usersRef = collection(db, 'users');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        
        await addDoc(usersRef, {
          email,
          username,
        });

        // Redirect to the 'Specialty' page
        history('/Specialty');
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="form">
      <h3>Sign Up</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className ="bun" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUpForm;
