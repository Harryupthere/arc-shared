import { useState, useEffect } from 'react';
import { Star } from '@mui/icons-material';
import './HeroSection.scss';
import { GraphIcon, ProfitSplit, TradingDoller, WatchIcon } from '../../icons/icon';
import { ShadeImage } from '../common/iconImage';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const logos = [
    { name: 'fmls:23', type: 'award' },
    { name: 'fmls:24', type: 'award' },
    { name: 'Technology Fast 50', number: '50', type: 'award' },
    { name: 'Technology Fast 50', number: '50', type: 'award' },
    { name: 'Technology Fast 50', number: '50', type: 'award' },
    { name: 'Technology Fast 50', number: '50', type: 'award' },
    { name: 'Technology Fast 50', number: '50', type: 'award' },
    { name: 'EY Entrepreneur Of The Year', type: 'award' },
    { name: 'Forbes', type: 'media' }
  ];

  const features = [
    { icon: <ProfitSplit/>, text: '90% + Profit split ' },
    { icon: <TradingDoller/>, text: '300k+ trading accounts' },
    { icon: <WatchIcon/>, text: 'No time limit in challenge phase' },
    { icon: <GraphIcon/>, text: 'Fully Customizable accounts'  },
    // { icon: 'images/coachIcon.svg', text: 'PERFORMANCE COACH' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="hero-section">
         <picture className="shade-left roated-90"  >
        <ShadeImage />
      </picture>
      <picture className="shade-right" >
        <ShadeImage />
      </picture>
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              {/* SINCE 2020 */}
            </div>

            <h1 className="hero-title">
              Built for Traders,<br />
              Backed by Professionals!
            </h1>

            <p className="hero-description">
            Master your trading skills on our simulated trading platform, improve your trading on a demo ARC Account with up to $300,000 and get a reward of up to 90% of your simulated profits
            </p>

            <div className="hero-actions">
              <a href="#pricing-table" className="btn btn-primary">ARC CHALLENGE</a>
              {/* <a href="#" className="btn btn-outline">FREE TRIAL</a> */}
            </div>

            {/* <div className="trustpilot-section">
              <span>Excellent</span>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>
              <span>25,915 reviews on</span>
              <strong>Trustpilot</strong>
            </div> */}

            <div className="features-row">
              {features.map((feature, index) => (
                <div key={index} className="feature-badge">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* <div className="logos-ticker">
        <div className="logos-track">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="logo-item">
              {logo.type === 'award' && logo.number ? (
                <div className="award-badge">
                  <span className="award-number">{logo.number}</span>
                  <span className="award-text">{logo.name}</span>
                </div>
              ) : (
                <span className="logo-text">{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default HeroSection;