import React, { useState } from 'react';
import TopBar from './TopBar';
import IdeaInput from './IdeaInput';
import AnalysisResults from './AnalysisResults';
import BrandMarquee from './BrandMarquee';
import FlowChartSection from './FlowChartSection';
import CustomCursor from './CustomCursor';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';
import logo from './Img/logo.png';

function App() {
  const [results, setResults] = useState(null);
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setResults(null);
  };

  return (
    <div className="App">
      <CustomCursor />
      <TopBar onLogout={handleLogout} user={user} />

      {/* If not logged in, show login/signup forms */}
      {!user ? (
        <section className="auth-section">
          {showSignup ? (
            <SignupForm onSignup={handleLogin} switchToLogin={() => setShowSignup(false)} />
          ) : (
            <LoginForm onLogin={handleLogin} switchToSignup={() => setShowSignup(true)} />
          )}
        </section>
      ) : (
        <>
          {/* Hero Section */}
          <section className="hero" id="hero">
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="animate-fadeInDown">Market Research Co‑Pilot</h1>
                <p className="animate-fadeInUp">
                  Your on‑demand AI consultant for validating startup ideas and crafting go‑to‑market strategies.
                </p>
                <div className="hero-image">
                  <img src={logo} alt="Hero Visual" />
                </div>
              </div>
            </div>
          </section>

          {/* Brand Collaboration Slider */}
          <section className="brand-collaboration">
            <h2 className="animate-slideIn">Our Trusted Partners</h2>
            <BrandMarquee />
          </section>

          {/* Input Section */}
          <section className="input-section" id="features">
            <IdeaInput setResults={setResults} />
          </section>

          {/* Results Section */}
          {results && (
            <section className="results-section">
              <AnalysisResults results={results} />
            </section>
          )}

          {/* FlowChart Section */}
          <section className="flowchart-section">
            <FlowChartSection />
          </section>

          <footer className="footer" id="contact">
            <div className="footer-content animate-fadeIn">
              <p>&copy; 2025 Market Research Co‑Pilot. All rights reserved.</p>
              <nav className="footer-nav">
                <a href="#hero">Home</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
