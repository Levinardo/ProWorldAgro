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

const Admin = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Dashboard state
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: ''
  });
  const [isLoadingRegistrations, setIsLoadingRegistrations] = useState(false);

  // Check if admin is already logged in
  useEffect(() => {
    const savedAdmin = localStorage.getItem('adminData');
    if (savedAdmin) {
      try {
        const parsedAdmin = JSON.parse(savedAdmin);
        setAdminData(parsedAdmin);
        setIsLoggedIn(true);
        loadRegistrations();
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
        loadRegistrations();
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
    setRegistrations([]);
    setFilteredRegistrations([]);
    localStorage.removeItem('adminData');
    toast.success('Logged out successfully');
  };

  const loadRegistrations = async () => {
    setIsLoadingRegistrations(true);
    try {
      const result = await getFilteredRegistrations();
      if (result.success) {
        setRegistrations(result.data);
        applyFilters(result.data, activeTab, filters);
      } else {
        toast.error('Failed to load registrations');
      }
    } catch (error) {
      toast.error('Error loading registrations');
    } finally {
      setIsLoadingRegistrations(false);
    }
  };

  const applyFilters = (data, tab, currentFilters) => {
    let filtered = data;

    // Apply tab filter
    if (tab !== 'all') {
      filtered = filtered.filter(reg => reg.status === tab);
    }

    // Apply date filters
    if (currentFilters.startDate) {
      const startDate = new Date(currentFilters.startDate);
      startDate.setHours(0, 0, 0, 0);
      filtered = filtered.filter(reg => {
        const regDate = reg.createdAt?.toDate ? reg.createdAt.toDate() : new Date(reg.createdAt);
        return regDate >= startDate;
      });
    }

    if (currentFilters.endDate) {
      const endDate = new Date(currentFilters.endDate);
      endDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter(reg => {
        const regDate = reg.createdAt?.toDate ? reg.createdAt.toDate() : new Date(reg.createdAt);
        return regDate <= endDate;
      });
    }

    setFilteredRegistrations(filtered);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    applyFilters(registrations, tab, filters);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(registrations, activeTab, newFilters);
  };

  const handleStatusUpdate = async (registrationId, newStatus) => {
    try {
      const result = await updateRegistrationStatus(registrationId, newStatus);
      if (result.success) {
        toast.success(`Registration ${newStatus} successfully`);
        loadRegistrations(); // Reload to get updated data
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      toast.error('Error updating status');
    }
  };

  const initializeAdminUser = async () => {
    try {
      const result = await initializeAdmin();
      if (result.success) {
        toast.success('Admin user initialized. Email: admin@agentofdocumentation.pk, Password: admin123');
      } else {
        toast.error('Failed to initialize admin');
      }
    } catch (error) {
      toast.error('Error initializing admin');
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-page">
        <div className="container">
          <div className="login-container glass-card">
            <div className="login-header">
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
                onClick={initializeAdminUser}
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

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="admin-header glass-card">
          <div className="header-content">
            <h1>Admin Dashboard</h1>
            <p>Welcome, {adminData?.name || 'Admin'}</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

        <div className="dashboard-content">
          {/* Filters Section */}
          <div className="filters-section glass-card">
            <h3>Filters</h3>
            <div className="filter-controls">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  value={filters.startDate}
                  onChange={(e) => handleFilterChange({ ...filters, startDate: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  value={filters.endDate}
                  onChange={(e) => handleFilterChange({ ...filters, endDate: e.target.value })}
                />
              </div>
              <button
                onClick={() => handleFilterChange({ startDate: '', endDate: '' })}
                className="clear-filters-btn"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Status Tabs */}
          <div className="status-tabs glass-card">
            <div className="tabs">
              {[
                { key: 'all', label: 'All Registrations', count: registrations.length },
                { key: 'submitted', label: 'Form Submitted', count: registrations.filter(r => r.status === 'submitted').length },
                { key: 'accepted', label: 'Accepted', count: registrations.filter(r => r.status === 'accepted').length },
                { key: 'rejected', label: 'Rejected', count: registrations.filter(r => r.status === 'rejected').length }
              ].map(tab => (
                <button
                  key={tab.key}
                  className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.key)}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Registrations List */}
          <div className="registrations-section glass-card">
            <div className="section-header">
              <h3>Registrations ({filteredRegistrations.length})</h3>
              <button onClick={loadRegistrations} className="refresh-btn" disabled={isLoadingRegistrations}>
                {isLoadingRegistrations ? 'Loading...' : 'Refresh'}
              </button>
            </div>

            {isLoadingRegistrations ? (
              <div className="loading">Loading registrations...</div>
            ) : filteredRegistrations.length === 0 ? (
              <div className="no-registrations">No registrations found</div>
            ) : (
              <div className="registrations-list">
                {filteredRegistrations.map(registration => (
                  <div key={registration.id} className="registration-card glass-card">
                    <div className="registration-header">
                      <div className="registration-info">
                        <h4>{registration.name} {registration.surname}</h4>
                        <p className="email">{registration.email}</p>
                        <p className="phone">{registration.phone}</p>
                        <p className="date">Submitted: {formatDate(registration.createdAt)}</p>
                      </div>
                      <div className="status-controls">
                        <select
                          value={registration.status || 'submitted'}
                          onChange={(e) => handleStatusUpdate(registration.id, e.target.value)}
                          className={`status-select status-${registration.status || 'submitted'}`}
                        >
                          <option value="submitted">Submitted</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                    </div>

                    <div className="registration-details">
                      <div className="detail-row">
                        <span className="label">Institution:</span>
                        <span>{registration.institutionName || 'N/A'}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Request Type:</span>
                        <span>{registration.requestType}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Legal Status:</span>
                        <span>{registration.realLegalStatus}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Event Date:</span>
                        <span>{registration.eventDate || 'N/A'}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Services:</span>
                        <span>{registration.services?.join(', ') || 'N/A'}</span>
                      </div>
                      {registration.additionalParticipants?.length > 0 && (
                        <div className="detail-row">
                          <span className="label">Additional Participants:</span>
                          <span>{registration.additionalParticipants.length}</span>
                        </div>
                      )}
                      {registration.message && (
                        <div className="detail-row full-width">
                          <span className="label">Message:</span>
                          <span>{registration.message}</span>
                        </div>
                      )}
                      {registration.adminNote && (
                        <div className="detail-row full-width">
                          <span className="label">Admin Note:</span>
                          <span className="admin-note">{registration.adminNote}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
