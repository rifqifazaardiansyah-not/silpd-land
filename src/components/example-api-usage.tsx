/**
 * Example Component: Contoh Penggunaan API Client
 * 
 * Component ini mendemonstrasikan cara menggunakan:
 * 1. Environment variables
 * 2. API client untuk fetch data dari Laravel
 * 3. Redirect ke Laravel auth pages
 */

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { env, createAuthUrl } from '@/lib/env';
import { saasApi } from '@/lib/api/saas-client';

/**
 * Contoh 1: Button Login yang redirect ke Laravel
 */
export function LoginButton() {
  const handleLogin = () => {
    // Redirect ke halaman login Laravel
    window.location.href = env.auth.loginUrl;
  };

  return (
    <Button onClick={handleLogin}>
      Login ke Dashboard
    </Button>
  );
}

/**
 * Contoh 2: Button Register
 */
export function RegisterButton() {
  const handleRegister = () => {
    window.location.href = createAuthUrl('register');
  };

  return (
    <Button onClick={handleRegister} variant="outline">
      Daftar Sekarang
    </Button>
  );
}

/**
 * Contoh 3: Fetch data dari Laravel API
 */
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Fetch products dari Laravel backend
        // Endpoint: GET /api/products
        const response = await saasApi.get<Product[]>('/products');
        
        if (response.success && response.data) {
          setProducts(response.data);
        } else {
          setError(response.message || 'Gagal memuat produk');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Terjadi kesalahan saat memuat produk');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading produk...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Rp {product.price.toLocaleString('id-ID')}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

/**
 * Contoh 4: Form dengan POST request
 */
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      setSubmitStatus('idle');
      
      // POST ke Laravel backend
      // Endpoint: POST /api/contact
      const response = await saasApi.post('/contact', formData);
      
      if (response.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nama"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      
      <div>
        <textarea
          placeholder="Pesan"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border rounded"
          rows={4}
          required
        />
      </div>
      
      <Button type="submit" disabled={submitting}>
        {submitting ? 'Mengirim...' : 'Kirim Pesan'}
      </Button>
      
      {submitStatus === 'success' && (
        <p className="text-green-600">Pesan berhasil dikirim!</p>
      )}
      
      {submitStatus === 'error' && (
        <p className="text-red-600">Gagal mengirim pesan. Coba lagi.</p>
      )}
    </form>
  );
}

/**
 * Contoh 5: Component dengan multiple API calls
 */
export function DashboardStats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Parallel API calls
        const [usersRes, productsRes, ordersRes] = await Promise.all([
          saasApi.get('/stats/users'),
          saasApi.get('/stats/products'),
          saasApi.get('/stats/orders'),
        ]);
        
        setStats({
          totalUsers: usersRes.data?.total || 0,
          totalProducts: productsRes.data?.total || 0,
          totalOrders: ordersRes.data?.total || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading statistik...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{stats.totalUsers}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{stats.totalProducts}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{stats.totalOrders}</p>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Contoh 6: Protected component dengan redirect
 */
export function ProtectedContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check auth status dari Laravel
        const response = await saasApi.get('/auth/check');
        
        if (response.success && response.data?.authenticated) {
          setIsAuthenticated(true);
        } else {
          // Redirect ke login jika tidak authenticated
          window.location.href = env.auth.loginUrl;
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        window.location.href = env.auth.loginUrl;
      } finally {
        setChecking(false);
      }
    };

    checkAuth();
  }, []);

  if (checking) {
    return <div>Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div>
      <h1>Protected Content</h1>
      <p>Hanya user yang sudah login bisa melihat ini</p>
    </div>
  );
}
