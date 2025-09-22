import './ProcessSection.scss';

const ProcessSection = () => {
  const processes = [
    {
      title: 'EVALUATION PROCESS',
      subtitle: 'DEMO',
      color: 'blue',
      steps: [
        {
          step: 'STEP 01',
          title: 'NOVICE',
          description: 'The ARC Challenge educates traders and leads them to master their trading habits. Traders demonstrate their experience by following our Trading Objectives inspired by key risk management rules when completing an ARC Challenge, traders move on to the Verification step.'
        },
        {
          step: 'STEP 02',
          title: 'EXPERT PHASE',
          description: 'The Verification step verifies the skills traders demonstrated in the ARC Challenge. The Trading Objectives are simplified, with the Profit Target being halved while the Maximum Loss Rules remain intact. Upon passing it, traders get access to an ARC Account.'
        }
      ],
      features: [
        'Trading Tools & Services'
      ]
    },
    {
      title: 'ARC ACCOUNT',
      subtitle: 'MONETIZED DEMO',
      color: 'teal',
      steps: [
        {
          step: 'STEP 03',
          title: 'ARC TRADER',
          description: 'Advancing to another step demonstrates commitment and talent, leading to an ARC Account with fictitious funds of up to $200,000 in a demo environment. Despite being a demo, ARC Traders can be rewarded for their performance with profits without risking their capital and access exclusive opportunities, including ARC Premium Programme.'
        }
      ],
      features: [
        'ARC Account with fictitious funds up to $200,000',
        'Reward up to 90% of simulated profits',
        'Performance Coaching Sessions',
        'ARC Premium Programme',
        'All - Trading Tools & Services'
      ]
    },
    // {
    //   title: 'QUANTLANE',
    //   subtitle: 'PRO - TRADING',
    //   color: 'orange',
    //   icon: '🏢',
    //   steps: [
    //     {
    //       step: 'STEP 04',
    //       title: 'PROFESSIONAL TRADER',
    //       description: 'The absolute best ARC Traders can get an opportunity through our Premium Programme to become professional traders in Quantlane, a proprietary trading firm that manages its own real capital. The career shift involves technical skills, mathematicians, and developers driven by the same passion for the financial markets. This is the final goal of a trading career which ARC envisioned.'
    //     }
    //   ],
    //   features: [
    //     'Contract with fixed salary',
    //     'Performance & Mindset coach',
    //     'Institutional Trading Conditions',
    //     'Spreads, Liquidity, Risk, Framework',
    //     'Custom Platform & Tools'
    //   ]
    // }
  ];

  return (
    <section className="process-section section">
      <div className="container">
        <div className="process-header">
          <h2>SHOW US YOUR<br />TALENT AND BE REWARDED</h2>
        </div>

        <div className="process-cards">
          {processes.map((process, index) => (
            <div key={index} className={`process-card process-card--${process.color}`}>
              <div className="process-card-header">
                <div className="process-icon">{process.icon}</div>
                <div className="process-titles">
                  <h3>{process.title}</h3>
                  <span className="process-subtitle">{process.subtitle}</span>
                </div>
              </div>

              <div className="process-steps">
                {process.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="process-step">
                    <div className="step-header">
                      <span className="step-number">{step.step}</span>
                      <h4>{step.title}</h4>
                    </div>
                    <p className="step-description">{step.description}</p>
                  </div>
                ))}
              </div>

              {process.title === 'EVALUATION PROCESS' && (
                <div className="process-section-title">
                  <span>EVALUATION PROCESS</span>
                </div>
              )}

              {process.title === 'ARC ACCOUNT' && (
                <div className="ftmo-account-section">
                  <h4>ARC ACCOUNT</h4>
                </div>
              )}

              {process.title === 'QUANTLANE' && (
                <div className="quantlane-section">
                  <h4>QUANTLANE</h4>
                </div>
              )}

              <div className="process-features">
                {process.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="process-feature">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`btn btn-${process.color} process-cta`}>
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;