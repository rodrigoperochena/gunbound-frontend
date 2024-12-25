// src/routes/AppRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import NoLastSeenLayout from '../components/NoLastSeenLayout';
import Home from '../pages/Home';
import RegisterForm from '../pages/RegisterForm';
import Instructions from '../pages/Instructions';
import PlayerList from '../pages/PlayerList';
import PlayerDetails from '../pages/PlayerDetails';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Layout with LastSeenUsers */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="users" element={<PlayerList />} />
        <Route path="users/:id" element={<PlayerDetails />} />
      </Route>
      
      {/* Custom Layout without LastSeenUsers */}
      <Route path="/instructions" element={<NoLastSeenLayout />}>
        <Route index element={<Instructions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;