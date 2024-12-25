// frontend/src/components/Header.jsx
import React from 'react';
import logo from '../assets/images/raon-vehicle.png';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='site-header'>
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="Raon launcher" />
          <div className="logo-text">
            <h1 className='site-title'>Gunbound</h1>
            <h2 className="site-subtitle">Thor's Hammer 🚀</h2>
          </div>
        </a>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
