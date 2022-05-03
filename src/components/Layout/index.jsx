import React from 'react';
import MenuBar from './MenuBar';
import Main from './Main';

const Layout = ({ children }) => {
  return (
    <div className="menuContainer">
      <MenuBar />
      <Main container={children} />
    </div>
  );
};

export default Layout;
