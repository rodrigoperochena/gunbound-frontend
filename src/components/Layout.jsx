// frontend/src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import LastSeenUsers from './LastSeenUsers';
import Breadcrumbs from './Breadcrumbs';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Breadcrumbs />
        <Outlet /> {/* Content of the specific route */}
        <LastSeenUsers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
