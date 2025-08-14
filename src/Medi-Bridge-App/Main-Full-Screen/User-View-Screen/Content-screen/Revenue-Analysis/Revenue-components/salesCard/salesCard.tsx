import React from 'react';
import './salesCard.css';
import { RiLoopLeftFill } from 'react-icons/ri';
const SalesCard = () => {
  return (
    <div className="sales-card">
      <div className="card-header">
        <div className="card-header-first-part">
          <RiLoopLeftFill size={24} className="icon"></RiLoopLeftFill>
          <span className="title">Total Sales</span>
        </div>
        <span className="menu">⋮</span>
      </div>
      <div className="sales-amount">
        1000rs <span className="trend">⬆ +12%</span>
      </div>
      <div className="average-link">
        <span>Average of Total Sales</span>
        <span className="arrow">➜</span>
      </div>
    </div>
  );
};

export default SalesCard;
