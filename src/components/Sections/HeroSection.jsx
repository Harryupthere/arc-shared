import { useState, useEffect } from 'react';
import { Star } from '@mui/icons-material';
import './HeroSection.scss';

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
    { icon: 'images/tadingIcon.svg', text: '4 TRADING PLATFORMS' },
    { icon: 'images/academyIcon.svg', text: 'ARC ACADEMY' },
    { icon: 'images/quantIcon.svg', text: 'QUANTLANE' },
    { icon: 'images/watchIcon.svg', text: 'FREE TRIAL' },
    { icon: 'images/coachIcon.svg', text: 'PERFORMANCE COACH' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              SINCE 2020
            </div>

            <h1 className="hero-title">
              Built for Traders,<br />
              Backed by Professionals!
            </h1>

            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, architecto eligendi distinctio rem perferendis repudiandae vitae debitis accusamus hic possimus consectetur ratione nisi nobis nesciunt?
            </p>

            <div className="hero-actions">
              <a href="#" className="btn btn-primary">ARC CHALLENGE</a>
              <a href="#" className="btn btn-outline">FREE TRIAL</a>
            </div>

            <div className="trustpilot-section">
              <span>Excellent</span>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>
              <span>25,915 reviews on</span>
              <strong>Trustpilot</strong>
            </div>

            <div className="features-row">
              {features.map((feature, index) => (
                <div key={index} className="feature-badge">
                  <span className="feature-icon"><img src={feature.icon}/></span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      <div className="logos-ticker">
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
      </div>
      </div>
    </section>
  );
};

export default HeroSection;