<div align="center">
  <img src="https://files.catbox.moe/7jihmf.png" alt="Hasii Music Bot" width="400"/>
  
  # 🎵 Hasii Music Bot - Official Website
  
  <p><b>Official Documentation & Feature Showcase for HasiiMusicBot</b></p>
  
  [![Telegram](https://img.shields.io/badge/Telegram-Channel-blue?style=for-the-badge&logo=telegram)](https://t.me/TheInfinityAI)
  [![Telegram](https://img.shields.io/badge/Telegram-Support-blue?style=for-the-badge&logo=telegram)](https://t.me/Hasindu_Lakshan)
  [![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://hasindu-nagolla.github.io/hasii-music-site/)
  
</div>

---

## 📖 About

This is the official website for **HasiiMusicBot** - a powerful Telegram music streaming bot. The website provides comprehensive documentation, feature highlights, installation guides, and command references for users.

**Main Bot Repository:** [telegram-music-bot](https://github.com/hasindu-nagolla/telegram-music-bot)

---

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful gradient design with particle effects
- 📱 **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Interactive Components** - Smooth animations powered by Framer Motion
- 📊 **Real-time Stats** - Display bot statistics and capabilities
- 🎯 **Command Reference** - Comprehensive command documentation
- 🚀 **Easy Navigation** - Single-page application with smooth scrolling

---

## 🛠 Tech Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.5
- **Styling:** TailwindCSS 3.4.10
- **Routing:** React Router DOM 6.26.0
- **Animations:** Framer Motion 11.5.4
- **Icons:** Lucide React 0.445.0

---

## 📁 Project Structure

```
hasii-music-site/
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Features.jsx    # Features showcase
│   │   ├── Commands.jsx    # Command reference
│   │   ├── Installation.jsx # Setup guide
│   │   ├── Stats.jsx       # Statistics display
│   │   ├── Footer.jsx      # Footer section
│   │   └── ParticlesBackground.jsx # Particle effects
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies

```

---

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Components

All components are located in `src/components/`. Each component is modular and can be easily customized.

### Content

- **Hero Section:** Edit `src/components/Hero.jsx`
- **Features:** Edit `src/components/Features.jsx`
- **Commands:** Edit `src/components/Commands.jsx`
- **Installation Guide:** Edit `src/components/Installation.jsx`

---

## 🌐 Deployment

### GitHub Pages

1. Update `base` in `vite.config.js`:

```js
export default defineConfig({
  base: "/hasii-music-site/",
  // ...
});
```

2. Build and deploy:

```bash
npm run build
npm run deploy
```

### Netlify / Vercel

Simply connect your repository and these platforms will auto-detect the Vite configuration.

Build command: `npm run build`  
Output directory: `dist`

---

## 📞 Support & Contact

- **Developer:** Hasindu Nagolla
- **Telegram Channel:** [@TheInfinityAI](https://t.me/TheInfinityAI)
- **Support Group:** [@Hasindu_Lakshan](https://t.me/Hasindu_Lakshan)
- **GitHub:** [hasindu-nagolla](https://github.com/hasindu-nagolla)
- **Bot Repository:** [telegram-music-bot](https://github.com/hasindu-nagolla/telegram-music-bot)

---

## 📝 Scripts

```json
{
  "dev": "vite", // Start development server
  "build": "vite build", // Build for production
  "preview": "vite preview", // Preview production build
  "deploy": "npm run build" // Build and prepare for deployment
}
```

---

## 🙏 Credits

- **Bot Developer:** [Hasindu Nagolla](https://github.com/hasindu-nagolla)
- **Design Inspiration:** Modern gradient & glassmorphism trends
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📄 License

This project is part of the HasiiMusicBot ecosystem.

**© 2025 Hasii Music Bot. All rights reserved.**

---

<div align="center">
  
  ### Made with ❤️ by Hasindu Nagolla
  
  **[Visit Live Site](https://hasindu-nagolla.github.io/hasii-music-site/)** • **[Bot Repository](https://github.com/hasindu-nagolla/telegram-music-bot)** • **[Telegram Channel](https://t.me/TheInfinityAI)**
  
</div>
