import './AccountsOverview.scss';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { useNavigate } from 'react-router-dom';
const AccountsOverview = () => {
  const navigate = useNavigate()
  return (
    <div className="accounts-overview">
      <div className="page-header">
        <h1>Ready</h1>
      </div>

      <div className="ready-section">
        <div className="ready-card">
          <div className="card-content">
            <div className="card-info">
              <h3>Paid Trial: <span className="account-id"> 1511440682</span></h3>
              <h3>Balance: <span className="account-id"> $200,000.00</span></h3>
            </div>
            {/* <button className="start-trial-btn" onClick={()=>navigate('/dashboard/account')}>Start Free Trial</button> */}
            <button className="start-trial-btn" onClick={()=>navigate('/dashboard/account')}>Dashboard</button>

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
              <button className="btn btn-primary" onClick={()=>navigate('/dashboard/account')}>New ARC Challenge</button>
              {/* <button className="btn btn-outline" onClick={()=>navigate('/dashboard/account')}>Start Free Trial</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="info-cards">
        {/* <div className="info-card free-trial">
          <div className="card-icon"><AccessAlarmIcon/></div>
          <div className="card-content">
            <h3>Free Trial</h3>
            <p className="card-subtitle">Master your skills</p>
            <p className="card-description">
              Practice your trading without risking anything, and be ready for the 
              real challenge when it comes!
            </p>
            <ul>
              <li> No eligibility for ARC Account</li>
              <li>14 days</li>
              <li>Basic Account Analysis</li>
              <li>Limited Apps</li>
            </ul>
          </div>
              <button className="btn btn-outline">Start Free Trial</button>
        </div> */}

        <div className="info-card ftmo-challenge">
          <div className="card-icon"><AutoGraphIcon/></div>
          <div className="card-content">
            <h3>ARC Challenge</h3>
            <p className="card-subtitle">Trade up to $200,000 ARC Account</p>
            <p className="card-description">
              Show us your trading skills. Pass the Evaluation Course and receive 
              the ARC Account!
            </p>
               <ul>
              <li>We provide you with up to $200,000 ARC Account</li>
              <li>Prove your trading skills</li>
              <li>Full Account Analysis</li>
              <li>Premium Apps</li>
            </ul>
          </div>
              <button className="btn btn-primary">New ARC Challenge</button>

        </div>
      </div>
    </div>
  );
};

export default AccountsOverview;