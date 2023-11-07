import React from 'react';
import '../../pages/Dashboard/Dashboard.css'
function UserGreeting({ user, username }) {
  return (
    <p className="title-dash">Welcome, {user ? username : 'Guest'}!</p>
  );
}

export default UserGreeting;
