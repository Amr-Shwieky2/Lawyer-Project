import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import ConfirmPassword from '../ConfirmPassword/ConfirmPassword';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const history = useNavigate();

  const usersRef = collection(db, 'users');

  

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (isPasswordMatch) {
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
      <ConfirmPassword
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        titleInput1="Password"
        titleInput2="Confirm Password"
        setPasswordError={setPasswordError}
        setIsPasswordMatch={setIsPasswordMatch}
        password={password}
        confirmPasswordValue={confirmPassword}
        setPasswordValue={setPassword}
        setConfirmPasswordValue={setConfirmPassword}
      />
      {passwordError && <div className="error-message">{passwordError}</div>}
      <button className="bun" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUpForm;
