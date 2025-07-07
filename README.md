# ThinkInk Frontend

ThinkInk is a cutting-edge platform that translates brain signals (EEG/EMG) into text using advanced AI and machine learning technologies. This frontend application provides an intuitive, accessible interface for users to interact with neural data processing capabilities, offering real-time signal translation and comprehensive API integration.

## 🚀 Features

- **Neural Signal Processing**: Upload and process EEG/EMG files in real-time
- **AI-Powered Translation**: Convert brain signals to text using advanced machine learning
- **Authentication System**: Secure Google OAuth integration
- **Progressive Web App**: Offline capabilities with service worker support
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Developer Tools**: Comprehensive API documentation and SDK access
- **Accessibility Focus**: Designed for users with speech impairments
- **Real-time Notifications**: Toast notifications for user feedback
- **Interactive Components**: Smooth animations and transitions

## 🛠️ Tech Stack

### Core Framework

- **[React 18](https://react.dev/)** - Modern React with concurrent features
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[React Router DOM v7](https://reactrouter.com/)** - Client-side routing

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon pack
- **[Swiper](https://swiperjs.com/)** - Modern touch slider

### State Management & API

- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[React Hot Toast](https://react-hot-toast.com/)** - Smoking hot notifications

### Authentication & Security

- **[React OAuth Google](https://github.com/MomenSherif/react-oauth)** - Google OAuth integration
- **[JWT Decode](https://github.com/auth0/jwt-decode)** - JSON Web Token decoder

### PWA & Performance

- **[Vite PWA Plugin](https://vite-pwa-org.netlify.app/)** - Zero-config PWA framework
- **[Workbox Window](https://developer.chrome.com/docs/workbox/)** - Service worker management

### Development Tools

- **[ESLint](https://eslint.org/)** - JavaScript linting utility
- **[Husky](https://typicode.github.io/husky/)** - Git hooks management
- **[Commitlint](https://commitlint.js.org/)** - Conventional commit enforcement
- **[PropTypes](https://www.npmjs.com/package/prop-types)** - Runtime type checking

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **pnpm** (recommended package manager)

## 🚦 Getting Started

### Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### Clone the repository

```bash
git clone https://github.com/your-username/ThinkInk-Frontend.git
cd ThinkInk-Frontend
```

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm run dev
```

### Build for production

```bash
pnpm run build
```

### Preview production build

```bash
pnpm run preview
```

### Run linting

```bash
pnpm run lint
```

### Setup git hooks

```bash
pnpm run prepare
```

## 🏗️ Project Structure

```
ThinkInk-Frontend/
├── public/
│   ├── sitemap.xml
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── ...
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🌐 Deployment

This project is optimized for deployment on **Vercel** and includes:

- Automatic builds on push
- SEO optimization with sitemap.xml
- Progressive Web App capabilities
- Performance optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/new-feature`
3. Commit changes: `git commit -m 'feat: add new feature'`
4. Push to branch: `git push origin feat/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [ThinkInk on Vercel](https://thinkink.vercel.app/)
- **Documentation**: [API Docs](https://thinkink.vercel.app/docs)
- **Support**: [Contact Us](https://thinkink.vercel.app/contact)
