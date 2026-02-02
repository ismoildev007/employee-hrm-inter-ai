# CI/CD Pipeline Qo'shimcha Ma'lumotlar

## Deployment Strategies

### 1. GitHub Pages (Bepul)
**Afzalliklari:**
- ✅ Bepul hosting
- ✅ Avtomatik SSL
- ✅ CDN bilan tez
- ✅ Oson sozlash

**Kamchiliklari:**
- ❌ Faqat static files
- ❌ Backend yo'q
- ❌ Custom domain uchun DNS sozlash kerak

**Sozlash:**
```yaml
# main.yml da deploy-github-pages job'ni uncomment qiling
# vite.config.js ga base qo'shing:
base: '/repository-name/'
```

### 2. VPS/Server (To'liq nazorat)
**Afzalliklari:**
- ✅ To'liq nazorat
- ✅ Backend qo'shish mumkin
- ✅ Custom domain
- ✅ Database

**Kamchiliklari:**
- ❌ Server xarajati
- ❌ Qo'shimcha sozlash
- ❌ Maintenance kerak

**Server sozlash (Nginx):**
```bash
# Nginx o'rnatish
sudo apt update
sudo apt install nginx

# Site konfiguratsiyasi
sudo nano /etc/nginx/sites-available/employee-platform

# Konfiguratsiya:
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/employee-platform /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Vercel (Tavsiya etiladi)
**Afzalliklari:**
- ✅ Bepul plan
- ✅ Avtomatik deploy
- ✅ Juda tez
- ✅ SSL avtomatik
- ✅ Preview deployments

**Sozlash:**
1. Vercel.com ga kiring
2. GitHub bilan bog'lang
3. Repository tanlang
4. Deploy!

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 4. Netlify
**Afzalliklari:**
- ✅ Bepul plan
- ✅ Oson sozlash
- ✅ Form handling
- ✅ Serverless functions

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Environment Variables

### Development
```bash
# .env.development
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Employee Platform
```

### Production
```bash
# .env.production
VITE_API_URL=https://api.inter-ai.uz/api
VITE_APP_NAME=Employee Platform
```

### GitHub Secrets
Repository Settings → Secrets:
```
# Server deployment
SERVER_HOST=123.45.67.89
SERVER_USER=deploy
SSH_PRIVATE_KEY=-----BEGIN RSA PRIVATE KEY-----...
SERVER_PORT=22
DEPLOY_PATH=/var/www/html

# API keys (agar kerak bo'lsa)
VITE_API_KEY=your-api-key
VITE_ANALYTICS_ID=your-analytics-id
```

## Monitoring va Logging

### 1. GitHub Actions Logs
- Repository → Actions → Workflow run
- Har bir step'ning loglarini ko'ring
- Download artifacts

### 2. Sentry (Error Tracking)
```bash
npm install @sentry/vue
```

```javascript
// main.js
import * as Sentry from "@sentry/vue";

Sentry.init({
  app,
  dsn: "your-sentry-dsn",
  environment: import.meta.env.MODE,
});
```

### 3. Google Analytics
```javascript
// main.js
import VueGtag from "vue-gtag";

app.use(VueGtag, {
  config: { id: "G-XXXXXXXXXX" }
});
```

## Performance Optimization

### Build Optimization
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'charts': ['chart.js', 'vue-chartjs'],
          'i18n': ['vue-i18n']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
```

### Image Optimization
```bash
npm install vite-plugin-imagemin -D
```

### Lazy Loading
```javascript
// router/index.js
const Profile = () => import('../components/dashboard/Profile.vue');
const TrainingCenter = () => import('../components/training/TrainingCenter.vue');
```

## Testing

### Unit Tests (Vitest)
```bash
npm install -D vitest @vue/test-utils
```

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
```

### E2E Tests (Playwright)
```bash
npm init playwright@latest
```

```javascript
// tests/e2e/login.spec.js
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('[name="phone"]', '998901234567');
  await page.fill('[name="password"]', 'test123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*dashboard/);
});
```

## Rollback Strategy

### GitHub Releases
```bash
# Tag yaratish
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Rollback
git checkout v1.0.0
git push origin main --force
```

### Server Rollback
```bash
# Backup
cp -r /var/www/html /var/www/html.backup

# Rollback
rm -rf /var/www/html
mv /var/www/html.backup /var/www/html
```

## Security Best Practices

### 1. Secrets Management
- ❌ Hech qachon secrets'ni commit qilmang
- ✅ GitHub Secrets'dan foydalaning
- ✅ .env fayllarini .gitignore ga qo'shing

### 2. Dependencies
```bash
# Audit
npm audit

# Fix
npm audit fix

# Update
npm update
```

### 3. HTTPS
- ✅ Har doim HTTPS ishlating
- ✅ SSL sertifikat (Let's Encrypt bepul)
- ✅ HSTS header qo'shing

### 4. CSP Headers
```nginx
# Nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
```

## Troubleshooting

### Build fails
```bash
# Cache tozalash
rm -rf node_modules package-lock.json
npm install

# Build locally
npm run build
```

### Deploy fails
```bash
# SSH connection test
ssh -i ~/.ssh/id_rsa user@server

# Permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

### Slow builds
```yaml
# Cache dependencies
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: node_modules
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

## Cost Estimation

### Free Options
- GitHub Pages: $0
- Vercel: $0 (hobby plan)
- Netlify: $0 (starter plan)

### Paid Options
- VPS (DigitalOcean): $5-10/month
- AWS S3 + CloudFront: $1-5/month
- Vercel Pro: $20/month

## Qo'shimcha Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [Vue.js Production](https://vuejs.org/guide/best-practices/production-deployment.html)
- [Nginx Configuration](https://nginx.org/en/docs/)
