# Secretary Landing Page Design Guidelines

## Design Approach

**Selected Approach:** Hybrid Reference + Modern Component Library Integration

Drawing inspiration from productivity leaders (Notion, Linear, Asana) combined with cutting-edge animated UI components from react-bits, Aceternity UI, and Framer Motion to create a visually stunning, modern landing page.

**Core Principle:** Balance professionalism with visual delight - showcasing productivity software that's both powerful and beautiful.

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 222 47% 11% (Deep charcoal for text)
- Brand/Accent: 217 91% 60% (Vibrant blue - productivity/trust)
- Secondary: 142 76% 36% (Fresh green - completion/growth)
- Background: 0 0% 100% (Pure white)
- Surface: 220 14% 96% (Light gray cards)
- Border: 220 13% 91% (Subtle dividers)

**Dark Mode:**
- Primary: 210 40% 98% (Off-white text)
- Brand/Accent: 217 91% 70% (Lighter blue)
- Secondary: 142 76% 46% (Brighter green)
- Background: 222 47% 11% (Deep charcoal)
- Surface: 217 33% 17% (Dark blue-gray cards)
- Border: 217 33% 25% (Subtle dark dividers)

### B. Typography

**Font Stack:**
- Headlines: 'Inter', sans-serif (700-800 weight) - Modern, professional
- Body: 'Inter', sans-serif (400-500 weight) - Excellent readability
- Accent/Numbers: 'JetBrains Mono', monospace - Technical credibility

**Type Scale:**
- Hero H1: 3.5rem (56px) → 2.5rem mobile
- Section H2: 2.5rem (40px) → 2rem mobile
- Feature H3: 1.5rem (24px) → 1.25rem mobile
- Body: 1.125rem (18px) → 1rem mobile
- Small: 0.875rem (14px)

### C. Layout System

**Spacing Units:** Tailwind 4, 8, 12, 16, 24, 32 (consistent rhythm)
- Section padding: py-24 desktop, py-16 mobile
- Card padding: p-8 desktop, p-6 mobile
- Element gaps: gap-8 (cards), gap-4 (text blocks)

**Container Strategy:**
- Full-width sections with max-w-7xl inner container
- Content blocks: max-w-4xl for readability
- Grid layouts: 3 columns desktop → 1 mobile

---

## Component Library

### Hero Section (80vh)
- **Animated gradient background** using react-bits animated backgrounds
- **Typewriter effect** on main headline using react-bits text animations
- **Floating particles** or subtle geometric patterns
- **CTA button** with magnetic hover effect and shimmer animation
- **Screenshot preview** with tilt/3D perspective on hover
- Trust indicators: "150+ пользователей", platform badges

### Features Grid (6 items, 3x2 on desktop)
- **Bento-style cards** with gradient borders on hover
- **Icon animations** (entrance + hover state) using Lucide icons
- **Staggered reveal** on scroll (0.1s delay between cards)
- Card hover: subtle lift (translateY(-4px)) + glow effect
- Icons in gradient circles matching brand colors

### Screenshot Gallery (Interactive)
- **3D carousel** or **bento showcase** with smooth transitions
- **Zoom on hover** with backdrop blur effect
- **Caption animations** sliding in from bottom
- Show 3 provided screenshots in rotated showcase

### Stats/Benefits Section
- **Counter animations** when scrolling into view
- **Icon morphing** effects between states
- **Gradient text** for key numbers/metrics
- Layout: horizontal cards with icon-text pairs

### CTA Section (Final)
- **Gradient background** with animated mesh/grain texture
- **Pulsing download button** with ripple effect on click
- **Platform icons** with bounce animation on hover
- Technical specs in monospace font with subtle glow

### Footer
- **Animated link underlines** on hover
- **Social icons** with rotation/color shift
- Organized in 3 columns: Product, Resources, Legal

---

## Animations & Interactions

**Scroll-Based:**
- Fade + translateY(30px) for section entrances
- Parallax on hero background elements
- Progressive blur on scroll for depth

**Micro-interactions:**
- Button magnetic hover (cursor pull effect)
- Card tilt on mouse movement (subtle 3D)
- Icon bounce on feature card hover
- Text shimmer on gradient headlines

**Performance:**
- Use `will-change` sparingly
- Prefer transform/opacity animations
- Lazy load heavy animations

---

## Images

**Hero Section:**
- Large hero image: YES - Floating dashboard preview (app interface) with subtle shadow/glow
- Position: Right side of hero, angled/3D perspective
- Alternative: Animated mockup rotating through app features

**Feature Section:**
- 6 feature icons (AI assistant, calendar, timer, etc.)
- Style: Gradient-filled, modern line icons (Lucide React)

**Screenshot Gallery:**
- 3 provided screenshots displayed in interactive carousel/bento layout
- Add subtle frame/device mockup for context

**Background Elements:**
- Gradient mesh patterns
- Floating geometric shapes (circles, triangles) with blur
- Grid patterns with opacity variations

---

## Unique Layout Patterns

**Hero:** Asymmetric split - 60% text/CTA left, 40% floating screenshot right
**Features:** Bento grid (varying card heights) instead of uniform grid
**Gallery:** Diagonal grid layout with overlapping cards
**CTA:** Full-bleed gradient with centered content, floating particles background

---

## Technical Implementation Notes

- React Bits components for text animations, backgrounds
- Framer Motion for scroll animations and page transitions
- Lucide React for consistent icon system
- Tailwind CSS with custom animation utilities
- Dark mode toggle with smooth theme transitions