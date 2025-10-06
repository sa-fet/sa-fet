# SA-FET Homepage

> Ultra-modern, highly animated homepage for Student Affairs Committee - Faculty of Engineering & Technology, Jain University

## 🚀 Features

- **Peak Animation Performance**: Powered by anime.js with connected-UI design
- **Particle System**: Dynamic interactive particle background
- **Unconventional Tabbed Forms**: Morphing UI for Contact, Event Requests, and Grievances
- **Project Showcases**: Quick links to Attendance Portal and SA Hub
- **Program Speed Dial**: Placeholder grid for upcoming programs
- **Fully Responsive**: Mobile-first design with glassmorphism effects
- **Industry-Grade**: Professional, modular, and maintainable codebase

## 🛠️ Tech Stack

- **Framework**: Vite (Rolldown)
- **Animation**: anime.js
- **Styling**: Modern CSS with CSS Variables
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Deploy to GitHub Pages
pnpm deploy
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

1. Ensure your repository is set up on GitHub
2. Run `pnpm deploy` to build and deploy
3. Configure GitHub Pages to use the `gh-pages` branch
4. Your site will be live at `https://yourusername.github.io/repo-name/`

For custom domain (sa-fet.com):
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings to point to GitHub Pages
3. Run `pnpm deploy`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js      # Fixed navigation with scroll spy
│   ├── Hero.js            # Animated hero section
│   ├── Projects.js        # Project cards and speed dial
│   ├── Connect.js         # Tabbed forms system
│   └── *.css              # Component-specific styles
├── utils/
│   └── animations.js      # Animation utilities and particle system
├── main.js                # Application entry point
└── style.css              # Global styles and variables

## 🎨 Customization

### Colors
Edit CSS variables in `src/style.css`:
```css
:root {
  --primary: #003d82;
  --accent: #00d4ff;
  --secondary: #ff6b35;
  /* ... */
}
```

### Content
- **Navigation**: Edit sections array in `Navigation.js`
- **Projects**: Update projects array in `Projects.js`
- **Contact Team**: Modify leads array in `Connect.js`
- **Programs**: Update programs array in `Projects.js`

### Animations
Fine-tune animations in `utils/animations.js`:
- Particle count
- Animation durations
- Easing functions
- Morph paths

## 🎯 Key Interactions

1. **Navigation**: Smooth scroll with animated indicator
2. **Hero Stats**: Count-up animation on scroll into view
3. **Project Cards**: Hover effects with shimmer overlay
4. **Form Tabs**: Morphing indicator with staggered animations
5. **Particles**: Interactive mouse-following system

## 📧 Contact

For any queries or contributions:
- Email: contact@sa-fet.com
- Website: [sa-fet.com](https://sa-fet.com)

## 📄 License

MIT License - feel free to use this template for your own projects!

---

Built with 💙 by the SA-FET Tech Team
