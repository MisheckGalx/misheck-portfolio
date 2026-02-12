cat > tailwind.config.js << 'EOF'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a0a0a",
        "dark-border": "#222222",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
EOF
