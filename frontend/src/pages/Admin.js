import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import {
  authenticateAdmin,
  getFilteredRegistrations,
  updateRegistrationStatus,
  initializeAdmin
} from '../services/firestore';
import './Admin.css';

// Sidebar Navigation Items
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'registrations', label: 'Registrations', icon: '👥' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
];

const Admin = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Dashboard state
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Check if admin is already logged in
  useEffect(() => {
    const savedAdmin = localStorage.getItem('adminData');
    if (savedAdmin) {
      try {
        const parsedAdmin = JSON.parse(savedAdmin);
        setAdminData(parsedAdmin);
        setIsLoggedIn(true);
      } catch (error) {
        localStorage.removeItem('adminData');
      }
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await authenticateAdmin(loginForm.email, loginForm.password);
      if (result.success) {
        setAdminData(result.admin);
        setIsLoggedIn(true);
        localStorage.setItem('adminData', JSON.stringify(result.admin));
        toast.success('Login successful!');
      } else {
        toast.error(result.error || 'Login failed');
      }
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminData(null);
    localStorage.removeItem('adminData');
    toast.success('Logged out successfully');
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-page">
        <div className="container">
          <div className="login-container glass-card">
            <div className="login-header">
              <div className="flag-emoji">🇵🇰</div>
              <h1>Admin Login</h1>
              <p>Access the registration management system</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                  placeholder="admin@agentofdocumentation.pk"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="login-btn btn-modern"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="admin-init-section">
              <p className="init-text">First time setup? Initialize admin user:</p>
              <button
                onClick={() => initializeAdmin()}
                className="init-admin-btn"
              >
                Initialize Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSidebarOpen(false);
    }
  };

  const renderDashboardContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview onSectionChange={handleSectionChange} />;
      case 'registrations':
        return <RegistrationManagement />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView onInitializeAdmin={initializeAdmin} />;
      default:
        return <DashboardOverview onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div
        className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}
        onClick={handleBackdropClick}
      >
        <div className="sidebar-header">
          <div className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span></span>
          </div>
          <div className="sidebar-brand">
            <div className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)}>
              ✕
            </div>
            <div className="flag-emoji">🇵🇰</div>
            <h3>Admin Panel</h3>
          </div>
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleSectionChange(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="admin-info">
            <p>{adminData?.name || 'Super Admin'}</p>
            <small>{adminData?.email}</small>
          </div>
          <button onClick={handleLogout} className="sidebar-logout">
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`admin-main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="main-header">
          <div
            className="mobile-menu-toggle"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          ></div>
          <h1>{NAV_ITEMS.find(item => item.id === activeSection)?.label || 'Dashboard'}</h1>
          <div className="header-actions">
            <button onClick={handleLogout} className="mobile-logout">
              Logout
            </button>
          </div>
        </div>

        <div className="main-content">
          {renderDashboardContent()}
        </div>
      </div>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = ({ onSectionChange }) => {
  return (
    <div className="dashboard-overview">
      <div className="stats-grid">
        <div className="stat-card glass-card stat-primary">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h3>0</h3>
            <p>Total Registrations</p>
          </div>
        </div>
        <div className="stat-card glass-card stat-warning">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>0</h3>
            <p>Pending Review</p>
          </div>
        </div>
        <div className="stat-card glass-card stat-success">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>0</h3>
            <p>Accepted</p>
          </div>
        </div>
        <div className="stat-card glass-card stat-danger">
          <div className="stat-icon">❌</div>
          <div className="stat-content">
            <h3>0</h3>
            <p>Rejected</p>
          </div>
        </div>
      </div>

      <div className="quick-actions glass-card">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn primary" onClick={() => onSectionChange('registrations')}>
            👥 View Registrations
          </button>
          <button className="action-btn secondary" onClick={() => onSectionChange('analytics')}>
            📊 View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

// Registration Management Component
const RegistrationManagement = () => {
  return (
    <div className="registration-management">
      <div className="firebase-error-message glass-card">
        <div className="error-content">
          <h4>⚠️ Database Configuration Required</h4>
          <p>Firebase is not properly configured. To enable full functionality:</p>
          <ol>
            <li>Go to your <a href="https://vercel.com/levinardos-projects/pro-world-agro/settings/environment-variables" target="_blank" rel="noopener noreferrer">Vercel Dashboard</a></li>
            <li>Add the 7 Firebase environment variables listed in <code>VERCEL_ENV_SETUP.md</code></li>
            <li>Redeploy the application</li>
          </ol>
          <p>In the meantime, you can still access the admin interface and explore the UI.</p>
        </div>
      </div>
    </div>
  );
};

// Analytics View Component
const AnalyticsView = () => {
  return (
    <div className="analytics-view">
      <div className="analytics-card glass-card">
        <h3>📊 Registration Analytics</h3>
        <p>Analytics will be available once Firebase is configured and data is collected.</p>
      </div>
    </div>
  );
};

// Settings View Component
const SettingsView = ({ onInitializeAdmin }) => {
  const [isInitializing, setIsInitializing] = useState(false);

  const handleInitializeAdmin = async () => {
    setIsInitializing(true);
    try {
      const result = await onInitializeAdmin();
      if (result.success) {
        toast.success('Admin account initialized successfully!');
      } else {
        toast.error(result.error || 'Failed to initialize admin account');
      }
    } catch (error) {
      toast.error('Error initializing admin account');
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="settings-view">
      <div className="settings-card glass-card">
        <h3>🔧 System Configuration</h3>
        <div className="settings-section">
          <h4>Admin Account Setup</h4>
          <p>Initialize the default admin account if it doesn't exist.</p>
          <div className="admin-credentials">
            <div className="credential-item">
              <strong>Email:</strong> admin@agentofdocumentation.pk
            </div>
            <div className="credential-item">
              <strong>Password:</strong> admin123
            </div>
          </div>
          <button
            onClick={handleInitializeAdmin}
            disabled={isInitializing}
            className="initialize-btn"
          >
            {isInitializing ? 'Initializing...' : 'Initialize Admin Account'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
