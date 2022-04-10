import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  // const navigate = useNavigate()



  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div className="input-field">
        <h2 className="form-title">Shipping information</h2>

        <form onSubmit={handleCreateUser}>
          {/* Email field  */}
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          {/* Name field  */}
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleName}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          {/* Password field  */}
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddress}
              type="text"
              name="address"
              id="address"
              required
            />
          </div>
          {/* Confirm password  */}
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhone}
              type="text"
              name="phone"
              id="phone"
              required
            />
          </div>
          {/* set error for password not matching */}
          <p style={{ color: 'red' }}>{error}</p>
          {/* Submit button  */}
          <input className="form-submit" type="submit" value="Add shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
