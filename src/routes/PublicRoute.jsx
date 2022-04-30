/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = ({ authenticated }) => {
  return authenticated === false ? <Outlet /> : <Navigate to="/profile" />;
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, null)(PublicRoute);
