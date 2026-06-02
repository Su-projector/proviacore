# ProviaCore Website Redesign — UI/UX Audit & Strategy

> **Prepared by:** UI/UX Design Lead  
> **Date:** June 2026  
> **Client:** ProviaCore Systems  
> **URL:** https://proviacore.vercel.app/  
> **Tech Stack for Implementation:** AntiGravity  
> **Constraint:** Brand color palette must remain unchanged  
> **Requirement:** Fully responsive across mobile, tablet, and desktop

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Brand Palette (Preserved)](#2-brand-palette-preserved)
3. [Current State Analysis: Why It Feels AI-Generated](#3-current-state-analysis-why-it-feels-ai-generated)
4. [Redesign Philosophy: Engineered with Intention](#4-redesign-philosophy-engineered-with-intention)
5. [Typography System](#5-typography-system)
6. [Layout & Composition](#6-layout--composition)
7. [Color Usage Strategy](#7-color-usage-strategy)
8. [Imagery & Visual Texture](#8-imagery--visual-texture)
9. [Micro-Interactions & Animation](#9-micro-interactions--animation)
10. [Content Structure & Storytelling Rhythm](#10-content-structure--storytelling-rhythm)
11. [Navigation & Header](#11-navigation--header)
12. [Footer Design](#12-footer-design)
13. [Page-by-Page Redesign Specifications](#13-page-by-page-redesign-specifications)
14. [Responsive Behavior Matrix](#14-responsive-behavior-matrix)
15. [Implementation Priority](#15-implementation-priority)
16. [Design Tokens & CSS Variables](#16-design-tokens--css-variables)
17. [AntiGravity-Specific Implementation Notes](#17-antigravity-specific-implementation-notes)
18. [Accessibility Requirements](#18-accessibility-requirements)
19. [Performance Guidelines](#19-performance-guidelines)
20. [Quality Assurance Checklist](#20-quality-assurance-checklist)

---

## 1. Executive Summary

The current ProviaCore website suffers from visual patterns commonly associated with AI-generated design: uniform spacing, predictable symmetrical grids, generic iconography, flat color blocking, and a lack of typographic personality or choreographed motion. This audit identifies every instance of these patterns and provides precise, actionable redesign specifications to transform the site into one that communicates intentional human craft, systems-thinking precision, and premium digital agency credibility.

**Core objectives of this redesign:**
- Eliminate all template-like visual patterns
- Introduce intentional asymmetry and typographic hierarchy
- Add tactile micro-interactions and purposeful animation
- Create visual texture through gradients, glassmorphism, and subtle noise
- Maintain 100% responsiveness across all device classes
- Preserve the existing brand color palette exactly

---

## 2. Brand Palette (Preserved)

The following colors are the ONLY colors permitted in the redesign. No new brand colors may be introduced. Usage proportions and contexts may change, but hex values must remain exact.

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-blue` | `#0056D2` | Primary CTA fills, active states, link colors, accent borders, gradient start |
| `--brand-coral` | `#E63946` | Emphasis words, hover states, Most Popular ribbons, active nav dots, secondary accents |
| `--brand-navy` | `#0B1120` | Hero backgrounds, dark sections, footer base, gradient end |
| `--brand-white` | `#FFFFFF` | Card backgrounds, text on dark, input fields |
| `--brand-light` | `#F8F9FB` | Section backgrounds, subtle contrast surfaces |
| `--brand-gray` | `#6B7280` | Body text secondary, placeholders, meta labels |
| `--brand-dark-text` | `#111827` | Primary headings on light backgrounds |

**Gradient Presets (derived from brand colors only):**
- `--gradient-hero`: `linear-gradient(135deg, #0B1120 0%, #0056D2 100%)`
- `--gradient-accent`: `linear-gradient(90deg, #0056D2 0%, #E63946 100%)`
- `--gradient-subtle`: `linear-gradient(180deg, #F8F9FB 0%, #FFFFFF 100%)`

---

## 3. Current State Analysis: Why It Feels AI-Generated

### 3.1 Typography Deficiencies
- Single sans-serif family used for all text (headlines, body, labels, buttons)
- Uniform font weights across all headings (likely 600 or 700 everywhere)
- No distinction between display type and body type
- Generic sizing scale (1rem, 1.25rem, 1.5rem, 2rem, 3rem) with no optical tuning
- Italics used only for color emphasis, not typographic expression
- No monospace usage for technical or statistical content

### 3.2 Layout Deficiencies
- Every section uses `max-width: 1200px` centered container
- All grids are perfectly symmetrical (3 equal columns, 2 equal columns)
- No variation in vertical section padding — every section has identical `py-20` or equivalent
- No elements break the container bounds
- No overlapping layers or z-index depth
- Cards are perfectly aligned with no offset or stagger

### 3.3 Color Usage Deficiencies
- Solid color blocks used as section backgrounds (flat, no depth)
- Buttons are 100% solid fill with no hover state variation beyond brightness
- No gradient usage anywhere on the site
- No transparency, opacity, or glassmorphism effects
- Coral accent is only used as text color on wordmarks, never as a surface or interactive element

### 3.4 Imagery & Visual Texture Deficiencies
- Service icons are generic line icons (likely from Lucide, Heroicons, or similar)
- No photography used anywhere
- No abstract background patterns, noise textures, or SVG illustrations
- Founder portrait is cropped in a plain circle with no editorial treatment
- Portfolio section uses generic placeholder thumbnails
- No custom visual elements that communicate systems architecture or engineering

### 3.5 Motion & Interaction Deficiencies
- Likely minimal or no animation beyond basic page load
- No scroll-triggered reveals
- No staggered entrance animations for grid items
- Buttons have no tactile feedback beyond color change
- No cursor-following effects or ambient motion
- Form fields have no focus animation

### 3.6 Content Structure Deficiencies
- Sections read as a checklist, not a narrative
- No visual hierarchy between major and minor sections
- Testimonials are small, uniform cards with no editorial emphasis
- Pricing cards are identical in size and weight
- No chapter or act structure to guide the user journey

---

## 4. Redesign Philosophy: Engineered with Intention

The new design must communicate three qualities:

1. **Precision** — Every pixel, spacing value, and animation timing is deliberate. Nothing is default.
2. **Systems Thinking** — The visual language reflects the brand's core offering: structured, layered, interconnected systems.
3. **Human Craft** — Imperfections, asymmetries, and tactile details signal that a designer made choices, not an algorithm.

**Design Principles:**
- **Asymmetry over symmetry** — Offset grids, uneven splits, staggered cards
- **Tension over balance** — Deliberate moments of visual tension (large headline next to small label)
- **Texture over flatness** — Gradients, noise, glassmorphism, subtle shadows
- **Motion over static** — Every entrance, hover, and transition has purpose
- **Narrative over checklist** — Content flows as a story with rising and falling intensity

---

## 5. Typography System

### 5.1 Font Families

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Display** | Space Grotesk | 500, 700 | H1, H2, hero headlines, section titles, large quotes |
| **Body** | Inter | 400, 500, 600 | Body text, descriptions, form labels, navigation |
| **Technical / Mono** | JetBrains Mono | 400, 500 | Stats, labels, tags, code snippets, process steps, timestamps |

**Font loading strategy:** Self-host all fonts or use Google Fonts with `display=swap`. Preload Space Grotesk 700 and Inter 400.

### 5.2 Type Scale

All sizes use `clamp()` for fluid responsiveness. Do NOT use fixed pixel values for headings.

| Token | Min (320px) | Max (1440px) | Line Height | Letter Spacing | Weight |
|-------|-------------|--------------|-------------|----------------|--------|
| `text-display` | 2.5rem | 7rem | 0.95 | -0.03em | 700 |
| `text-h1` | 2rem | 4rem | 1.1 | -0.02em | 700 |
| `text-h2` | 1.5rem | 2.5rem | 1.2 | -0.01em | 700 |
| `text-h3` | 1.25rem | 1.5rem | 1.3 | 0 | 600 |
| `text-body` | 1rem | 1.125rem | 1.7 | 0 | 400 |
| `text-body-sm` | 0.875rem | 1rem | 1.6 | 0 | 400 |
| `text-label` | 0.75rem | 0.75rem | 1.4 | 0.12em | 500 |
| `text-mono` | 0.875rem | 1rem | 1.5 | 0 | 400 |

**Label styling:** All labels, tags, and meta text must use `text-transform: uppercase` with `letter-spacing: 0.12em` and JetBrains Mono at `font-weight: 500`.

### 5.3 Typographic Patterns

- **Hero headlines** must break across lines intentionally. Do not allow automatic wrapping to create awkward orphans. Use `<br>` or `&nbsp;` to control line breaks at `md` breakpoint and above.
- **Pull quotes** in testimonials must be `font-size: 1.5rem` (min) to `2rem` (max), Space Grotesk 500, with a large decorative quotation mark in `--brand-blue` at `opacity: 0.2` positioned absolutely behind the text.
- **Stat numbers** must use JetBrains Mono at `text-display` size with the label below in `text-label` style.
- **Emphasis words** (e.g., Scale, Delivery, Passion) must use `--brand-coral` color but remain in the same font family as the surrounding text. Do NOT change font family for emphasis.

---

## 6. Layout & Composition

### 6.1 Grid System

Use a **12-column grid** with `gap: 24px` (mobile), `gap: 32px` (tablet), `gap: 48px` (desktop). Do NOT use a centered single-column wrapper for all content.

**Container widths:**
- Mobile: `100%` with `px-5` (20px) padding
- Tablet: `100%` with `px-8` (32px) padding
- Desktop: `max-width: 1280px` with `mx-auto` and `px-12` (48px) padding
- Wide desktop (1536px+): `max-width: 1440px`

### 6.2 Asymmetric Layout Patterns

**Hero Section:**
- Desktop: 55% text column (left) / 45% visual column (right)
- Text column: headline, 2-line description, two buttons stacked horizontally with `gap: 16px`
- Visual column: abstract generative SVG or animated mesh gradient (see Section 8)
- Mobile: Stack vertically, visual column moves below text, full width

**Services Grid:**
- Desktop: 3 cards in a row with **staggered vertical offset**
  - Card 1: `margin-top: 0`
  - Card 2: `margin-top: 40px`
  - Card 3: `margin-top: 0`
- Tablet: 2 cards per row, no stagger
- Mobile: 1 card per row, full width

**Testimonials:**
- Desktop: 3 cards but with **asymmetric widths**
  - Card 1: 5 columns
  - Card 2: 4 columns (centered)
  - Card 3: 3 columns
- This creates visual hierarchy — the first testimonial is emphasized
- Mobile: All cards equal width, vertical stack

**Founder's Note:**
- Desktop: 40% image (left) / 60% text (right)
- Image overlaps the section above by `60px` (negative margin or absolute positioning)
- Text has a `padding-left: 64px` to create breathing room
- Mobile: Image full width above text, no overlap

### 6.3 Full-Bleed Sections

The following sections must break out of the container and extend to full viewport width:
- Hero background
- Ready to Build Something Meaningful? CTA banner
- Footer top section (large brand statement)
- Dark mode toggle sections (if implemented)

Use `width: 100vw`, `position: relative`, `left: 50%`, `transform: translateX(-50%)` or equivalent to achieve true full-bleed.

### 6.4 Section Spacing Rhythm

Do NOT use uniform `py-20` for all sections. Use a varied rhythm:

| Section Type | Desktop Padding | Tablet Padding | Mobile Padding |
|--------------|-----------------|----------------|--------------|
| Hero | `py-32` (128px) | `py-24` (96px) | `py-16` (64px) |
| Major content | `py-24` (96px) | `py-20` (80px) | `py-12` (48px) |
| Minor content | `py-16` (64px) | `py-12` (48px) | `py-8` (32px) |
| CTA banner | `py-32` (128px) | `py-24` (96px) | `py-16` (64px) |
| Between sections | `mb-0` — use dividers or color changes instead of blank space |

---

## 7. Color Usage Strategy

### 7.1 Gradient Usage

**Hero Background:**
```css
background: linear-gradient(135deg, #0B1120 0%, #0056D2 100%);
/* Add subtle noise texture overlay at 3% opacity */
```

**Card Hover Borders:**
```css
border: 1px solid transparent;
background: linear-gradient(white, white) padding-box,
            linear-gradient(135deg, #0056D2, #E63946) border-box;
/* On hover, the gradient border becomes visible */
```

**CTA Banner:**
```css
background: linear-gradient(90deg, #0B1120 0%, #0056D2 50%, #0B1120 100%);
/* Subtle animated shift using background-position */
```

### 7.2 Glassmorphism

Apply to the following elements:
- Navigation bar (sticky): `backdrop-filter: blur(16px)`, `background: rgba(248, 249, 251, 0.8)`
- Service cards: `backdrop-filter: blur(12px)`, `background: rgba(255, 255, 255, 0.7)`, `border: 1px solid rgba(0, 86, 210, 0.1)`
- Pricing cards (Professional tier): `backdrop-filter: blur(20px)`, `background: rgba(255, 255, 255, 0.85)`, elevated shadow

**Glassmorphism requirements:**
- Must have a `border-radius: 16px` or `24px`
- Must have a subtle inner shadow: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.2)`
- Must have a `border: 1px solid rgba(0, 86, 210, 0.08)`

### 7.3 Button Styles

**Primary Button (Solid):**
```css
background: #0056D2;
color: #FFFFFF;
border-radius: 8px;
padding: 14px 32px;
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 0.875rem;
letter-spacing: 0.02em;
transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```
- Hover: `background: #004bb8`, `transform: translateY(-2px)`, `box-shadow: 0 10px 40px rgba(0, 86, 210, 0.25)`
- Active: `transform: translateY(0)`, `box-shadow: 0 4px 12px rgba(0, 86, 210, 0.2)`

**Secondary Button (Outline):**
```css
background: transparent;
color: #0056D2;
border: 1.5px solid #0056D2;
border-radius: 8px;
padding: 14px 32px;
```
- Hover: `background: rgba(0, 86, 210, 0.05)`, `border-color: #004bb8`

**Ghost Button (Dark Background):**
```css
background: transparent;
color: #FFFFFF;
border: 1.5px solid rgba(255, 255, 255, 0.3);
```
- Hover: `background: rgba(255, 255, 255, 0.1)`, `border-color: rgba(255, 255, 255, 0.5)`

### 7.4 Coral Accent Rules

Coral (`#E63946`) may ONLY be used for:
- Emphasis words within headlines (e.g., Passion, Delivery)
- Most Popular ribbon on pricing cards
- Active navigation dot indicator
- Hover states on secondary elements
- Error states in forms
- Subtle gradient endpoints

Coral must NEVER be used as:
- Primary button background
- Section background color
- Link color (use blue instead)
- Border color on cards (use blue gradient instead)

---

## 8. Imagery & Visual Texture

### 8.1 Abstract Hero Visual

Replace the current hero's empty right column with a **generative mesh gradient** or **animated SVG node network** that represents systems architecture.

**Mesh Gradient Specification:**
- 4-6 color stops using only brand colors (`#0B1120`, `#0056D2`, `#E63946` at low opacity)
- Slow ambient animation: colors shift position over 20s using CSS `@keyframes`
- Add `filter: blur(60px)` for softness
- Add subtle noise texture overlay at `opacity: 0.03`
- Must be performant: use `will-change: transform` and `transform: translateZ(0)`

**Alternative: SVG Node Network:**
- 20-30 small circles (nodes) connected by thin lines
- Nodes pulse gently (scale 1.0 to 1.2 to 1.0) on staggered timers
- Lines have `stroke: rgba(0, 86, 210, 0.3)` and `stroke-width: 1`
- Some nodes are coral-colored to draw the eye
- Must be purely CSS/SVG animated, no Canvas or WebGL required

### 8.2 Noise Texture

Add a subtle noise texture to the following sections:
- Light gray sections (`#F8F9FB` background)
- White card backgrounds
- Footer background

**Implementation:**
```css
.noise-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
}
```

### 8.3 Founder Portrait Treatment

- Replace circular crop with **editorial rectangular crop** (aspect ratio 3:4 or 4:5)
- Add a gradient mask on the right edge that blends into the section background
- Add a thin `2px` vertical line in `--brand-blue` on the left edge of the image container
- Add a subtle `box-shadow: 0 20px 60px rgba(11, 17, 32, 0.15)`
- On hover (desktop only): image scales to `1.02` with `transition: transform 0.6s ease`

### 8.4 Portfolio Thumbnails

- All portfolio items must use **real project screenshots** (not generic illustrations)
- Thumbnails must have `border-radius: 12px`
- Hover state: `transform: scale(1.03)`, overlay with project title and category in white text, `background: linear-gradient(transparent 40%, rgba(11, 17, 32, 0.8) 100%)`
- Use `object-fit: cover` with `aspect-ratio: 16/10` for consistency

### 8.5 Custom Service Illustrations

Replace generic icons with **minimal line-art illustrations** (SVG) for each service:
- Custom Development: abstract code brackets with connecting nodes
- Responsive Excellence: a device frame morphing from mobile to desktop
- SEO Mastery: a magnifying glass with a graph line
- Brand Advisory: overlapping geometric shapes forming a mark
- Enterprise Security: a shield with circuit patterns
- Strategic Evolution: a spiral or ascending staircase

Each illustration must:
- Use only `--brand-blue` and `--brand-coral` strokes
- Have `stroke-width: 1.5`
- Be `48px x 48px` in card context, `80px x 80px` in feature context
- Have a subtle hover animation (e.g., nodes connect, lines draw themselves)

---

## 9. Micro-Interactions & Animation

### 9.1 Animation Philosophy

- Every animation must have a **purpose** — either guiding attention, providing feedback, or creating delight
- Use `cubic-bezier(0.25, 0.46, 0.45, 0.94)` as the default easing (smooth deceleration)
- Use `cubic-bezier(0.16, 1, 0.3, 1)` for entrance animations (expo out — snappy start, smooth end)
- All animations must respect `prefers-reduced-motion: reduce`

### 9.2 Entrance Animations

**Hero Text Reveal:**
- Each line of the headline slides up from `translateY(100%)` with `overflow: hidden` on the container
- Duration: `0.8s` per line
- Stagger: `0.15s` between lines
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Trigger: On page load, no scroll required

**Section Reveal (General):**
- Elements fade in from `opacity: 0` and `translateY(40px)` to `opacity: 1` and `translateY(0)`
- Duration: `0.7s`
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Trigger: IntersectionObserver at `threshold: 0.15`

**Grid Stagger:**
- When a grid of cards enters the viewport, each card animates with a `0.1s` stagger
- Card 1: `delay: 0s`
- Card 2: `delay: 0.1s`
- Card 3: `delay: 0.2s`
- And so on...

### 9.3 Hover Interactions

**Card Lift:**
```css
.service-card {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(11, 17, 32, 0.12);
}
```

**Button Magnetic Effect (Desktop Only):**
- On hover, the button text shifts `2px` toward the cursor direction
- Implementation: Track mouse position relative to button center, apply `transform: translate(x, y)` where x and y are capped at plus or minus 2px
- Use `requestAnimationFrame` for smooth tracking
- Fallback: Simple `translateY(-2px)` on hover if magnetic effect is too complex

**Link Underline Draw:**
- Navigation links and text links have an underline that draws from left to right on hover
- `width: 0 to 100%` over `0.3s`
- Color: `--brand-blue`
- Height: `2px`
- Position: `bottom: -2px`

### 9.4 Scroll Behaviors

**Parallax (Subtle):**
- Hero visual column moves at `0.5x` scroll speed (moves slower than page scroll)
- Founder portrait moves at `0.8x` scroll speed
- Stats numbers have no parallax (must remain readable)
- Implementation: Use `transform: translateY(calc(var(--scroll) * 0.1))` updated via IntersectionObserver, NOT scroll event listeners

**Number Counter:**
- Stats numbers count up from 0 to final value when scrolled into view
- Duration: `2s`
- Easing: `ease-out`
- Format: 5+ counts to 5, then + fades in; 100% counts to 100, then % fades in
- Use `requestAnimationFrame` for smooth counting

### 9.5 Cursor Effects (Desktop Only)

**Spotlight on Dark Sections:**
- On dark sections (`--brand-navy` background), add a radial gradient that follows the cursor
```css
.dark-section {
  position: relative;
  overflow: hidden;
}
.dark-section::after {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 86, 210, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  /* Position updated via JS mousemove, throttled to 60fps */
}
```
- Must be disabled on mobile/tablet
- Must respect `prefers-reduced-motion: reduce`

---

## 10. Content Structure & Storytelling Rhythm

### 10.1 Narrative Chapters

The homepage must flow as a story with distinct chapters, not a checklist of features.

**Chapter 1: The Hook (Hero)**
- Intensity: HIGH
- Content: Massive headline, brief value proposition, two CTAs
- Visual: Dark gradient background, animated abstract visual
- Goal: Capture attention in 3 seconds

**Chapter 2: The Proof (Stats)**
- Intensity: MEDIUM
- Content: 3 key statistics with monospace labels
- Visual: Light background, horizontal layout
- Goal: Establish credibility immediately

**Chapter 3: The Method (Services)**
- Intensity: MEDIUM-HIGH
- Content: 6 service cards in offset grid
- Visual: White background with noise texture, glassmorphism cards
- Goal: Show breadth of capability

**Chapter 4: The Vision (Founder's Note)**
- Intensity: MEDIUM
- Content: Founder portrait + personal statement
- Visual: Light background, editorial layout
- Goal: Humanize the brand

**Chapter 5: The Work (Portfolio)**
- Intensity: HIGH
- Content: Project showcase with real thumbnails
- Visual: Full-width section, masonry grid
- Goal: Prove execution ability

**Chapter 6: The Investment (Pricing)**
- Intensity: MEDIUM
- Content: 3 pricing tiers with clear differentiation
- Visual: Light background, elevated Professional card
- Goal: Remove friction for decision-making

**Chapter 7: The Community (Testimonials)**
- Intensity: MEDIUM
- Content: 3 client testimonials with asymmetric sizing
- Visual: Subtle background, large quote typography
- Goal: Build trust through social proof

**Chapter 8: The Stack (Technologies)**
- Intensity: LOW
- Content: Technology categories with monospace labels
- Visual: Clean, organized, minimal
- Goal: Show technical competence without overwhelming

**Chapter 9: The Invitation (CTA Banner)**
- Intensity: HIGH
- Content: Massive headline, two CTAs
- Visual: Full-bleed dark gradient with animated shift
- Goal: Convert interest into action

### 10.2 Section Transitions

Do NOT use hard horizontal lines between sections. Use one of the following:

**Diagonal Divider:**
```css
.diagonal-divider {
  height: 80px;
  background: linear-gradient(135deg, #F8F9FB 50%, #0B1120 50%);
}
```
- Use when transitioning from light to dark sections

**Wave SVG:**
- A subtle wave path in the section background color
- `height: 60px`, `width: 100%`
- Use when transitioning between two light sections

**Color Block Overlap:**
- The next section's background color overlaps the previous section by `40px`
- Creates a layered, editorial feel

---

## 11. Navigation & Header

### 11.1 Header Behavior

**Default State:**
- `position: fixed`, `top: 0`, `width: 100%`, `z-index: 50`
- Background: transparent
- Text color: white (on hero) or dark (on light sections)
- Height: `80px`
- Padding: `0 48px` (desktop), `0 20px` (mobile)

**Scrolled State (after 100px scroll):**
- Background: `rgba(248, 249, 251, 0.85)` with `backdrop-filter: blur(16px)`
- Border-bottom: `1px solid rgba(0, 86, 210, 0.1)`
- Text color: `--brand-dark-text`
- Height: `64px` (slightly compressed)
- Transition: `all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### 11.2 Navigation Links

- Font: Inter 500, `0.875rem`, `letter-spacing: 0.02em`
- Color: inherits from header state
- Hover: underline draws from left to right (see Section 9.3)
- Active state: small `4px` circle in `--brand-coral` below the link, `margin-top: 4px`
- Links: Home, Portfolio, Services, Pricing, Who We Help, Testimonials, About, Contact

### 11.3 CTA Button in Nav

- Start a Project button in the header
- Style: Primary solid (see Section 7.3)
- Position: rightmost element in nav
- Mobile: Hidden in hamburger menu, shown as a prominent button at the bottom of the mobile menu overlay

### 11.4 Mobile Menu

**Trigger:** Hamburger icon (animated to X on open)
- 3 lines, `width: 24px`, `height: 2px`, `--brand-dark-text` color
- Animation: middle line fades out, top and bottom lines rotate to form X over `0.3s`

**Overlay:**
- Full-screen overlay with `background: rgba(248, 249, 251, 0.98)` and `backdrop-filter: blur(20px)`
- Links displayed at `2rem` size, Space Grotesk 500, centered vertically
- Staggered entrance: each link fades up with `0.08s` delay
- Start a Project button at bottom, full width, primary solid style
- Close on link click, escape key, or overlay click

---

## 12. Footer Design

### 12.1 Footer Structure

**Top Section (Full-Bleed):**
- Background: `--brand-navy`
- Content: Massive headline "Let's Build Something That Lasts." in Space Grotesk 700, `clamp(2rem, 5vw, 4rem)`, white text
- Subtext: "Ready to engineer your next digital ecosystem? We are here to listen." in Inter 400, `1.125rem`, `rgba(255,255,255,0.7)`
- CTA: "Start a Project" button (primary solid) + "Contact Advisory" button (ghost)
- Padding: `py-32` (128px) desktop, `py-20` (80px) mobile

**Middle Section:**
- Background: `--brand-light`
- 4-column grid (desktop):
  - Column 1: Brand logo + tagline + brief description (max 3 lines)
  - Column 2: Quick Links (Services, Pricing, Who We Help, Testimonials, About, Contact)
  - Column 3: Sub-Brands (Project Team, Mastery Coaching, Brand / Design Advisory)
  - Column 4: Newsletter signup
- Newsletter input: minimal style — `border-bottom: 1px solid rgba(0,86,210,0.3)` only, no box. Placeholder: "Enter your email". Submit button: coral circle with arrow icon.
- Padding: `py-16` (64px)

**Bottom Bar:**
- Background: `--brand-navy`
- Content: "2026 PROVIACORE SYSTEMS. BUILT FOR RESILIENT DELIVERY." in JetBrains Mono, `0.75rem`, `rgba(255,255,255,0.5)`
- Social icons: LinkedIn, Twitter/X, GitHub (if applicable) — `24px` size, white at `0.6` opacity, hover at `1.0`
- Padding: `py-6` (24px)

### 12.2 Footer Visual Details

- Subtle grid pattern overlay at `opacity: 0.05` on the top section
- The massive headline should have a very subtle `text-shadow: 0 0 80px rgba(0, 86, 210, 0.3)` for glow effect
- Divider between middle and bottom sections: `1px solid rgba(255,255,255,0.1)`

---

## 13. Page-by-Page Redesign Specifications

### 13.1 Homepage

**Section 1: Hero**
- Layout: 55/45 asymmetric split (desktop), stacked (mobile)
- Background: `--gradient-hero` with noise texture overlay
- Headline: "Engineered for **Scale**." / "Built for **Delivery**." (two lines, Scale and Delivery in `--brand-coral`)
- Subheadline: "ProviaCore is a systems-driven digital development platform. We bridge the gap between architectural vision and production-ready execution, delivering resilient products that drive measurable business outcomes through high-performance engineering."
- CTAs: "Start a Project" (primary solid) + "Contact Advisory" (ghost)
- Right column: Animated mesh gradient or SVG node network (see Section 8.1)
- Scroll indicator: Subtle bouncing chevron at bottom center, `opacity: 0.5`

**Section 2: Stats Bar**
- Background: `--brand-light` with noise texture
- Layout: 3-column horizontal, equal width
- Content:
  - "5+" / "DEPLOYED ARCHITECTURES" (JetBrains Mono label)
  - "5 Yrs" / "TECHNICAL TENURE" (JetBrains Mono label)
  - "100%" / "STRATEGIC ALIGNMENT" (JetBrains Mono label)
- Numbers count up on scroll (see Section 9.4)
- Divider: Thin `1px` lines between stats in `rgba(0,86,210,0.1)`

**Section 3: Mission / Approach / Values**
- Background: white
- Layout: 3 cards in offset grid (see Section 6.2)
- Card 1: "Our Mission" — icon + title + description
- Card 2: "Our Approach" — icon + title + description
- Card 3: "Core Values" — icon + title + description
- Cards use glassmorphism style (see Section 7.2)
- Each card has a custom SVG illustration (see Section 8.5)

**Section 4: Founder's Note**
- Background: `--brand-light`
- Layout: 40% image / 60% text (desktop), stacked (mobile)
- Image: Editorial portrait with gradient mask and blue line accent (see Section 8.3)
- Text: Large quote-style statement from founder
- Name: "Abdusobur Sulaimon" in Space Grotesk 600
- Title: "Founder & Lead Project Manager" in JetBrains Mono label style
- LinkedIn link with icon
- CTA: "Book a Strategy Call" (primary solid)

**Section 5: Portfolio Showcase**
- Background: white
- Layout: Masonry grid, 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Section title: "Crafted with **Passion**." (Passion in coral)
- Subtitle: "Explore our dual-purpose showcase: a curated archive of successful projects and a comprehensive suite of digital solutions we engineer for strategic growth."
- Stats bar above grid: "5+ Projects Delivered", "20+ Strategic Partners", "100% Client Satisfaction"
- Each project card: thumbnail (16:10 aspect ratio), project title, category tags, "View Project" link
- Hover: Image zooms to `1.03`, overlay with title and category (see Section 8.4)
- Filter tabs: All / Web / Brand / Systems (sliding underline indicator)

**Section 6: Services Overview**
- Background: `--brand-light` with noise texture
- Section title: "Engineered for **Performance**." (Performance in coral)
- Subtitle: "We merge technical precision with creative strategy to build digital ecosystems that do not just work — they excel."
- Layout: 3x2 grid of service cards (desktop), 2x3 (tablet), 1 column (mobile)
- Cards: Custom SVG icon + title + 2-line description
- Services:
  1. Custom Development
  2. Responsive Excellence
  3. SEO Mastery
  4. Brand Advisory
  5. Enterprise Security
  6. Strategic Evolution
- Cards use glassmorphism with hover lift (see Section 9.3)
- CTA below grid: "View All Services" (secondary outline)

**Section 7: CTA Banner 1**
- Background: Full-bleed `--gradient-hero` with animated background-position shift
- Content: "Ready to Build Something Meaningful?"
- Subtext: "Explore our portfolio to see the kinds of solutions we have designed and delivered. Use any project as a reference; build something similar with us, or take a different path entirely. We design and engineer systems shaped around your goals, not templates."
- CTAs: "Start a Project" (primary solid) + "View Portfolio & Expertise" (ghost)

**Section 8: Pricing**
- Background: white
- Section title: "Transparent **Solutions**." (Solutions in coral)
- Subtitle: "Scalable delivery models built to support your growth at every stage of the digital journey."
- Layout: 3 cards, middle card (Professional) elevated and highlighted
- Cards:
  - Starter: "Custom" price, 5 features, "Get Started" button (secondary outline)
  - Professional: "Custom" price, 6 features, "Most Popular" ribbon in coral, "Get Started" button (primary solid), elevated with larger shadow
  - Enterprise: "Custom" price, 6 features, "Contact Us" button (secondary outline)
- Card style: Glassmorphism with gradient border on hover (see Section 7.2)
- Feature list: Checkmark icon (coral) + feature text

**Section 9: Who We Help**
- Background: `--brand-light`
- Section title: "Who We **Empower**." (Empower in coral)
- Subtitle: "Tailored digital expertise for those who value precision, clarity, and sustainable growth."
- Layout: 3 cards, equal width but with staggered entrance animation
- Cards:
  1. Small Businesses — icon + description
  2. Entrepreneurs — icon + description
  3. Organizations — icon + description
- Card style: Clean white background, subtle shadow, no glassmorphism (contrast with services)

**Section 10: Testimonials**
- Background: white
- Section title: "Client **Voices**." (Voices in coral)
- Subtitle: "Trust is built through consistent performance. Here is what leading teams say about our execution."
- Layout: Asymmetric 3-card layout (see Section 6.2)
- Each testimonial:
  - Large decorative quote mark in `--brand-blue` at `opacity: 0.2`
  - Quote text in Space Grotesk 500, `1.5rem`
  - Author initials in a circle (e.g., "AK") with `--brand-blue` background
  - Author name and title below
- Cards have no border, just subtle shadow on hover

**Section 11: Tech Stack**
- Background: `--brand-light`
- Section title: "The Core **Stack**." (Stack in coral)
- Subtitle: "We leverage industry-leading technologies to build systems that are fast, secure, and ready to scale."
- Layout: 3 columns of tech categories
- Categories:
  1. Frontend: React, Next.js, TypeScript, Tailwind CSS
  2. Backend & Infra: Node.js, AWS, Vercel, PostgreSQL
  3. Strategic Delivery: CI/CD Pipelines, Git, System Design, Agile
- Each tech item: Monospace label with a small dot indicator in `--brand-blue`
- Subtle hover: dot pulses gently

**Section 12: CTA Banner 2 (Footer Top)**
- Background: Full-bleed `--brand-navy`
- Content: "Need a **unique** digital strategy?" (unique in coral)
- Subtext: "Every business is different. Let's align a custom roadmap that fits your specific goals, scope, and vision for the future."
- CTA: "Start Your Consultation" (primary solid)
- Visual: Subtle animated mesh gradient in background, very low opacity

### 13.2 Portfolio Page

**Hero:**
- Background: `--brand-navy`
- Title: "Crafted with **Passion**." (Passion in coral)
- Subtitle: "Explore our dual-purpose showcase..."
- Stats: "5+ Projects Delivered", "20+ Strategic Partners", "100% Client Satisfaction"

**Filter Tabs:**
- Horizontal row: All / Web / Brand / Systems / E-Commerce / EdTech
- Active tab: `--brand-blue` text with underline
- Inactive tab: `--brand-gray` text
- Sliding underline indicator that animates to the active tab position

**Project Grid:**
- Masonry layout with varying aspect ratios
- Each project: thumbnail, title, category tags, brief description, "View Project" link
- Hover: Image zoom + overlay with project details

**Project Detail Modal (or Page):**
- Large hero image
- Project overview, challenge, solution, results
- Tech stack used (monospace tags)
- Client testimonial if available
- "View Live Site" and "Next Project" CTAs

### 13.3 Services Page

**Hero:**
- Background: `--brand-light`
- Title: "Engineered for **Performance**."
- Subtitle: "We merge technical precision with creative strategy..."

**Service List:**
- Sticky sidebar navigation on desktop (left side, 25% width)
- Service detail sections on right (75% width)
- Sidebar: List of service names, active item highlighted with `--brand-blue` left border
- Each service section: Custom SVG illustration, title, detailed description, process steps, related portfolio projects, "Inquire About This Service" CTA

**Process Timeline:**
- Vertical timeline with nodes
- 5 steps: Discovery to Architecture to Development to Testing to Deployment
- Each node: Number in circle, title, description
- Connecting line: `1px solid rgba(0,86,210,0.2)`
- Active/hovered node: `--brand-blue` fill, line becomes solid

### 13.4 Pricing Page

**Hero:**
- Background: white
- Title: "Transparent **Solutions**."
- Subtitle: "Scalable delivery models built to support your growth..."

**Pricing Toggle:**
- Monthly / Project-Based toggle
- Toggle switch: `width: 56px`, `height: 28px`, `--brand-blue` background when active
- Knob: `24px` circle, white, slides with `cubic-bezier(0.25, 0.46, 0.45, 0.94)` animation

**Pricing Cards:**
- Same as homepage Section 8 but with more detail
- Each card lists all features with checkmarks
- "Most Popular" ribbon on Professional card: `position: absolute`, `top: -12px`, centered, `--brand-coral` background, white text, `border-radius: 20px`, `padding: 4px 16px`

**Comparison Table:**
- Below cards, full-width table
- Rows: Features
- Columns: Starter / Professional / Enterprise
- Checkmarks for included features, "—" for excluded
- Header row: `--brand-light` background
- Professional column: `--brand-blue` left border, `2px`

**FAQ Accordion:**
- Below comparison table
- Questions: "How long does a typical project take?", "Do you offer ongoing support?", "What is included in your pricing?", "Can you work with my existing brand?"
- Accordion style: Question in Space Grotesk 600, answer in Inter 400
- Expand/collapse: `height` animation with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Icon: Plus to X rotation on open

### 13.5 About Page

**Hero:**
- Background: `--brand-navy`
- Title: "Building Solutions That Drive Lasting **Productivity**." (Productivity in coral)
- Subtitle: "We are known for building smart, user-centered, and business-aligned digital products..."

**Mission / Vision / Values:**
- Large typographic statements, not small cards
- Each value is a full-width section with massive text
- Example: "Craftsmanship over mass production." in Space Grotesk 700, `clamp(2rem, 4vw, 3.5rem)`
- Subtle `--brand-blue` line accent on left side

**Team Section:**
- Grid of team member cards
- Each card: Photo, name, role, brief bio, social links
- Hover: Card lifts, photo scales to `1.05`, overlay with "View Profile" text
- Photos: Editorial style, not corporate headshots

**Timeline:**
- Vertical timeline of company milestones
- Nodes with year markers in JetBrains Mono
- Connecting line with gradient from `--brand-blue` to `--brand-coral`

**Stats:**
- Same as homepage stats bar but with additional metrics

### 13.6 Contact Page

**Hero:**
- Background: `--brand-light`
- Title: "**Contact** Us" (Contact in `--brand-dark-text`, Us in `--brand-blue`)
- Subtitle: "Let's connect and deliver excellence. Whether you are initiating a project or seeking technical advisory, we are here to deliver clarity."

**Contact Info (Left Column):**
- Email: icon + label (JetBrains Mono) + address
- Phone: icon + label + number
- Address: icon + label + full address
- Each item has a hover state: icon turns `--brand-coral`, text shifts right `4px`

**Book a Call CTA (Right Column):**
- Card with glassmorphism style
- Title: "Book a Call"
- Description: "Initialize your project with a free 15-minute consultation..."
- Button: "Book a Free 15-Minute Consultation" (primary solid)
- Note: "Prefer email? Reach out at proviacore@gmail.com with your availability."

**Contact Form (Below):**
- Layout: 2-column form (desktop), stacked (mobile)
- Fields: Full Name, Email Address, Phone Number, Subject, Message
- Field style: Minimal — `border-bottom: 1px solid rgba(0,86,210,0.2)` only, no box border
  - Label: Floats above field on focus (floating label pattern)
  - Focus: Border turns `--brand-blue`, label turns `--brand-blue`
  - Error: Border turns `--brand-coral`, error message below in coral
- Submit button: "Send Message" (primary solid, full width on mobile)
- Success state: Form fades out, checkmark SVG draws itself (stroke animation), "Message sent successfully!" text fades in
- Error state: Shake animation on the form container (`translateX: -5px to 5px to 0` over `0.4s`)

**FAQ Section (Below Form):**
- Same accordion style as Pricing page FAQ
- Questions relevant to contact/process

---

## 14. Responsive Behavior Matrix

| Element | Desktop (1280px+) | Tablet (768px–1279px) | Mobile (<768px) |
|---------|-------------------|----------------------|-----------------|
| **Container** | `max-width: 1280px`, `px-12` | `max-width: 100%`, `px-8` | `max-width: 100%`, `px-5` |
| **Hero Layout** | 55/45 split | 60/40 split | Stacked, visual below text |
| **Hero Headline** | `clamp(2.5rem, 6vw, 7rem)` | `clamp(2rem, 5vw, 4rem)` | `clamp(2rem, 8vw, 2.5rem)` |
| **Nav Links** | Horizontal, visible | Horizontal, visible | Hidden, hamburger menu |
| **Services Grid** | 3 columns, staggered offset | 2 columns, no stagger | 1 column, full width |
| **Testimonials** | Asymmetric widths (5/4/3 cols) | Equal widths, 3 columns | Stacked, full width |
| **Pricing Cards** | 3 columns, middle elevated | 3 columns, smaller | Stacked, middle card first |
| **Portfolio Grid** | Masonry, 3 columns | 2 columns | 1 column |
| **Footer Columns** | 4 columns | 2x2 grid | Stacked, single column |
| **Parallax Effects** | Enabled | Disabled | Disabled |
| **Cursor Spotlight** | Enabled | Disabled | Disabled |
| **Magnetic Buttons** | Enabled | Disabled | Disabled |
| **Section Padding** | `py-24` to `py-32` | `py-20` to `py-24` | `py-12` to `py-16` |
| **Card Border Radius** | `16px`–`24px` | `16px` | `12px` |
| **Button Padding** | `14px 32px` | `12px 28px` | `12px 24px` |
| **Font Sizes** | Full clamp range | Mid clamp range | Min clamp values |
| **Animation Complexity** | Full | Reduced (no parallax) | Minimal (entrance only) |
| **Hover Effects** | Full | Full | Tap states instead |
| **Sticky Elements** | Sticky nav, sticky sidebar | Sticky nav only | Sticky nav only |

**Mobile-Specific Rules:**
- All tap targets must be minimum `44px x 44px`
- Horizontal scroll is NEVER permitted
- Images must not exceed viewport width
- Forms must use native input types (`type="email"`, `type="tel"`) for optimal mobile keyboards
- Phone numbers must be clickable (`tel:` links)
- Email addresses must be clickable (`mailto:` links)

---

## 15. Implementation Priority

### Phase 1: Foundation (Highest Impact, Fastest Implementation)
1. **Typography System** — Import fonts, establish type scale with `clamp()`, apply to all headings and body text
2. **Spacing Rhythm** — Replace uniform padding with varied section spacing
3. **Color Strategy** — Implement gradients, glassmorphism, and refined button styles
4. **Hero Redesign** — Asymmetric split, animated background, massive headline

### Phase 2: Structure & Layout
5. **Asymmetric Grids** — Offset services cards, asymmetric testimonials, overlapping founder image
6. **Full-Bleed Sections** — CTA banners and footer top break container bounds
7. **Navigation** — Sticky glassmorphism header, animated mobile menu
8. **Footer** — Large brand statement, newsletter signup, grid pattern

### Phase 3: Interactions & Polish
9. **Entrance Animations** — Scroll-triggered reveals, staggered grid entrances, hero text reveal
10. **Hover States** — Card lift, button magnetic effect, link underline draw
11. **Number Counters** — Stats count up when scrolled into view
12. **Form Interactions** — Floating labels, success/error animations

### Phase 4: Advanced Effects
13. **Cursor Spotlight** — Dark section ambient glow (desktop only)
14. **Parallax** — Subtle layer movement on scroll
15. **Custom Illustrations** — Replace generic icons with SVG line art
16. **Noise Textures** — Add subtle texture to light sections

---

## 16. Design Tokens & CSS Variables

```css
:root {
  /* Brand Colors */
  --brand-blue: #0056D2;
  --brand-coral: #E63946;
  --brand-navy: #0B1120;
  --brand-white: #FFFFFF;
  --brand-light: #F8F9FB;
  --brand-gray: #6B7280;
  --brand-dark-text: #111827;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #0B1120 0%, #0056D2 100%);
  --gradient-accent: linear-gradient(90deg, #0056D2 0%, #E63946 100%);
  --gradient-subtle: linear-gradient(180deg, #F8F9FB 0%, #FFFFFF 100%);

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing Scale (rem-based) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(11, 17, 32, 0.05);
  --shadow-md: 0 4px 12px rgba(11, 17, 32, 0.08);
  --shadow-lg: 0 10px 40px rgba(11, 17, 32, 0.12);
  --shadow-xl: 0 20px 60px rgba(11, 17, 32, 0.15);
  --shadow-glow-blue: 0 10px 40px rgba(0, 86, 210, 0.25);

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.6s;
  --duration-entrance: 0.8s;

  /* Z-Index Scale */
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-modal: 30;
  --z-overlay: 40;
  --z-nav: 50;
}

/* Dark Mode Variables (if implemented) */
[data-theme="dark"] {
  --brand-light: #0F172A;
  --brand-white: #1E293B;
  --brand-dark-text: #F1F5F9;
  --brand-gray: #94A3B8;
}
```

---

## 17. AntiGravity-Specific Implementation Notes

### 17.1 Framework Considerations

AntiGravity is a React-based framework. The following patterns must be used:

**Component Structure:**
- Each section must be a self-contained React component
- Use `forwardRef` for sections that need scroll-triggered animations
- Use `useEffect` with `IntersectionObserver` for entrance animations (NOT scroll event listeners)
- Use `useCallback` for mouse move handlers (cursor spotlight, magnetic buttons)

**Animation Libraries:**
- **Framer Motion** is recommended for React animations (entrance, hover, layout)
- **GSAP** with ScrollTrigger is acceptable for complex scroll animations
- **Vanilla CSS animations** are preferred for simple hover states (better performance)

**Performance Rules:**
- Use `will-change: transform, opacity` ONLY on elements that are actively animating
- Remove `will-change` after animation completes
- Use `transform` and `opacity` for animations (GPU-accelerated properties)
- Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding`
- Use `requestAnimationFrame` for number counters and cursor tracking
- Throttle cursor tracking to 60fps (16ms minimum between updates)
- Use `passive: true` for scroll and touch event listeners

**Image Optimization:**
- Use Next.js `Image` component (if available) or equivalent lazy loading
- All images must have `loading="lazy"` except hero images
- Provide `width` and `height` attributes to prevent layout shift
- Use `srcset` for responsive images
- Compress all images to WebP format where possible

**CSS Strategy:**
- Use CSS Modules or Tailwind CSS (consistent with current stack)
- All design tokens must be defined as CSS custom properties in `:root`
- Use `clamp()` for all fluid typography and spacing
- Use `@media (prefers-reduced-motion: reduce)` to disable all animations for accessibility

### 17.2 AntiGravity Component Patterns

**Glassmorphism Card Component:**
```jsx
const GlassCard = ({ children, className, elevated = false }) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-white/70 backdrop-blur-xl
        border border-[rgba(0,86,210,0.1)]
        rounded-2xl
        ${elevated ? 'shadow-xl' : 'shadow-md'}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
```

**ScrollReveal Wrapper:**
```jsx
const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
```

**Magnetic Button:**
```jsx
const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x: Math.max(-2, Math.min(2, x)), y: Math.max(-2, Math.min(2, y)) });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </button>
  );
};
```

### 17.3 File Structure Recommendation

```
/src
  /components
    /ui
      GlassCard.jsx
      ScrollReveal.jsx
      MagneticButton.jsx
      AnimatedCounter.jsx
      GradientBorder.jsx
    /layout
      Header.jsx
      Footer.jsx
      MobileMenu.jsx
      Container.jsx
    /sections
      Hero.jsx
      StatsBar.jsx
      ServicesGrid.jsx
      FoundersNote.jsx
      PortfolioShowcase.jsx
      PricingSection.jsx
      WhoWeHelp.jsx
      Testimonials.jsx
      TechStack.jsx
      CTABanner.jsx
  /hooks
    useScrollPosition.js
    useMousePosition.js
    useInView.js
    useMediaQuery.js
  /styles
    globals.css
    design-tokens.css
    animations.css
  /assets
    /fonts
    /images
    /svg
      /illustrations
      /patterns
```

---

## 18. Accessibility Requirements

### 18.1 WCAG 2.1 AA Compliance

- **Color Contrast:** All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
  - `--brand-blue` (#0056D2) on white: 5.2:1 OK
  - `--brand-coral` (#E63946) on white: 5.8:1 OK
  - White text on `--brand-navy` (#0B1120): 15.3:1 OK
  - `--brand-gray` (#6B7280) on white: 3.7:1 — use only for secondary text, not primary

- **Focus States:** All interactive elements must have visible focus indicators
  - Focus ring: `2px solid #0056D2`, `offset: 2px`
  - Do NOT use `outline: none` without replacement

- **Keyboard Navigation:**
  - All interactive elements must be reachable via Tab key
  - Mobile menu must be closable via Escape key
  - Skip-to-content link must be present and visible on focus

- **Screen Readers:**
  - All images must have descriptive `alt` text
  - Decorative images must have `alt=""` or `role="presentation"`
  - Icon-only buttons must have `aria-label`
  - Form fields must have associated `<label>` elements
  - Live regions must be used for dynamic content (form success/error messages)

### 18.2 Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .parallax-element {
    transform: none !important;
  }

  .cursor-spotlight {
    display: none !important;
  }
}
```

### 18.3 Semantic HTML

- Use `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>` appropriately
- Use `<h1>` only once per page (hero headline)
- Heading hierarchy must not skip levels (h1 to h2 to h3, not h1 to h3)
- Use `<button>` for actions, `<a>` for navigation
- Use `aria-current="page"` for active navigation links

---

## 19. Performance Guidelines

### 19.1 Core Web Vitals Targets

| Metric | Target | Current Concern |
|--------|--------|-----------------|
| **LCP (Largest Contentful Paint)** | < 2.5s | Hero image/visual must load fast |
| **FID (First Input Delay)** | < 100ms | Minimize JS blocking time |
| **CLS (Cumulative Layout Shift)** | < 0.1 | All images must have dimensions |
| **TTFB (Time to First Byte)** | < 600ms | Optimize server response |
| **FCP (First Contentful Paint)** | < 1.8s | Inline critical CSS |

### 19.2 Optimization Rules

- **Critical CSS:** Inline the first 14KB of CSS required for above-the-fold content
- **Font Loading:** Preload Space Grotesk 700 and Inter 400. Use `font-display: swap`
- **Images:**
  - Hero visual: Must be SVG or CSS gradient (no image file)
  - Portfolio thumbnails: WebP format, lazy loaded, `width` and `height` specified
  - Founder portrait: WebP, `loading="eager"` (above fold), max 200KB
- **JavaScript:**
  - Defer non-critical JS (animations, counters)
  - Use dynamic imports for heavy libraries (GSAP, Framer Motion)
  - Bundle size must not exceed 200KB gzipped for initial load
- **CSS:**
  - Purge unused styles
  - Minimize custom property lookups in animation frames
- **Third-Party:**
  - No third-party scripts in head (analytics, chat widgets)
  - Load non-critical third-party scripts after `window.onload`

### 19.3 Animation Performance

- Use `transform` and `opacity` only for animations
- Use `will-change` sparingly and remove after animation
- Limit simultaneous animations to 10 elements max
- Use `content-visibility: auto` for below-fold sections
- Use `contain: layout style paint` on animated containers

---

## 20. Quality Assurance Checklist

### 20.1 Visual QA

- [ ] All brand colors match exact hex values (no variations)
- [ ] Typography uses specified font families and weights
- [ ] All headings use `clamp()` for fluid sizing
- [ ] Glassmorphism cards have correct blur, border, and inner shadow
- [ ] Gradient backgrounds use only brand colors
- [ ] Asymmetric layouts are present on desktop (offset cards, uneven splits)
- [ ] Full-bleed sections break container bounds correctly
- [ ] Noise texture is visible but subtle (3% opacity)
- [ ] Custom SVG illustrations replace all generic icons
- [ ] Founder portrait has editorial treatment (not plain circle)
- [ ] Portfolio thumbnails use real project screenshots
- [ ] "Most Popular" ribbon is coral and positioned correctly
- [ ] Footer has massive brand statement and grid pattern

### 20.2 Interaction QA

- [ ] Hero headline animates on page load (slide up reveal)
- [ ] All sections animate on scroll (fade up, staggered)
- [ ] Cards lift on hover with shadow increase
- [ ] Buttons have magnetic effect (desktop) or lift effect (mobile)
- [ ] Links have underline draw animation on hover
- [ ] Stats count up when scrolled into view
- [ ] Number counter respects `prefers-reduced-motion`
- [ ] Mobile menu opens with staggered link animation
- [ ] Mobile menu closes on link click, escape key, or overlay click
- [ ] Form floating labels animate on focus
- [ ] Form success state shows checkmark draw animation
- [ ] Form error state shows shake animation
- [ ] Cursor spotlight follows mouse on dark sections (desktop)
- [ ] Parallax effects work smoothly on desktop
- [ ] All hover effects have tap-state equivalents on mobile

### 20.3 Responsive QA

- [ ] Layout adapts correctly at 320px, 768px, 1024px, 1280px, and 1440px breakpoints
- [ ] No horizontal scroll at any width
- [ ] All tap targets meet minimum 44px x 44px on mobile
- [ ] Text remains readable at all breakpoints (no overflow, no truncation)
- [ ] Images scale proportionally without distortion
- [ ] Navigation collapses to hamburger menu below 768px
- [ ] Mobile menu is fully functional and accessible
- [ ] Form fields use appropriate input types for mobile keyboards
- [ ] Phone numbers and emails are clickable on mobile
- [ ] Parallax and cursor effects are disabled on mobile/tablet
- [ ] Animations are reduced on mobile for performance

### 20.4 Performance QA

- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms
- [ ] Total bundle size < 200KB gzipped
- [ ] All images optimized (WebP, lazy loaded, dimensions specified)
- [ ] Fonts preloaded and use `font-display: swap`
- [ ] No render-blocking third-party scripts in head
- [ ] Animations use only `transform` and `opacity`
- [ ] `will-change` is removed after animations complete
- [ ] `prefers-reduced-motion` is respected throughout

### 20.5 Accessibility QA

- [ ] All color contrast ratios meet WCAG AA
- [ ] All interactive elements have visible focus states
- [ ] All images have descriptive `alt` text
- [ ] Form fields have associated `<label>` elements
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] Skip-to-content link is present and functional
- [ ] Mobile menu is keyboard accessible (Escape to close)
- [ ] Screen reader announces dynamic content changes
- [ ] ARIA labels are present on icon-only buttons
- [ ] `aria-current="page"` is used for active nav links
