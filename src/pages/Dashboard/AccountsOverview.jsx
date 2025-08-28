import './AccountsOverview.scss';

const AccountsOverview = () => {
  return (
    <div className="accounts-overview">
      <div className="page-header">
        <h1>Ready</h1>
      </div>

      <div className="ready-section">
        <div className="ready-card">
          <div className="card-content">
            <div className="card-info">
              <h3>Free Trial: <span className="account-id"> 1511440682</span></h3>
              <h3>Balance: <span className="account-id"> $200,000.00</span></h3>
            </div>
            <button className="start-trial-btn">Start Free Trial</button>
          </div>
        </div>
      </div>

      <div className="active-accounts-section">
        <h2>Active accounts</h2>
        <div className="no-accounts">
          <div className="no-accounts-content">
            <h3>No active accounts</h3>
            <p>Show us your trading skills. Pass the Evaluation Process and receive the ARC Account!</p>
            <div className="action-buttons">
              <button className="btn btn-primary">New ARC Challenge</button>
              <button className="btn btn-outline">Start Free Trial</button>
            </div>
          </div>
        </div>
      </div>

      <div className="info-cards">
        <div className="info-card free-trial">
          <div className="card-icon">⏰</div>
          <div className="card-content">
            <h3>Free Trial</h3>
            <p className="card-subtitle">Master your skills</p>
            <p className="card-description">
              Practice your trading without risking anything, and be ready for the 
              real challenge when it comes!
            </p>
          </div>
              <button className="btn btn-outline">Start Free Trial</button>
        </div>

        <div className="info-card ftmo-challenge">
          <div className="card-icon">💼</div>
          <div className="card-content">
            <h3>ARC Challenge</h3>
            <p className="card-subtitle">Trade up to $200,000 ARC Account</p>
            <p className="card-description">
              Show us your trading skills. Pass the Evaluation Course and receive 
              the ARC Account!
            </p>
          </div>
              <button className="btn btn-primary">New ARC Challenge</button>

        </div>
      </div>
    </div>
  );
};

export default AccountsOverview;