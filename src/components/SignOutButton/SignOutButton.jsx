import React from 'react';

function SignOutButton({handleSignOut}) {
  return (
    <button className="home-btn" onClick={handleSignOut}>
      Log Out
    </button>
  );
}

export default SignOutButton;
