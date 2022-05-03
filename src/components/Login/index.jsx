import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { required } from '../../utils/validations';
import Button from '../Shared/Button';
import TextInput from '../Shared/TextInput';
import { logIn as logInAction } from '../../redux/actions/authUsersActions';
import './login.css';

const Login = ({ error, logIn, isLoading }) => {
  let navigate = useNavigate();
  const onSubmitLogin = (values) => {
    logIn(values);
    navigate('/profile');
  };
  return (
    <div className="container">
      <div className="logo">
        <h1>Moncker App</h1>
      </div>
      <div className="loginBox">
        <div className="signIn">
          <h1>Sign In</h1>
          <Form
            onSubmit={onSubmitLogin}
            initialValues={{
              email: '',
              password: '',
            }}
            render={({ handleSubmit, pristine, submitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="inputText">
                  <Field
                    name="email"
                    component={TextInput}
                    placeholder="Email"
                    validate={required}
                  />
                </div>
                <div className="inputText">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    component={TextInput}
                    placeholder="Password"
                    validate={required}
                  />
                </div>
                <br />
                <br />
                <br />
                {isLoading ? (
                  <LinearProgress />
                ) : (
                  <Button
                    btnLabel="Sign in"
                    type="submit"
                    disabled={pristine || submitting}
                  />
                )}
                {error && (
                  <div>
                    <Alert
                      sx={{
                        paddingTop: '0rem',
                        paddingBottom: '0rem',
                      }}
                      severity="error"
                    >
                      Invalid Login Credentials
                    </Alert>
                  </div>
                )}
              </form>
            )}
          />
        </div>
        <div className="signUp">
          <h1>Welcome to login</h1>
          <h3>Dont have an account?</h3>
          <Link to="/register">
            <Button btnLabel="REGISTER " />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logIn: logInAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
