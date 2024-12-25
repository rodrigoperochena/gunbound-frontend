// src/routes/AppRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import RegisterForm from '../pages/RegisterForm';
import Instructions from '../pages/Instructions';
import PlayerList from '../pages/PlayerList';
import PlayerDetails from '../pages/PlayerDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="users" element={<PlayerList />} />
        <Route path="users/:id" element={<PlayerDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;