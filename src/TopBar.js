import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="logo">Market Research Co‑Pilot</div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
