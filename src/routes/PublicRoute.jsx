/* eslint-disable  consistent-return */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { authenticated } = useSelector((state) => state?.auth);

  useEffect(() => {
    if (authenticated === null) {
      return <LinearProgress />;
    }
  }, []);

  return authenticated === false
    ? children
    : authenticated === true && <Navigate replace to="/profile" />;
};

export default PublicRoute;
