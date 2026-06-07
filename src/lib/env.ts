/**
 * Environment Variables Helper
 * Mengelola akses ke environment variables dengan type-safe
 */

// Validasi environment variables yang required
const requiredEnvVars = ['VITE_SAAS_URL'] as const;

requiredEnvVars.forEach((envVar) => {
  if (!import.meta.env[envVar]) {
    console.warn(`⚠️ Warning: ${envVar} tidak ditemukan di .env file`);
  }
});

/**
 * Konfigurasi environment variables
 */
export const env = {
  // Laravel SaaS Backend URLs
  saasUrl: import.meta.env.VITE_SAAS_URL || 'http://127.0.0.1:8000',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api',
  
  // Authentication URLs
  auth: {
    loginUrl: import.meta.env.VITE_AUTH_LOGIN_URL || 'http://127.0.0.1:8000/login',
    registerUrl: import.meta.env.VITE_AUTH_REGISTER_URL || 'http://127.0.0.1:8000/register',
    dashboardUrl: import.meta.env.VITE_AUTH_DASHBOARD_URL || 'http://127.0.0.1:8000/dashboard',
  },

  // App Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'SILPD Landing Page',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:8080',
  },

  // API Configuration
  api: {
    timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
    retryAttempts: Number(import.meta.env.VITE_API_RETRY_ATTEMPTS) || 3,
  },

  // Feature Flags
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableDebug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  },

  // External Services
  external: {
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
    sentryDsn: import.meta.env.VITE_SENTRY_DSN,
    recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  },

  // Helper: Cek apakah sedang di production
  isProduction: import.meta.env.PROD,
  
  // Helper: Cek apakah sedang di development
  isDevelopment: import.meta.env.DEV,
} as const;

/**
 * Helper function untuk membuat URL lengkap ke Laravel backend
 */
export const createApiUrl = (path: string): string => {
  const baseUrl = env.apiBaseUrl.endsWith('/') 
    ? env.apiBaseUrl.slice(0, -1) 
    : env.apiBaseUrl;
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrl}${cleanPath}`;
};

/**
 * Helper function untuk membuat URL auth
 */
export const createAuthUrl = (type: 'login' | 'register' | 'dashboard'): string => {
  return env.auth[`${type}Url`];
};

/**
 * Debug logger (hanya aktif di development)
 */
export const logEnv = () => {
  if (env.features.enableDebug && env.isDevelopment) {
    console.log('🔧 Environment Configuration:', {
      saasUrl: env.saasUrl,
      apiBaseUrl: env.apiBaseUrl,
      isDevelopment: env.isDevelopment,
      isProduction: env.isProduction,
    });
  }
};

// Log environment saat module di-import (hanya di development)
if (env.isDevelopment) {
  logEnv();
}
