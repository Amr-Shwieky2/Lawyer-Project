import React, { useState } from 'react';
import './LogIn.css';
import SignInForm from '../../components/SignIn/SignIn';
import SignUpForm from '../../components/SignUp/SignUp';
import ToggleForm from '../../components/ToggleForm/ToggleForm'; 

function LogIn() {
  const [account, setAccount] = useState(true);
  

  return (
    <div className="LogIn-page">
      <div className='title-login'>
        <h1>IF YOU ARE A LAWYER, YOU SHOULD HAVE AN ACCOUNT</h1>
      </div>
      <form className="login-form">
        
          {account ? (
            <SignInForm />
          ) : (
            <SignUpForm />
          )}
          <ToggleForm login={account} setLogin={setAccount} />
        
      </form>
    </div>
  );
}

export default LogIn;
