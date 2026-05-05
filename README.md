# Vitae Glass — Demo Storefront

Next.js 16 demo for [vitaeglass.com](https://www.vitaeglass.com) — a redesigned modular glass store experience built for client approval before a full Shopify implementation.

**Live demo:** https://vitae-glass-demo.vercel.app

## Pages

| Route | Description |
|---|---|
| `/` | Home — video hero, press marquee, best sellers, reviews, email capture |
| `/configurator` | Modular build wizard (4 steps: mouthpiece → percolator → base → connector) |
| `/collections/series` | Product listing with category filters |
| `/products/[slug]` | Product detail pages (26 products, statically generated) |
| `/why-vitae` | Brand story with cleaning video |
| `/faq` | FAQ accordion |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS v4
- Framer Motion

## Deployment

Deployed to Vercel under the Lever Agency workspace. Pushes to `main` auto-deploy.

```bash
git push  # triggers Vercel build automatically
```

See `CLAUDE.md` for full architecture notes, design system details, and the Shopify migration path.
