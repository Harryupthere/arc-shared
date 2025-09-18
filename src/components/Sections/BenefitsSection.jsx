import { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './BenefitsSection.scss';

const BenefitsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);  

  const benefits = [
    {
      title: 'ARC ACADEMY',
      description: 'Learn more',
      icon: '📚',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'TOOLS & SERVICES',
      description: 'Learn more',
      icon: '🛠️',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'FREE TRIAL',
      description: 'Learn more',
      icon: '⏰',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'GROWTH & SCALING PLAN',
      description: 'Learn more',
      icon: '📈',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'TRADING PLATFORMS',
      description: 'Learn more',
      icon: '💻',
      image: 'https://images.pexels.com/photos/3184286/pexels-photo-3184286.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % benefits.length;
      cards.push(benefits[index]);
    }
    return cards;
  };

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <h2>FIND OUT HOW<br />YOU CAN BENEFIT WITH ARC</h2>
        </div>

        <div className="benefits-carousel">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <ChevronLeft />
          </button>

          <div className="benefits-cards">
            {getVisibleCards().map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="card-image">
                  <img src={benefit.image} alt={benefit.title} />
                  <div className="card-overlay">
                    <div className="card-icon">{benefit.icon}</div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{benefit.title}</h3>
                  <a href="#" className="card-link">
                    {benefit.description} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {benefits.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;