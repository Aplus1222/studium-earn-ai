# UI/UX Premium Enhancement Plan

## 1. Global Visual Polish (theme.css & index.css)
- [ ] Refine `src/theme.css` with advanced glassmorphism and shadow tokens.
- [ ] Implement a custom, slim scrollbar for dark mode.
- [ ] Add "spotlight" hover effect CSS utilities.
- [ ] Define consistent spacing and typography scales.

## 2. Component Refinement
### Navbar (Navbar.tsx)
- [ ] Enhance glass effect with a tighter border and subtle glow.
- [ ] Improve active link indicators with a soft bloom effect.
- [ ] Redesign search input with a more integrated, premium look.

### Home Dashboard (HomeDashboard.tsx)
- [ ] **Hero Section**: Implement a text-reveal animation and a subtle "floating" parallax effect on the background.
- [ ] **Action Cards**: Add a dynamic "spotlight" border-glow effect that responds to hover.
- [ ] **Stats & Progress**: Use more sophisticated progress visualizations (pulsing glows, custom icons).

### Study Experience (StudyExperience.tsx)
- [ ] **Flashcards**: Refine the 3D flip with a "depth" shadow and smoother spring physics.
- [ ] **AI Tutor**: Rebuild the chat interface with modern message bubbles, typing indicators, and better spacing.
- [ ] **Tabs**: Transition to a more fluid, sliding-underlay indicator.

### Profile & Leaderboard
- [ ] **Leaderboard**: Add "Glass Cards" for the top 3 users with gold/silver/bronze accents.
- [ ] **Profile**: Improve the stats grid with better visual hierarchy and micro-animations.

## 3. Technical Implementation
- [ ] Ensure React 19 compatibility.
- [ ] Use `framer-motion` for all layout transitions.
- [ ] Maintain accessibility (ARIA, focus states).
- [ ] Batch all changes into a single `write_files` call for consistency.
