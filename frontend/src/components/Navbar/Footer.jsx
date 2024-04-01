// Footer.jsx

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">Your Yoga Logo</h2>
            <p>
              Your Yoga Assist App helps you on your yoga journey by providing pose recommendations,
              posture corrections, and a community to share experiences.
            </p>
            <div className="contact">
              <span><i className="fas fa-phone"></i> 123-456-7890</span>
              <span><i className="fas fa-envelope"></i> info@youryoga.com</span>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/poses">Explore Poses</a></li>
              <li><a href="/blog">Yoga Blog</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Connect with Us</h2>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Yoga | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
