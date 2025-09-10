import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Person,
  Group,
  Receipt,
  EmojiEvents,
  CardMembership,
  Share,
  CalendarMonthOutlined,
  LocationOn,
  PercentRounded,
  MonitorHeartOutlined,
} from '@mui/icons-material';
import { useState } from 'react';

 const mainMenuItems = [
    { path: '/dashboard', icon: Home, label: 'Accounts Overview', exact: true },
    // { path: '/dashboard/premium', icon: Diamond, label: 'Premium' },
    { path: '/dashboard/profile', icon: Person, label: 'Profile' },
    { path: '/dashboard/arc-traders', icon: Group, label: 'ARC Traders' },
    // { path: '/dashboard/arc-academy', icon: School, label: 'ARC Academy' },
    { path: '/dashboard/billing', icon: Receipt, label: 'Billing' },
    { path: '/dashboard/leaderboard', icon: EmojiEvents, label: 'Leaderboard' },
    { path: '/dashboard/certificates', icon: CardMembership, label: 'Certificates' },
    // { path: '/dashboard/downloads', icon: Download, label: 'Downloads' },
    { path: '/dashboard/social-media', icon: Share, label: 'Social Media' },
    { path: '/dashboard/calendar', icon: CalendarMonthOutlined, label: 'Economic Calendar' },
    { path: '#/', icon: LocationOn, label: 'Timezone Converter' },
    { path: 'https://arc-partner-portal.vercel.app/', icon: PercentRounded, label: 'Partnership Deals',newTab: true },
    { path: '#/', icon: MonitorHeartOutlined, label: 'Mentor App' }

  ];
function DashboardSidebar() {
      const location = useLocation();
      const [expandedSections, setExpandedSections] = useState({});
    
      const toggleSection = (section) => {
        setExpandedSections(prev => ({
          ...prev,
          [section]: !prev[section]
        }));
      };
    
     
    
      const isActive = (path, exact = false) => {
        if (exact) {
          return location.pathname === path;
        }
        return location.pathname.startsWith(path);
      };
  return (
     <div className="dashboard-sidebar">
            <div className="sidebar-header">
              <button className="new-challenge-btn">
                New ARC Challenge
              </button>
              <h4>Main Menu </h4>
            </div>

            <div className="sidebar-content">
              <div className="menu-section">
                <nav className="menu-nav">
                  {mainMenuItems.map((item) =>
  item.newTab ? (
    <a
      key={item.path}
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      className="menu-item"
    >
      <item.icon className="menu-icon" />
      <span className="menu-label">{item.label}</span>
    </a>
  ) : (
    <Link
      key={item.path}
      to={item.path}
      className={`menu-item ${isActive(item.path, item.exact) ? 'active' : ''}`}
    >
      <item.icon className="menu-icon" />
      <span className="menu-label">{item.label}</span>
    </Link>
  )
)}

                </nav>
              </div>

            </div>
          </div>
  )
}

export default DashboardSidebar