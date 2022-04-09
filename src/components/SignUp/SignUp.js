import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }
  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value)
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      setError('Your password did not matched')
      return;
    }
    console.log(email, password, confirmPassword);
  }

  return (
    <div className="form-container">
      <div className="input-field">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          {/* Email field  */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" name="email" id="email" required />
          </div>
          {/* Password field  */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePassword} type="password" name="password" id="password" required />
          </div>
          {/* Confirm password  */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm password</label>
            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="confirm-password" required />
          </div>
          {/* set error for password not matching */}
          <p style={{color:'red'}}>
            {error}
          </p>
          {/* Submit button  */}
          <input className="form-submit" type="submit" value="submit" />
        </form>
        {/* Sign in page  */}
        <p style={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link className="form-link" to="/login">
            Login
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

export default SignUp;
