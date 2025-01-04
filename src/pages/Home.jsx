// frontend/src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import usePageBodyClass from '../hooks/usePageBodyClass';
import banner from '../assets/images/thors-hammer.png';

const Home = () => {
  usePageBodyClass('home-page'); // Add `home-page` class to <body>

  return (
    <div className="home">
      <div className='container'>
        <div className="banner">
          <img src={banner} alt="thors hammer version image" />
          <h3 className="heading">is back! <span>😎</span></h3>
        </div>
        <div className="cta-buttons">
        <Link to='/instructions' className='button'>How to join</Link>
        <Link to='/register' className='button'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;