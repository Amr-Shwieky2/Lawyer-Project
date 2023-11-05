import React, { useState } from 'react';
import './LogIn.css';
import SignInForm from '../../components/SignIn/SignIn';
import SignUpForm from '../../components/SignUp/SignUp';
import ToggleForm from '../../components/ToggleForm/ToggleForm'; 

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
