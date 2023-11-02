import React from 'react';
import "../pages/style/LogIn.css"

function ToggleForm({ login, setLogin }) {
  return (
    <button className='bun' type="button" onClick={() => setLogin(!login)}>
      {login ? 'Create a new account' : 'Already have an account?'}
    </button>
  );
}

export default ToggleForm;
