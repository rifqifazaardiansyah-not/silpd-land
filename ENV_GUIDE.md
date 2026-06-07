# 📝 Environment Variables Guide

Panduan lengkap untuk menggunakan environment variables di Landing Page SILPD.

---

## 🔧 Setup Awal

### 1. Copy File .env.example
```bash
copy .env.example .env
```

### 2. Sesuaikan dengan Konfigurasi Anda
Edit file `.env` dan sesuaikan dengan URL Laravel backend Anda.

---

## 📋 Daftar Environment Variables

### **Laravel SaaS Backend URLs**

| Variable | Deskripsi | Default | Contoh Production |
|----------|-----------|---------|-------------------|
| `VITE_SAAS_URL` | URL utama Laravel backend | `http://127.0.0.1:8000` | `https://api.silpd.com` |
| `VITE_API_BASE_URL` | Base URL untuk API | `http://127.0.0.1:8000/api` | `https://api.silpd.com/api` |

### **Authentication URLs**

| Variable | Deskripsi | Default |
|----------|-----------|---------|
| `VITE_AUTH_LOGIN_URL` | URL halaman login | `http://127.0.0.1:8000/login` |
| `VITE_AUTH_REGISTER_URL` | URL halaman register | `http://127.0.0.1:8000/register` |
| `VITE_AUTH_DASHBOARD_URL` | URL dashboard user | `http://127.0.0.1:8000/dashboard` |

### **App Configuration**

| Variable | Deskripsi | Default |
|----------|-----------|---------|
| `VITE_APP_NAME` | Nama aplikasi | `SILPD Landing Page` |
| `VITE_APP_URL` | URL landing page | `http://localhost:8080` |

### **API Configuration**

| Variable | Deskripsi | Default |
|----------|-----------|---------|
| `VITE_API_TIMEOUT` | Timeout API request (ms) | `30000` |
| `VITE_API_RETRY_ATTEMPTS` | Jumlah retry jika request gagal | `3` |

### **Feature Flags**

| Variable | Deskripsi | Default |
|----------|-----------|---------|
| `VITE_ENABLE_ANALYTICS` | Enable Google Analytics | `false` |
| `VITE_ENABLE_DEBUG` | Enable debug mode | `true` |

---

## 💻 Cara Menggunakan di Code

### **1. Import env helper**

```typescript
import { env, createApiUrl } from '@/lib/env';
```

### **2. Akses environment variables**

```typescript
// Akses URL Laravel
console.log(env.saasUrl); // http://127.0.0.1:8000
console.log(env.apiBaseUrl); // http://127.0.0.1:8000/api

// Akses auth URLs
console.log(env.auth.loginUrl);
console.log(env.auth.registerUrl);

// Cek environment
if (env.isDevelopment) {
  console.log('Development mode');
}
```

### **3. Membuat API URL**

```typescript
import { createApiUrl } from '@/lib/env';

// Otomatis menggabungkan base URL dengan path
const productsUrl = createApiUrl('/products'); 
// Result: http://127.0.0.1:8000/api/products

const userUrl = createApiUrl('user/profile');
// Result: http://127.0.0.1:8000/api/user/profile
```

### **4. Menggunakan API Client**

```typescript
import { saasApi } from '@/lib/api/saas-client';

// GET request
const response = await saasApi.get('/products');

// POST request
const loginResponse = await saasApi.post('/auth/login', {
  email: 'user@example.com',
  password: 'password'
});

// PUT request
const updateResponse = await saasApi.put('/user/profile', {
  name: 'New Name'
});

// DELETE request
await saasApi.delete('/products/123');

// Upload file
const formData = new FormData();
formData.append('file', file);
await saasApi.upload('/upload', formData);
```

---

## 🚀 Contoh Penggunaan di Component

```typescript
import { Button } from '@/components/ui/button';
import { env } from '@/lib/env';
import { saasApi } from '@/lib/api/saas-client';

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

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products dari Laravel API
    const fetchProducts = async () => {
      try {
        const response = await saasApi.get('/products');
        if (response.success) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

---

## 🌐 Konfigurasi untuk Production

### **1. Buat file .env.production**

```env
VITE_SAAS_URL=https://api.silpd.com
VITE_API_BASE_URL=https://api.silpd.com/api
VITE_AUTH_LOGIN_URL=https://app.silpd.com/login
VITE_AUTH_REGISTER_URL=https://app.silpd.com/register
VITE_AUTH_DASHBOARD_URL=https://app.silpd.com/dashboard
VITE_APP_NAME=SILPD Landing Page
VITE_APP_URL=https://silpd.com
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

### **2. Set di Platform Deployment**

#### **Cloudflare Pages:**
- Buka Dashboard → Pages → Settings → Environment Variables
- Tambahkan semua variable dari `.env.production`

#### **Vercel:**
- Project Settings → Environment Variables
- Tambahkan satu per satu

#### **Netlify:**
- Site Settings → Build & Deploy → Environment
- Tambahkan variables

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Simpan file `.env` di `.gitignore`
- ✅ Gunakan `.env.example` sebagai template untuk tim
- ✅ Prefix semua variable dengan `VITE_` agar bisa diakses di client-side
- ✅ Gunakan HTTPS untuk production URLs
- ✅ Validasi environment variables saat app startup

### ❌ DON'T:
- ❌ Commit file `.env` ke git
- ❌ Simpan API keys atau secrets di environment variables yang di-expose ke client
- ❌ Hardcode URLs di component
- ❌ Share file `.env` production ke orang lain

---

## 🔧 Troubleshooting

### **Problem: Environment variable tidak terbaca**

**Solution:**
1. Pastikan variable diawali dengan `VITE_`
2. Restart dev server setelah mengubah `.env`
3. Clear cache: hapus folder `.tanstack` dan `node_modules/.vite`

```bash
npm run dev
```

### **Problem: CORS error saat koneksi ke Laravel**

**Solution:**
Tambahkan konfigurasi CORS di Laravel (`config/cors.php`):

```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => ['http://localhost:8080', 'https://silpd.com'],
'allowed_methods' => ['*'],
'allowed_headers' => ['*'],
'credentials' => true,
```

### **Problem: Session/Cookie tidak terkirim**

**Solution:**
1. Pastikan `credentials: 'include'` sudah diset di fetch options
2. Laravel harus set `SESSION_DOMAIN` dan `SANCTUM_STATEFUL_DOMAINS`
3. Gunakan domain yang sama atau subdomain

---

## 📚 Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Laravel CORS](https://laravel.com/docs/cors)
- [Laravel Sanctum](https://laravel.com/docs/sanctum)

---

**Dibuat untuk Project SILPD Landing Page** 🚀
