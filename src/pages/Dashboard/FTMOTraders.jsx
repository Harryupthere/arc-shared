import './FTMOTraders.scss';

const FTMOTraders = () => {
  return (
    <div className="ftmo-traders">
      <div className="warning-banner">
        <span className="warning-icon">⚠️</span>
        <p>
          Sorry, this page is accessible only to ARC Traders (ARC Traders are those who already passed the Evaluation Process and are managing an ARC Account).
        </p>
      </div>

      <div className="ftmo-traders-content">
        <div className="content-card">
          <div className="phone-mockups">
            <div className="phone-container">
              <img 
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=600" 
                alt="ARC Mobile App" 
                className="phone-image"
              />
            </div>
            <div className="phone-container">
              <img 
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=600" 
                alt="ARC Mobile App" 
                className="phone-image"
              />
            </div>
          </div>
          
          <div className="content-text">
            <h2>Ready to become an ARC Trader?</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FTMOTraders;