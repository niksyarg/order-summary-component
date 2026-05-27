import React from 'react';
import heroIllustration from './Music_Flatline.svg'; 
import musicIcon from './Group 2.svg'; 

function App() {
  return (
    <div className="page-wrapper">
      <div className="order-card">
        
        <div className="card-image-container">
          <img 
            src={heroIllustration} 
            alt="Illustration of a person dancing to music" 
            className="hero-image" 
          />
        </div>

        <div className="card-content">
          <h1 className="order-title">Order Summary</h1>
          
          <p className="order-description">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>

          <div className="plan-container">
            <div className="plan-details">
              <img src={musicIcon} alt="Music icon" className="plan-icon" />
              <div className="plan-text">
                <h2 className="plan-title">Annual Plan</h2>
                <p className="plan-price">$59.99/year</p>
              </div>
            </div>
            <a href="#" className="change-plan-link">Change</a>
          </div>
          
          <button className="btn-proceed">Proceed to Payment</button>
          <button className="btn-cancel">Cancel Order</button>
        </div>

      </div>
    </div>
  );
}

export default App;