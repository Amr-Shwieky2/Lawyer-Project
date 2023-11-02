import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  

  return (
    <nav className= "navbar top">
      <Link to="/">
        <img src="/image/logo.png" alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        {user ? (
          <>
            <li className="navbar-item">
              <Link to="/dashboard" className="link-item">
                Dashboard
              </Link>
            </li>
          </>
        ) : (
          <li className="navbar-item">
            <Link to="/logIn" className="link-item">
              Log In
            </Link>
          </li>
        )}
        <li className="navbar-item">
          <a href="#about" className="link-item">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#cases" className="link-item">
            Cases
          </a>
        </li>
        <li className="navbar-item">
          <a href="#blog" className="link-item">
            Blog
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="link-item">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
