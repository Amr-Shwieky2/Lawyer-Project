import React from 'react';
import '../../pages/Dashboard/Dashboard.css'

function SignOutButton({handleSignOut}) {
  return (
    <button className="dashboard-btn" onClick={handleSignOut}>
      Log Out
    </button>
  );
}

export default SignOutButton;
