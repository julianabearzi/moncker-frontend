/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import {
  required,
  trim,
  string,
  email,
  minLength,
  composeValidators,
} from '../../utils/validations';
import Button from '../Shared/Button';
import TextInput from '../Shared/TextInput';
import { registerUser as registerUserAction } from '../../redux/actions/authUsersActions';
import './register.css';

const Register = ({ registerUser, isLoading, userExists }) => {
  const onSubmitUsers = (values) => {
    registerUser(values);
  };

  return (
    <div className="containerRegister">
      <div className="logoRegister">
        <h1>Moncker App</h1>
      </div>
      <div className="registerBox">
        <div className="registerSignUp">
          <h1>Sign Up</h1>
          <Form
            onSubmit={onSubmitUsers}
            initialValues={{
              firstname: '',
              lastname: '',
              email: '',
              password: '',
            }}
            render={({ handleSubmit, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <div className="registerInput">
                  <Field
                    name="firstname"
                    component={TextInput}
                    placeholder="Firstname"
                    validate={composeValidators(string, required, trim)}
                  />
                </div>
                <div className="registerInput">
                  <Field
                    name="lastname"
                    component={TextInput}
                    placeholder="Lastname"
                    validate={composeValidators(string, required, trim)}
                  />
                </div>
                <div className="registerInput">
                  <Field
                    name="email"
                    component={TextInput}
                    placeholder="Email"
                    validate={composeValidators(required, email, trim)}
                  />
                </div>
                <div className="registerInput">
                  <Field
                    type="password"
                    id="passwordR"
                    name="password"
                    component={TextInput}
                    placeholder="Password"
                    validate={composeValidators(required, minLength, trim)}
                  />
                </div>
                {isLoading ? (
                  <LinearProgress />
                ) : (
                  <Button
                    disabled={submitting || pristine}
                    btnLabel="Sign up"
                    type="submit"
                  />
                )}
                {userExists && (
                  <p className="registerError">
                    User with this email already exists
                  </p>
                )}
              </form>
            )}
          />
          <div className="loginLink">
            <p className="linkText">You have an account?</p>
            <Link to="/login" className="loginLinkText">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      registerUser: registerUserAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  isLoading: state.auth.isLoading,
  userExists: state.auth.userExists,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
