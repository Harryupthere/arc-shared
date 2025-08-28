import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import './App.scss';
import Login from './components/Layout/Login';
import Translator from './components/Translator';

function App() {
  return (
    // <Router>
      <div className="App">
        <Translator />
        <Routes>
            <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    // </Router>
  );
}

export default App;