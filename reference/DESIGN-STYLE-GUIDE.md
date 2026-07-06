# Design Style Guide
## "Laboratory Luxury" — Aesthetic Reference for Shopify Theme Build

This document captures the visual language and design principles from the Vitae Glass Next.js demo. Use it as the reference implementation when building a new Shopify theme on top of Dawn. The goal is to replicate the *aesthetic* — not any specific component or product logic.

---

## 1. Design Philosophy

**Keyword:** Laboratory Luxury

The aesthetic sits at the intersection of scientific precision and premium minimalism. Think high-end lab equipment, Apple industrial design, and Japanese craft — not streetwear, not maximalist DTC, not "techy dark mode."

**Core principles:**
- Whitespace is the primary design element. Let products breathe.
- Typography carries the hierarchy — not color, not decoration
- Motion should feel physical and purposeful, never decorative
- No ornamentation. No gradients on UI elements. No drop shadows.
- Borders replace shadows. Translucency replaces fills.
- Sharp corners everywhere — 0px border-radius on all interactive elements

**The vibe test:** If you squint at a section and it could belong on a luxury Swiss watchmaker's site or a scientific instruments company, you're on track. If it looks like a typical Shopify store, pull back.

---

## 2. Color System

The palette is deliberately constrained — almost entirely black, white, and neutral grays.

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Black | `#000000` | Primary text, filled buttons, active states |
| White | `#FFFFFF` | Background, button text on dark, inverted states |
| Charcoal | `#5f5e5e` | Secondary text, meta labels |

### Neutral Scale

| Token | Hex | Usage |
|-------|-----|-------|
| Neutral 50 | `#f9f9f9` | Subtle backgrounds (product image wells, email section bg) |
| Neutral 100 | `#ececec` | Default border color for all dividers and containers |
| Neutral 200 | `#dadada` | Heavier borders, faint step indicators |
| Neutral 300 | `#c4c4c4` | Placeholder text, tertiary UI |
| Neutral 800 | `#1b1b1b` | Button hover states (near-black, slightly softer than `#000`) |
| Neutral 900 | `#0d0d0d` | Deep dark backgrounds if needed |

### Accent (Use Sparingly)

| Token | Hex | Usage |
|-------|-----|-------|
| Gold | `#C9A84C` | Star ratings only — the one warm accent in the entire system |

**Rules:**
- Never use brand colors on backgrounds, badges, or UI chrome — black/white only
- No tints of black. Transparency via `opacity` or `rgba`, not color variants.
- The neutral scale handles all supporting text, borders, and backgrounds

---

## 3. Typography

### Fonts

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Headings | **Instrument Sans** | 300 (Light) | Available on Google Fonts |
| Body | **Inter** | 400, 500 | Standard system fallback acceptable |

**Critical heading rule:** All headings use `font-weight: 300`. This is the signature of the aesthetic — the lightness of the type against the precision of the layout creates the "scientific luxury" tension. Never use bold headings.

### Heading Scale

Use `clamp()` for fluid scaling on all major headings. These are the exact values from the implementation:

| Usage | Size | Letter Spacing |
|-------|------|----------------|
| Hero / Page title | `clamp(2.5rem, 8vw, 7rem)` | `letter-spacing: -0.01em` (tight) |
| Section heading large | `clamp(2rem, 5vw, 4rem)` | `letter-spacing: -0.01em` |
| Section heading medium | `clamp(1.75rem, 4vw, 3rem)` | `letter-spacing: -0.01em` |
| Section heading small | `clamp(2rem, 6vw, 5rem)` | `letter-spacing: -0.01em` |
| Product title (PDP) | `clamp(2rem, 4vw, 3.5rem)` | `letter-spacing: -0.01em` |
| Sub-section / card | `text-2xl` (1.5rem) | Normal |

**Leading:** All display headings use `line-height: 1` (none). Not 1.2, not 1.5. The tight leading is essential to the aesthetic.

### Eyebrow Labels

Nearly every section opens with a small uppercase label above the heading. This is one of the most consistent patterns in the design.

```
font-size: 0.75rem (12px)
letter-spacing: 0.25em
text-transform: uppercase
color: #c4c4c4 or #5f5e5e (neutral-300 or secondary)
margin-bottom: 24px (6 spacing units)
```

**Examples from the site:**
- `Laboratory Luxury`
- `The Modular System`
- `Best Sellers`
- `Our Philosophy`
- `As Seen On`

The eyebrow is always lighter than body text — use `neutral-400` (`#a3a3a3`) or `neutral-300`.

### Body Text

```
font-size: 0.875rem–1rem (14–16px)
font-weight: 400
color: #5f5e5e (charcoal) for secondary body
color: #000000 for primary/active
line-height: 1.6–1.7 (relaxed)
```

### Navigation / CTA Labels

All buttons, nav links, filter tabs, and CTAs use:
```
font-size: 0.75rem (12px)
letter-spacing: 0.15em
text-transform: uppercase
font-weight: 400 or 500
```

### Price Display

```
font-size: 0.875rem (product grids)
font-size: 1.5rem (PDP)
font-weight: 300 (light — matches heading style)
color: neutral-500 in grids, black on PDP
```

---

## 4. Spacing & Layout

### Max Width & Page Margins

```
max-width: 1400px
horizontal padding: 24px (mobile) → 80px (desktop, lg breakpoint)
```

In Liquid/CSS:
```css
.page-width {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (min-width: 1024px) {
  .page-width {
    padding-left: 80px;
    padding-right: 80px;
  }
}
```

### Section Vertical Rhythm

| Token | Value | Usage |
|-------|-------|-------|
| Section gap | `120px` | Between major page sections |
| Compact section | `80px` | Tighter sections (reviews, email capture) |
| Card padding | `24px` | Inside bordered containers |
| Gutter | `24px` | Column gaps in grids |

**Rule:** Every full-width section that contains content uses `padding-top: 120px; padding-bottom: 120px`. Sections that are purely decorative (dividers, marquees) can use `padding: 40px 0`.

### Grid Patterns

| Context | Columns | Gap |
|---------|---------|-----|
| Product grid (collections) | 2 → 3 → 4 → 5 | 24px → 32px |
| 2-column content (text + image) | 1 → 2 | 80px |
| Brand pillars / feature grid | 1 → 3 | 48px → 24px |
| Footer | 1 → 4 | 48px |
| Review cards | 1 → 3 | 24px → 32px |
| Related products | 2 → 4 | 24px → 40px |

---

## 5. Borders & Shapes

**Universal rule: `border-radius: 0` everywhere.** Buttons, cards, inputs, badges, images — all have perfectly square corners. This is the single most defining visual characteristic of the design system.

### Border Specifications

```css
/* Default border — used on product cards, review cards, dividers */
border: 1px solid #ececec;

/* Active / focus border */
border: 1px solid #000000;

/* Faint divider — section separators */
border-top: 1px solid #ececec;
border-bottom: 1px solid #ececec;

/* Heavier border — brand pillars, specs tables */
border-top: 1px solid #dadada;
```

**Line ornaments:** Use `1px` horizontal rules frequently — as section separators, above/below nav, inside cards. These thin lines do the work that shadows do in other design systems.

### Product Image Wells

Product images always sit inside a contained background area, never floating:

```css
.product-image-well {
  background: #f9f9f9;    /* neutral-50 */
  border: 1px solid #ececec;
  overflow: hidden;
  padding: 24px;           /* images don't touch edges */
}
```

For square thumbnails (grids): `aspect-ratio: 1 / 1`
For portrait product images (hero cards): `aspect-ratio: 3 / 4`
For PDP main image: `aspect-ratio: 1 / 1` with `padding: 48px`

---

## 6. Glass / Frosted Effect

Used exclusively on the nav (on scroll) and the mobile drawer overlay. Not used on any content cards or section backgrounds.

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(236, 236, 236, 0.8);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

**When to use:**
- Nav header after scroll (`.glass` — white frosted)
- Mobile full-screen menu overlay (`.glass-dark` — black frosted)
- Any overlay that sits above a video or rich background image

**When NOT to use:** Product cards, section backgrounds, tooltips, dropdowns, modals with content forms.

---

## 7. Buttons & CTAs

### Primary Button (Filled Black)

```css
.btn-primary {
  display: inline-block;
  padding: 16px 32px;
  background: #000000;
  color: #ffffff;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 200ms;
}
.btn-primary:hover {
  background: #1b1b1b;
}
```

### Secondary Button (Bordered)

```css
.btn-secondary {
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  color: #000000;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid #000000;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 200ms, color 200ms;
}
.btn-secondary:hover {
  background: #000000;
  color: #ffffff;
}
```

### Ghost Button (On Dark / Hero Backgrounds)

```css
.btn-ghost {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  /* same padding/font as above */
}
.btn-ghost:hover {
  border-color: #ffffff;
}
```

### Text Link with Underline

```css
.link-underline {
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid #000000;
  padding-bottom: 2px;
}
.link-underline:hover {
  opacity: 0.6;
}
```

### Button Sizing Variants

| Size | Padding |
|------|---------|
| Large (hero) | `20px 40px` |
| Default | `16px 32px` |
| Small (nav accent) | `8px 20px` |
| Compact (icon-adjacent) | `12px 24px` |

---

## 8. Navigation

### Structure

- Fixed at top of page, `z-index: 50`, `height: 64px`
- Logo left, nav links right (desktop)
- Logo left, hamburger icon right (mobile)

### Scroll Behavior

The nav starts **fully transparent** when at the top of the page, overlaying the dark hero video. On scroll past ~40px, it transitions to the frosted glass state:

```
At top:        background: transparent; no border
After scroll:  background: rgba(255,255,255,0.7) + blur(12px); border-bottom: 1px solid #ececec
```

**Logo inversion:** When the nav is transparent (over dark video), apply `filter: invert(1)` to the logo so it appears white. Remove the filter once the nav gains its frosted background.

### Desktop Nav Links

```css
.nav-link {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.7;
  transition: opacity 150ms;
}
.nav-link:hover,
.nav-link[aria-current="page"] {
  opacity: 1;
}
```

### Nav CTA (Accent Link)

One nav link gets elevated to a filled button — the primary action ("Build Your Own", or whatever the key CTA is for the store):

```css
.nav-cta {
  padding: 8px 20px;
  background: #000000;
  color: #ffffff;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

### Mobile Drawer

Full-screen overlay using `.glass-dark` (black, 70% opacity, blur). Nav links animate in staggered from the right, large and light:

```
font-size: 1.5rem
font-weight: 300
letter-spacing: 0.1em
text-transform: uppercase
color: #ffffff
```

Hamburger icon: 3 horizontal 1px lines (`6px wide`). Animates to an X on open.

---

## 9. Hero Section

### Full-Viewport Video Hero

The homepage hero sits at `min-height: 100vh`, with a dark video playing behind a gradient overlay and text positioned at the bottom-left:

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: #000;
}
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
}
.hero-content {
  position: relative;
  z-index: 10;
  padding-bottom: 80px;  /* 32px mobile */
}
```

**Content layout (bottom-left):**
1. Eyebrow label (white/60% opacity)
2. Giant heading — `clamp(2.5rem, 8vw, 7rem)`, weight 300, color white, leading 1
3. Subtitle — `1.125rem`, color `rgba(255,255,255,0.7)`, max-width ~400px
4. CTA buttons — primary (white fill / black text) + secondary (ghost)

**Scroll indicator (bottom-right):**
```
horizontal rule + "SCROLL" text, both at white/40% opacity
```

### Ambient Video Break Section

Mid-page full-width video at `height: 60vh` with `black/50%` overlay and centered text:

```css
.ambient-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
}
```

Content: eyebrow → large heading → text link (no button).

### Static Image Break Section

Full-width image at `height: 70vh` with a left-side gradient overlay (`from-black/40 to-transparent`) and a pull quote overlaid at the left.

---

## 10. Product Cards

### Grid Card (Collections Page)

```css
.product-card-image {
  aspect-ratio: 1 / 1;
  background: #f9f9f9;
  border: 1px solid #ececec;
  overflow: hidden;
  position: relative;
}
.product-card-image img {
  object-fit: contain;
  padding: 24px;
  transition: transform 500ms ease;
}
.product-card:hover .product-card-image img {
  transform: scale(1.05);
}
.product-card-meta {
  margin-top: 16px;
}
.product-card-category {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #a3a3a3;
  margin-bottom: 4px;
}
.product-card-name {
  font-size: 0.875rem;
  font-weight: 500;
}
.product-card-price {
  font-size: 0.875rem;
  color: #737373;  /* neutral-500 */
  margin-top: 4px;
}
```

**Hover:** Scale image to 1.05 over 500ms. No card lift, no shadow — just the contained image zoom.

### Product Badge / Tag

Positioned `top: 12px; left: 12px` inside the image well:

```css
.product-badge {
  font-size: 0.625rem;  /* 10px */
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #000000;
  color: #ffffff;
  padding: 2px 6px;
  /* no border-radius */
}
```

### Editorial Grid Layout (Featured Products)

The homepage uses an asymmetric editorial grid — not a uniform grid. Structure:

```
3 columns total:
  Col 1: large portrait card (3:4 aspect) — spans 1 col
  Col 2: large portrait card (3:4 aspect) — spans 1 col
  Col 3: 2×2 grid of smaller square cards — spans 1 col
```

This creates visual hierarchy without needing different card designs.

---

## 11. Product Detail Page (PDP)

### Layout

Two-column grid: `1fr 1fr` on desktop, stacked on mobile. Gap: `64px–96px`.

**Left column (image):**
- Square `aspect-ratio: 1/1` image well
- `background: #f9f9f9; border: 1px solid #ececec`
- Image padded `48px` inside

**Right column (info):**
- Category eyebrow label (neutral-400, uppercase, tracked)
- Product name — `clamp(2rem, 4vw, 3.5rem)`, weight 300, leading 1
- Price — `1.5rem`, weight 300
- Description — `1rem`, neutral-500, relaxed leading, max-width ~400px
- CTA buttons — full-width stack

### Specs Table

Horizontal key/value pairs separated by a `border-top: 1px solid #ececec`:

```css
.spec-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #ececec;
}
.spec-label {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a3a3a3;
  flex-shrink: 0;
}
.spec-value {
  font-size: 0.875rem;
  text-align: right;
}
```

### Breadcrumb

```
Home / Components / Product Name
```
- `font-size: 0.75rem`, `color: neutral-400`, `letter-spacing: 0.05em`
- Separator: `/` character with spacing
- Current page: `color: #000`

---

## 12. Collections / Filter Tabs

Tab row sits at the bottom of the page header, flush with the bottom border:

```css
.filter-tabs {
  display: flex;
  overflow-x: auto;         /* horizontal scroll on mobile */
  border-bottom: 1px solid #ececec;
  margin-bottom: -1px;      /* overlap the section border below */
}
.filter-tab {
  padding: 16px 20px;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #a3a3a3;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 150ms, border-color 150ms;
  cursor: pointer;
}
.filter-tab:hover {
  color: #000000;
}
.filter-tab.active {
  color: #000000;
  border-bottom-color: #000000;
}
```

Product count label:
```css
.product-count {
  font-size: 0.75rem;
  color: #a3a3a3;
  letter-spacing: 0.05em;
  margin-bottom: 32px;
}
```

---

## 13. Brand Pillars / Feature Grid

A recurring pattern used to present 3–4 key concepts:

```css
.pillar {
  border-top: 1px solid #dadada;
  padding-top: 32px;
}
.pillar-number {
  font-size: 2.25rem;  /* large, ghosted */
  font-weight: 300;
  color: #e5e5e5;      /* neutral-200 */
  margin-bottom: 24px;
  line-height: 1;
}
.pillar-title {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}
.pillar-body {
  font-size: 0.875rem;
  color: #737373;      /* neutral-500 */
  line-height: 1.7;
}
```

The large ghosted number (`01`, `02`, etc.) is the visual hook. It uses a very light gray so it reads as a decorative element, not primary content.

---

## 14. Press / Trust Bar (Marquee)

A horizontal infinite-scroll marquee of press logos. Always placed immediately after the hero section.

**Section structure:**
```
Border-top + border-bottom: 1px solid #ececec
Padding: 40px 0
Background: white
```

**"As Seen On" label:** Centered above the marquee — `font-size: 0.75rem`, `letter-spacing: 0.25em`, uppercase, `color: #d4d4d4` (very light).

**Logo treatment:** All logos displayed as grayscale at 80% opacity. No color logos. This maintains the monochromatic palette.

**Edge fade:** Gradient overlays on left and right edges fade the logos into the background color, creating a clean scroll effect:
```css
.marquee-fade-left {
  background: linear-gradient(to right, #ffffff, transparent);
  width: 96px;
}
.marquee-fade-right {
  background: linear-gradient(to left, #ffffff, transparent);
  width: 96px;
}
```

**Animation:** CSS keyframe scrolling at ~40s duration (slow, ambient). Pauses on hover.
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 40s linear infinite;
  display: flex;
  width: max-content;  /* duplicate items for seamless loop */
}
.marquee-track:hover {
  animation-play-state: paused;
}
```

---

## 15. Review Cards

Three-up paginated grid. Each card:

```css
.review-card {
  border: 1px solid #ececec;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.review-stars {
  /* Gold fill: #C9A84C — the only warm accent */
}
.review-date {
  font-size: 0.75rem;
  color: #d4d4d4;  /* very faint */
}
.review-title {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
}
.review-thumbnail {
  width: 56px;
  height: 56px;
  background: #f9f9f9;
  border: 1px solid #ececec;
  flex-shrink: 0;
  /* object-fit: contain, small padding inside */
}
.review-body {
  font-size: 0.75rem;
  color: #737373;
  line-height: 1.7;
  /* clamp to 4 lines with line-clamp */
}
.review-footer {
  border-top: 1px solid #ececec;
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
}
.review-author {
  font-size: 0.75rem;
  font-weight: 500;
}
.review-product-name {
  font-size: 0.75rem;
  color: #d4d4d4;
  letter-spacing: 0.05em;
}
```

**Pagination controls:** Minimal arrow buttons — `32px × 32px`, `border: 1px solid #e5e5e5`, no fill. On hover: `border-color: #000`. SVG arrows, stroke weight `1px`.

**Page dots:** `6px × 6px` squares (not circles — no border-radius). Active: `#000`. Inactive: `#e5e5e5`.

---

## 16. Accordion (FAQ)

```css
.accordion-item {
  border-bottom: 1px solid #ececec;
}
.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  text-align: left;
  gap: 16px;
  cursor: pointer;
  transition: opacity 150ms;
}
.accordion-trigger:hover {
  opacity: 0.7;
}
.accordion-question {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
}
.accordion-icon {
  /* + icon, 12×12px SVG, stroke-weight: 1px */
  /* Rotates to × (45deg) when open */
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  transition: transform 200ms;
}
.accordion-answer {
  font-size: 0.875rem;
  color: #737373;
  line-height: 1.7;
  padding-bottom: 24px;
  max-width: 672px;
  /* Animate height 0 → auto on open, with opacity */
}
```

**Section labels above accordion groups:** `font-size: 0.75rem`, `letter-spacing: 0.2em`, uppercase, neutral-400, `margin-bottom: 24px`.

---

## 17. Email Capture Section

Slightly off-white background (`#f9f9f9`) with centered text and a simple inline form:

```
Background: #f9f9f9
Border-top: 1px solid #ececec
Padding: 80px 0
Max-width of form: 480px, centered
```

**Form input:**
```css
.email-input {
  border: 1px solid #e5e5e5;
  background: #ffffff;
  padding: 12px 16px;
  font-size: 0.875rem;
  flex: 1;
  outline: none;
  border-radius: 0;
  transition: border-color 200ms;
}
.email-input:focus {
  border-color: #000000;
}
.email-input::placeholder {
  color: #d4d4d4;
}
```

The submit button uses the standard primary button styles, sized to match the input height.

---

## 18. Steps / Process Indicators

Numbered feature grid (used to illustrate a sequential process):

```css
.step {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.step-number {
  font-size: 1.875rem;  /* 30px */
  font-weight: 300;
  color: #e5e5e5;       /* ghosted */
  line-height: 1;
}
.step-label {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}
.step-sublabel {
  font-size: 0.75rem;
  color: #a3a3a3;
  letter-spacing: 0.05em;
}
```

Contained in a `border-top` + `border-bottom` section with `padding: 64px 0`.

---

## 19. Animation Principles

All motion in this design system follows these constraints:

### Allowed Transitions

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Buttons (bg/border) | `background-color`, `border-color`, `color` | `200ms` | `ease` |
| Nav links | `opacity` | `150ms` | `ease` |
| Image hover zoom | `transform: scale(1.05)` | `500ms–700ms` | `ease` |
| Nav frosted state | `background`, `border` | `300ms` | `ease` |
| Accordion expand | `height`, `opacity` | `250ms` | `ease-in-out` |
| Page fade-up (on load) | `opacity`, `translateY(20px)` | `600ms` | `ease` |
| Slide-in (carousel, drawer) | `opacity`, `translateX` | Spring physics | `stiffness: 100, damping: 20` |

### Spring Physics (for JavaScript animations)

```javascript
// Framer Motion equivalent values — adapt to Shopify's animation approach
stiffness: 100
damping: 20
```

This spring produces a gentle, physical feel — slight overshoot, fast settle. Not bouncy, not stiff.

### What NOT to Animate

- Color on text (transition opacity instead)
- Height on non-accordion elements
- Page scroll position
- Complex transforms (3D, skew, rotate on content)
- Sequential stagger on more than 4 items

### Fade-Up on Page Load

Content sections can animate in with a subtle fade-up:

```css
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.6s ease forwards;
}
```

---

## 20. Footer

4-column grid on desktop, stacked on mobile. Two columns for brand description, one for shop links, one for about links.

```
Border-top: 1px solid #ececec
Padding: 64px 0
Grid gap: 48px
```

**Section labels in footer:**
```css
.footer-label {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #a3a3a3;
  margin-bottom: 16px;
}
```

**Footer links:**
```css
.footer-link {
  font-size: 0.875rem;
  color: #737373;
  transition: color 200ms;
  display: block;
  margin-bottom: 12px;
}
.footer-link:hover {
  color: #000000;
}
```

**Copyright bar:**
```
Border-top: 1px solid #ececec
Padding: 24px 0
Two items: copyright text left, brand tagline right
Both: font-size: 0.75rem, neutral-400, letter-spacing: 0.05em
```

---

## 21. Two-Column Content Sections

A recurring layout pattern used for editorial content (text + image or text + video):

```
Grid: 1 column mobile → 2 columns desktop
Gap: 80px desktop
Items: align to center or flex-end depending on content
```

The text side always gets:
1. Eyebrow label
2. Large heading (clamp'd, weight 300, leading 1)
3. Body paragraphs (neutral-500, relaxed)
4. CTA button

The image/video side fills its container. No captions, no labels.

**Variant:** On the Why page, the large heading splits across lines intentionally:
```
Why
Vitae.
```
This single-word-per-line treatment is used on major brand pages to create visual impact with minimal copy.

---

## 22. Page Header Pattern

Every interior page (not the homepage) uses a consistent page header pattern:

```
Border-bottom: 1px solid #ececec
Padding: 64px 0 (inside max-width container)
```

Contents:
1. Eyebrow label (neutral-400, uppercase, tracked)
2. Heading — `clamp(2rem, 5vw, 4rem)`, weight 300, leading 1
3. Optional: secondary column with a description paragraph

On desktop these are often in a 2-column grid: heading on the left, description on the right, aligned to the bottom (`align-items: flex-end`).

---

## 23. Key "Don'ts" for This Aesthetic

These are the most common ways to accidentally break the design language:

- **No rounded corners** — anywhere, ever. Not even `2px`.
- **No box shadows** — not even subtle ones. Use borders and backgrounds.
- **No bold headings** — heading weight is always 300 (light). `font-weight: 400` is acceptable for subheadings only.
- **No color other than black/white/neutrals** — except the gold star accent. No blue links, no green success states, no colored badges.
- **No decorative icons or emoji** — the design uses minimal SVG icons (arrows, plus signs). No icon libraries.
- **No gradients on UI elements** — gradients only appear as overlays on photo/video backgrounds.
- **No hover cards or popover previews** — hover states are opacity changes and image scales only.
- **No card shadows on hover** — resist the urge. The aesthetic stays flat.
- **No uppercase body text** — uppercase only for eyebrows, labels, buttons, and nav. Never for paragraphs.
- **No centered body text** — paragraphs are always left-aligned (except in the email capture section). Center alignment for display headings only when used as a standalone CTA section.
