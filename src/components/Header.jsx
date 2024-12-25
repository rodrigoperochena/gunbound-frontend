// frontend/src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className='site-header'>
      <div className="container">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="Raon launcher" />
          <div className="logo-text">
            <h1 className='site-title'>Gunbound.1</h1>
            <h2 className="site-subtitle">Thor's Hammer Version 🚀</h2>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
