import { useState } from 'react';
import './ObjectivesSection.scss';

const ObjectivesSection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedBalance, setSelectedBalance] = useState('$10,000');

  const currencies = [
    { code: 'USD', flag: 'images/usd.png ' },
    // { code: 'GBP', flag: 'images/gbp.png' },
    // { code: 'EUR', flag: 'images/eur.png' },
    // { code: 'CZK', flag: 'images/czk.png' },
    // { code: 'CAD', flag: 'images/cad.png' },
    // { code: 'AUD', flag: 'images/aud.png' },
    // { code: 'CHF', flag: 'images/chf.png' }
  ];

  const balances = ['$10,000', '$25,000', '$50,000', '$100,000', '$200,000'];

  const objectives = [
    {
      name: 'Trading Period',
      step1: 'Unlimited',
      step2: 'Unlimited', 
      step3: 'Unlimited'
    },
    {
      name: 'Minimum Trading Days',
      step1: '4 Days',
      step2: '4 Days',
      step3: 'X'
    },
    {
      name: 'Maximum Daily Loss',
      step1: '$500',
      step2: '$500',
      step3: '$500'
    },
    {
      name: 'Maximum Loss',
      step1: '$1,000',
      step2: '$1,000',
      step3: '$1,000'
    },
    {
      name: 'Profit Target',
      step1: '$1,000',
      step2: '$500',
      step3: 'X'
    },
    {
      name: 'Refundable Fee',
      step1: 'CHF 155',
      step2: 'Free',
      step3: 'Refund'
    }
  ];

  return (
    <section className="objectives-section section">
      <div className="container">

        <div className="objectives-configurator">
        <div className="objectives-header">
          <h2>TRADING OBJECTIVES</h2>
          <p>
            ARC's Trading Objectives are based on risk management principles, and they verify that our clients can manage them effectively. By adhering to these objectives, clients enhance their skills and build healthy and sustainable trading habits.
          </p>
          <p>
            Upon accomplishing Trading Objectives during ARC Challenge and Verification, clients gain access to an ARC Account. These objectives will remain in place, except for the Profit Target.
          </p>
        </div>
          <div className="configurator-section">
            <h4>CURRENCY:</h4>
            <div className="currency-buttons">
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  className={`currency-btn ${selectedCurrency === currency.code ? 'active' : ''}`}
                  onClick={() => setSelectedCurrency(currency.code)}
                >
                  <span className="currency-flag"><img src={currency.flag} alt='flag'/></span>
                  <span className="currency-code">{currency.code}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="configurator-section">
            <h4>BALANCE:</h4>
            <div className="balance-buttons">
              {balances.map((balance) => (
                <button
                  key={balance}
                  className={`balance-btn ${selectedBalance === balance ? 'active' : ''}`}
                  onClick={() => setSelectedBalance(balance)}
                >
                  {balance}
                </button>
              ))}
            </div>
            <button className="quick-comparison-btn">QUICK COMPARISON</button>
          </div>
        </div>

        <div className="objectives-table">
          <div className="table-header">
            <div className="table-cell"></div>
            <div className="table-cell step-header">
              <div className="step-title">STEP 1</div>
              <div className="step-subtitle">ARC CHALLENGE</div>
            </div>
            <div className="table-cell step-header">
              <div className="step-title">STEP 2</div>
              <div className="step-subtitle">VERIFICATION</div>
            </div>
            <div className="table-cell step-header">
              <div className="step-title">STEP 3</div>
              <div className="step-subtitle">ARC TRADER</div>
            </div>
          </div>

          {objectives.map((objective, index) => (
            <div key={index} className="table-row">
              <div className="table-cell objective-name">
                <span className="dropdown-icon">▼</span>
                {objective.name}
              </div>
              <div className="table-cell">{objective.step1}</div>
              <div className="table-cell">{objective.step2}</div>
              <div className="table-cell">{objective.step3}</div>
            </div>
          ))}
        </div>

        <div className="special-deal">
          <div className="deal-icon">💡</div>
          <p>
            <strong>Special Deal:</strong> The $10,000 ARC Challenge is now available for just CHF 155. This deal is limited to all clients who do not already have an active $10,000 Challenge (or the equivalent in another currency).
          </p>
        </div>

        <div className="objectives-cta">
          <button className="btn btn-primary">START ARC CHALLENGE</button>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;