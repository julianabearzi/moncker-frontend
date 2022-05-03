import { useEffect, React } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Layout from '../components/Layout';
import Income from '../components/Income';
import { revalidateToken as revalidateTokenAction } from '../redux/actions/authUsersActions';

const Routing = ({ isLoading, revalidateToken, authenticated }) => {
  useEffect(() => {
    revalidateToken();
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }
  return (
    <Router>
      <Routes>
        {!authenticated ? (
          <Route path="/register" element={<Register />} />
        ) : (
          <Route path="/register" element={<Navigate to="/" />} />
        )}
        {!authenticated ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route
            path="/"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
        )}

        {authenticated && (
          <Route
            path="/income"
            element={
              <Layout>
                <Income />
              </Layout>
            }
          />
        )}
        <Route
          path="*"
          element={
            authenticated ? (
              <Layout>
                <Profile />
              </Layout>
            ) : (
              <Login />
            )
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
