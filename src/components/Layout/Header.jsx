import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { KeyboardArrowDown, Search, } from '@mui/icons-material';
import './Header.scss';
import Translator from '../Translator';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // <-- Add this state
  const langRef = useRef(null);
  const location = useLocation()
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'FAQ', link: '/faq' },
    { label: 'How it Works', link: '/build-arc' },
    {
      label: 'About us',
      link: '/about-us',
      // hasDropdown: true,
      // dropdownItems: [
      //   { title: 'About us', link: '#' },
      //   { title: 'Contact us', link: '#' },
      //   { title: 'Careers', link: '#' },
      //   { title: 'Press Kit', link: '#' },
      //   { title: 'Press Release', link: '#' }
      // ]
    },
    // { label: 'Academy' },
    { label: 'Client Area', link: '/login' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangOpen]);

  const handleNavClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const sectionId = link.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Example: filter countries by supported iso codes if needed
  // const supportedIsoCodes = ['en', 'fr', ...];
  // const filteredCountries = allCountries.filter(c => supportedIsoCodes.includes(c.iso2));
  // For now, show allCountries


  return (
    <header className={`header-main-content${isScrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h2 className="logo-text animate-gradient ">ARC</h2>
          </Link>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item, index) => {
              const isActive = item.link === location.pathname;
              return (
                <div key={index} className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}>
                  <Link
                    to={item.link}
                    className={`${item.className ? item.className : ''}${isActive ? ' active' : ''}`.trim()}
                    onClick={item.link && item.link.startsWith('#') ? (e) => handleNavClick(e, item.link) : undefined}
                  >
                    {item.label}
                    {item.hasDropdown && <KeyboardArrowDown />}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="dropdown-menu">
                      <div className="dropdown-content">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <Link key={dropdownIndex} to={dropdownItem.link} className="dropdown-item">
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div>
              <Translator className='' />
            </div>
            <Search className="search-icon" />
          </nav>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;