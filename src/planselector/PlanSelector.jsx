import React from 'react';
import musicIcon from '../Group 2.svg';

function PlanSelector() {
  return (
    <div className="plan-selector">
      <div className="plan-info">
        <img src={musicIcon} alt="Music Icon" />
        <div>
          <h2>Annual Plan</h2>
          <p>$59.99/year</p>
        </div>
      </div>
      <button className="change-plan-btn">Change</button>
    </div>
  );
}

export default PlanSelector;
