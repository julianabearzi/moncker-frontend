import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuBar from './MenuBar';
import Main from './Main';

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/login' ||
      location.pathname === '/register' ||
      location.pathname === '/home' ? (
        <div>
          <Main container={children} />
        </div>
      ) : (
        <div>
          <MenuBar />
          <Main container={children} />
        </div>
      )}
    </div>
  );
};

export default Layout;
