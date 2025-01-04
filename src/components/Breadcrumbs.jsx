import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const breadcrumbMap = {
  '/': 'Home',
  '/register': 'Register',
  '/player-rankings': 'Player Rankings',
  '/how-to-join': 'How to Join',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const { id } = useParams(); // Get the 'id' parameter from the URL
  console.log('Dynamic ID:', id);

  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbs = pathnames.map((_, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    
    // Dynamically set the label for the "Player Profile" path
    let label;
    if (path.includes('/player-rankings/') && id) {
      label = `Player Profile: ${id}`;
    } else {
      label = breadcrumbMap[path] || 'Player Profile'; // Default for unmapped routes
    }

    return { path, label };
  });

  if (breadcrumbs.length === 0) return null;

  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {breadcrumbs.map((item, index) => (
            <li
              key={item.path}
              className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
              aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
            >
              {index === breadcrumbs.length - 1 ? (
                item.label
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
