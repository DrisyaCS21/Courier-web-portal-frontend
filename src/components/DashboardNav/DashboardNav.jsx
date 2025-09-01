import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardNav.module.css';

const DashboardNav = ({ role, onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Add logout logic here (clear tokens, etc.)
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <nav className={styles.dashboardNav}>
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <i className="fas fa-shipping-fast"></i>
            <span>CS Express</span>
          </div>
          <div className={styles.roleBadge}>
            {role}
          </div>
        </div>

        {/* Search Section */}
        <div className={styles.searchSection}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchInputGroup}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Type and press ENTER to search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={styles.clearButton}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* User Actions Section */}
        <div className={styles.actionsSection}>
          {/* Notifications */}
          <button className={styles.iconButton}>
            <i className="fas fa-bell"></i>
            <span className={styles.notificationBadge}>3</span>
          </button>

          {/* Messages */}
          <button className={styles.iconButton}>
            <i className="fas fa-envelope"></i>
          </button>

          {/* User Profile Dropdown */}
          <div className={styles.userDropdown}>
            <button 
              className={styles.userButton}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className={styles.userAvatar}>
                <i className="fas fa-user"></i>
              </div>
              <span className={styles.userName}>Binod Sunuwar</span>
              <i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'}`}></i>
            </button>

            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <button className={styles.dropdownItem}>
                  <i className="fas fa-user-circle"></i>
                  My Profile
                </button>
                <button className={styles.dropdownItem}>
                  <i className="fas fa-cog"></i>
                  Settings
                </button>
                <button className={styles.dropdownItem}>
                  <i className="fas fa-question-circle"></i>
                  Help & Support
                </button>
                <div className={styles.dropdownDivider}></div>
                <button 
                  className={`${styles.dropdownItem} ${styles.logoutItem}`}
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;