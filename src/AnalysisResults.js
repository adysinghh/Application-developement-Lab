import React from 'react';

function AnalysisResults({ results }) {
  return (
    <div className="analysis-results">
      <h2>Analysis Results</h2>
      <div className="result-card">
        <h3>Competitor Analysis</h3>
        <p>{results.competitor_analysis}</p>
      </div>
      <div className="result-card">
        <h3>User Personas</h3>
        <p>{results.user_personas}</p>
      </div>
      <div className="result-card">
        <h3>Go-to-Market Strategies</h3>
        <p>{results.go_to_market}</p>
      </div>
      <div className="result-card">
        <h3>Pitch-Ready Summary</h3>
        <p>{results.pitch_summary}</p>
      </div>
    </div>
  );
}

export default AnalysisResults;
