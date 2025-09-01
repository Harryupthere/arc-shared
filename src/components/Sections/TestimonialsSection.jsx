import { useState } from 'react';
import { Star } from '@mui/icons-material';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'customer',
      time: '51 minutes ago',
      rating: 5,
      title: 'good',
      content: 'good , is very good job thank you so much'
    },
    {
      name: 'Sett',
      time: '3 hours ago',
      rating: 5,
      title: 'Fantastic support systems to help',
      content: 'Fantastic support systems to help you be successful'
    },
    {
      name: 'Sett',
      time: '3 hours ago',
      rating: 5,
      title: 'My experience with ARC',
      content: 'My experience with ARC has a been a very good one. The journey to being funded and then being funded is a very good experience with their rules, their customer service is quick and very helpful and this has made the experience very good'
    },
    {
      name: 'Feysal Hassan',
      time: '3 hours ago',
      rating: 5,
      title: 'A great Prop firm',
      content: 'It was 3 years ago the time I heard about trading firms like ARC. And since ever I have been trying to pass the challenge'
    },
    {
      name: 'Captain Nemoy Divy',
      time: '3 hours ago',
      rating: 5,
      title: 'Fast payments',
      content: 'Just first payment and second day got exchanged fast with no issues'
    },
    {
      name: 'Reth',
      time: '3 hours ago',
      rating: 5,
      title: 'Amazing experience working with you guys',
      content: 'Amazing experience working with you guys'
    }
  ];

  const videoTestimonials = [
    {
      name: 'MUGI FROM MONGOLIA',
      quote: '"I am very grateful for this opportunity and would like to recommend ARC to traders in Mongolia as we have many good traders here!"',
      image: 'https://images.pexels.com/photos/1484188/pexels-photo-1484188.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'mugi-mongolia'
    },
    {
      name: 'DAISY FROM KENYA',
      quote: '"ARC changes lives, if you stick to your plan, be disciplined, and be consistent in the market. If I can do it, you can also do it. Don\'t give up on your dream."',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'daisy-kenya'
    },
    {
      name: 'CINTHYA FROM ECUADOR',
      quote: '"ARC fights for you, it\'s important to know that they do it!"',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      videoId: 'cinthya-ecuador'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>WHAT <span className="highlight">PEOPLE</span> SAY<br />ABOUT ARC</h2>
          
          <div className="trustpilot-rating">
            <span className="rating-text">Excellent</span>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star" />
              ))}
            </div>
            <span className="rating-details">Rated 4.8 / 5 based on 25,964 reviews on</span>
            <strong className="trustpilot-brand">Trustpilot</strong>
          </div>
        </div>

        <div className="testimonials-grid">
          <div className="text-testimonials">
            <div className="testimonials-header-small">
              <span>Showing our 4 & 5 star reviews</span>
            </div>
            
            <div className="testimonials-cards">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="star" />
                      ))}
                    </div>
                    <span className="verified">✓ Verified</span>
                  </div>
                  <div className="testimonial-meta">
                    <span className="name">{testimonial.name}</span>
                    <span className="time">{testimonial.time}</span>
                  </div>
                  <h4 className="testimonial-title">{testimonial.title}</h4>
                  <p className="testimonial-content">{testimonial.content}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="video-testimonials">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="video-testimonial">
              <div className="video-content">
                <div className="video-thumbnail">
                  <img src={video.image} alt={video.name} />
                  <div className="play-overlay">
                    <div className="youtube-logo">📺</div>
                    <span>Watch on YouTube</span>
                  </div>
                  <div className="ftmo-watermark">
                    <span>ARC</span>
                  </div>
                </div>
              </div>
              <div className="video-info">
                <h3>{video.name}</h3>
                <p>{video.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;