// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Map route paths to labels
const pathToLabelMap = {
  '/': 'Home',
  '/register': 'Register',
  '/instructions': 'Instructions',
  '/users': 'Users',
  '/users/last-seen': 'Last Seen Users',
  '/users/:id': 'Player Details',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className='breadcrumb-nav' aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li
                key={to}
                className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                aria-current={isLast ? 'page' : undefined}
              >
                {isLast ? (
                  pathToLabelMap[to] || value
                ) : (
                  <Link to={to}>{pathToLabelMap[to] || value}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;