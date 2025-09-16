import React, { useState, useEffect } from 'react';
import { Minus, Plus, Calculator, TrendingUp } from 'lucide-react';
import './EstimateProfit.scss';

function EstimateProfit() {
  const [accountSize, setAccountSize] = useState(50000);
  const [profitRate, setProfitRate] = useState(5);
  const [calculatedProfit, setCalculatedProfit] = useState(0);

  // Calculate profit whenever account size or profit rate changes
  useEffect(() => {
    const profit = (accountSize * profitRate) / 100;
    setCalculatedProfit(profit);
  }, [accountSize, profitRate]);

  const handleAccountSizeChange = (change) => {
    const newSize = Math.max(0, Math.min(1000000, accountSize + change));
    setAccountSize(newSize);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <div className="estimate-profit">
      {/* Main Content */}
      <div className="main-content">
        {/* Calculator Card */}
        <div className="calculator">
          <div className="calculator__header">
            <TrendingUp className="calculator__icon" />
            <h2 className="calculator__title">Estimate Your Profits!</h2>
          </div>

          {/* Account Size */}
          <div className="input-group">
            <label className="input-group__label">Account Size</label>
            <div className="account-size-control">
              <button
                onClick={() => handleAccountSizeChange(-5000)}
                className="account-size-control__button"
              >
                <Minus className="account-size-control__icon" />
              </button>
              
              <div className="account-size-control__display">
                <div className="account-size-control__amount">
                  {formatCurrency(accountSize)}
                </div>
                <div className="account-size-control__formatted">
                  ({formatLargeNumber(accountSize)})
                </div>
              </div>
              
              <button
                onClick={() => handleAccountSizeChange(5000)}
                className="account-size-control__button"
              >
                <Plus className="account-size-control__icon" />
              </button>
            </div>
          </div>

          {/* Profit Rate */}
          <div className="input-group">
            <label className="input-group__label">Profit Rate</label>
            <div className="profit-rate-display">
              <span className="profit-rate-display__value">{profitRate.toFixed(1)}%</span>
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="30"
                step="0.1"
                value={profitRate}
                onChange={(e) => setProfitRate(parseFloat(e.target.value))}
                className="slider"
              />
              <div className="slider-labels">
                <span>0%</span>
                <span>15%</span>
                <span>30%</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="result">
            <div className="result__content">
              <div className="result__label">Estimated Profit</div>
              <div className="result__amount">
                {formatCurrency(calculatedProfit)}
              </div>
            </div>
          </div>
          {/* Calculate Button */}
          <button className="calculate-button">
            <Calculator className="calculate-button__icon" />
            <span>Calculate Profit</span>
          </button>

        </div>

      </div>
    </div>
  );
}

export default EstimateProfit;