import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate('/');
  }

  const handleSignInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div className="input-field">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSignInUser}>
          {/* Email field  */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          {/* Password field  */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          {/* set error for user not found */}
          <p style={{ color: 'red' }}>{error?.message}</p>
          {loading && <p>loading...</p>}
          {/* Submit button  */}
          <input className="form-submit" type="submit" value="Login" />
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
