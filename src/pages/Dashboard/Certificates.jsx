import { useState } from 'react';
import './Certificates.scss';
import { BatchPredictionRounded } from '@mui/icons-material';

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { key: "all", label: "All" },
    { key: "evalution", label: "Evalution Process" },
    { key: "reward", label: "Rewards" },
    { key: "overall_rewards", label: "Overall rewards" },
    { key: "academy", label: "ARC Academy" },
    { key: "preminum", label: "Premium" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return (
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
          </div>)

      case "evalution":
        return(
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
        )
     
      default:
        return null;
    }
  };
  return (
    <div className="certificates">
      <div className="dark-card first-card">
        <div className='card-header'>
          <div className="header-icon"><BatchPredictionRounded sx={{ fontSize: 30 }} /></div>
          <h1>Certificates</h1>
        </div>
        <div className='card-body'>

          <div className="certificates-description">
            <p>
              Download your respective certificate and pride yourself on your success and achievement! The inactive/greyed out certificates will
              unlock shortly after you pass the respective stage or status for its criteria. The minimum threshold for a reward certificate is 100 USD or
              equivalent in other currencies.
            </p>
          </div>
          <div className="category-tabs">
            {categories?.map((category) => (
              <button key={category}    onClick={() => setActiveTab(category.key)}
                className={`category-tab ${activeTab === category.key ? "active" : ""}`}>
                {category?.label}
              </button>
            ))}
          </div>
        </div>
      </div>


<div className='dark-card'>
        <div className="tabs-content">{renderContent()}</div>
      </div>
      <div className="certificate-actions">
        <div className="info-banner">
          <span className="info-icon">ℹ️</span>
          <p>Is there a payout missing or something's not correct? Feel free to contact our support team.</p>
          <button className="contact-support-btn">Contact our ARC Support Team</button>
        </div>
      </div>

      {/* <div className="page-footer">
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
      </div> */}
    </div>
  );
};

export default Certificates;