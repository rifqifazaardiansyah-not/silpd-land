/**
 * SaaS API Client
 * Client untuk berkomunikasi dengan Laravel SaaS Backend
 */

import { env, createApiUrl } from '../env';

/**
 * Tipe untuk response API
 */
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

/**
 * Konfigurasi default untuk fetch
 */
const defaultFetchOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  credentials: 'include', // Untuk mengirim cookies (jika menggunakan session)
};

/**
 * API Client class
 */
export class SaasApiClient {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = env.apiBaseUrl;
    this.timeout = env.api.timeout;
  }

  /**
   * Helper untuk fetch dengan timeout
   */
  private async fetchWithTimeout(
    url: string, 
    options: RequestInit = {}
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  /**
   * GET request
   */
  async get<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const url = createApiUrl(endpoint);
      const response = await this.fetchWithTimeout(url, {
        ...defaultFetchOptions,
        method: 'GET',
      });

      return await response.json();
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  }

  /**
   * POST request
   */
  async post<T = any>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const url = createApiUrl(endpoint);
      const response = await this.fetchWithTimeout(url, {
        ...defaultFetchOptions,
        method: 'POST',
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }

  /**
   * PUT request
   */
  async put<T = any>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const url = createApiUrl(endpoint);
      const response = await this.fetchWithTimeout(url, {
        ...defaultFetchOptions,
        method: 'PUT',
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error;
    }
  }

  /**
   * DELETE request
   */
  async delete<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const url = createApiUrl(endpoint);
      const response = await this.fetchWithTimeout(url, {
        ...defaultFetchOptions,
        method: 'DELETE',
      });

      return await response.json();
    } catch (error) {
      console.error('DELETE request failed:', error);
      throw error;
    }
  }

  /**
   * Upload file (multipart/form-data)
   */
  async upload<T = any>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
    try {
      const url = createApiUrl(endpoint);
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        // Jangan set Content-Type untuk FormData, browser akan set otomatis dengan boundary
      });

      return await response.json();
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    }
  }
}

/**
 * Export instance yang bisa langsung digunakan
 */
export const saasApi = new SaasApiClient();

/**
 * Helper functions untuk endpoint umum
 */
export const saasEndpoints = {
  // Auth endpoints
  login: () => createApiUrl('/auth/login'),
  register: () => createApiUrl('/auth/register'),
  logout: () => createApiUrl('/auth/logout'),
  
  // User endpoints
  getProfile: () => createApiUrl('/user/profile'),
  updateProfile: () => createApiUrl('/user/profile'),
  
  // Custom endpoints (sesuaikan dengan Laravel backend Anda)
  // Contoh:
  // getProducts: () => createApiUrl('/products'),
  // getProduct: (id: string) => createApiUrl(`/products/${id}`),
} as const;
