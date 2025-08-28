import { useState } from 'react';
import './Certificates.scss';

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('Rewards');

  const tabs = ['All', 'Evaluation Process', 'Rewards', 'Max Allocation'];
  const categories = ['Overall rewards', 'ARC Academy', 'Premium'];

  return (
    <div className="certificates">
      <div className="page-header">
        <div className="header-icon">🏆</div>
        <h1>Certificates</h1>
      </div>

      <div className="certificates-description">
        <p>
          Download your respective certificate and pride yourself on your success and achievement! The inactive/greyed out certificates will 
          unlock shortly after you pass the respective stage or status for its criteria. The minimum threshold for a reward certificate is 100 USD or 
          equivalent in other currencies.
        </p>
      </div>

      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button key={category} className="category-tab">
            {category}
          </button>
        ))}
      </div>

      <div className="nickname-section">
        <div className="nickname-info">
          <span>Use nickname</span>
          <p>You do not have a nickname filled in yet. <a href="#">You can set it here.</a></p>
        </div>
      </div>

      <div className="certificate-preview">
        <div className="certificate-card">
          <div className="certificate-header">
            <div className="ftmo-logo">
              <span>◆</span>
              <span>ARC</span>
            </div>
          </div>
          
          <div className="certificate-content">
            <h2>REWARD</h2>
            <div className="certificate-details">
              <p>Proudly presented to</p>
              <h3>Kunika Kero</h3>
              <p>Your reward</p>
              <div className="reward-amount">$100.00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="certificate-actions">
        <div className="info-banner">
          <span className="info-icon">ℹ️</span>
          <p>Is there a payout missing or something's not correct? Feel free to contact our support team.</p>
          <button className="contact-support-btn">Contact our ARC Support Team</button>
        </div>
      </div>

      <div className="page-footer">
        <div className="footer-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-disclaimer">
          <p>
            All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a 
            specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of 
            investment instruments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;