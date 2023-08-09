import React, { useState } from 'react';
import axios from "axios";
import Register from './RegisterModal';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const response = await axios.post('/api/users/login', {
        email,
        password,
      });

      if (response.data.success) {
        // Use props.history.push instead of History.push
        props.history.push('./Home/Home.js');
      } else {
        setError(response.data.message || 'Failed to login.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while logging in.');
    }
  };

  const toggleRegisterVisibility = () => {
    setRegisterVisible(!isRegisterVisible);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Don't have an account? <button onClick={toggleRegisterVisibility}>Register!</button>
        {isRegisterVisible && <Register />}
      </div>
    </div>
  );
};

export default Login;
