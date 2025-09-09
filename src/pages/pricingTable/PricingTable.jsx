import { useState } from 'react';
import './PricingTable.scss';
import CostomizedAccount from './Customized';
import TradingSliders from './TradingSliders';
const PricingTable = () => {
  const [accountType, setAccountType] = useState('standard');
  const [challengeType, setChallengeType] = useState('two-phase');
  const [selectedSize, setSelectedSize] = useState('15k');

  // Data for Two-Phase Challenge
  const twoPhaseData = {
    '8k': {
      novice: {
        profitTarget: { amount: '$640', percentage: '8%' },
        maxDailyLoss: { amount: '$400', percentage: '5%' },
        maxOverallLoss: { amount: '$800', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: { amount: '$400', percentage: '5%' },
        maxDailyLoss: { amount: '$400', percentage: '5%' },
        maxOverallLoss: { amount: '$800', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      arcFunded: {
        profitTarget: '-',
        maxDailyLoss: { amount: '$400', percentage: '5%' },
        maxOverallLoss: { amount: '$800', percentage: '10%' },
        minTradingDays: '5 Days'
      }
    },
    '15k': {
      novice: {
        profitTarget: { amount: '$1,200', percentage: '8%' },
        maxDailyLoss: { amount: '$750', percentage: '5%' },
        maxOverallLoss: { amount: '$1,500', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: { amount: '$750', percentage: '5%' },
        maxDailyLoss: { amount: '$750', percentage: '5%' },
        maxOverallLoss: { amount: '$1,500', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      arcFunded: {
        profitTarget: '-',
        maxDailyLoss: { amount: '$750', percentage: '5%' },
        maxOverallLoss: { amount: '$1,500', percentage: '10%' },
        minTradingDays: '5 Days'
      }
    },
    '25k': {
      novice: {
        profitTarget: { amount: '$2,000', percentage: '8%' },
        maxDailyLoss: { amount: '$1,250', percentage: '5%' },
        maxOverallLoss: { amount: '$2,500', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: { amount: '$1,250', percentage: '5%' },
        maxDailyLoss: { amount: '$1,250', percentage: '5%' },
        maxOverallLoss: { amount: '$2,500', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      arcFunded: {
        profitTarget: '-',
        maxDailyLoss: { amount: '$1,250', percentage: '5%' },
        maxOverallLoss: { amount: '$2,500', percentage: '10%' },
        minTradingDays: '5 Days'
      }
    },
    '50k': {
      novice: {
        profitTarget: { amount: '$4,000', percentage: '8%' },
        maxDailyLoss: { amount: '$2,500', percentage: '5%' },
        maxOverallLoss: { amount: '$5,000', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: { amount: '$2,500', percentage: '5%' },
        maxDailyLoss: { amount: '$2,500', percentage: '5%' },
        maxOverallLoss: { amount: '$5,000', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      arcFunded: {
        profitTarget: '-',
        maxDailyLoss: { amount: '$2,500', percentage: '5%' },
        maxOverallLoss: { amount: '$5,000', percentage: '10%' },
        minTradingDays: '5 Days'
      }
    },
    '100k': {
      novice: {
        profitTarget: { amount: '$8,000', percentage: '8%' },
        maxDailyLoss: { amount: '$5,000', percentage: '5%' },
        maxOverallLoss: { amount: '$10,000', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      expert: {
        profitTarget: { amount: '$5,000', percentage: '5%' },
        maxDailyLoss: { amount: '$5,000', percentage: '5%' },
        maxOverallLoss: { amount: '$10,000', percentage: '10%' },
        minTradingDays: '5 Days'
      },
      arcFunded: {
        profitTarget: '-',
        maxDailyLoss: { amount: '$5,000', percentage: '5%' },
        maxOverallLoss: { amount: '$10,000', percentage: '10%' },
        minTradingDays: '5 Days'
      }
    }
  };

  // Data for Instant Funding
  const instantFundingData = {
    '5k': {
      profitTarget: 'Unlimited',
      maxDailyLoss: '3 %',
      maxOverallLoss: '6 %',
      minTradingDays: '5 Days',
      accountBalance: '$25,000',
      profitTargetPercent: '10%',
      profitShare: '50%'
    },
    '10k': {
      profitTarget: 'Unlimited',
      maxDailyLoss: '3 %',
      maxOverallLoss: '6 %',
      minTradingDays: '5 Days',
      accountBalance: '$50,000',
      profitTargetPercent: '10%',
      profitShare: '50%'
    },
    '50k': {
      profitTarget: 'Unlimited',
      maxDailyLoss: '3 %',
      maxOverallLoss: '6 %',
      minTradingDays: '5 Days',
      accountBalance: '$100,000',
      profitTargetPercent: '10%',
      profitShare: '75%'
    }
  };

  const twoPhaseAccountSizes = ['8k', '15k', '25k', '50k', '100k'];
  const instantFundingAccountSizes = ['5k', '10k', '50k'];

  const getCurrentData = () => {
    if (challengeType === 'two-phase') {
      return twoPhaseData[selectedSize];
    } else {
      return instantFundingData[selectedSize];
    }
  };

  const handleChallengeTypeChange = (type) => {
    setChallengeType(type);
    // Reset selected size to first available option
    if (type === 'two-phase') {
      setSelectedSize('15k');
    } else {
      setSelectedSize('50k');
    }
  };

  const currentData = getCurrentData();

  return (
    <div className="pricing-table">
      <div className="container">
        {/* Account Type Tabs */}
        <div className="account-type-tabs">
          <button
            className={`account-tab ${accountType === 'standard' ? 'active' : ''}`}
            onClick={() => setAccountType('standard')}
          >
            Standard Account
          </button>
          <button
            className={`account-tab ${accountType === 'customized' ? 'active' : ''}`}
            onClick={() => setAccountType('customized')}
          >
            Customized Account
          </button>
        </div>

        {accountType === 'standard' ? (
          <div className="standard-account">
            {/* Challenge Type Tabs */}
            <div className="challenge-type-tabs">
              <button
                className={`challenge-tab ${challengeType === 'two-phase' ? 'active' : ''}`}
                onClick={() => handleChallengeTypeChange('two-phase')}
              >
                Two-Phase Challenge
              </button>
              <button
                className={`challenge-tab ${challengeType === 'instant' ? 'active' : ''}`}
                onClick={() => handleChallengeTypeChange('instant')}
              >
                Instant Funding
              </button>
            </div>

            {/* Account Size Selection */}
            <div className="account-size-selection">
              {(challengeType === 'two-phase' ? twoPhaseAccountSizes : instantFundingAccountSizes).map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  ${size}
                </button>
              ))}
            </div>

            {/* Pricing Cards */}
            {challengeType === 'two-phase' ? (
              <div className="pricing-cards">
                <div className="pricing-card novice">
                  <div className="card-header">
                    <span className="funded-stage">Funded Stage</span>
                    <h3>Novice</h3>
                  </div>
                  <div className="card-content">
                    <div className="pricing-row">
                      <span className="label">
                        Profit Target
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.novice.profitTarget.amount} ({currentData.novice.profitTarget.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Daily Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.novice.maxDailyLoss.amount} ({currentData.novice.maxDailyLoss.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Overall Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.novice.maxOverallLoss.amount} ({currentData.novice.maxOverallLoss.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Minimum Trading Days
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.novice.minTradingDays}</span>
                    </div>
                  </div>
                </div>

                <div className="pricing-card expert">
                  <div className="card-header">
                    <span className="funded-stage">Funded Stage</span>
                    <h3>Expert</h3>
                  </div>
                  <div className="card-content">
                    <div className="pricing-row">
                      <span className="label">
                        Profit Target
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.expert.profitTarget.amount} ({currentData.expert.profitTarget.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Daily Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.expert.maxDailyLoss.amount} ({currentData.expert.maxDailyLoss.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Overall Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.expert.maxOverallLoss.amount} ({currentData.expert.maxOverallLoss.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Minimum Trading Days
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.expert.minTradingDays}</span>
                    </div>
                  </div>
                </div>

                <div className="pricing-card arc-funded">
                  <div className="card-header">
                    <span className="funded-stage">Funded Stage</span>
                    <h3>ARC Funded Traders</h3>
                  </div>
                  <div className="card-content">
                    <div className="pricing-row">
                      <span className="label">
                        Profit Target
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.arcFunded.profitTarget}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Daily Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.arcFunded.maxDailyLoss.amount} ({currentData.arcFunded.maxDailyLoss.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Overall Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">
                        {currentData.arcFunded.maxOverallLoss.amount} ({currentData.arcFunded.maxOverallLoss.percentage})
                      </span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Minimum Trading Days
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.arcFunded.minTradingDays}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="instant-funding-layout">
                <div className="pricing-card arc-funded single">
                  <div className="card-header">
                    <span className="funded-stage">Funded Stage</span>
                    <h3>ARC Funded Traders</h3>
                  </div>
                  <div className="card-content">
                    <div className="pricing-row">
                      <span className="label">
                        Profit Target
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.profitTarget}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Daily Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.maxDailyLoss}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Maximum Overall Loss
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.maxOverallLoss}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="label">
                        Minimum Trading Days
                        <span className="info-icon">?</span>
                      </span>
                      <span className="value">{currentData.minTradingDays}</span>
                    </div>
                  </div>
                </div>

                <div className="account-details-table">
                  <div className="table-header">
                    <div className="table-cell">Account Balance</div>
                    <div className="table-cell">Profit Target</div>
                    <div className="table-cell">Profit Share</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">{currentData.accountBalance}</div>
                    <div className="table-cell">{currentData.profitTargetPercent}</div>
                    <div className="table-cell">{currentData.profitShare}</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">$50,000</div>
                    <div className="table-cell">10%</div>
                    <div className="table-cell">50%</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">$100,000</div>
                    <div className="table-cell">10%</div>
                    <div className="table-cell">75%</div>
                  </div>
                   <div className="table-row">
                    <div className="table-cell">$150,000</div>
                    <div className="table-cell">10%</div>
                    <div className="table-cell">75%</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">$200,000</div>
                    <div className="table-cell">10%</div>
                    <div className="table-cell">80%</div>
                  </div>
                   <div className="table-row">
                    <div className="table-cell">$250,000</div>
                    <div className="table-cell">10%</div>
                    <div className="table-cell">80%</div>
                  </div>
                </div>
              </div>
            )}

            <div className="terms-notice">
              <p>Please check Terms of Use for detailed info</p>
            </div>
          </div>
        ) : (
          <div className="customized-account">
            {/* <CostomizedAccount/> */}
            <TradingSliders/>
            {/* <div className="customized-content">
              <h3>Customized Account Design</h3>
              <p>We are working on creating customized account options for our traders. This feature will allow you to tailor your trading account according to your specific needs and preferences.</p>
              <p>Stay tuned for updates on this exciting new feature!</p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingTable;