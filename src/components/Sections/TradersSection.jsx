import './TradersSection.scss';

const TradersSection = () => {
  const traders = [
    { name: 'PEPIJN', country: 'NETHERLANDS', flag: '🇳🇱', image: 'https://images.pexels.com/photos/1484188/pexels-photo-1484188.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'DAISY', country: 'KENYA', flag: '🇰🇪', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'CHOON CHIAT', country: 'MALAYSIA', flag: '🇲🇾', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'UGNIUS', country: 'LITHUANIA', flag: '🇱🇹', image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'CINTHYA', country: 'ECUADOR', flag: '🇪🇨', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'JUAN', country: 'COSTA RICA', flag: '🇨🇷', image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  return (
    <section className="traders-section section">
      <div className="container">
        <div className="traders-content">
          <div className="traders-grid">
            <div className="traders-cards">
              {traders.map((trader, index) => (
                <div key={index} className="trader-card">
                  <div className="trader-image">
                    <img src={trader.image} alt={trader.name} />
                    <div className="play-button">▶</div>
                  </div>
                  <div className="trader-info">
                    <div className="trader-flag">{trader.flag}</div>
                    <div className="trader-details">
                      <h4>{trader.name}</h4>
                      <p>{trader.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="traders-stats">
              <p className="stats-text">
                ARC HAS ALREADY CREATED MORE THAN <span className="highlight">240,000+</span> ARC ACCOUNTS
              </p>
            </div>
          </div>
          
          <div className="traders-description">
            <h2>ENHANCE YOUR SKILLS WITH MODERN PROP TRADING FIRM</h2>
            
            <p>
              ARC developed a unique Evaluation Process for traders, consisting of an <strong>ARC Challenge</strong> and a Verification, specifically tailored to discover trading talents.
            </p>
            
            <p>
              Upon completing the Evaluation Process, traders are offered to enhance their trading skills on an ARC Account in a demo environment as ARC Traders with a balance of up to $200,000 in fictitious funds. Despite trading on a demo account, ARC Traders can be rewarded for their performance with up to 90% of the simulated profits they generate, without any risk of losing their own capital. The best-performing ARC Traders can progress into our Premium Programme, where they can be employed as professional traders with fixed salary by Quantlane - a traditional proprietary trading company.
            </p>
            
            <p>
              Journey to become an ARC Trader might be challenging, but our educational Tools & Services are here to help everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradersSection;