// frontend/src/components/RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import gameScreenshot from '../assets/images/game-screenshot.jpeg';
import jdSuccess from '../assets/images/jd.gif';
import formIcon from '../assets/images/trico.gif';
import usePageBodyClass from '../hooks/usePageBodyClass';

const RegisterForm = () => {
  usePageBodyClass('register-page'); // Add `home-page` class to <body>

  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '',
    gender: '', 
    country: '',
    adminToken: '' 
  });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiBaseUrl}/users/register`, formData)
      
      if (response.data.success) {
        setMessage(
          <>
            <img src={jdSuccess} alt="Jd success message gif" />
            <span>Congratulations! Your account has been created successfully! 🎉</span>
          </>
        );
      } else {
        setMessage('An unexpected error occurred. Please try again.');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Server error occurred. Please try again later.';
      setMessage(errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className='register'>
      <div className='register-column'>
        <div className="register-form-container">
          <header>
            <div className="get-started-title">
              <h1 className='heading'>Get started</h1>
              <img src={formIcon} alt="" />
            </div>
            <h2 className="subheading">Create a new account</h2>
          </header>
          <form onSubmit={handleSubmit}>
            <div className='form-block'>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-block' style={{ position: 'relative' }}>
              <label>Password</label>
              <div className="pwd-block">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className='form-block'>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-block'>
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className='form-block'>
              <label>Country</label>
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Peru">Peru</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="USA">USA</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div className='form-block'>
            <label>Admin registration</label>
              <input
                type="text"
                name="adminToken"
                value={formData.adminToken}
                onChange={handleChange}
                placeholder="Admin Token (Optional)"
              />
            </div>
            <button className='button' type="submit">Register</button>
          </form>
          {message && <div className="submit-message">{message}</div>}
        </div>
      </div>
      <aside>
        <div className="image-container">
          <img src={gameScreenshot} alt="screenshot of the room game" />
        </div>
      </aside>
    </div>
  );
};

export default RegisterForm;