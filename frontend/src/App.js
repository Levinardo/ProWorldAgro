import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AgentOfDocumentation from './pages/AgentOfDocumentation';
import Registration from './pages/Registration';
import Workforce from './pages/Workforce';
import Blogs from './pages/Blogs';
import UpcomingEvents from './pages/UpcomingEvents';
import Admin from './pages/Admin';
import OfficialPartner from './pages/OfficialPartner';
import WhyVisit from './pages/WhyVisit';
import Marketplace from './pages/Marketplace';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Layout component that conditionally renders Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};

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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/official-partner" element={<OfficialPartner />} />
            <Route path="/why-visit" element={<WhyVisit />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/agent-of-documentation" element={<AgentOfDocumentation />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/workforce" element={<Workforce />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
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




