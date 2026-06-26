# ASTRORATAN Occult Gurukul — Website

Premium, luxury spiritual astrology website built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🗂️ Folder Structure

```
astroratan/
├── public/
│   └── logo.png                    ← Brand logo (replace with actual logo)
├── src/
│   ├── App.jsx                     ← Root component, assembles all sections
│   ├── main.jsx                    ← Vite entry point
│   ├── index.css                   ← Global styles, utility classes
│   ├── data/
│   │   └── siteContent.js          ← ⚠️ ALL content lives here (edit this file)
│   ├── hooks/
│   │   └── useScrollSpy.js         ← Active nav section detection
│   ├── components/
│   │   ├── Navbar.jsx              ← Sticky navbar with scroll blur + mobile menu
│   │   ├── Footer.jsx              ← Footer with links, contact, copyright
│   │   ├── FloatingButtons.jsx     ← WhatsApp + Call + Back-to-top floaters
│   │   ├── ui/
│   │   │   ├── ScrollReveal.jsx    ← Reusable Framer Motion scroll animations
│   │   │   └── SectionHeader.jsx  ← Reusable section titles
│   │   └── sections/
│   │       ├── Hero.jsx            ← Full-screen hero with zodiac wheel
│   │       ├── About.jsx           ← About section with timeline
│   │       ├── Services.jsx        ← 4 service cards (dark glassmorphism)
│   │       ├── Reports.jsx         ← Report cards + full request form
│   │       ├── WhyChooseUs.jsx     ← 8 feature cards
│   │       ├── Process.jsx         ← 5-step consultation process
│   │       ├── Testimonials.jsx    ← Auto-sliding + grid testimonials
│   │       ├── FAQ.jsx             ← Animated accordion
│   │       ├── CTAStrip.jsx        ← Animated CTA section
│   │       └── Contact.jsx         ← Contact form + info cards
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── vercel.json                     ← Vercel deployment config
├── netlify.toml                    ← Netlify deployment config
└── package.json
```

---

## ⚡ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 🚀 Deployment

### Vercel (Recommended — Free)
1. Go to https://vercel.com and sign up/login
2. Click "New Project" → Import from Git or "Upload"
3. For upload: run `npm run build` and upload the `dist/` folder
4. Or connect GitHub repo — Vercel auto-detects Vite and deploys

### Netlify (Alternative — Free)
1. Go to https://netlify.com and sign up/login
2. Drag and drop the `dist/` folder to Netlify dashboard
3. Or connect GitHub repo — `netlify.toml` config handles everything

### Manual Build
```bash
npm run build
# Produces /dist folder — upload to any static host
```

---

## ✏️ Content Editing

**All business content is centralized in one file:**

```
src/data/siteContent.js
```

Edit this file to update:
- Brand name, logo, contact details
- Hero text and stats
- Services, features, WhatsApp messages
- Reports (titles, descriptions, includes)
- Testimonials
- FAQ questions and answers
- Process steps
- Why Choose Us cards

**To change WhatsApp number:**
Search for `brand.whatsapp` in `siteContent.js` — update `whatsapp: '8954913578'`

---

## 🎨 Color Customization

Colors are defined in `tailwind.config.js`:
- Primary: `#4B1F73` (Royal Purple)
- Secondary: `#D4AF37` (Premium Gold)
- Dark: `#2D0A4E`

---

## 📱 Features

- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Sticky navbar with scroll blur and active section highlight
- ✅ Cosmic hero with floating logo + animated zodiac wheel
- ✅ Premium glassmorphism service cards (dark) with WhatsApp deep links
- ✅ Report request form → redirects to WhatsApp with pre-typed message
- ✅ Contact form → redirects to WhatsApp with pre-typed message
- ✅ Animated testimonial slider + grid
- ✅ FAQ accordion with smooth height animation
- ✅ Animated CTA strip with pulsing cosmic background
- ✅ Floating WhatsApp (pulsing) + Call + Back-to-top buttons
- ✅ Framer Motion scroll reveal on all sections
- ✅ Star particles, cosmic orbs, twinkling animations throughout
- ✅ Accessible (ARIA labels, keyboard navigation, focus states)
- ✅ prefers-reduced-motion respected
- ✅ SEO meta tags in index.html
- ✅ Production build verified ✓

---

## 📞 Business Contact

- Phone/WhatsApp: **8954913578**
- Email: **astroratan3@gmail.com**

---

*Built with ❤️ — ASTRORATAN Occult Gurukul*
