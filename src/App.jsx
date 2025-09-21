import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import './App.scss';
import Login from './components/Layout/Login';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Translator from './components/Translator';
import AccountsOverview from './pages/Dashboard/AccountsOverview';
import FTMOTraders from './pages/Dashboard/FTMOTraders';
import Leaderboard from './pages/Dashboard/Leaderboard';
import Certificates from './pages/Dashboard/Certificates';
import SocialMedia from './pages/Dashboard/SocialMedia';
import Profile from './pages/Dashboard/profile/Profile';
import Billing from './pages/Dashboard/Billing';
import EconomyCalendar from './pages/Dashboard/EconomyCalnedar';
import MainContent from './pages/dashboard-components/MainContent';
import Trader from './pages/Dashboard/Trader';
import Withdrawal from './pages/Dashboard/Withdrawal';
import FlowContainer from './components/arc-flow/FlowContainer';
import FAQ from './pages/Faq';
import AboutUs from './pages/Aboutus';
import Checkout from './pages/Checkout';
import Tnc from './pages/Tnc';
import PrivacyPolicy from './pages/Privacy';

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Translator /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/build-arc" element={<FlowContainer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-condition" element={<Tnc />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<AccountsOverview />} />
          <Route path="premium" element={<div>Premium Page</div>} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<MainContent />} />
          {/* <Route path="arc-traders" element={<FTMOTraders />} /> */}
          <Route path="arc-academy" element={<div>FTMO Academy Page</div>} />
          <Route path="billing" element={<Billing />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="downloads" element={<div>Downloads Page</div>} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="calendar" element={<EconomyCalendar />} />
          <Route path="arc-traders" element={<Trader />} />
          <Route path="arc-traders/withdrawal" element={<Withdrawal />} />
        </Route>
      </Routes>
    </div>
    // </Router>
  );
}

export default App;