import React from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import PlanSelector from '../PlanSelector/PlanSelector';
import ActionButtons from '../ActionButtons/ActionButtons';
import heroImage from '../../assets/illustration-hero.svg'; 

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