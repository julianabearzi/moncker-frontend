import React from 'react';
import Header from './Header';
import MenuBar from './MenuBar';
import Main from './Main';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
