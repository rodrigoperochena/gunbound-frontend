// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import OnlineUsers from './components/OnlineUsers';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/online-users" element={<OnlineUsers />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;