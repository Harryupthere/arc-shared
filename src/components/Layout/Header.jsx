import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyboardArrowDown, Search, Language } from '@mui/icons-material';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { label: 'Testimonials' },
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
                <Link to={item.link} className={item.className}>
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
            <div className="language-selector">
              <Language />
              <span>EN</span>
              <KeyboardArrowDown />
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