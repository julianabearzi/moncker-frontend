import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('admin');
  return isAdmin === 'true' ? children : <Navigate replace to="/profile" />;
};

export default AdminRoute;
