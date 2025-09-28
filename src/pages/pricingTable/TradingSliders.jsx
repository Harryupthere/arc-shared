import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingDown, Calendar } from 'lucide-react';
import './TradingSliders.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//const url = `http://localhost:3002/api/v1/users/plan/custom-calculation`
const url = `https://app.arcforyou.com/api/v1/users/plan/custom-calculation`

const accountTable = {
  5000: 24.38, 6000: 29.25, 7000: 34.12, 8000: 39, 9000: 44.14, 10000: 49.29,
  15000: 75, 20000: 107, 25000: 139, 30000: 165, 35000: 191, 40000: 217,
  50000: 269, 60000: 321, 70000: 373, 80000: 425, 90000: 477, 100000: 529,
  150000: 793.5, 200000: 1058, 250000: 1322.5, 300000: 1587
};

const daysTable = {
  2: 2.50, 3: 1.67, 4: 1.25, 5: 1.00
};

const drawdownTable = {
  5: 0.50, 6: 0.60, 7: 0.70, 8: 0.80, 9: 0.90, 10: 1.00,
  11: 1.10, 12: 1.20, 13: 1.30, 14: 1.40, 15: 1.50, 16: 1.60,
  17: 1.70, 18: 1.80, 19: 1.90, 20: 2.00
};

// Allowed values for account balance
const allowedAccountBalances = [
  // 5k to 20k, step 1k
  ...Array.from({ length: 16 }, (_, i) => 5000 + i * 1000), // 5000,6000,...,20000
  // 25k, 30k, 35k, 40k
  25000, 30000, 35000, 40000,
  // 50k to 100k, step 10k
  50000, 60000, 70000, 80000, 90000, 100000,
  // 150k, 200k, 250k, 300k
  150000, 200000
];

// Generate marks from allowed values
let aaa = [
  15000,
  40000,

  100000,
  150000, 200000
]
const accountBalanceMarks = aaa.map((value) => ({
  value,
  label: `$${value >= 1000 ? (value / 1000) + 'K' : value}`
}));

const minAccountBalance = allowedAccountBalances[0];
const maxAccountBalance = allowedAccountBalances[allowedAccountBalances.length - 1];

const TradingSliders = () => {
  const [accountBalance, setAccountBalance] = useState(50000);
  const [drawdown, setDrawdown] = useState(10);
  const [minTradingDays, setMinTradingDays] = useState(3);
  const [price, setPrice] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const navigate = useNavigate();
  // Snap to nearest allowed value
  const handleAccountBalanceChange = (val) => {
    const value = Number(val);
    // Find the closest allowed value
    let closest = allowedAccountBalances[0];
    let minDiff = Math.abs(value - closest);
    for (let i = 1; i < allowedAccountBalances.length; i++) {
      const diff = Math.abs(value - allowedAccountBalances[i]);
      if (diff < minDiff) {
        minDiff = diff;
        closest = allowedAccountBalances[i];
      }
    }
    setAccountBalance(closest);
  };

  const sliders = [
    {
      id: 'amount',
      title: 'Account Balance',
      subtitle: '$15,000 - $300,000',
      min: minAccountBalance,
      max: maxAccountBalance,
      step: 1000, // Smallest step, but value will always snap
      value: accountBalance,
      setValue: handleAccountBalanceChange,
      unit: '',
      prefix: '$',
      icon: <DollarSign size={24} />,
      color: 'primary',
      marks: accountBalanceMarks
    },
    {
      id: 'percentage',
      title: 'Maximum Drawdown',
      subtitle: '5% - 15%',
      min: 5,
      max: 15,
      step: 1,
      value: drawdown,
      setValue: setDrawdown,
      unit: '%',
      prefix: '',
      icon: <TrendingDown size={24} />,
      color: 'primary',
      marks: [
        { value: 5, label: '5%' },
        { value: 8, label: '8%' },
        { value: 10, label: '10%' },
        { value: 12, label: '12%' },
        { value: 15, label: '15%' }
      ]
    },
    {
      id: 'days',
      title: 'Minimum Trading Days',
      subtitle: '2 - 5 days',
      min: 2,
      max: 5,
      step: 1,
      value: minTradingDays,
      setValue: setMinTradingDays,
      unit: ' days',
      prefix: '',
      icon: <Calendar size={24} />,
      color: 'primary',
      marks: [
        { value: 2, label: '2 days' },
        { value: 3, label: '3 days' },
        { value: 4, label: '4 days' },
        { value: 5, label: '5 days' }
      ]
    }
  ];

  const formatValue = (slider) => {
    if (slider.id === 'amount') {
      return `${slider.prefix}${slider.value.toLocaleString()}`;
    }
    if (slider.id === 'days') {
      return `${slider.value} ${slider.value === 1 ? 'day' : 'days'}`;
    }
    return `${slider.prefix}${slider.value}${slider.unit}`;
  };

  const getProgress = (slider) => {
    return ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  };

  const calculateCustomPlan = async (e) => {
    e.preventDefault();
    try {

      const payload = {
        account_size: accountBalance,
        drawdown,
        days: minTradingDays
      }

      const result = await axios.post(url, payload)

      if (result.status == 200) {
        setPrice(result.data.data);
        setShowResult(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    calculatePrice()
  }, [accountBalance, minTradingDays, drawdown])


  const calculatePrice = () => {
    try {
      const basePrice = accountTable[accountBalance] || 0;
      const dayMultiplier = daysTable[minTradingDays] || 1;
      const drawdownMultiplier = drawdownTable[drawdown] || 1;

      const finalPrice = basePrice * dayMultiplier * drawdownMultiplier;

      setPrice(finalPrice.toFixed(2)); // show 2 decimals
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="trading-sliders">
      <div className="sliders-container">
        {sliders.map((slider) => (
          <div key={slider.id} className={`slider-card ${slider.color}`}>
            <div className="slider-header">
              <div className="slider-icon">
                {slider.icon}
              </div>
              <div className="slider-info">
                <h3 className="slider-title">{slider.title}</h3>
                <p className="slider-subtitle">{slider.subtitle}</p>
              </div>
                <div className="slider-value">
              {formatValue(slider)}
            </div>
            </div>

            <div className="slider-track-container">
              <div className="slider-track">
                <div
                  className="slider-progress"
                  style={{ width: `${getProgress(slider)}%` }}
                />
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={slider.value}
                  onChange={(e) =>
                    slider.id === 'amount'
                      ? slider.setValue(e.target.value)
                      : slider.setValue(Number(e.target.value))
                  }
                  className="slider-input"
                />
              </div>

              <div className="slider-marks">
                {slider.marks.map((mark) => (
                  <div
                    key={mark.value}
                    className="slider-mark"
                    style={{
                      left: `${((mark.value - slider.min) / (slider.max - slider.min)) * 100}%`
                    }}
                  >
                    <div className="mark-tick" />
                    <span className="mark-label">{mark.label}</span>
                  </div>
                ))}
              </div>
            </div>

          
          </div>
        ))}
      </div>

      {/* {showResult && ( */}
      <div className="result-card">
        <div>
        <h1>
          <span className="base">Price = </span>
          <span className="target">${price}</span>
        </h1>
        <div className="extra-info">
          <p><strong>Account Balance:</strong> ${accountBalance} | <strong>Drawdown:</strong> {drawdown}% | <strong>Days:</strong> {minTradingDays}</p>
        </div>
        </div>
      <div className="action-buttons">
        <button className="btn btn-primary" onClick={() => navigate('/checkout')}>
          <span>Start Challenge</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default TradingSliders;