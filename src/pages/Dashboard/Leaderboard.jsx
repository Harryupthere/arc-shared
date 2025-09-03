import { useState } from 'react';
import './Leaderboard.scss';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState('100K');

  const filters = ['ALL', '10K', '25K', '50K', '100K', '200K'];

  const topTraders = [
    {
      rank: 1,
      name: 'LIAOYI_WANG',
      country: 'CN',
      flag: '🇨🇳',
      profit: '$23,781',
      equity: '$123,781',
      gain: '24%',
      accountSize: '$100,000.00',
      medal: '🥇'
    },
    {
      rank: 2,
      name: 'Nathan B.',
      country: 'GB',
      flag: '🇬🇧',
      profit: '£16,294',
      equity: '£86,294',
      gain: '23%',
      accountSize: '£70,000.00',
      medal: '🥈'
    },
    {
      rank: 3,
      name: 'Navpreet K.',
      country: 'CA',
      flag: '🇨🇦',
      profit: '29,135 CAD',
      equity: '149,135 CAD',
      gain: '24%',
      accountSize: '120,000.00 CAD',
      medal: '🥉'
    }
  ];

  const tableData = [
    {
      rank: 4,
      name: 'Pawel W.',
      profit: '$20,034.96',
      equity: '$120,034.96',
      gain: '20%',
      accountSize: '$100,000.00',
      country: 'PL',
      flag: '🇵🇱'
    },
    {
      rank: 4,
      name: 'Pawel W.',
      profit: '$20,034.96',
      equity: '$120,034.96',
      gain: '20%',
      accountSize: '$100,000.00',
      country: 'PL',
      flag: '🇵🇱'
    },
    {
      rank: 4,
      name: 'Pawel W.',
      profit: '$20,034.96',
      equity: '$120,034.96',
      gain: '20%',
      accountSize: '$100,000.00',
      country: 'PL',
      flag: '🇵🇱'
    },
    {
      rank: 4,
      name: 'Pawel W.',
      profit: '$20,034.96',
      equity: '$120,034.96',
      gain: '20%',
      accountSize: '$100,000.00',
      country: 'PL',
      flag: '🇵🇱'
    }
  ];
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: "All" },
    { key: "10", label: "10k" },
    { key: "25", label: "25k" },
    { key: "50", label: "50k" },
    { key: "100", label: "100k" },
    { key: "200", label: "200k" },
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
    <div className="leaderboard">
      <div className="dark-card leaderboard-header">
        <div className='card-header'>
          <div className="header-icon"><EmojiEventsIcon sx={{ fontSize: 30 }} /></div>
          <h1>Profile</h1>
        </div>
        <div className='tab-content'>
          Overview of currently most profitable active ARC Accounts.
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

      <div className="leaderboard-date">
        <span className="date-indicator">🟢</span>
        <span>28 Aug 2025</span>
      </div>

      <div className="top-traders">
        {topTraders.map((trader) => (
          <div key={trader.rank} className="trader-card">
            <div className="card-header">
              <div className="trader-medal">{trader.medal}</div>
              <div className="trader-info">
                <h3>{trader.name}</h3>
                <div className="trader-country">
                  <span className="flag">{trader.flag}</span>
                  <span>{trader.country}</span>
                </div>
              </div>
              <div className="trader-rank">{trader.rank}.</div>
            </div>

            <div className="trader-stats">
              <div className="stat-group">
                <div className="stat">
                  <span className="stat-label">Profit</span>
                  <span className="stat-value">{trader.profit}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Equity</span>
                  <span className="stat-value">{trader.equity}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Gain %</span>
                  <span className="stat-value gain">{trader.gain}</span>
                </div>
              </div>
              <div className="account-size">
                <span className="size-label">Account size:</span>
                <span className="size-value">{trader.accountSize}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Profit</th>
              <th>Equity</th>
              <th>Gain %</th>
              <th>Account size</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((trader, index) => (
              <tr key={index}>
                <td>{trader.rank}.</td>
                <td>{trader.name}</td>
                <td>{trader.profit}</td>
                <td>{trader.equity}</td>
                <td className="gain">{trader.gain}</td>
                <td>{trader.accountSize}</td>
                <td>
                  <span className="flag">{trader.flag}</span> {trader.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;