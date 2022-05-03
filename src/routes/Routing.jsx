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
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { revalidateToken as revalidateTokenAction } from '../redux/actions/authUsersActions';

const Routing = ({ isLoading, revalidateToken }) => {
  useEffect(() => {
    revalidateToken();
  }, []);

  if (isLoading) {
    return <LinearProgress />;
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
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
