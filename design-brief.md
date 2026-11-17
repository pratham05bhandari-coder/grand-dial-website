# Design Brief: Grand Dial (Watch Retail Website)

## 1. Project Overview & Brand Identity

- **Business Name**: Grand Dial
- **Industry**: Watch Retail & Local Horology Services
- **Location**: Vijay Nagar, Indore, Madhya Pradesh 452010
- **Service Area**: 5-kilometre radius (including Scheme 54, Scheme 78, AB Road, Mahalaxmi Nagar, and Sukhlia)
- **Year Established**: 2020
- **Tagline**: Stylish, Quality-Focused & Affordable Watches for Men & Women
- **Primary Objective**: Increase local brand awareness, showcase watch collections, generate product enquiries, and drive physical store visits.
- **Primary Conversion Goal**: Watch enquiry form submission.

---

## 2. Target Audience

- **Demographics**: Men and women aged 18 to 45 living or working within 5 km of Vijay Nagar, Indore.
- **Key Customer Segments**:
  1. **College Students**: Looking for trendy, durable, water-resistant daily wear watches under affordable price points (under ₹1,999).
  2. **Working Professionals**: Seeking clean, elegant, analog, and chronograph formal watches for office and corporate meetings.
  3. **Fashion Seekers**: Seeking chic minimalist, rose gold, and statement pieces.
  4. **Gifting Customers**: Looking for premium couple sets, anniversary gifts, or festive presents.
  5. **Local Shoppers**: Looking for reliable local after-sales service (battery replacement, strap resizing, warranty).

---

## 3. Visual Identity & Color Palette (Black, Gold & White)

The design follows a premium, modern, and elegant watch-boutique aesthetic:

| Element | Color Hex | Role & Usage |
|---|---|---|
| **Obsidian Black** | `#0a0b0d` / `#12141a` | Header background, footer, hero contrast, luxury cards, dark badges |
| **Watchmaker Gold** | `#c5a059` / `#d4af37` | Primary CTA buttons, badge accents, icons, hover borders, dials |
| **Rich Gold Hover** | `#b38d45` | Hover state for gold buttons and primary text links |
| **Warm Gold Tint** | `#faf5eb` | Background for tags, trust badges, and pricing highlight callouts |
| **Crisp White** | `#ffffff` | Primary background for content cards, form inputs, and typography on dark backgrounds |
| **Slate Charcoal** | `#334155` / `#0a0b0d` | Body text and high-contrast headings on light backgrounds |

---

## 4. Six-Page Architecture & SEO Metadata

The website follows a clean six-page structure with plain HTML, shared `style.css`, and shared `script.js`:

| Page | File / URL | Title | Meta Description |
|---|---|---|---|
| **Home** | `/` (`index.html`) | `Local Business in Vijay Nagar, Indore \| Grand Dial` | Discover reliable products and services in Vijay Nagar, Indore, with convenient support and an easy enquiry process. |
| **About** | `/about` (`about.html`) | `About Our Business in Vijay Nagar, Indore \| Grand Dial` | Learn about our business, approach and commitment to dependable service for customers in Vijay Nagar, Indore. |
| **Services** | `/services` (`services.html`) | `Services in Vijay Nagar, Indore \| Grand Dial` | Explore our products and services in Vijay Nagar, Indore, designed around quality, convenience and customer needs. |
| **Pricing** | `/pricing` (`pricing.html`) | `Pricing & Services in Vijay Nagar, Indore \| Grand Dial` | Check pricing information and available options in Vijay Nagar, Indore. Contact us for current details and availability. |
| **Location** | `/location` (`location.html`) | `Business Location in Vijay Nagar, Indore \| Grand Dial` | Find our Vijay Nagar, Indore location and plan your visit with convenient access and helpful local service. |
| **Contact** | `/contact` (`contact.html`) | `Contact Our Business in Vijay Nagar, Indore \| Grand Dial` | Have a question or requirement? Contact our Vijay Nagar, Indore business and get helpful information from our team. |

---

## 5. Watch Collections (What We Offer)

Grand Dial showcases 8 core watch categories:
1. **Men's Watches**: Executive, bold dial, and masculine stainless steel designs.
2. **Women's Watches**: Elegant rose gold, stone-embellished, and graceful bracelet styles.
3. **Analog Watches**: Classic 3-hand dials and chronographs with timeless appeal.
4. **Digital Watches**: Multi-function digital timepieces with backlight and sports timers.
5. **Casual Watches**: Comfortable silicone, leather, and fabric strap daily wear.
6. **Formal Watches**: Sleek, slim-profile timepieces tailored for professional suits and office attire.
7. **Fashion Watches**: Trendy designer-inspired timepieces matching modern streetwear.
8. **Gift Watches**: Curated couple sets, premium packaging, and milestone anniversary pairs.

---

## 6. How Customers Enquire (5-Step Conversion Process)

1. **Fill in Basic Details**: Customer enters their name, 10-digit mobile number, and email.
2. **Select Watch Category**: Dropdown or pre-selected category choice from the 8 collections.
3. **Mention Budget / Preference**: Provide price range or specific design requirement.
4. **Submit Enquiry Form**: Real-time validation without popups, submitted directly to team.
5. **Receive Fast Response**: Team contacts customer with pictures, pricing, and availability on WhatsApp or phone call.

---

## 7. Technical Standards & Responsiveness

- **Native Web Technologies**: Plain HTML5, CSS3, and JavaScript only (no build step, no UI frameworks).
- **Mobile-First CSS**: Designed for 360px+ viewport scaling up to 1200px+ desktop displays.
- **Accessible Navigation**:
  - Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
  - Hamburger toggle with `aria-expanded` and `aria-controls`.
  - Keyboard navigation (Escape key close, tab focus rings in gold).
- **High-Visibility CTAs**: Every screen size maintains visible enquiry buttons with high contrast.
