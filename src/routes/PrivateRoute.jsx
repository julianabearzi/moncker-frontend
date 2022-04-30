/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ authenticated }) => {
  return authenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, null)(PrivateRoute);
