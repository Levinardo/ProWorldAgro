import React, { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import {
  authenticateAdmin,
  getFilteredRegistrations,
  updateRegistrationStatus,
  getFilteredWorkers,
  updateWorkerStatus,
  initializeAdmin
} from '../services/firestore';
import { downloadInvitationCard } from '../services/invitationCard';
import './Admin.css';

// Sidebar Navigation Items
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'registrations', label: 'Registrations', icon: '👥' },
  { id: 'workers', label: 'Workers', icon: '👷' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
];

// Registration Status Tabs
const REGISTRATION_TABS = [
  { key: 'all', label: 'All' },
  { key: 'submitted', label: 'Submitted' },
  { key: 'accepted', label: 'Accepted' },
  { key: 'rejected', label: 'Rejected' }
];

const Admin = () => {
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
      case 'workers':
        return <WorkersManagement />;
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
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </div>
          {sidebarOpen && (
            <div className="sidebar-brand">
              <div className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)}>
                ✕
              </div>
              <div className="flag-emoji">🇵🇰</div>
              <h3>Admin Panel</h3>
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleSectionChange(item.id)}
              title={!sidebarOpen ? item.label : undefined}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          {sidebarOpen && (
            <div className="admin-info">
              <p>{adminData?.name || 'Super Admin'}</p>
              <small>{adminData?.email}</small>
            </div>
          )}
          <button onClick={handleLogout} className="sidebar-logout" title={!sidebarOpen ? 'Logout' : undefined}>
            {sidebarOpen ? '🚪 Logout' : '🚪'}
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
  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      try {
        const result = await getFilteredRegistrations();
        if (result.success) {
          setRegistrations(result.data);
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const getStats = () => {
    const total = registrations.length;
    const pending = registrations.filter(r => r.status === 'submitted').length;
    const accepted = registrations.filter(r => r.status === 'accepted').length;
    const rejected = registrations.filter(r => r.status === 'rejected').length;

    return { total, pending, accepted, rejected };
  };

  const stats = getStats();

  return (
    <div className="dashboard-overview">
      <div className="stats-grid">
        <div className="stat-card glass-card stat-primary">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h3>{isLoading ? '...' : stats.total}</h3>
            <p>Total Registrations</p>
          </div>
        </div>
        <div className="stat-card glass-card stat-warning">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{isLoading ? '...' : stats.pending}</h3>
            <p>Pending Review</p>
          </div>
        </div>
        <div className="stat-card glass-card stat-success">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{isLoading ? '...' : stats.accepted}</h3>
            <p>Accepted</p>
          </div>
        </div>
        <div className="stat-card glass-card stat-danger">
          <div className="stat-icon">❌</div>
          <div className="stat-content">
            <h3>{isLoading ? '...' : stats.rejected}</h3>
            <p>Rejected</p>
          </div>
        </div>
      </div>

      <div className="quick-actions glass-card">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn primary" onClick={() => onSectionChange && onSectionChange('registrations')}>
            👥 View Registrations
          </button>
          <button className="action-btn secondary" onClick={() => onSectionChange && onSectionChange('analytics')}>
            📊 View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

// Registration Management Component
const RegistrationManagement = () => {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: ''
  });
  const [isLoadingRegistrations, setIsLoadingRegistrations] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState(null);

  const applyFilters = useCallback((data, tab, currentFilters) => {
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
  }, []);

  const loadRegistrations = useCallback(async () => {
    setIsLoadingRegistrations(true);
    setFirebaseError(false);
    try {
      const result = await getFilteredRegistrations();
      if (result.success) {
        setRegistrations(result.data);
        applyFilters(result.data, activeTab, filters);
      } else {
        setFirebaseError(true);
        toast.error(result.error || 'Failed to load registrations');
      }
    } catch (error) {
      setFirebaseError(true);
      toast.error('Error loading registrations');
    } finally {
      setIsLoadingRegistrations(false);
    }
  }, [activeTab, filters, applyFilters]);

  const getRegistrationCounts = () => {
    const counts = {
      all: registrations.length,
      submitted: registrations.filter(r => r.status === 'submitted').length,
      accepted: registrations.filter(r => r.status === 'accepted').length,
      rejected: registrations.filter(r => r.status === 'rejected').length
    };
    return counts;
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    applyFilters(registrations, tabKey, filters);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(registrations, activeTab, newFilters);
  };

  const handleStatusUpdate = async (registrationId, newStatus) => {
    try {
      const result = await updateRegistrationStatus(registrationId, newStatus);
      if (result.success) {
        if (newStatus === 'accepted') {
          toast.success(`Registration ${newStatus} successfully! Invitation email will be sent.`);
        } else {
          toast.success(`Registration ${newStatus} successfully`);
        }
        loadRegistrations();
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      toast.error('Error updating status');
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // Load registrations when component mounts
  useEffect(() => {
    loadRegistrations();
  }, [loadRegistrations]);

  if (firebaseError) {
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
            <button onClick={loadRegistrations} className="retry-btn">
              🔄 Retry Loading
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-management">
      {/* Header with Refresh Button */}
      <div className="registration-header glass-card">
        <h3>📋 Registration Management</h3>
        <button onClick={loadRegistrations} className="refresh-btn" disabled={isLoadingRegistrations}>
          {isLoadingRegistrations ? '🔄 Loading...' : '🔄 Refresh'}
        </button>
      </div>

      {/* Registration Tabs */}
      <div className="registration-tabs glass-card">
        <div className="tabs">
          {REGISTRATION_TABS.map(tab => {
            const counts = getRegistrationCounts();
            return (
              <button
                key={tab.key}
                className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.key)}
              >
                {tab.label} ({counts[tab.key]})
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="registration-filters glass-card">
        <h4>📅 Date Filters</h4>
        <div className="filter-row">
          <div className="filter-group">
            <label>Start Date:</label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => handleFilterChange({ ...filters, startDate: e.target.value })}
            />
          </div>
          <div className="filter-group">
            <label>End Date:</label>
            <input
              type="date"
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

      {/* Registrations List */}
      <div className="registrations-list glass-card">
        {isLoadingRegistrations ? (
          <div className="loading-state">
            <p>🔄 Loading registrations...</p>
          </div>
        ) : filteredRegistrations.length === 0 ? (
          <div className="empty-state">
            <p>📝 No registrations found</p>
          </div>
        ) : (
          <div className="registrations-table-container">
            <table className="registrations-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.map(registration => (
                  <tr 
                    key={registration.id} 
                    onClick={() => setSelectedRegistration(registration)}
                    className="clickable-row"
                  >
                    <td data-label="First Name">{registration.name || 'N/A'}</td>
                    <td data-label="Last Name">{registration.surname || 'N/A'}</td>
                    <td data-label="Email">{registration.email || 'N/A'}</td>
                    <td data-label="Phone">{registration.phone || 'N/A'}</td>
                    <td data-label="Country">{registration.country || 'N/A'}</td>
                    <td data-label="Status">
                      <span className={`status-badge status-${registration.status || 'submitted'}`}>
                        {registration.status || 'submitted'}
                      </span>
                    </td>
                    <td data-label="Date">{formatDate(registration.createdAt)}</td>
                    <td data-label="Actions">
                      <div className="table-actions">
                        {registration.status !== 'accepted' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(registration.id, 'accepted');
                            }}
                            className="action-btn-sm accept"
                          >
                            ✅ Accept
                          </button>
                        )}
                        {registration.status !== 'rejected' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(registration.id, 'rejected');
                            }}
                            className="action-btn-sm reject"
                          >
                            ❌ Reject
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Registration Detail Modal */}
      {selectedRegistration && (
        <RegistrationDetailModal
          registration={selectedRegistration}
          onClose={() => setSelectedRegistration(null)}
          onStatusUpdate={handleStatusUpdate}
          formatDate={formatDate}
        />
      )}
    </div>
  );
};

// Registration Detail Modal Component
const RegistrationDetailModal = ({ registration, onClose, onStatusUpdate, formatDate }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content glass-card">
        <div className="modal-header">
          <h2>📋 Registration Details</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Status Badge */}
          <div className="detail-section status-section">
            <span className={`status-badge large status-${registration.status || 'submitted'}`}>
              {registration.status || 'submitted'}
            </span>
            <span className="detail-date">Submitted: {formatDate(registration.createdAt)}</span>
          </div>

          {/* Personal Information */}
          <div className="detail-section">
            <h3>👤 Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>First Name</label>
                <span>{registration.name || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Last Name</label>
                <span>{registration.surname || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Date of Birth</label>
                <span>{registration.dateOfBirth || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Email</label>
                <span>{registration.email || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Phone</label>
                <span>{registration.phone || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Country</label>
                <span>{registration.country || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Legal Status</label>
                <span>{registration.realLegalStatus || 'N/A'}</span>
              </div>
              {registration.institutionName && (
                <div className="detail-item">
                  <label>Institution</label>
                  <span>{registration.institutionName}</span>
                </div>
              )}
              {registration.companyName && (
                <div className="detail-item">
                  <label>Company/Employer Name</label>
                  <span>{registration.companyName}</span>
                </div>
              )}
              <div className="detail-item">
                <label>Nationality</label>
                <span>{registration.nationality || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Passport Information */}
          <div className="detail-section">
            <h3>🛂 Passport Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Passport Number</label>
                <span>{registration.passportNumber || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Passport Issue Date</label>
                <span>{registration.passportIssueDate ? new Date(registration.passportIssueDate).toLocaleDateString() : 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Passport Expiry Date</label>
                <span>{registration.passportExpiryDate ? new Date(registration.passportExpiryDate).toLocaleDateString() : 'N/A'}</span>
              </div>
              {registration.purposeOfVisit && (
                <div className="detail-item">
                  <label>Purpose of Visit</label>
                  <span>{registration.purposeOfVisit}</span>
                </div>
              )}
            </div>
          </div>

          {/* Request Information */}
          <div className="detail-section">
            <h3>📝 Request Details</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Request Type</label>
                <span>{registration.requestType || 'N/A'}</span>
              </div>
              {registration.eventDate && (
                <div className="detail-item">
                  <label>Event Date</label>
                  <span>{registration.eventDate}</span>
                </div>
              )}
            </div>
            {registration.services && registration.services.length > 0 && (
              <div className="detail-item full-width">
                <label>Services Requested</label>
                <div className="services-list">
                  {registration.services.map((service, index) => (
                    <span key={index} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Message */}
          {registration.message && (
            <div className="detail-section">
              <h3>💬 Message</h3>
              <div className="message-box">
                {registration.message}
              </div>
            </div>
          )}

          {/* Additional Participants */}
          {registration.additionalParticipants && registration.additionalParticipants.length > 0 && (
            <div className="detail-section">
              <h3>👥 Additional Participants</h3>
              <div className="participants-list">
                {registration.additionalParticipants.map((participant, index) => (
                  <div key={index} className="participant-item">
                    <span className="participant-name">{participant.name}</span>
                    <span className="participant-passport">Passport: {participant.passport}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admin Note */}
          {registration.adminNote && (
            <div className="detail-section">
              <h3>📌 Admin Note</h3>
              <div className="admin-note-box">
                {registration.adminNote}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <div className="modal-actions">
            {registration.status === 'accepted' && (
              <button
                onClick={async () => {
                  try {
                    toast.loading('Generating invitation card...');
                    await downloadInvitationCard(registration);
                    toast.dismiss();
                    toast.success('Invitation card downloaded!');
                  } catch (error) {
                    toast.dismiss();
                    toast.error('Failed to generate invitation card');
                  }
                }}
                className="action-btn-modal download"
              >
                📥 Download Invitation Card
              </button>
            )}
            {registration.status !== 'accepted' && (
              <button
                onClick={() => {
                  onStatusUpdate(registration.id, 'accepted');
                  onClose();
                }}
                className="action-btn-modal accept"
              >
                ✅ Accept Registration
              </button>
            )}
            {registration.status !== 'rejected' && (
              <button
                onClick={() => {
                  onStatusUpdate(registration.id, 'rejected');
                  onClose();
                }}
                className="action-btn-modal reject"
              >
                ❌ Reject Registration
              </button>
            )}
            <button onClick={onClose} className="action-btn-modal close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Workers Management Component
const WorkersManagement = () => {
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [workerTypeFilter, setWorkerTypeFilter] = useState('all');
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: ''
  });
  const [isLoadingWorkers, setIsLoadingWorkers] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);

  const workerTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'farmer', label: 'Farmer' },
    { value: 'vet', label: 'Veterinarian' },
    { value: 'seeds', label: 'Seeds Specialist' },
    { value: 'livestock', label: 'Livestock & Agriculture Manager' },
    { value: 'agriculture', label: 'Agriculture Expert' },
    { value: 'dairy', label: 'Dairy Specialist' },
    { value: 'poultry', label: 'Poultry Expert' },
    { value: 'other', label: 'Other' }
  ];

  const WORKER_STATUS_TABS = [
    { key: 'all', label: 'All' },
    { key: 'submitted', label: 'Submitted' },
    { key: 'accepted', label: 'Accepted' },
    { key: 'rejected', label: 'Rejected' }
  ];

  const applyFilters = useCallback((data, tab, typeFilter, currentFilters) => {
    let filtered = data;

    // Apply tab filter
    if (tab !== 'all') {
      filtered = filtered.filter(worker => worker.status === tab);
    }

    // Apply worker type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(worker => worker.workerType === typeFilter);
    }

    // Apply date filters
    if (currentFilters.startDate) {
      const startDate = new Date(currentFilters.startDate);
      startDate.setHours(0, 0, 0, 0);
      filtered = filtered.filter(worker => {
        const workerDate = worker.createdAt?.toDate ? worker.createdAt.toDate() : new Date(worker.createdAt);
        return workerDate >= startDate;
      });
    }

    if (currentFilters.endDate) {
      const endDate = new Date(currentFilters.endDate);
      endDate.setHours(23, 59, 59, 999);
      filtered = filtered.filter(worker => {
        const workerDate = worker.createdAt?.toDate ? worker.createdAt.toDate() : new Date(worker.createdAt);
        return workerDate <= endDate;
      });
    }

    setFilteredWorkers(filtered);
  }, []);

  const loadWorkers = useCallback(async () => {
    setIsLoadingWorkers(true);
    setFirebaseError(false);
    try {
      const result = await getFilteredWorkers();
      if (result.success) {
        setWorkers(result.data);
        applyFilters(result.data, activeTab, workerTypeFilter, filters);
      } else {
        setFirebaseError(true);
        toast.error(result.error || 'Failed to load workers');
      }
    } catch (error) {
      setFirebaseError(true);
      toast.error('Error loading workers');
    } finally {
      setIsLoadingWorkers(false);
    }
  }, [activeTab, workerTypeFilter, filters, applyFilters]);

  const getWorkerCounts = () => {
    const counts = {
      all: workers.length,
      submitted: workers.filter(w => w.status === 'submitted').length,
      accepted: workers.filter(w => w.status === 'accepted').length,
      rejected: workers.filter(w => w.status === 'rejected').length
    };
    return counts;
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    applyFilters(workers, tabKey, workerTypeFilter, filters);
  };

  const handleTypeFilterChange = (type) => {
    setWorkerTypeFilter(type);
    applyFilters(workers, activeTab, type, filters);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(workers, activeTab, workerTypeFilter, newFilters);
  };

  const handleStatusUpdate = async (workerId, newStatus) => {
    try {
      const result = await updateWorkerStatus(workerId, newStatus);
      if (result.success) {
        toast.success(`Worker ${newStatus} successfully`);
        loadWorkers();
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      toast.error('Error updating status');
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const getWorkerTypeLabel = (type) => {
    const workerType = workerTypes.find(t => t.value === type);
    return workerType ? workerType.label : type;
  };

  // Load workers when component mounts
  useEffect(() => {
    loadWorkers();
  }, [loadWorkers]);

  if (firebaseError) {
    return (
      <div className="workers-management">
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
            <button onClick={loadWorkers} className="retry-btn">
              🔄 Retry Loading
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="workers-management">
      {/* Header with Refresh Button */}
      <div className="registration-header glass-card">
        <h3>👷 Workers Management</h3>
        <button onClick={loadWorkers} className="refresh-btn" disabled={isLoadingWorkers}>
          {isLoadingWorkers ? '🔄 Loading...' : '🔄 Refresh'}
        </button>
      </div>

      {/* Worker Type Filter */}
      <div className="registration-filters glass-card">
        <h4>👤 Worker Type Filter</h4>
        <div className="filter-row">
          {workerTypes.map(type => (
            <button
              key={type.value}
              className={`filter-btn ${workerTypeFilter === type.value ? 'active' : ''}`}
              onClick={() => handleTypeFilterChange(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status Tabs */}
      <div className="registration-tabs glass-card">
        <div className="tabs">
          {WORKER_STATUS_TABS.map(tab => {
            const counts = getWorkerCounts();
            return (
              <button
                key={tab.key}
                className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.key)}
              >
                {tab.label} ({counts[tab.key]})
              </button>
            );
          })}
        </div>
      </div>

      {/* Date Filters */}
      <div className="registration-filters glass-card">
        <h4>📅 Date Filters</h4>
        <div className="filter-row">
          <div className="filter-group">
            <label>Start Date:</label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => handleFilterChange({ ...filters, startDate: e.target.value })}
            />
          </div>
          <div className="filter-group">
            <label>End Date:</label>
            <input
              type="date"
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

      {/* Workers List */}
      <div className="registrations-list glass-card">
        {isLoadingWorkers ? (
          <div className="loading-state">
            <p>🔄 Loading workers...</p>
          </div>
        ) : filteredWorkers.length === 0 ? (
          <div className="empty-state">
            <p>👷 No workers found</p>
          </div>
        ) : (
          <div className="registrations-table-container">
            <table className="registrations-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkers.map(worker => (
                  <tr 
                    key={worker.id} 
                    onClick={() => setSelectedWorker(worker)}
                    className="clickable-row"
                  >
                    <td data-label="Name">{worker.firstName} {worker.lastName}</td>
                    <td data-label="Type">{getWorkerTypeLabel(worker.workerType)}</td>
                    <td data-label="Email">{worker.email || 'N/A'}</td>
                    <td data-label="Phone">{worker.phone || 'N/A'}</td>
                    <td data-label="Status">
                      <span className={`status-badge status-${worker.status || 'submitted'}`}>
                        {worker.status || 'submitted'}
                      </span>
                    </td>
                    <td data-label="Date">{formatDate(worker.createdAt)}</td>
                    <td data-label="Actions">
                      <div className="table-actions">
                        {worker.status !== 'accepted' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(worker.id, 'accepted');
                            }}
                            className="action-btn-sm accept"
                          >
                            ✅ Accept
                          </button>
                        )}
                        {worker.status !== 'rejected' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusUpdate(worker.id, 'rejected');
                            }}
                            className="action-btn-sm reject"
                          >
                            ❌ Reject
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Worker Detail Modal */}
      {selectedWorker && (
        <WorkerDetailModal
          worker={selectedWorker}
          onClose={() => setSelectedWorker(null)}
          onStatusUpdate={handleStatusUpdate}
          formatDate={formatDate}
          getWorkerTypeLabel={getWorkerTypeLabel}
        />
      )}
    </div>
  );
};

// Worker Detail Modal Component
const WorkerDetailModal = ({ worker, onClose, onStatusUpdate, formatDate, getWorkerTypeLabel }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content glass-card">
        <div className="modal-header">
          <h2>👷 Worker Details</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Status Badge */}
          <div className="detail-section status-section">
            <span className={`status-badge large status-${worker.status || 'submitted'}`}>
              {worker.status || 'submitted'}
            </span>
            <span className="detail-date">Submitted: {formatDate(worker.createdAt)}</span>
          </div>

          {/* Personal Information */}
          <div className="detail-section">
            <h3>👤 Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Full Name</label>
                <span>{worker.firstName} {worker.lastName}</span>
              </div>
              <div className="detail-item">
                <label>Worker Type</label>
                <span>{getWorkerTypeLabel(worker.workerType)}</span>
              </div>
              <div className="detail-item">
                <label>Email</label>
                <span>{worker.email || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Phone</label>
                <span>{worker.phone || 'N/A'}</span>
              </div>
              {worker.passportCnic && (
                <div className="detail-item">
                  <label>Passport No / CNIC No</label>
                  <span>{worker.passportCnic}</span>
                </div>
              )}
              {worker.rvmpNumber && (
                <div className="detail-item">
                  <label>RVMP Number</label>
                  <span>{worker.rvmpNumber}</span>
                </div>
              )}
              <div className="detail-item">
                <label>Address</label>
                <span>{worker.address || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>City</label>
                <span>{worker.city || 'N/A'}</span>
              </div>
              {worker.province && (
                <div className="detail-item">
                  <label>Province</label>
                  <span>{worker.province}</span>
                </div>
              )}
              <div className="detail-item">
                <label>Country</label>
                <span>{worker.country || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="detail-section">
            <h3>💼 Professional Information</h3>
            <div className="detail-grid">
              {worker.experience && (
                <div className="detail-item">
                  <label>Experience</label>
                  <span>{worker.experience}</span>
                </div>
              )}
              {worker.education && (
                <div className="detail-item">
                  <label>Education</label>
                  <span>{worker.education}</span>
                </div>
              )}
              {worker.availability && (
                <div className="detail-item">
                  <label>Availability</label>
                  <span>{worker.availability}</span>
                </div>
              )}
            </div>
            {worker.skills && (
              <div className="detail-item full-width">
                <label>Skills & Specializations</label>
                <div className="message-box">
                  {worker.skills}
                </div>
              </div>
            )}
          </div>

          {/* Additional Information */}
          {worker.additionalInfo && (
            <div className="detail-section">
              <h3>📝 Additional Information</h3>
              <div className="message-box">
                {worker.additionalInfo}
              </div>
            </div>
          )}

          {/* Admin Note */}
          {worker.adminNote && (
            <div className="detail-section">
              <h3>📌 Admin Note</h3>
              <div className="admin-note-box">
                {worker.adminNote}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <div className="modal-actions">
            {worker.status !== 'accepted' && (
              <button
                onClick={() => {
                  onStatusUpdate(worker.id, 'accepted');
                  onClose();
                }}
                className="action-btn-modal accept"
              >
                ✅ Accept Worker
              </button>
            )}
            {worker.status !== 'rejected' && (
              <button
                onClick={() => {
                  onStatusUpdate(worker.id, 'rejected');
                  onClose();
                }}
                className="action-btn-modal reject"
              >
                ❌ Reject Worker
              </button>
            )}
            <button onClick={onClose} className="action-btn-modal close">
              Close
            </button>
          </div>
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
