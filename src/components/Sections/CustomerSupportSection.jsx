import './CustomerSupportSection.scss';
//import { allCountries } from 'country-telephone-data';

const CustomerSupportSection = () => {
  const languages = [
    { name: 'Arabic', flag: '🇸🇦' },
    { name: 'Czech', flag: '🇨🇿' },
    { name: 'Spanish', flag: '🇪🇸' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'Hebrew', flag: '🇮🇱' },
    { name: 'Italian', flag: '🇮🇹' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Polish', flag: '🇵🇱' },
    { name: 'Portuguese', flag: '🇵🇹' },
    { name: 'Russian', flag: '🇷🇺' },
    { name: 'Serbian', flag: '🇷🇸' },
    { name: 'Swahili', flag: '🇰🇪' },
    { name: 'Tagalog', flag: '🇵🇭' },
    { name: 'Turkish', flag: '🇹🇷' },
    { name: 'Ukrainian', flag: '🇺🇦' },
    { name: 'English', flag: '🇬🇧' },
    { name: 'Vietnamese', flag: '🇻🇳' },
    { name: 'Swedish', flag: '🇸🇪' },
    { name: 'Romanian', flag: '🇷🇴' }
  ];

  const supportChannels = [
    {
      icon: '📱',
      title: 'WHATSAPP',
      description: '',
      link: '#'
    },
    {
      icon: '💬',
      title: 'LIVECHAT',
      description: '',
      link: '#'
    },
    {
      icon: '✉️',
      title: 'EMAIL',
      description: 'support@ftmo.com',
      link: 'mailto:support@ftmo.com'
    },
    {
      icon: '📞',
      title: 'PHONE',
      description: '+420 910 920 310',
      link: 'tel:+420910920310'
    }
  ];

  return (
    <section className="customer-support-section">
      <div className="container">
        <div className="support-header">
          <h2>CUSTOMER SUPPORT IN <span className="highlight">20 LANGUAGES</span></h2>
        </div>

        <div className="languages-grid">
          {languages.map((language, index) => (
            <div key={index} className="language-card">
              <span className="language-flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </div>
          ))}
        </div>

        <div className="support-channels">
          {supportChannels.map((channel, index) => (
            <a key={index} href={channel.link} className="support-channel">
              <div className="channel-icon">{channel.icon}</div>
              <div className="channel-content">
                <h4>{channel.title}</h4>
                {channel.description && <p>{channel.description}</p>}
              </div>
            </a>
          ))}
        </div>

        <div className="support-note">
          <p>24/7 FOR EMAILS, LIVE CHAT AND WHATSAPP</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportSection;