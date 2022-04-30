import { useEffect, React } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoute from './PrivateRoute';
import RoutePublic from './PublicRoute';
import Profile from '../components/Profile';
import { revalidateToken as revalidateTokenAction } from '../redux/actions/authUsersActions';

const Routing = ({ revalidateToken, isLoading }) => {
  useEffect(() => {
    revalidateToken();
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }
  return (
    <Routes>
      <Route element={<RoutePublic />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
