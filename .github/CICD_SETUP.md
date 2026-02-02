# GitHub Actions CI/CD Setup Guide

## Overview
Bu proyekt uchun GitHub Actions CI/CD pipeline sozlandi. Pipeline quyidagi vazifalarni bajaradi:
- Build va Test
- Code Quality Check
- Security Audit
- Deploy (GitHub Pages yoki VPS)

## Jobs

### 1. Build and Test
- Node.js 18.x va 20.x versiyalarida test qiladi
- Dependencies o'rnatadi
- Linter ishga tushiradi
- Proyektni build qiladi
- Testlarni ishga tushiradi
- Build artifactlarini saqlaydi

### 2. Deploy to GitHub Pages
- Faqat `main` branchga push qilinganda ishga tushadi
- Proyektni build qiladi
- GitHub Pages'ga deploy qiladi

**GitHub Pages'ni yoqish:**
1. Repository Settings → Pages
2. Source: GitHub Actions
3. Save

### 3. Deploy to Server (VPS)
- SSH orqali serverga deploy qiladi
- Nginx/Apache ni restart qiladi

**Kerakli Secrets:**
Repository Settings → Secrets and variables → Actions → New repository secret:

```
SERVER_HOST=your-server-ip
SERVER_USER=your-username
SSH_PRIVATE_KEY=your-private-key
SERVER_PORT=22
DEPLOY_PATH=/var/www/html
```

**SSH Key yaratish:**
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions"
# Public key ni serverga qo'shing: ~/.ssh/authorized_keys
# Private key ni GitHub Secrets'ga qo'shing
```

### 4. Code Quality
- Prettier bilan kod formatini tekshiradi
- ESLint bilan kod sifatini tekshiradi

### 5. Security Audit
- npm audit bilan xavfsizlik tekshiruvi
- Vulnerabilities topadi

## Workflow Triggers

Pipeline qachon ishga tushadi:
- `main` yoki `develop` branchga push
- `main` yoki `develop` branchga pull request

## Deployment Options

### Option 1: GitHub Pages
1. `.github/workflows/main.yml` da `deploy-github-pages` job'ni yoqing
2. `vite.config.js` da base path qo'shing:
```javascript
export default defineConfig({
  base: '/Employe-Inter-AI/', // Repository nomi
  // ...
})
```

### Option 2: VPS/Server
1. `.github/workflows/main.yml` da `deploy-to-server` job'ni yoqing
2. GitHub Secrets'ga server ma'lumotlarini qo'shing
3. Serverda web server (Nginx/Apache) sozlang

### Option 3: Vercel/Netlify
GitHub bilan integration qiling, ular avtomatik deploy qiladi.

## Foydalanish

1. **Birinchi marta:**
```bash
git add .
git commit -m "Add CI/CD pipeline"
git push origin main
```

2. **Har safar o'zgarish:**
```bash
git add .
git commit -m "Your changes"
git push origin main
```

3. **GitHub'da tekshirish:**
- Repository → Actions
- Har bir workflow run'ni ko'ring
- Logs va artifactlarni tekshiring

## Troubleshooting

### Build xatoligi
- `package.json` da `build` script borligini tekshiring
- Dependencies to'g'ri o'rnatilganligini tekshiring

### Deploy xatoligi
- Secrets to'g'ri sozlanganligini tekshiring
- SSH key to'g'ri formatda ekanligini tekshiring
- Server'da permissions to'g'ri ekanligini tekshiring

### Linter xatoligi
- `npm run lint` local'da ishlatib ko'ring
- `.eslintrc` sozlamalarini tekshiring

## Qo'shimcha Sozlamalar

### Branch Protection
Repository Settings → Branches → Add rule:
- Branch name pattern: `main`
- ✅ Require status checks to pass
- ✅ Require branches to be up to date

### Notifications
Repository Settings → Notifications:
- Email yoki Slack integration qo'shing

## Performance

Pipeline taxminan:
- Build: 2-3 daqiqa
- Test: 1-2 daqiqa
- Deploy: 1-2 daqiqa
- **Jami: 4-7 daqiqa**

## Best Practices

1. **Har doim test yozing**
2. **Linter'dan foydalaning**
3. **Security audit'ni e'tiborsiz qoldirmang**
4. **Branch protection qo'shing**
5. **Secrets'ni xavfsiz saqlang**
6. **Logs'ni tekshiring**

## Qo'llab-quvvatlash

Muammolar bo'lsa:
1. GitHub Actions logs'ni tekshiring
2. Local'da `npm run build` ishlatib ko'ring
3. Dependencies yangilang: `npm update`
