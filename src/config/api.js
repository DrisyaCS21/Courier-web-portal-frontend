import { CONFIG } from '../config';

const API_CONFIG = {
  BASE_URL: CONFIG.API_BASE_URL || 'http://localhost:3001',
  TIMEOUT: CONFIG.API_TIMEOUT || 5000,
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/api/auth/login',
      REGISTER: '/api/auth/register',
      LOGOUT: '/api/auth/logout',
      PROFILE: '/api/auth/profile'
    },
    USERS: {
      LIST: '/api/users',
      CREATE: '/api/users',
      DETAIL: (id) => `/api/users/${id}`,
      UPDATE: (id) => `/api/users/${id}`,
      DELETE: (id) => `/api/users/${id}`,
    },
    ORDERS: {
      LIST: '/api/orders',
      CREATE: '/api/orders',
      DETAIL: (id) => `/api/orders/${id}`,
      UPDATE: (id) => `/api/orders/${id}`,
    },
    DASHBOARD: {
      STATS: '/api/dashboard/stats',
      ACTIVITY: '/api/dashboard/activity'
    }
  }
};

export default API_CONFIG;