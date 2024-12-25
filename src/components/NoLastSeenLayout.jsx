// src/components/NoLastSeenLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const NoLastSeenLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Breadcrumbs />
        <Outlet /> {/* Content of the specific route */}
      </main>
      <Footer />
    </div>
  );
};

export default NoLastSeenLayout;