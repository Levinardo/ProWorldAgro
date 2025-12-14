import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import AgentOfDocumentation from './pages/AgentOfDocumentation';
import Registration from './pages/Registration';
import Blogs from './pages/Blogs';
import UpcomingEvents from './pages/UpcomingEvents';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial language direction
    const currentLang = i18n.language || 'en';
    document.documentElement.dir = currentLang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agent-of-documentation" element={<AgentOfDocumentation />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
        </Routes>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(76, 175, 80, 0.95)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              borderRadius: '8px',
              border: '1px solid rgba(76, 175, 80, 0.3)',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;




