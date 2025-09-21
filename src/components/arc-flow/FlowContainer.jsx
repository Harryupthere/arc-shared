import { useRef, useState } from 'react';
import './FlowContainer.scss';
import { GraphUp, Target } from '../../icons/icon';
import { CalendarIcon, Check, ChevronLeft, ChevronRight, Newspaper, Trophy, WalletIcon } from 'lucide-react';
import imageMap from '../../utlis/helper';

import Slider from "react-slick";


var responsiveSlider = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const BuildARC = () => {
  const [accountSize, setAccountSize] = useState(50000);
  const [profitRate, setProfitRate] = useState(4.3);
  const [step3Slide, setStep3Slide] = useState(0);
  const sliderRef = useRef(null);
  const tradingStatsSliderRef = useRef(null);
  const rewardedSliderRef = useRef(null);

  
  const calculateProfit = () => {
    return Math.round((accountSize * profitRate / 100) * 0.9);
  };

  const rewardsData = [
    { name: 'Daniel', location: 'Czechia CZ', amount: '$41,104' },
    { name: 'Anthony', location: 'Canada CA', amount: '$42,428' },
    { name: 'Daniel', location: 'Czechia CZ', amount: '$38,995' },
    { name: 'Jan', location: 'Czechia CZ', amount: '$19,779' },
    { name: 'Rony', location: 'Bangladesh BD', amount: '$27,144' },
    { name: 'Austin', location: 'UK GB', amount: '$26,637' },
    { name: 'Rodrigo', location: 'US US', amount: '$13,777' },
    { name: 'Radek Kultan', location: 'Czechia CZ', amount: '$12,206' }
  ];
  const rules = [
    { title: 'Phase 1 Target', content: '8–10%', icon: <Target /> },
    { title: 'Phase 2 Target', content: '5–7%', icon: <Target /> },
    { title: 'Max Drawdown', content: '9–10%', icon: <GraphUp /> },
    { title: 'Daily Drawdown', content: '3–5%', icon: <GraphUp /> },
    { title: 'Rewards', content: 'Bi-Weekly', icon: <Trophy /> },
    { title: 'Profit Split', content: '70–90%', icon: <Target /> },
    { title: 'Min Profitable Days', content: '3', icon: <CalendarIcon /> },
    { title: 'Max Trading Days', content: 'Unlimited', icon: <CalendarIcon /> },
    { title: 'Trading Leverage', content: '1:125', icon: <GraphUp /> },
  ]
  const evalution = [
    {
      title: 'PICK AND CUSTOMIZE',
      img: imageMap['account.jpg'],
      description: 'Select the amount of virtual capital you will manage and customise the rules according to your strategy.'
    },
    { title: 'PURCHASE CHALLENGE', 
      description: 'The fee for the challenge is the only money you spend. Pay with credit card or crypto.',
      img: imageMap['checkout.jpg'],
     },
    { title: 'STEP COMPLETE',
       description: 'If you successfully reached your targets without breaching the rules, you can progress to the next step!',
      img: imageMap['profit.jpg'],
       },
    { title: 'CHALLENGE COMPLETE', description: 'Get your certificate and progress to the Master account.',
      img: imageMap['verified.png'],
     },
  ]

  const step2Data = [
    { title: 'MASTER ACCOUNT', 
      description: 'You are now trading on demo account with virtual money, on a professional trading platform with real-time market data from liquidity providers.',
      img: imageMap['wallet.png'],
    },
    { title: 'GET YOUR REWARDS', 
      description: 'After the first two weeks, you can start requesting your rewards. Get up to 90% of your simulated profits as a reward.',
      img: imageMap['medal.png'],
     },
    { title: 'RISE & CRYPTO TRANSFERS',
       description: 'The legal relationship between you and ARC is based on the ARC Member Program Agreement that we will sign with you after you pass your Evaluation.',
       img: imageMap['money-exchange.png'],},
    { title: 'START TRADING',
       description: 'You\'re in! You get your Master Account credentials, just like in the Evaluation phase. Now you can monetize your DEMO trading.',
      img: imageMap['stock-market.png'], },
    { title: 'RISK MANAGEMENT',
       description: 'Learn advanced risk management techniques to protect your virtual capital and maximize long-term profitability.',
      img: imageMap['risk-management.png'],
      },
    { title: 'PERFORMANCE TRACKING',
       description: 'Monitor your trading performance with detailed analytics and insights to improve your trading strategy.',
      img: imageMap['performance.png'],}
  ];

  const step3Data = [
    { title: 'REWARD PROCESSING', 
      description: 'Your rewards are processed quickly and efficiently through our automated system within 48 hours.',
      img: imageMap['medal.png'],
     },
    { title: 'MULTIPLE PAYMENT OPTIONS', 
      description: 'Choose from various payment methods including bank transfers, crypto, and digital wallets for maximum convenience.',
    img: imageMap['credit-card.png'],},
    { title: 'PROFIT SHARING', 
      description: 'Enjoy up to 90% profit sharing on your successful trades, one of the highest rates in the industry.',
      img: imageMap['doller.png'],
     },
    { title: 'CONTINUOUS REWARDS', 
      description: 'Earn rewards bi-weekly based on your trading performance and consistency in the markets.',
      img: imageMap['medal.png'],},
    { title: 'SCALING OPPORTUNITIES', 
      description: 'Successful traders can scale up their accounts and manage larger amounts of virtual capital.',
    img: imageMap['stock-market.png'], },
    { title: 'COMMUNITY RECOGNITION',
       description: 'Top performers are featured in our success stories and trader spotlight sections.',
      img: imageMap['performance.png'], }
  ];

  const faqItems = [
    { question: 'What Is ARC?', answer: 'ARC is a simulated trading firm that allows traders to evaluate their skills through trading challenges. Traders can trade on demo accounts with virtual capital and earn real profits as a reward for their performance.' },
    { question: 'What Is a Trading Challenge?', answer: 'A Trading Challenge is a product offered by ARC that tests traders\' skills. It involves trading on a demo account with virtual capital while adhering to specific rules and targets. Successful completion of the challenge grants access to a Master Account.' },
    { question: 'What Are the Leverages?', answer: 'The trading leverage provided by ARC is typically 1:125. This means that for every $1 of your own capital, you can control up to $125 in the market. Leverage allows traders to amplify their potential profits, but it also increases the risk of losses.' },
    { question: 'Holding Trades Over the Weekend', answer: 'Yes, traders are allowed to hold trades over the weekend. However, it\'s important to be aware of potential market gaps and changes in conditions that can occur during this time.' }
  ];

  return (
    <>
      <div className="build-arc-page">
        {/* How It Works Section */}
        <section className="how-it-works-section">
          <div className="container">
            <div className="section-header">
              <h1>How It Works</h1>
              <p>Test your trading skills and trade simulated capital. Get real cash as a reward for your skills.</p>
            </div>

            <div className="phase-section">
              <div className="phase-header">
                <h2><span className="phase-number">Phase 1:</span> Novice (Evaluation Stage)</h2>
                <div className="navigation-arrows">
                  <button className="nav-arrow" onClick={() => sliderRef.current.slickPrev()}>←</button>
                  <button className="nav-arrow" onClick={() => sliderRef.current.slickNext()}>→</button>
                </div>
              </div>

              <p className="phase-description">
                Our evaluation process consists of a product called the Trading Challenge, which tests your
                trading skills. It is designed to be challenging, and only the best traders pass. Show us what
                you've got!
              </p>
              <div className="slider-container">
                <Slider ref={sliderRef} {...responsiveSlider}>
                  {evalution.map((item, index) => (
                    <div className="step-card" key={index}>
                      <div className='image'><img src={item.img} alt='img' /></div>
                      <div className="step-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="container">
            <div className="welcome-content">
              <div className="welcome-text">
                <h2>Welcome To<br />Simulated Trading</h2>
                <p>
                  At a simulated trading firm like ARC, you're given a unique opportunity to
                  <strong> evaluate your trading skills through our trading challenges</strong> – trade on demo accounts with virtual capital and
                  potentially <strong>earn real profits as a reward for your performance.</strong>
                </p>
                <p>
                  Essentially, we evaluate your skill, and then you're given a pool of virtual
                  money to trade and maximize profits.
                </p>
              </div>
              <div className="profit-calculator">
                <h3>Estimate Your Profits!</h3>
                <div className="calculator-controls">
                  <div className="control-group">
                    <label>Account size</label>
                    <div className="size-control">
                      <button onClick={() => setAccountSize(Math.max(10000, accountSize - 10000))}>-</button>
                      <span>${accountSize.toLocaleString()}</span>
                      <button onClick={() => setAccountSize(Math.min(200000, accountSize + 10000))}>+</button>
                    </div>
                  </div>
                  <div className="control-group">
                    <label>Profit Rate</label>
                    <div className="rate-control">
                      <span>{profitRate}%</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="0.1"
                        value={profitRate}
                        onChange={(e) => setProfitRate(parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
                <div className="profit-result">
                  <div className="result-label">Take Home (On 90% Profit Split)</div>
                  <div className="result-amount">${calculateProfit().toLocaleString()}</div>
                  <div className="result-period">/month</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Master Account Section */}
        <section className="master-account-section">
          <div className="container">
            <div className="phase-header">
              <h2><span className="phase-number">Step 2:</span> Master Account</h2>
              <div className="navigation-arrows">
                  <button className="nav-arrow" onClick={() => tradingStatsSliderRef.current.slickPrev()}>←</button>
                  <button className="nav-arrow" onClick={() => tradingStatsSliderRef.current.slickNext()}>→</button>
              </div>
            </div>
            <p className="phase-description">
              Once you complete all the trading objectives defined by your Trading Challenge and follow
              the steps outlined below, you will gain access to your Master Account in a simulated demo
              environment with virtual funds.
            </p>

           <div className="slider-container">
                <Slider ref={tradingStatsSliderRef} {...responsiveSlider}>
                  {step2Data.map((item, index) => (
                    <div className="step-card" key={index}>
                      <div className='image'><img src={item.img} alt='img' /></div>
                      <div className="step-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

            {/* Trading Stats */}
            <div className="trading-stats">
              <div className="stats-grid">
                {rules?.map((rule, index) => (
                  <div className="stat-item" key={index}>
                    <div className="stat-label">{rule.title}</div>
                    <div className="stat-value">
                      <div className="stat-icon">{rule.icon}</div>
                      {rule.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="customizable-trading">
                <h3>Customizable Trading Challenge Rules</h3>
                <p>Based on how you personalized the challenge, there are a few simple targets you need to meet while not breaching the limits.                  </p>
                <p>Your dashboard always stays in sync with your trading platform, so you can focus on trading.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Step 3 */}
        <section className="master-account-section">
          <div className="container">
            <div className="phase-header">
              <h2><span className="phase-number">Step 3:</span> Be Rewarded</h2>
              <div className="navigation-arrows">
               <button className="nav-arrow" onClick={() => rewardedSliderRef.current.slickPrev()}>←</button>
                  <button className="nav-arrow" onClick={() => rewardedSliderRef.current.slickNext()}>→</button>
              </div>
            </div>
            <p className="phase-description">
              Our evaluation process consists of a product called the Trading Challenge, which tests your trading skills. It is designed to be challenging, and only the best traders pass. Show us what you've got!
            </p>
            <div className="slider-container">
             <Slider ref={rewardedSliderRef} {...responsiveSlider}>
                  {step3Data.map((item, index) => (
                    <div className="step-card" key={index}>
                      <div className='image'><img src={item.img} alt='img' /></div>
                      <div className="step-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
            </div>
          </div>
        </section>
        {/* Rewards Section */}
        <section className="rewards-section">
          <div className="container">
            <div className="rewards-header">
              <h2>Fast & Reliable Rewards</h2>
              <p>Enjoy hassle-free payouts as a reward for your simulated trading. Because you shouldn't wait for your money.</p>
            </div>

            <div className="payment-methods-grid">
              <div className="payment-method-card rise">
                <div className="method-content">
                  <div className="method-info">
                    <h3>Rise</h3>
                    <p>You can withdraw via bank transfer, crypto, and many local payment methods.</p>
                  </div>
                  <div className="method-icon">📈</div>
                </div>
              </div>

              <div className="payment-method-card crypto">
                <div className="method-content">
                  <div className="method-info">
                    <h3>Crypto Payouts</h3>
                    <p>We support payouts via USDC and other stablecoins.</p>
                  </div>
                  <div className="method-icon">💰</div>
                </div>
              </div>
            </div>

            <div className="guarantee-section">
              <div className="guarantee-badge">
                <div className="badge-icon">🛡️</div>
                <div className="badge-content">
                  <h3>48 Hours Reward Guarantee</h3>
                  <p>Get Paid within 48 Hours or We Pay 100% Profit Split</p>
                </div>
              </div>
              <div className="support-stats">
                <div className="support-stat">
                  <div className="stat-icon">🕐</div>
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Customer Support</div>
                </div>
                <div className="support-stat">
                  <div className="stat-icon">💵</div>
                  <div className="stat-value">$6M+</div>
                  <div className="stat-label">Overall Paid Out</div>
                </div>
              </div>
            </div>

            {/* <div className="rewards-grid">
              <h3>REWARDS & SUCCESS STORIES</h3>
              <div className="rewards-cards">
                {rewardsData.map((reward, index) => (
                  <div key={index} className="reward-card">
                    <div className="reward-info">
                      <div className="reward-amount">{reward.amount}</div>
                      <div className="reward-name">{reward.name}</div>
                      <div className="reward-location">{reward.location}</div>
                    </div>
                    <div className="reward-certificate">📜</div>
                  </div>
                ))}
              </div>
              <button className="more-rewards-btn">More Rewards</button>
            </div> */}
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="faq-section">
          <div className="container">
            <div className="faq-content">
              <div className="faq-left">
                <h2>Frequently Asked Questions</h2>
                <p>Something left unanswered? Check out the full FAQs.</p>
                <button className="more-faqs-btn">More FAQs</button>
              </div>
              <div className="faq-right">
                {faqItems.map((question, index) => (
                  <div key={index} className="faq-item">
                    <span>{question}</span>
                    <span className="faq-toggle">+</span>
                  </div>
                ))}
                 {faqItems.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Company Section */}
        {/* <section className="company-section">
          <div className="container">
            <div className="company-content">
              <div className="company-left">
                <img src={imageMap['map.avif']} alt='map' />
              </div>
              <div className="company-right">
                <h2>Real Company.<br />Real People.</h2>
                <div className="company-stats">
                  <div className="company-stat">
                    <div className="stat-number">40+</div>
                    <div className="stat-label">Dedicated professionals</div>
                  </div>
                  <div className="company-stat">
                    <div className="stat-number">3</div>
                    <div className="stat-label">Offices around the world</div>
                  </div>
                  <div className="company-stat">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Available customer support</div>
                  </div>
                </div>
                <p>
                  Created by experienced tech entrepreneurs and traders all around the world.
                  Transparency and professionalism are at the core of our values.
                </p>
                <button className="more-about-btn">More About Us</button>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default BuildARC;