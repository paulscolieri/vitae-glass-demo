@AGENTS.md

# Vitae Glass Demo

Next.js 16 storefront demo for Vitae Glass (vitaeglass.com). Built as a client-facing mockup to demonstrate a redesigned store experience before committing to a full Shopify build. If the client approves, this becomes the reference implementation.

**Live:** https://vitae-glass-demo.vercel.app (Lever Agency Vercel workspace)
**Repo:** https://github.com/paulscolieri/vitae-glass-demo

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme`, no `tailwind.config.ts`
- **Framer Motion** — spring physics: `stiffness: 100, damping: 20`
- **React 19**

## Design System

Defined in `app/globals.css` and sourced from `reference-material/stitch_vitae_glass_shopify_redesign/vitae_glass_system/DESIGN.md`.

- **Colors:** Black/white monochromatic. `#000000` primary, `#5f5e5e` charcoal, `#f9f9f9 / #ececec / #dadada` neutrals
- **Typography:** Instrument Sans (headings, `--font-instrument-sans`) + Inter (body, `--font-inter`)
- **Borders:** 0.5–1px `#ECECEC`, **0px border-radius everywhere** (sharp corners)
- **Spacing:** 4px base unit, 120px section gaps, 80px desktop page margins
- **Glass effect:** `backdrop-filter: blur(12px)` at 40–70% opacity — used on nav drawer and overlays
- **Aesthetic:** "Laboratory Luxury" — minimalist, scientific, no shadows (use thin borders + translucency instead)

## Project Structure

```
app/
  layout.tsx                  # Root layout — Nav + Footer shell, font loading
  page.tsx                    # Home page
  configurator/page.tsx       # 4-step modular configurator
  collections/series/page.tsx # Product listing with category filters
  products/[slug]/page.tsx    # Product detail (SSG via generateStaticParams)
  why-vitae/page.tsx          # Brand story page
  faq/page.tsx                # FAQ accordion

components/
  layout/
    Nav.tsx                   # Sticky frosted-glass nav, mobile drawer
    Footer.tsx                # Footer with logo and nav links
  configurator/
    ConfiguratorWizard.tsx    # 4-step state machine (client component)
    StepCard.tsx              # Selectable product option card
    BuildSummary.tsx          # Live build sidebar/drawer
    CartModal.tsx             # Final summary modal with mock checkout
    BenefitsAccordion.tsx     # "Why build your own" accordion below wizard
  ui/
    VideoHero.tsx             # Autoplay muted looping video
    ProductCard.tsx           # Reusable product grid card
    PressMarquee.tsx          # Infinite CSS marquee of press logos
    ReviewsCarousel.tsx       # Paginated 3-up review cards with Framer Motion
    EmailCapture.tsx          # Email signup strip

lib/
  products.ts                 # All product data, configuratorSteps, helper text

public/
  images/                     # Product images (WebP), logo (AVIF)
  images/best-sellers/        # Lifestyle/bundle shots for home page
  images/marquee/             # Press logo images (logos + quote copy baked in)
  videos/                     # MP4 hero and ambient videos
```

## Key Decisions

**No Shopify integration** — this is a demo with mock data and a mock cart. No API calls, no real checkout. The cart modal includes a disclaimer stating this.

**Mock product data** — all products, prices, and reviews are in `lib/products.ts`. Prices for bundle/best-seller items on the home page are estimates — confirm with client before showing.

**Videos in git** — the three MP4s total ~3.5MB, small enough to keep in the repo.

**Image filenames have spaces** — handled by `encodeURIComponent()` in `lib/products.ts`. Don't rename them without updating the data.

**Marquee animation** — pure CSS `@keyframes marquee` in `globals.css`, not JS. Pauses on hover. The press logo images have the quote copy baked in — don't add separate text underneath.

**Logo inversion** — the nav inverts the logo (`filter: invert`) when over the dark hero video, then removes invert once scrolled.

## Shopify Build (Active — approved May 20, 2026)

**Client:** Gordon Loi (Vitae Glass owner) · **Intermediary:** Joshua Hoffman

**Platform:** Custom Shopify theme on Dawn. Dawn is only the base-level Shopify foundation — all visual components are custom-built on top. Hydrogen is not in scope (budget).

**Timeline:** Client's target launch is **August / September 2026** (per completed questionnaire). Paul took 1–2 weeks off after baby due date ~June 9.

**Approach:** This Next.js demo is the reference implementation. ~70% of the component structure is directly reusable as a pattern guide. The Shopify build will replicate the experience in standard JavaScript/CSS/Liquid on top of Dawn, without a React framework.

### Configurator — Correct Logic (differs from the demo)

The current demo step order is wrong. Correct flow for the Shopify build:

1. **Base** — mandatory
2. **Mouthpiece** — mandatory
3. **Connector ring** — mandatory, 1 per joint (auto-added per percolator added)
4. **Percolator** — optional add-on, 0 to N allowed

~90% of customers buy presets. Build-your-own is an important feature but secondary. Keep the guided flow simple and minimal — avoid choice overload.

**Upsell placement:** Post-cart only. Do not surface upsells (extra percs, accessories, ash catchers) during the build flow — present them after the core build is in the cart. Email marketing is the primary upsell channel for repeat purchases.

### Pages

| Page | Notes |
|------|-------|
| Home | — |
| Collections | Category filters, default sort |
| Product Detail (PDP) | Reviews, product info |
| Build Your Own | Configurator — see logic above |
| Why Vitae | Absorbs "Why Choose Vitae Glass" from current site |
| Blog | Index + single post template. Topics: cleaning guides, product/cannabis education, terpenes, releases, news, sustainability, buying guides. Featured/hero post if beneficial. **Note:** client wants "Our Story" and "Our Cause" as standalone pages, NOT blog posts (were likely set up incorrectly before) |
| Wholesale | Light redesign of existing page; pop-up registration form stays as-is |
| FAQ | Self-serve editable in Shopify |
| Contact | Form + contact methods |

### Out of Scope for v1

- 3D product visualizer (stacked component preview) — needs 3D renders created first
- Scroll-driven assembly animation — needs visual assets and adds build complexity
- "Add to Build" CTA on PDPs — floated during discovery call, revisit after v1 ships

### Guiding Philosophy

Conversion-first. The main problem with the current Vitae site is navigation friction and difficulty finding products. This build solves that. Animations and visual enhancements are a future layer.

> "Get it into people's hands, sell them more stuff later via email." — Joshua Hoffman
> Apple analogy: flashy scroll animations belong on marketing/launch pages; PDPs and the shop should be clean and easy to buy from.

### Confirmed Integrations & Tools (from client questionnaire)

- **Reviews:** Stamped (already installed) — display on PDPs
- **Loyalty:** Stamped loyalty program (already installed as app)
- **Email marketing:** Klaviyo
- **Live chat:** Rep AI (already installed as app)
- **Analytics at launch:** GA4 + Meta (Facebook) Pixel. No TikTok Pixel. Heatmap tracking optional.
- **Shopify:** collaborator code `3105`, store `vitaeglass.myshopify.com`, Lever Agency Partner ID 444843.

### Brand Refresh Direction (differs from this demo)

The demo uses monochrome Instrument Sans + Inter ("Laboratory Luxury"). The **Shopify build direction is warmer**: keep existing logo, introduce **earth-tone accent colors**, and add **serif heading contrast** (client likes **Newsreader** and **Red Hat Display**) over a sans-serif body. Avoid: dark smoke-shop aesthetic, neon, clutter, excessive animation, pretentious luxury. Design references: Yeti, Vessel, Patagonia, Apple.

### Reference

Full client answers: [`reference/client-questionnaire-responses.md`](reference/client-questionnaire-responses.md). Blank template: `reference/client-questionnaire.md`. Discovery call: `reference/call-transcript-05-20-2026.txt`.

## Shopify Path (reference only)

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npx tsc --noEmit # Type check without building
```

## Content To Update Before Client Handoff

- Bundle prices on home page best sellers (currently estimated)
- Review copy for Mark D., Andreas, Daniel F. pulled from their site — other 3 are placeholders
- Press quote copy for Dope Magazine, Fat Nugs, Dank City, Stoner Mom, Mary — placeholders
- Product descriptions in `lib/products.ts` — written to match brand voice but unverified
