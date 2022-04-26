import './login.css';

const Login = () => {
  return 
  (
    <div className="container">
        <div className="logo">
            <h1>Moncker App</h1>
        </div>
        <div className="loginBox">
          <div className="signIn">
                  <h1>Sign In</h1>
                  <label for="username">Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username" 
                  />
                  <label for="password">Password</label>
                  <input 
                    type="text" 
                    id="password" 
                    name="password" 
                  />
                  <button>Sign In</button>
              </div>
              <div className="signUp">
                  <h1>Welcome to login</h1>
                  <h3>Don't have an account?</h3>
                  <button className="btnSignUp">Sign In</button>
              </div>
        </div>
    </div>
  )
};

export default Login;
