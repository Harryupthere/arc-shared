import { useState } from 'react';
import './Leaderboard.scss';

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
    }
  ];

  return (
    <div className="leaderboard">
      <div className="page-header">
        <div className="header-icon">🏆</div>
        <h1>Leaderboard</h1>
      </div>

      <div className="leaderboard-description">
        <p>Overview of currently most profitable active ARC Accounts.</p>
      </div>

      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
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

      <div className="leaderboard-table">
        <div className="table-header">
          <div className="table-cell">#</div>
          <div className="table-cell">Name</div>
          <div className="table-cell">Profit</div>
          <div className="table-cell">Equity</div>
          <div className="table-cell">Gain %</div>
          <div className="table-cell">Account size</div>
          <div className="table-cell">Country</div>
        </div>

        {tableData.map((trader) => (
          <div key={trader.rank} className="table-row">
            <div className="table-cell">{trader.rank}.</div>
            <div className="table-cell">{trader.name}</div>
            <div className="table-cell">{trader.profit}</div>
            <div className="table-cell">{trader.equity}</div>
            <div className="table-cell gain">{trader.gain}</div>
            <div className="table-cell">{trader.accountSize}</div>
            <div className="table-cell">
              <span className="flag">{trader.flag}</span>
              <span>{trader.country}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;