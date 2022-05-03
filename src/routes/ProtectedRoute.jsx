import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateProtectRoute = ({ children }) => {
  const { authenticated } = useSelector((state) => state?.auth);
  return authenticated !== false ? children : <Navigate replace to="/login" />;
};

export default PrivateProtectRoute;
