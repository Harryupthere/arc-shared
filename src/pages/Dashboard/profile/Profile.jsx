import { useState } from 'react';
import './Profile.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ProfileDetails from './PersonalDetail';
import AccountInfo from './AccountInfo';
const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { key: "personal", label: "Personal Information" },
    { key: "account", label: "Account Information" },
    { key: "security", label: "Security" },
    { key: "identity", label: "FTMO Identity" },
    { key: "newsletters", label: "Newsletters" },
    { key: "points", label: "FTMO Points" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <ProfileDetails />
      case "account":
        return <AccountInfo />
      case "security":
        return <div>🔒 This is Security Page</div>;
      case "identity":
        return <div>🪪 This is FTMO Identity</div>;
      case "newsletters":
        return <div>📰 This is Newsletters</div>;
      case "points":
        return <div>⭐ This is FTMO Points</div>;
      default:
        return null;
    }
  };

  return (
    <div className="profile">
      <div className="dark-card">
        <div className='card-header'>
          <div className="header-icon"><PermIdentityIcon sx={{ fontSize: 30 }} /></div>
          <h1>Profile</h1>
        </div>
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className='dark-card'>
        <div className="tabs-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Profile;