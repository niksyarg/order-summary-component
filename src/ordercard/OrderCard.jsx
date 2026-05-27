import React from 'react';
import './OrderCard.css';
import OrderHeader from '../orderheader/OrderHeader.jsx';
import PlanSelector from '../planselector/PlanSelector.jsx';
import ActionButtons from '../actionbuttons/ActionButtons.jsx';
import heroImage from '../Music_Flatline.svg';

function OrderCard() {
  return (
    <div className="order-card">
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero Illustration" className="hero-image" />
      </div>
      <div className="card-content">
        <OrderHeader />
        <PlanSelector />
        <ActionButtons />
      </div>
    </div>
  );
}

export default OrderCard;
