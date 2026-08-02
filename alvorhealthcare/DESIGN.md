# Design System: Alvor Healthcare

## 0. Trust-Building Design Philosophy

Pharmaceutical distribution demands **absolute credibility**. Every pixel must communicate: "We are licensed, compliant, and safe." This design system encodes trust through seven principles:

### 0.1 Color Psychology — Why Teal Dominates

| Color Choice | Psychological Signal | Industry Alignment |
|---|---|---|
| **Primary Teal (#0891b2)** | Calm, cleanliness, clinical precision | Matches hospital/clinic branding globally |
| **Secondary Green (#22c55e)** | Health, vitality, safety, "go" | Universal health/success indicator |
| **Neutral Slate (#0f172a–#f8fafc)** | Stability, professionalism, no distraction | Avoids playful/vibrant tones that undermine credibility |
| **No red/orange/yellow** | Avoids alarm, urgency, caution | Prevents subconscious anxiety in healthcare context |

**Rule:** Teal is used for 80%+ of interactive elements. Green appears only for success states and secondary actions. Never use warm colors for primary UI.

### 0.2 Typography Trust Signals

- **Figtree (headings):** Geometric, optical-corrected sans-serif. Feels engineered and precise — like medical equipment documentation.
- **Noto Sans (body):** Comprehensive Unicode support including Myanmar script. Signals: "We serve your community, in your language."
- **Bold weight (700) on headings:** Authority and confidence. Never use light/thin weights for important content.
- **Tight letter-spacing on headings (-0.055em):** Dense, compact text feels more "official" and less "marketing."

**Rule:** All headings must be Figtree Bold. Body text must be Noto Sans Regular or Medium. Never use decorative/script fonts.

### 0.3 Component Credibility Patterns

| Pattern | Trust Signal | Implementation |
|---|---|---|
| **Glass morphism** | Transparency, openness | `backdrop-blur-xl` + translucent backgrounds |
| **Subtle shadows** | Depth without flashiness | `0 1px 3px rgba(0,0,0,0.04)` — barely visible |
| **Consistent border-radius** | Predictability, order | `rounded-2xl` (1rem) for cards, `rounded-xl` (0.75rem) for inputs |
| **Left accent bars** | Structured, organized content | 3px teal gradient on card hover |
| **No bouncing/wiggling animations** | Professional, not playful | Only `float`, `shimmer`, `fade-in-up` — smooth, linear motion |
| **Prefers-reduced-motion support** | Accessibility awareness | All animations disabled for motion-sensitive users |

### 0.4 Pharmaceutical Industry Compliance Patterns

- **Certification badges visible:** WHO-GMP, ISO 9001:2015, Myanmar FDA displayed prominently on homepage
- **Contact information always accessible:** Phone, email, address in footer and contact page
- **Documented product records:** "Documented Records" badge on category pages signals regulatory compliance
- **Cold chain indicators:** Temperature-sensitive products marked with visual cues
- **No aggressive sales language:** "Contact Our Experts" not "Buy Now" — positions as consultancy, not retail

### 0.5 Accessibility = Trust

| Pattern | Why It Builds Trust |
|---|---|
| **Focus rings on all interactive elements** | Signals: "We care about every user" |
| **44px minimum touch targets** | Signals: "We're professional and thorough" |
| **ARIA labels on icons** | Signals: "We don't cut corners" |
| **Semantic HTML structure** | Signals: "We follow standards" |
| **High contrast ratios (4.5:1+)** | Signals: "We prioritize readability" |

**Rule:** Every component must have `focus-visible` states. Every icon must have `aria-label` or `aria-hidden`. Every image must have `alt` text.

### 0.6 Dark Mode as Trust

Dark mode isn't just aesthetic — it signals technical sophistication:

- **Implementation:** `data-theme="dark"` attribute (not media query alone) — shows intentional design
- **Color tokens:** CSS variables with `--bg-primary`, `--text-primary` — demonstrates systematic thinking
- **Consistent dark variants:** Every component has `dark:` prefix — proves thoroughness

**Rule:** Every new component MUST include dark mode variants. No exceptions.

### 0.7 Animation as Professionalism

Animations must feel **engineered, not decorative**:

| ✅ Do | ❌ Don't |
|---|---|
| Smooth `cubic-bezier(0.22, 1, 0.36, 1)` easing | Bouncy `spring` or `bounce` easing |
| `translateY(-3px)` hover lift | `rotate(5deg)` or `scale(1.1)` hover |
| `fade-in-up` entrance | `spin` or `flip` entrance |
| `shimmer` loading states | `pulse` or `blink` loading |
| 200–400ms transitions | Sub-100ms or 1000ms+ transitions |

**Rule:** All animations must use `[0.22, 1, 0.36, 1]` easing. Duration must be 200–600ms. No animation may loop more than 3 times without user interaction.

---

## 1. Visual Theme & Atmosphere

**Mood:** Clinical Precision meets Warm Accessibility

The Alvor Healthcare design system embodies a **clean, trustworthy pharmaceutical aesthetic** that balances medical professionalism with approachable warmth. The atmosphere is:

- **Airy & Spacious** — Generous whitespace (sections padded 5–7.5rem vertically) creates breathing room that communicates confidence and clarity
- **Crystalline** — Glass morphism effects (`backdrop-blur-xl`, translucent white overlays) add depth without weight, evoking laboratory cleanliness
- **Organically Precise** — Smooth cubic-bezier easing (`[0.22, 1, 0.36, 1]`) on all transitions creates fluid, intentional motion that feels both mechanical and natural
- **Teal-Dominant** — The primary cyan-teal palette (`#0891b2`) anchors the system, reinforcing healthcare/medical associations while maintaining modernity

**Density:** Medium-low. Content is spread across wide containers (max-width 90rem) with deliberate gaps (24–48px between cards, 64–96px between sections).

---

## 2. Color Palette & Roles

### Primary Palette — Clinical Teal

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Ice Crystal** | `#ecfeff` (primary-50) | Light backgrounds, icon containers |
| **Frozen Mist** | `#cffafe` (primary-100) | Badge backgrounds, subtle highlights |
| **Glacial Cyan** | `#a5f3fc` (primary-200) | Hover states, decorative borders |
| **Arctic Sky** | `#67e8f9` (primary-300) | Secondary highlights, orbit rings |
| **Electric Teal** | `#22d3ee` (primary-400) | Interactive accents, active states |
| **Ocean Pulse** | `#0891b2` (primary-500) | Primary buttons, focus rings, links |
| **Deep Current** | `#0e7490` (primary-600) | Button gradients, CTA backgrounds |
| **Abyssal Teal** | `#155e75` (primary-700) | Gradient endpoints, hover shadows |
| **Marine Depth** | `#164e63` (primary-800) | Dark mode accents, borders |
| **Midnight Ocean** | `#083344` (primary-900) | Dark mode backgrounds |
| **Black Tide** | `#042f2e` (primary-950) | Darkest dark mode elements |

### Secondary Palette — Vitality Green

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Spring Dew** | `#f0fdf4` (secondary-50) | Success backgrounds, health indicators |
| **Fresh Leaf** | `#dcfce7` (secondary-100) | Badge backgrounds, positive states |
| **Mint Glow** | `#bbf7d0` (secondary-200) | Subtle success highlights |
| **Vibrant Growth** | `#4ade80` (secondary-400) | Success icons, checkmarks |
| **Emerald Heart** | `#22c55e` (secondary-500) | Secondary buttons, success states |
| **Forest Core** | `#16a34a` (secondary-600) | Button gradients |
| **Deep Canopy** | `#15803d` (secondary-700) | Gradient endpoints |

### Accent Palette — Healing Teal

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Mist Jade** | `#f0fdfa` (accent-50) | Decorative backgrounds |
| **Soft Jade** | `#ccfbf1` (accent-100) | Subtle accents |
| **Warm Teal** | `#14b8a6` (accent-500) | Gradient endpoints, accent elements |
| **Deep Jade** | `#0d9488` (accent-600) | Hover states, gradient middles |

### Neutral Palette — Foundation Slate

| Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Cloud White** | `#f8fafc` (neutral-50) | Page backgrounds, card surfaces |
| **Silver Mist** | `#f1f5f9` (neutral-100) | Secondary backgrounds, borders |
| **Soft Steel** | `#e2e8f0` (neutral-200) | Input borders, card borders |
| **Pewter** | `#cbd5e1` (neutral-300) | Placeholder text, dividers |
| **Stone** | `#94a3b8` (neutral-400) | Tertiary text, disabled states |
| **Graphite** | `#64748b` (neutral-500) | Secondary text, icons |
| **Charcoal** | `#475569` (neutral-600) | Body text, subtitles |
| **Slate** | `#334155` (neutral-700) | Borders, elevated surfaces |
| **Dark Slate** | `#1e293b` (neutral-800) | Dark mode surfaces |
| **Midnight** | `#0f172a` (neutral-900) | Headings, dark mode primary bg |
| **Abyss** | `#020617` (neutral-950) | Hero backgrounds, darkest elements |

---

## 3. Typography Rules

### Font Families

- **Headings & Display:** `"Figtree"` — A geometric sans-serif with optical correction. Used for all headings (h1–h6), display text, buttons, and navigation. Conveys precision and modernity.
- **Body Text:** `"Noto Sans"` — A comprehensive Unicode sans-serif supporting Myanmar script. Used for paragraphs, descriptions, and form labels. Ensures readability and cultural inclusivity.

### Type Scale

| Token | Size | Line-Height | Letter-Spacing | Usage |
|---|---|---|---|---|
| `display-2xl` | 5rem (80px) | 1.05 | -0.03em | Hero section main headings |
| `display-xl` | 4rem (64px) | 1.08 | -0.025em | Large hero headings |
| `display-lg` | 3.25rem (52px) | 1.1 | -0.02em | Section hero headings |
| `display-md` | 2.5rem (40px) | 1.15 | -0.02em | Section titles |
| `display-sm` | 2rem (32px) | 1.2 | -0.01em | Card group titles |
| `heading-xl` | 1.75rem (28px) | 1.25 | normal | Large card headings |
| `heading-lg` | 1.5rem (24px) | 1.3 | normal | Card headings |
| `heading-md` | 1.25rem (20px) | 1.4 | normal | Sub-card headings |
| `heading-sm` | 1.125rem (18px) | 1.4 | normal | Small headings, labels |
| `body-lg` | 1.125rem (18px) | 1.65 | normal | Introductory paragraphs |
| `body-md` | 1rem (16px) | 1.65 | normal | Default body text |
| `body-sm` | 0.875rem (14px) | 1.55 | normal | Captions, metadata |
| `body-xs` | 0.75rem (12px) | 1.5 | normal | Badges, fine print |

### Font Weight Usage

- **Bold (700):** All headings (h1–h6), display text, navigation links, buttons
- **Semibold (600):** Button text, form labels, subheadings, eyebrows
- **Medium (500):** Card titles, input text, secondary navigation
- **Regular (400):** Body paragraphs, descriptions, form field values
- **Light (300):** Rarely used; decorative accents only

### Letter-Spacing Patterns

- **Tight tracking (-0.055em to -0.01em):** Display and hero headings — creates dense, impactful headlines
- **Normal tracking:** Body text and secondary content
- **Wide tracking (0.12em–0.2em):** Eyebrow labels, uppercase badges — adds sophistication and hierarchy

---

## 4. Component Stylings

### Buttons

**Primary Button:**
- Shape: Pill-shaped with `border-radius: 1rem` (12px)
- Background: `linear-gradient(135deg, #0891b2, #0e7490 56%, #0f766e 140%)`
- Shadow: `0 16px 35px -16px rgba(14, 116, 144, 0.75)` — deep, colored glow
- Hover: `translateY(-3px)` lift with intensified shadow
- Text: White, semibold, Figtree font
- Sizes: `btn-sm` (0.5rem 1.25rem), default (0.75rem 1.75rem), `btn-lg` (1rem 2.25rem)

**Secondary Button:**
- Shape: Same pill shape
- Background: Translucent white (`rgba(255,255,255,0.7)`) with `backdrop-blur-xl`
- Border: `1px solid rgba(148, 163, 184, 0.35)` — subtle silver stroke
- Hover: Border shifts to teal, gains shadow depth
- Text: Primary text color (dark gray/black)

**Outline Button:**
- Shape: Pill-shaped
- Background: Transparent
- Border: `1.5px solid primary-600`
- Hover: Fills to solid primary with white text

**Ghost Button:**
- Shape: Pill-shaped
- Background: Transparent, no border
- Hover: Fills with `bg-tertiary` (light gray)

### Cards

**Default Card:**
- Corner roundness: `rounded-2xl` (1rem / 16px) — subtly rounded
- Background: White (light) / `neutral-800/30` (dark)
- Border: `1px solid neutral-100` — whisper-thin, light gray
- Shadow: `0 1px 3px rgba(0,0,0,0.04)` — barely perceptible
- Hover: `translateY(-4px)` with `shadow-xl` elevation + border darkens

**Pharma Card (Product Cards):**
- Corner roundness: `rounded-3xl` (1.5rem) — generously rounded
- Left accent bar: 3px gradient (teal→emerald), hidden by default, animates `scaleY(0→1)` on hover
- Hover: `translateY(-6px)` lift, border shifts to `rgba(14,116,144,0.28)`, shadow gains teal glow `rgba(14,116,144,0.55)`
- Transition: `400ms cubic-bezier(0.22, 1, 0.36, 1)` — smooth, spring-like

**Glass Card:**
- Background: `rgba(255,255,255,0.72)` (light) / `rgba(15,23,42,0.72)` (dark)
- Backdrop: `blur(16px)`
- Border: `1px solid rgba(255,255,255,0.18)`
- Shadow: `0 8px 32px rgba(0,0,0,0.04)`

### Inputs/Forms

**Text Input:**
- Corner roundness: `rounded-xl` (0.75rem / 12px)
- Border: `1.5px solid neutral-200`
- Background: White (light) / `neutral-800/70` (dark)
- Padding: `0.75rem 1rem` (12px 16px)
- Focus: Border shifts to `primary-500`, gains `ring-4 ring-primary-100`
- Transition: `200ms ease` on border and shadow

**Select Dropdown:**
- Same base styling as text input
- Custom arrow icon positioned absolute right
- Label displayed as floating uppercase text above the value

**Textarea:**
- Same base styling as text input
- `resize-y` for vertical resizing only

---

## 5. Layout Principles

### Container System

- **Max width:** 80rem (1280px) default, expanding to 90rem (1440px) on desktop
- **Padding:** 1.5rem (24px) mobile, 2rem (32px) tablet, 2.5rem (40px) desktop
- **Alignment:** Always `margin-inline: auto` — centered horizontally

### Section Spacing

- **Mobile:** `padding-block: 5rem` (80px top/bottom)
- **Tablet (768px+):** `padding-block: 6rem` (96px)
- **Desktop (1024px+):** `padding-block: 7.5rem` (120px)

### Grid Systems

**Product Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6` — 3-column on desktop, single column on mobile

**Stats Grid:** `grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12` — 4-column on desktop

**Feature Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` — 3-column responsive

**Hero Grid:** `grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]` — 2-column, slightly favoring the right visual

### Whitespace Strategy

- **Between sections:** 5–7.5rem (80–120px)
- **Between section header and content:** 4rem (64px)
- **Between cards in grid:** 1.5rem (24px)
- **Within cards:** 1.5–2rem (24–32px) padding
- **Between form fields:** 1.25rem (20px)
- **Between button groups:** 0.875rem (14px)

### Dark Mode Implementation

- Uses `data-theme="dark"` attribute selector (not media query alone)
- All components include `dark:` prefix variants
- Backgrounds shift to `neutral-800/30` or `neutral-900/50`
- Text shifts to `neutral-300` or `neutral-400`
- Borders shift to `neutral-700/50`
- Glass effects use darker translucent values

### Accessibility Patterns

- **Focus rings:** `3px solid primary-500` with `2px offset` on all interactive elements
- **Touch targets:** Minimum `2.75rem` (44px) height/width on buttons
- **Reduced motion:** All animations and transitions disabled via `prefers-reduced-motion: reduce`
- **Scroll behavior:** `scroll-margin-top: 5rem` on all headings for fixed header offset
- **Overscroll:** `overscroll-behavior: contain` to prevent navigation interference

---

## 6. Design Tokens Reference

### Shadow Elevation Scale

| Token | Value | Usage |
|---|---|---|
| `--shadow-soft` | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)` | Default cards, subtle lift |
| `--shadow-medium` | `0 4px 6px rgba(0,0,0,0.04), 0 10px 15px rgba(0,0,0,0.05)` | Elevated cards, dropdowns |
| `--shadow-large` | `0 10px 25px rgba(0,0,0,0.05), 0 20px 40px rgba(0,0,0,0.06)` | Hover states, modals |
| `--shadow-xl` | `0 20px 40px rgba(0,0,0,0.06), 0 40px 60px rgba(0,0,0,0.08)` | Hero cards, prominent elements |
| `--shadow-glow` | `0 0 20px rgba(14, 116, 144, 0.15)` | Primary button glow, focus rings |
| `--shadow-glow-secondary` | `0 0 20px rgba(22, 163, 74, 0.15)` | Secondary button glow |

### Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-xl` | `0.75rem` (12px) | Inputs, small cards |
| `--radius-2xl` | `1rem` (16px) | Buttons, default cards |
| `--radius-3xl` | `1.5rem` (24px) | Pharma cards, hero containers |

### Spacing Scale (Component-Level)

| Context | Value | Token/Class |
|---|---|---|
| Container padding (mobile) | `1.5rem` (24px) | `container` |
| Container padding (tablet) | `2rem` (32px) | `container` |
| Container padding (desktop) | `2.5rem` (40px) | `container` |
| Section vertical padding (mobile) | `5rem` (80px) | `section` |
| Section vertical padding (tablet) | `6rem` (96px) | `section` |
| Section vertical padding (desktop) | `7.5rem` (120px) | `section` |
| Card grid gap | `1.5rem` (24px) | `gap-6` |
| Form field gap | `1.25rem` (20px) | `gap-5` |
| Button group gap | `0.875rem` (14px) | `gap-3.5` |
| Badge/tag gap | `0.5rem` (8px) | `gap-2` |

### Glass Morphism Tokens

| Token | Light Mode | Dark Mode |
|---|---|---|
| `--glass-bg` | `rgba(255, 255, 255, 0.72)` | `rgba(15, 23, 42, 0.72)` |
| `--glass-border` | `rgba(255, 255, 255, 0.18)` | `rgba(51, 65, 85, 0.18)` |
| `--glass-shadow` | `0 8px 32px rgba(0, 0, 0, 0.04)` | `0 8px 32px rgba(0, 0, 0, 0.12)` |
| `--nav-blur` | `blur(16px)` | `blur(16px)` |

---

## 7. Common Patterns

### Section Header Pattern
```
<section className="section bg-{color}">
  <div className="container">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="eyebrow">{label}</span>
      <h2 className="display-md lg:display-lg font-bold mt-4">{title}</h2>
      <p className="body-lg text-neutral-600 mt-4">{subtitle}</p>
    </div>
    {content}
  </div>
</section>
```

### Hero Section Pattern
```
<section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-teal-50">
  <div className="container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
    <div>{text content with staggered animations}</div>
    <div className="hidden lg:block">{decorative visual}</div>
  </div>
</section>
```

### Card Grid Pattern
```
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Trust Badge Pattern
```
<div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.17em] text-primary-700 shadow-sm backdrop-blur-xl">
  <Icon className="h-4 w-4" />
  {label}
</div>
```
