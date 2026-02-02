# 🎓 Employee Training Platform

> **Xodimlarni boshqarish va o'qitish platformasi** - Vue 3, Vite, Tailwind CSS va Vue I18n bilan qurilgan zamonaviy web ilova.

[![CI/CD](https://github.com/YOUR_USERNAME/Employe-Inter-AI/actions/workflows/main.yml/badge.svg)](https://github.com/YOUR_USERNAME/Employe-Inter-AI/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)

## ✨ Xususiyatlar

### 🌍 Multi-Language Support
- **3 til:** O'zbek, Rus, Ingliz
- Vue I18n integratsiyasi
- Reaktiv til almashtirish
- LocalStorage'da til saqlash

### 📱 Responsive Design
- Mobile-first yondashuv
- Tablet va Desktop optimizatsiyasi
- Sidebar toggle (mobile)
- Adaptive layouts

### 🎨 Modern UI/UX
- Tailwind CSS
- Glassmorphism effektlar
- Smooth animations
- Dark mode ready

### 📊 Dashboard Features
- User Profile
- Skills Analysis (Radar Chart)
- Test Results & Analytics
- Training Center
- Course Management
- Lesson Tracking

### 🔐 Authentication
- Login/Register
- Phone number authentication
- Session management

### 🚀 Performance
- Code splitting
- Lazy loading
- Optimized builds
- Fast page loads

## 🛠️ Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS
- **Router:** Vue Router
- **I18n:** Vue I18n
- **Charts:** Chart.js + vue-chartjs
- **Icons:** Heroicons (SVG)
- **Notifications:** Vue3 Toastify

## 📦 Installation

### Prerequisites
- Node.js 18.x yoki yuqori
- npm yoki yarn

### Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/Employe-Inter-AI.git
cd Employe-Inter-AI
```

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

Server `http://localhost:5173` da ishga tushadi.

### Build for Production
```bash
npm run build
```

Build fayllari `dist/` papkasida saqlanadi.

### Preview Production Build
```bash
npm run preview
```

## 🌐 Environment Variables

### Development
`.env.development` yarating:
```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Employee Platform
```

### Production
`.env.production` yarating:
```env
VITE_API_URL=https://api.inter-ai.uz/api
VITE_APP_NAME=Employee Platform
```

## 📁 Project Structure

```
Employe-Inter-AI/
├── .github/
│   ├── workflows/
│   │   └── main.yml              # CI/CD pipeline
│   ├── CICD_SETUP.md             # CI/CD setup guide
│   └── DEPLOYMENT_GUIDE.md       # Deployment guide
├── public/                        # Static assets
├── src/
│   ├── assets/                    # Images, fonts, etc.
│   ├── components/
│   │   ├── auth/                  # Login, Register
│   │   ├── common/                # LanguageSwitcher, etc.
│   │   ├── dashboard/             # Profile, Stats
│   │   ├── layout/                # DashboardLayout
│   │   └── training/              # TrainingCenter, Courses
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── uz.json           # Uzbek translations
│   │   │   ├── ru.json           # Russian translations
│   │   │   └── en.json           # English translations
│   │   └── index.js              # i18n config
│   ├── router/
│   │   └── index.js              # Vue Router config
│   ├── App.vue                    # Root component
│   └── main.js                    # App entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Deployment

### Option 1: GitHub Pages
```bash
# vite.config.js da base qo'shing
base: '/Employe-Inter-AI/'

# Build va deploy
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Option 2: Vercel (Tavsiya etiladi)
1. [Vercel](https://vercel.com) ga kiring
2. GitHub repository'ni import qiling
3. Deploy tugmasini bosing!

### Option 3: Netlify
1. [Netlify](https://netlify.com) ga kiring
2. "New site from Git" ni tanlang
3. Repository'ni tanlang va deploy qiling

### Option 4: VPS/Server
```bash
# Build
npm run build

# Server'ga yuklash (SCP)
scp -r dist/* user@server:/var/www/html/

# Nginx konfiguratsiyasi
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔄 CI/CD

GitHub Actions orqali avtomatik deploy:
- ✅ Build va Test
- ✅ Code Quality Check
- ✅ Security Audit
- ✅ Auto Deploy

Batafsil: [CI/CD Setup Guide](.github/CICD_SETUP.md)

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Linting
```bash
npm run lint
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🌟 Features Roadmap

- [x] Multi-language support (UZ/RU/EN)
- [x] Responsive design
- [x] Dashboard with charts
- [x] Training center
- [x] CI/CD pipeline
- [ ] Dark mode
- [ ] Unit tests
- [ ] E2E tests
- [ ] PWA support
- [ ] Real-time notifications

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Ismoil** - *Initial work* - [ismoildev007](https://github.com/ismoildev007)

## 🙏 Acknowledgments

- Vue.js team
- Tailwind CSS team
- All contributors

## 📞 Support

Muammolar bo'lsa:
- 📧 Email: support@example.com
- 💬 Telegram: @your_telegram
- 🐛 Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/Employe-Inter-AI/issues)

## 📊 Project Status

🚀 **Active Development** - Yangi funksiyalar qo'shilmoqda!

---

Made with ❤️ by [ismoildev007](https://github.com/ismoildev007)
