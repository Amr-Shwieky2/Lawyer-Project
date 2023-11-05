import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth, db } from '../../config/firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom'; 
import "../../pages/LogIn/LogIn.css"

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <div className='form'>
      <h3>Sign In</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='bun' onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignInForm;
