# Bobby's Hair Salon

A single-page, production-ready website for Bobby's Hair Salon — a walk-in barbershop in Bradford, UK. Built with React, Vite and modern CSS.

## Tech stack

- React 18 + Vite (JavaScript, no TypeScript)
- Modern CSS (custom properties, no framework)
- [Lucide React](https://lucide.dev/) for icons
- [Framer Motion](https://www.framer.com/motion/) for restrained entrance/scroll animations
- No backend, no database, no booking system — the business runs on walk-ins

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Available scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR        |
| `npm run build`     | Production build to `dist/`                |
| `npm run preview`   | Preview the production build locally      |
| `npm run lint`      | Run ESLint across the project             |

## Project structure

```
public/assets/        Supplied media (logo, hero video/image, service photos)
src/
  components/          One component per page section (Header, Hero, Services, ...)
  data/business.js      Business info, opening hours and service/price data
  utils/openingHours.js Europe/London live opening-status logic (defensive, never throws)
  utils/useOpeningStatus.js  React hook that refreshes the status every minute
  index.css             Global styles and design tokens
  App.jsx               Composes all sections in page order
index.html               Meta tags, Open Graph, JSON-LD LocalBusiness data
```

## Business details

All content reflects the real business — no invented reviews, awards, social links or booking system:

- Address: 963 Leeds Road, Bradford, BD3 8JB
- Phone: 01274 668779 · WhatsApp: 07462 458888
- Hours: Wed–Mon 10:30am–7:00pm, closed Tuesdays
- Services and prices are defined in `src/data/business.js`

## Deployment

The site is a static Vite build with no server-side requirements, so it deploys directly to Netlify or Vercel:

1. Build command: `npm run build`
2. Output directory: `dist`

Before going live, update the `<link rel="canonical">` tag in `index.html` with the real production URL.

## Notes and limitations

- The embedded Google Map uses the no-API-key `maps.google.com/maps?...&output=embed` format, so it requires outbound network access to Google to render (it will not load in fully offline/sandboxed environments).
- The people shown in the supplied hero and service photography are professional/atmosphere imagery, not photos of Kamal — the copy never claims otherwise.
- The live "open now" status uses `Intl.DateTimeFormat` with the `Europe/London` time zone and is wrapped in a try/catch fallback, so a timezone/Intl issue degrades gracefully rather than breaking the page.
