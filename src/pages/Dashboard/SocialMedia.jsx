import './SocialMedia.scss';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Discord',
      icon: '💬',
      color: '#5865F2',
      action: 'Join',
      description: 'Platform'
    },
    {
      name: 'Facebook',
      icon: '📘',
      color: '#1877F2',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'Instagram',
      icon: '📷',
      color: '#E4405F',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: '#0A66C2',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'X',
      icon: '🐦',
      color: '#000000',
      action: 'Follow',
      description: 'Platform'
    },
    {
      name: 'Youtube',
      icon: '📺',
      color: '#FF0000',
      action: 'Subscribe',
      description: 'Platform'
    }
  ];

  return (
    <div className="social-media">
      <div className="page-header">
        <div className="header-icon">📱</div>
        <h1>Social Media</h1>
      </div>

      <div className="social-description">
        <p>
          Follow us on our social media where you can see our community updates, events, and much more. You can find us 
          on all major platforms, just choose your favourite one!
        </p>
      </div>

      <div className="social-platforms">
        {socialPlatforms.map((platform, index) => (
          <div key={index} className="platform-card">
            <div className="platform-header">
              <div 
                className="platform-icon"
                style={{ backgroundColor: platform.color }}
              >
                {platform.icon}
              </div>
              <div className="platform-info">
                <span className="platform-label">{platform.description}</span>
                <h3 className="platform-name">{platform.name}</h3>
              </div>
            </div>
            <button 
              className="platform-action-btn"
              style={{ backgroundColor: platform.color }}
            >
              {platform.action} 🔗
            </button>
          </div>
        ))}
      </div>

      <div className="page-footer">
        <div className="footer-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;