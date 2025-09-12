import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { KeyboardArrowDown, Search, Language } from '@mui/icons-material';
import './Header.scss';
import { useDispatch } from 'react-redux';
 import { allCountries } from 'country-telephone-data';
import {setLanguage} from '../../redux/slice/languageSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const navItems = [
    // { 
    //   label: 'How it works', 
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { title: 'Evaluation Process', link: '#' },
    //     { title: 'Trading Objectives', link: '#' },
    //     { title: 'Scaling Plan', link: '#' }
    //   ]
    // },
    { label: 'Home', link: '/' },
    { label: 'FAQ',link: '/faq'},
    // { label: 'Testimonials',link: '#testimonials' },
    { label: 'Build for ARC',link: '/build-arc' },
    // { 
    //   label: 'Trading', 
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { title: 'Blog', link: '#' },
    //     { title: 'Trading Updates', link: '#' },
    //     { title: 'Tools & Services', link: '#' },
    //     { title: 'Trading Platforms', link: '#' },
    //     { title: 'Premium Programme', link: '#' },
    //     { title: 'Symbols', link: '#' },
    //     { title: 'Leaderboard', link: '#' },
    //     { title: 'Economic Calendar', link: '#' },
    //     { title: 'App Suite', link: '#' }
    //   ]
    // },
    { 
      label: 'About us', 
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
    { label: 'Client Area', className: 'client-area' ,link: '/login'}
  ];

    const dispatch = useDispatch();
  
  const handleLanguageClick = (code) => {
    dispatch(setLanguage(code));
    setIsLangOpen(false); // Close dropdown after selection
    // Set Google Translate language
    if (window.google && window.google.translate) {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  // Close dropdown if clicked outside
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

  // Example: filter countries by supported iso codes if needed
  // const supportedIsoCodes = ['en', 'fr', ...];
  // const filteredCountries = allCountries.filter(c => supportedIsoCodes.includes(c.iso2));
  // For now, show allCountries

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h2 className="logo-text animate-gradient ">ARC</h2>
          </Link>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item, index) => (
              <div key={index} className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}>
                <Link
                  to={item.link}
                  className={item.className}
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
            ))}
            <div
              className="language-selector"
              style={{ position: 'relative' }}
              ref={langRef}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer',gap:5 }}
                onClick={() => setIsLangOpen((prev) => !prev)}
              >
                <Language />
                <span>EN</span>
                <KeyboardArrowDown />
              </div>
              {isLangOpen && (
                <div
                  className="language-dropdown"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'black',
                    zIndex: 1000,
                    maxHeight: 350,
                    overflowY: 'auto',
                    minWidth: 180,
                    borderRadius:'10px'
                  }}
                >
                  {allCountries.map((country) => (
                    <div
                      key={country.iso2}
                      onClick={() => handleLanguageClick(country.iso2)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 12px',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: 20, marginRight: 8 }}>
                        {country.flag ? country.flag : (
                          <img
                            src={`https://flagcdn.com/24x18/${country.iso2}.png`}
                            alt={country.name}
                            style={{ width: 20, height: 15, objectFit: 'cover' }}
                          />
                        )}
                      </span>
                      <span>{country.name}</span>
                    </div>
                  ))}
                </div>
              )}
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