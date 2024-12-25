// frontend/src/components/RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import gameScreenshot from '../assets/images/game-screenshot.jpeg';
import headerIcon from '../assets/images/raon.png';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '',
    // confirmPassword: '',
    gender: '', 
    country: '' 
  });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('http://192.168.0.12:5000/api/users/register', formData);
      const response = await axios.post('https://formerly-large-man.ngrok-free.app/api/users/register', formData)
      setMessage(response.data.message)
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
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
              <img src={headerIcon} alt="" />
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
                placeholder="Admin Token (Optional)"
              />
            </div>
            <button className='button' type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
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