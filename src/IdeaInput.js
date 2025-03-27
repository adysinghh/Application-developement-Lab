import React, { useState } from 'react';
import './IdeaInput.css';

function IdeaInput({ setResults }) {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5001/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching analysis:", error);
      alert("Error fetching analysis. Check your server console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="idea-input">
      <h2>Enter Your Business Idea</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="idea-textarea"
          placeholder="Type your business idea here..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
    </div>
  );
}

export default IdeaInput;
