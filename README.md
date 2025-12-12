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

This project is **deploy-ready** for all major hosting platforms. Configuration files included:
- `netlify.toml` - Netlify configuration
- `vercel.json` - Vercel configuration
- `firebase.json` - Firebase Hosting configuration
- `public/_redirects` - SPA routing fallback

### Netlify (Recommended)

**Option 1: Deploy from GitHub**
1. Push code to GitHub
2. Go to [Netlify](https://netlify.com) and click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repo
4. Build settings are auto-detected from `netlify.toml`
5. Click "Deploy site"

**Option 2: Drag & Drop**
```bash
npm run build
# Drag the `dist` folder to Netlify's deploy zone
```

**Option 3: Netlify CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Framework preset: Vite (auto-detected)
5. Click "Deploy"

Or use CLI:
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting  # Select "dist" as public directory
npm run build
firebase deploy
```

### GitHub Pages

1. Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Build and deploy:
```bash
npm run build
# Push dist folder to gh-pages branch
```

### Manual / Other Hosts

```bash
npm run build
# Upload contents of `dist/` folder to your hosting provider
# Ensure your host is configured for SPA routing (redirect all paths to index.html)
```

### Environment Variables (Optional)

For production, you can configure:
```env
VITE_API_URL=https://api.daanveer.app
VITE_GA_ID=G-XXXXXXXXXX
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
