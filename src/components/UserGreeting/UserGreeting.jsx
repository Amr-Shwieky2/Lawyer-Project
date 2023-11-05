import React from 'react';

function UserGreeting({ user, username }) {
  return (
    <p className="greeting">Welcome, {user ? username : 'Guest'}!</p>
  );
}

export default UserGreeting;
