/* eslint-disable  react/self-closing-comp */
import { useEffect, React } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Layout from '../components/Layout';
import Income from '../components/Income';
import Expenses from '../components/Expenses';
// import Percents from '../components/Percents';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import AdminRoute from './AdminRoute';
import Sponsors from '../components/Sponsors';
import { revalidateToken as revalidateTokenAction } from '../redux/actions/authUsersActions';
import NotFound from '../components/NotFound';

const Routing = ({ isLoading, revalidateToken }) => {
  useEffect(() => {
    revalidateToken();
  }, []);

  if (isLoading) {
    return <LinearProgress color="secondary" />;
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/income"
          element={
            <ProtectedRoute>
              <Layout>
                <Income />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <Layout>
                <Expenses />
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/percent"
          element={
            <ProtectedRoute>
              <Layout>
                <Percents />
              </Layout>
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/sponsors"
          element={
            <AdminRoute>
              <Layout>
                <Sponsors />
              </Layout>
            </AdminRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/reports" element={<Layout></Layout>} />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute>
              <NotFound />
            </PublicRoute>
          }
        />
      </Routes>
    </Router>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      revalidateToken: revalidateTokenAction,
    },
    dispatch
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  authenticated: state.auth.authenticated,
  isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
