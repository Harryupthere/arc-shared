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
function App() {
  return (
    // <Router>
    <div className="App">
      <Translator />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<AccountsOverview />} />
            <Route path="premium" element={<div>Premium Page</div>} />
            <Route path="profile" element={<div>Profile Page</div>} />
            <Route path="arc-traders" element={<FTMOTraders />} />
            <Route path="arc-academy" element={<div>FTMO Academy Page</div>} />
            <Route path="billing" element={<div>Billing Page</div>} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="downloads" element={<div>Downloads Page</div>} />
            <Route path="social-media" element={<SocialMedia />} />
          </Route>
      </Routes>
    </div>
    // </Router>
  );
}

export default App;