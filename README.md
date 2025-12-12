# Daanveer Landing Page

A production-ready React landing page for **Daanveer** — an app that connects volunteers, NGOs, and charities.

![Daanveer](./src/assets/logo-placeholder.svg)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Production Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── logo-placeholder.svg    # Animated SVG logo
│   └── logo-lottie.json        # Lottie animation placeholder
├── components/
│   ├── Splash.tsx              # Intro splash screen
│   ├── Navbar.tsx              # Sticky navigation
│   ├── Hero.tsx                # Hero with CTAs
│   ├── FeaturesGrid.tsx        # Feature cards
│   ├── HowItWorks.tsx          # 3-step flow
│   ├── TechStack.tsx           # Technology section
│   ├── Impact.tsx              # Impact metrics
│   ├── Roadmap.tsx             # Future features
│   ├── Footer.tsx              # Footer with links
│   └── DownloadModal.tsx       # APK install instructions
├── pages/
│   └── Landing.tsx             # Main landing page
├── App.tsx                     # Root app with splash logic
├── main.tsx                    # Entry point
├── config.ts                   # Configuration
└── index.css                   # Tailwind + custom styles
public/
└── downloads/
    └── daanveer.apk            # Placeholder APK (replace with real)
```

## ⚙️ Configuration

Edit `src/config.ts` to customize:

```typescript
export const config = {
  // APK Download URL - Replace with actual APK location
  APK_DOWNLOAD_URL: '/downloads/daanveer.apk',
  
  // Contact & Social Links
  CONTACT_EMAIL: 'contact@daanveer.app',
  GITHUB_URL: 'https://github.com/daanveer',
  PRIVACY_POLICY_URL: '/privacy',
}
```

## 🎨 Customization

### Replace Logo Animation

**Option 1: SVG Animation**
Replace `src/assets/logo-placeholder.svg` with your animated SVG.

**Option 2: Lottie Animation**
1. Install Lottie: `npm install lottie-react`
2. Replace `src/assets/logo-lottie.json` with your Lottie JSON
3. Update `src/components/Splash.tsx`:

```tsx
import Lottie from 'lottie-react';
import logoAnimation from '../assets/logo-lottie.json';

// Replace the img tag with:
<Lottie 
  animationData={logoAnimation} 
  loop={true}
  style={{ width: 180, height: 180 }}
/>
```

### Update APK

Replace `public/downloads/daanveer.apk` with your actual APK file.

## 🌐 Deployment

### Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with defaults (auto-detects Vite)

### Netlify

1. Push code to GitHub
2. Import in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual

```bash
npm run build
# Upload contents of `dist/` to your hosting
```

## 📋 Content Changelog

Content sourced from project documentation:

| Section | Source |
|---------|--------|
| Hero headline | "Daanveer — Local volunteering made simple" |
| Hero subheadline | Abstract description from PDF |
| Features | 6 features: Smart Local Discovery, Impact Verification, SkillMatch, Resource Exchange, Karma Points, Story Capsules |
| How It Works | 3-step flow: Discover → Verify → Earn Karma |
| Tech Stack | React, Tailwind, Django REST/FastAPI, OpenStreetMap, PostgreSQL |
| Impact | Participation, Trust, Efficiency, Community metrics |
| Roadmap | NLP Matching, Ride-Share, Emergency Alerts, AI Reports |

## 🎯 Features

- ✅ Animated splash screen with sessionStorage skip
- ✅ Responsive navbar with mobile hamburger
- ✅ Hero section with dual CTAs
- ✅ Feature cards with reveal animations
- ✅ 3-step "How it works" flow
- ✅ Tech stack showcase
- ✅ Impact metrics section
- ✅ Roadmap for future features
- ✅ Download modal with APK instructions
- ✅ SEO meta tags and Open Graph
- ✅ Keyboard accessibility
- ✅ Reduced motion support
- ✅ Mobile-first responsive design

## 📄 License

MIT License - See LICENSE file for details.
