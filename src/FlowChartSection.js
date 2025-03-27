import React from 'react';
import './FlowChartSection.css';
import flowchart from './Img/adlab.png'

function FlowChartSection() {
  return (
    <div className="flowchart-container">
      <div className="flowchart-glow"></div>
      <div className="flowchart-content">
        <h2 className="animate-fadeInDown">Our Process Flow</h2>
        <p className="animate-fadeInUp">[Flowchart]</p>
        {/* Placeholder for a large image/flowchart */}
        <div className="flowchart-image">
          <img src= {flowchart} alt="Flowchart" />
        </div>
      </div>
    </div>
  );
}

export default FlowChartSection;
