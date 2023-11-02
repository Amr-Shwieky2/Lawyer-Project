import React, { useState } from 'react';
import './style/LogIn.css';
import SignInForm from '../components/SignIn';
import SignUpForm from '../components/SignUp';
import ToggleForm from '../components/ToggleForm'; 

function LogIn() {
  const [login, setLogin] = useState(true);
  

  return (
    <div className="LogIn-page">
      
        <form className="login-form">
          
            {login ? (
              <SignInForm />
            ) : (
              <SignUpForm />
            )}
            <ToggleForm login={login} setLogin={setLogin} />
          
        </form>
      
    </div>
  );
}

export default LogIn;
