

# Mega Media Networks — Premium Digital Marketing Website

## Tagline
**"Where Brands Scale. Where Markets Move."**

## Key Changes from Previous Plan
- **Color**: Electric Blue → Bold Red (#FF4A3D primary, #FF6B3D accent/gradient)
- **Dark/Light mode**: Toggle in navbar
- **Contact info**: San Diego, CA | info@megamedianetworks.com | +1 (619) 324-9339
- **No "Class A" copy** — premium quality implied through design
- **FAQ section** added with real-world questions

## Design System
- **Primary**: #FF4A3D (bold red), **Accent**: #FF6B3D (warm orange-red)
- **Dark mode**: Deep charcoal (#0F0F0F) backgrounds, light text
- **Light mode**: White/ghost-white backgrounds, dark text
- CSS variables for both modes in `index.css`; toggle via class on `<html>`

## Structure (Single Page)

### 1. Navbar
- White logo (dark bg) / Color logo (light bg)
- Links: Services, About, Results, FAQ, Contact
- Dark/light mode toggle (Sun/Moon icon)
- "Start a Project" CTA in red

### 2. Hero
- Full-width dark section with subtle red gradient accent
- Headline: **"Where Brands Scale. Where Markets Move."**
- Subtitle positioning Mega Media as the growth partner
- CTA: "Get Started" → scrolls to enquiry form

### 3. Social Proof Bar
- "Trusted by ambitious brands" with placeholder brand silhouettes

### 4. Services (6-card grid)
- SEO & Search, Paid Media, Social Media, Content Strategy, Web Development, Analytics
- Clean cards with Lucide icons, subtle red hover accents

### 5. Why Mega Media (Stats)
- 150+ Clients | 3x Avg ROI | 24/7 Support — large animated numbers

### 6. Process Timeline
- Discovery → Strategy → Execute → Scale (4 horizontal steps)

### 7. Results Cards
- 2-3 metric cards with red gradient backgrounds (+340% traffic, +5x ROAS, etc.)

### 8. FAQ Section (Accordion)
- "Can you support international growth?"
- "How do we measure the success of campaigns?"
- "My business is local only — what can you do for me?"
- "How long before I see results?"
- "What makes Mega Media different from other agencies?"
- "Do you offer custom packages?"

### 9. Enquiry Form
- Glassmorphism card on dark background
- Fields: Name, Email, Phone, Company, Service Interest (dropdown), Budget Range (dropdown), Message
- Submit with toast confirmation + localStorage persistence

### 10. Footer
- Logo, quick links, contact details (San Diego address, email, phone)
- Social media icon links
- © 2026 Mega Media Networks

## File Structure
- `src/pages/Index.tsx` — main page, composes all sections
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/SocialProof.tsx`
- `src/components/Services.tsx`
- `src/components/Stats.tsx`
- `src/components/Process.tsx`
- `src/components/Results.tsx`
- `src/components/FAQ.tsx`
- `src/components/EnquiryForm.tsx`
- `src/components/Footer.tsx`
- `src/components/ThemeToggle.tsx`
- `src/hooks/useTheme.ts`
- `src/index.css` — updated CSS variables for red theme + dark mode
- `index.html` — Google Fonts (Lexend + Inter), updated title/meta
- Logo files already uploaded: `user-uploads://logo.webp`, `user-uploads://white-logo.svg`

## Technical Notes
- Scroll-based fade-in animations via Intersection Observer hook
- Smooth scroll for nav links
- Form validation with react-hook-form
- Radix Accordion for FAQ
- Theme persisted to localStorage

