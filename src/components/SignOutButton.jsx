import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';

function SignOutButton({handleSignOut}) {

  return (
    <button className="home-btn" onClick={handleSignOut}>
      Log Out
    </button>
  );
}

export default SignOutButton;
