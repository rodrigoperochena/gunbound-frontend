// src/components/MobileNav.jsx
import React from "react";
import { Link } from 'react-router-dom';
import "../assets/scss/components/MobileNav.scss"; // Import SCSS for the navigation

const MobileNav = ({ isOpen }) => {
  return (
    <nav className={`mobile-nav ${isOpen ? "open" : "closed"}`}>
      <ul className="mobile-nav-menu nobullets">
        <li className="menu-item">
          <Link to='/' className='button'>Home</Link>
        </li>
        <li className="menu-item">
          <Link to='/how-to-join' className='button'>How to join</Link>
        </li>
        <li className="menu-item">
          <Link to='/register' className='button'>Register</Link>
        </li>
        <li className="menu-item">
          <Link to='/player-rankings' className='button'>Player Rankings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;