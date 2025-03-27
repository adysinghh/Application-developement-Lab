import React, { useState } from 'react';
import './Auth.css';

function LoginForm({ onLogin, switchToSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data.user);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Login error: ' + err.message);
    }
  };

  return (
    <div className="auth-container login-container animate-fadeIn">
      <div className="auth-card">
        <h2>Welcome Back!</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleLoginSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required 
          />
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="switch-text">
          Don't have an account?{' '}
          <span onClick={switchToSignup}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
