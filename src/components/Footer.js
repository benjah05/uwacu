import './footerstyles.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
        <div className="footer-right">
          <a href="/" className="site-title">UWACU</a>
          <Link to='/AuthPage' style={{ textDecoration: 'none' }}>
            <div className="buttons">
                <button className="signup-login">Log In</button>
                <button className="signup-login">Sign Up</button>
            </div>
          </Link>
        </div>
      </div>
      <p className="copyright">&copy; 2025 Uwacu. All rights reserved.</p>
    </footer>
  );
};