import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="form-container">
      <div className="input-field">
        <h2 className="form-title">Login</h2>
        <form>
          {/* Email field  */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          {/* Password field  */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          {/* Submit button  */}
          <input className="form-submit" type="submit" value="submit" />
        </form>
        {/* Sign in page  */}
        <p style={{ textAlign: 'center' }}>
          New to Ema-John?{' '}
          <Link className="form-link" to="/signup">
            Creat an account
          </Link>
        </p>
        {/* horizontal line */}
        <div className="horizontal-area">
          <p className="horizontal-text">or</p>
          <hr />
        </div>
        {/* google login  */}
        <div className="google-login">
          <button className="google-button">
            {' '}
            <FcGoogle className="google-icon"></FcGoogle> Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
