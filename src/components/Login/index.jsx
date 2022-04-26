import React from 'react';
import './login.css';
import Button from '@material-ui/core/Button';

const Login = () => {
  return( 
  <div className="container">
        <div className="logo">
            <h1>Moncker App</h1>
        </div>
        <div className="loginBox">
          <div className="signIn">
                  <h1>Sign In</h1>
                  <form>
                    <label htmlFor="email">Email
                      <input 
                        type="text" 
                        id="email" 
                        name="email" 
                      />
                    </label>
                    <label htmlFor="password">Password
                      <input 
                        type="text" 
                        id="password" 
                        name="password" 
                      />
                    </label>
                    <br /><br /><br />
                  </form>
                  <Button variant="contained" color="primary">Sign In</Button>
              </div>
              <div className="signUp">
                  <h1>Welcome to login</h1>
                  <h3>Dont have an account?</h3>
                  <Button color="primary">REGISTER</Button>
              </div>
        </div>
    </div>)
};

export default Login;
