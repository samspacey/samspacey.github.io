# Athonics Website Redesign Brief

## Brand
- **Name**: Athonics — Data Infrastructure & AI Consulting
- **Logo**: Coral-orange circle with white flowing curves (like Swift logo). Files: `logo.png`, `Logo/logo-colour.png`, `Logo/logo-black.png`, `Logo/logo-white.png`
- **Primary color**: #FF5349 (coral-orange)
- **Contact**: sam@athonics.com
- **Owner**: Sam Spacey — runs data consulting dept at Woodhurst, side business Athonics for data modernisation

## Current Problems
- Monospace font (Monaco) — looks like a code editor, not a consulting firm
- Emoji icons (⚙️🔧🤖) instead of proper SVG/CSS icons
- Generic template feel — no personality or visual distinction
- Inline styles duplicated across 4 pages
- Very text-heavy, walls of content
- No animations or visual interest
- Footer is bare minimum

## Design Direction
- **Modern, premium consulting site** — think Linear, Vercel, Stripe-level polish
- Clean sans-serif font (Inter, or similar from Google Fonts)
- Subtle animations: scroll reveals, smooth hovers, gradient accents
- Dark hero sections with gradient mesh or subtle particle effects
- Glassmorphism nav on scroll
- Proper SVG icons (Lucide or similar inline SVGs)
- Consistent shared CSS file (`styles.css`)
- Mobile-first responsive
- Respect `prefers-reduced-motion`

## Pages
1. `index.html` — Homepage: hero, services overview, stats/social proof, CTA
2. `services.html` — Detailed services with tech stack tags
3. `about.html` — Mission, methodology timeline, values
4. `contact.html` — Contact info, engagement types, CTA

## Tech Constraints
- Pure static HTML/CSS/JS (hosted on GitHub Pages)
- No build tools, no frameworks
- Single shared `styles.css` file
- Keep all existing content/copy — just redesign the presentation
- Keep existing file structure (index.html, about.html, services.html, contact.html)
- Copyright should say 2025 (keep as-is)

## Key Features to Add
- Scroll-triggered reveal animations (IntersectionObserver)
- Animated gradient hero backgrounds
- Scroll progress bar at top
- Proper icon system (inline SVGs)
- Stats counter section on homepage
- Interactive methodology timeline on about page
- Floating contact CTA button
- Dark/light footer with proper columns
- Smooth page transitions feel
