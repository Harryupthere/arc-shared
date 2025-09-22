import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import './Footer.scss';
import { Link } from 'react-router-dom';
import imageMap from '../../utlis/helper';
import { ShadeImage } from '../common/iconImage';

const Footer = () => {
  const companyLinks = [
    {title: 'Home', link: '/'},
    {title: 'About us', link: '/about-us'},
    {title: 'How ARC works', link: '/build-arc'},
    {title: 'FAQs', link: '/faq'},

  ];

  const moreLinks = [
    'Affiliate Programme',
    'Shop'
  ];

  const socialLinks = [
    { icon: Facebook, color: '#1877f2' },
    { icon: Twitter, color: '#1da1f2' },
    { icon: Instagram, color: '#e4405f' },
    { icon: YouTube, color: '#ff0000' },
    // { icon: LinkedIn, color: '#0077b5' }
  ];

  const paymentMethods = [
    { name: 'Skrill', logo: imageMap['skrill.svg'] },
    { name: 'Mastercard', logo: imageMap['master.svg'] },
    { name: 'Visa', logo: imageMap['visa.svg'] },
    { name: 'PayPal', logo: imageMap['paypal.svg'] }
  ];

  const legalLinks = [
    {name:'Cookies', link:'#/'},
    {name:'Imprint', link:'#/'},
    {name:'Cookie settings', link:'#/'},
    {name:'Terms & Conditions', link:'/terms-and-condition'},
    {name:'Privacy Policy', link:'/privacy-policy'}
  ];


  return (
    <footer className="footer">
          <picture className="shade-left roated-90"  >
              <ShadeImage />
            </picture>
            <picture className="shade-right" >
              <ShadeImage />
            </picture>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="logo">
              <h2 className="footer-logo animate-gradient ">ARC</h2>
            </Link>

            <div className="company-info">
              <h4>ARC FUNDING</h4>
              <p> Pointe Seraphine, P.O. Box 172, Castries, <br />Saint Lucia</p>

              <div className="contact-info">
                <p>support@myarcfunding.com</p>
                {/* <p>+400 000 000 000</p>
                <p>WhatsApp</p> */}
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>COMPANY</h4>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}><Link to={link.link}>{link.title}</Link></li>
              ))}
            </ul>
          </div>


          <div className="footer-section">
            <h4>SOCIALS</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href="#" className="social-link" style={{ color: social.color }}>
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className='app-section'>
 <div className="footer-payments">
          <h4>PAYMENT OPTIONS</h4>
          <div className="payment-methods">
            {paymentMethods.map((method, index) => (
              <div key={index} className="payment-method">
                <span><img src={method.logo} alt='pay' style={{ maxWidth: '120px' }} /></span>
                {/* <span>{method.name}</span> */}
              </div>
            ))}
          </div>
        </div>
          <div className="footer-newsletter">
            <h4>STAY UPDATED WITH OUR NEWSLETTER!</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button className="btn btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
       

        <div className="footer-legal">
          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <Link to={link.link} key={index}>{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;