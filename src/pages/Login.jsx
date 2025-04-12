import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 

  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Sending login details in JSON
      });

      if (res.ok) {
        const data = await res.json(); // Extract token from response
        localStorage.setItem('token', data.token); // Save token to localStorage
        navigate('/home'); // Redirect to homepage
      } else {
        setError('Invalid credentials'); // Show error if login fails
      }
    } catch (err) {
      setError('An error occurred. Please try again.'); // Handle network/server errors
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-container">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor='name'><b>Username:</b></label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor='pwd'><b>Password:</b></label>
          <input
            type="password"
            id="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Login;