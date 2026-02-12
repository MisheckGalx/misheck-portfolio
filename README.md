#🎨 Misheck Gogo - Professional Portfolio Website

A modern, fully responsive portfolio website built with React, Tailwind CSS, and GSAP animations. Features dark mode, CV download, profile picture, WhatsApp integration, and smooth scroll animations.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Misheck+Gogo+Portfolio)

---

## ✨ Features

### 🎯 Core Features
- **Dark/Light Mode Toggle** - Smooth theme switching with localStorage persistence
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - GSAP-powered scroll animations for every section
- **Modern UI** - Clean, minimalist design with attention to detail
- **Performance Optimized** - Fast load times and smooth interactions

### 📱 Interactive Elements
- **CV Download Button** - Download CV directly from navigation bar
- **Profile Picture** - Circular profile image with hover effects on home section
- **WhatsApp Integration** - Green live chat button that opens WhatsApp with pre-filled message
- **Social Links** - GitHub, LinkedIn, Email, WhatsApp all integrated
- **Smooth Scrolling** - Auto-scroll to sections with smooth behavior

### 🎨 Design Features
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Custom Animations** - Fade-in, slide-in, and stagger animations
- **Hover Effects** - Interactive elements with smooth transitions
- **Grid Layouts** - Responsive grid for projects and skills
- **Color Scheme** - Professional dark/light mode color palettes

---

## 📦 What's Included

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx         # Hero section with CV & profile
│   │   ├── Contact.jsx       # Contact section with buttons
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Projects.jsx      # Project showcase grid
│   │   ├── Skills.jsx        # Skills display
│   │   └── Footer.jsx        # Footer with socials
│   ├── data/
│   │   └── portfolioData.jsx  # All portfolio content
│   ├── utils/
│   │   └── animations.js     # GSAP animation helpers
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js          # Vite configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Project dependencies
├── SETUP_GUIDE.md          # Detailed setup instructions
├── QUICK_START.md          # Quick start guide
└── README.md               # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation (5 minutes)

1. **Create React Project**
```bash
npm create vite@latest misheck-portfolio -- --template react
cd misheck-portfolio
npm install
```

2. **Install Dependencies**
```bash
npm install react-icons gsap
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Copy Files**
- Copy all provided component files to `src/components/`
- Copy `portfolioData.jsx` to `src/data/`
- Copy `animations.js` to `src/utils/`
- Copy config files to root

4. **Update Your Info**
Edit `src/data/portfolioData.jsx` with your information

5. **Run**
```bash
npm run dev
```
