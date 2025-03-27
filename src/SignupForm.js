import React, { useState } from 'react';
import './Auth.css';

function SignupForm({ onSignup, switchToLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
      });
      const data = await response.json();
      if (response.ok) {
        onSignup(data.user);
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch (err) {
      setError('Signup error: ' + err.message);
    }
  };

  return (
    <div className="auth-container signup-container animate-fadeIn">
      <div className="auth-card">
        <h2>Create Account</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleSignupSubmit}>
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
          <input 
            type="email" 
            placeholder="Email (optional)" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="switch-text">
          Already have an account?{' '}
          <span onClick={switchToLogin}>Log in</span>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
