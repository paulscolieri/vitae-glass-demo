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

## Shopify Path (when approved)

The most direct migration is **Shopify Hydrogen** (headless React) — ~70% of this component code is reusable. Alternatively, a standard Shopify theme with the configurator as a custom JavaScript section calling the Cart API (`/cart/add.js`) to add 4 line items simultaneously.

The configurator in Shopify: each component (mouthpiece, percolator, base, connector) is a separate Shopify product. The wood ring connector standard is the key compatibility constraint — discuss with client whether they want 4 separate line items or a true bundle product (requires a third-party app like Bold Bundles).

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
