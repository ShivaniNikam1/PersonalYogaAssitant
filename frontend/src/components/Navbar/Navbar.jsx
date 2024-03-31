import { useState, useEffect } from 'react';
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Blogs from '../Blogs/Blogs';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      setIsLoggedIn(true);
      axios.get('http://127.0.0.1:5000/api/userData', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, []);

  const renderUserInfo = () => {
    if (isLoggedIn) {
      return (
        <div className="user-info">
          {userData && <span>Hello, {userData.name}</span>}
        </div>
      );
    } else {
      return (
        <div className="user-info">
          <button className="login-button" onClick={() => { window.location.href = "/login"; }}>Login</button>
          <button className="register-button" onClick={() => { window.location.href = "/register"; }}>Register</button>
        </div>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <a href="/">Yoga Assistant</a>
        </div>
        <div className="navbar-links">
          <a href="/home">Home</a>
          <a href="/poses">Poses</a>
          <a href="/practice">Practice</a>
          <Link to='/blogs'>Blogs</Link>
        </div>
        {renderUserInfo()}
      </div>
    </nav>
  );
};

export default Navbar;
