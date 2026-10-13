# Senweida Trading Co., Ltd. (徐州森炜达贸易有限公司)
## Corporate B2B Export Website — Production Architecture & Documentation

> **Tagline:** "Premium plywood & film faced construction formwork. Durable & waterproof for construction projects."  
> **Chinese:** "专业高品质胶合板与建筑覆膜模板制造出口商 · 耐用防水 · 专为工程筑造"  
> **Primary Goal:** Generate high-converting international B2B RFQ (Request for Quote) leads for plywood, film faced construction formwork, and H20 timber beams.

---

## 1. Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with an editorial industrial design system:
  - Deep forest green (`#14301F`), Warm brass/gold (`#B8924A`), Cream/off-white (`#F6F1E7`), Film-faced red-brown accent (`#8C3B2A`), Near-black ink (`#161512`).
  - No purple, no neon, no blue-purple gradients.
  - Asymmetric editorial grids, hairline dividers, numbered sections (`01`, `02`, `03`), spec-sheet tables, subtle SVG paper grain texture.
- **Motion:** Framer Motion for subtle, restrained reveals respecting `prefers-reduced-motion`.
- **Internationalization (i18n):** `next-intl` App Router architecture with locale-prefixed routes:
  - English: `/en/...` (Default)
  - Simplified Chinese (简体中文): `/zh/...`
  - Cookie persistence (`NEXT_LOCALE`) + automatic browser `Accept-Language` detection at root `/`.
- **Typography:**
  - Headings: Fraunces / Noto Serif SC
  - Body & UI: Manrope / Noto Sans SC (1.78 line-height on Chinese, no faux italics, zero CJK letter-spacing).
- **SEO & Social Sharing:** Dynamic Open Graph images, canonical URLs, hreflang alternates (`en`, `zh-CN`, `x-default`), `/robots.txt`, and `/sitemap.xml`.

---

## 2. Directory Structure

```text
senweida/
├── messages/
│   ├── en.json                  # Complete English translation catalog
│   └── zh.json                  # Complete professional Chinese translation catalog
├── public/
│   ├── favicon.ico              # Multi-resolution favicon generated from logo badge
│   ├── favicon.png              # 64x64 PNG favicon
│   ├── logo.png                 # Circular badge, deep green (#14301F) with gold tree emblem
│   └── images/
│       ├── hero.jpg             # High-res calibrated formwork stack hero
│       ├── factory-1.jpg        # Multi-daylight hydraulic hot press line
│       ├── factory-2.jpg        # Double-sided calibration sanding line
│       ├── factory-3.jpg        # H20 timber beam assembly & coating line
│       ├── formwork-1.jpg       # 18mm Phenolic whole core shuttering panel
│       ├── formwork-2.jpg       # Eucalyptus hardwood core heavy-duty formwork
│       ├── hardwood-1.jpg       # Structural hardwood commercial plywood
│       ├── h20-beam-1.jpg       # EN 13377 H20 structural timber formwork beam
│       ├── qc-1.jpg             # 72h boiling water WBP testing laboratory
│       ├── loading-1.jpg        # 40HQ export container forklift load-out
│       ├── process-cutting.jpg  # Stage 01: Rotary peeling & moisture calibration
│       ├── process-assembling.jpg # Stage 02: Core layup & cross-grain assembly
│       ├── process-sanding.jpg  # Stage 03: Double-sided calibration sanding
│       ├── process-pressing.jpg # Stage 04: High-pressure phenolic film fusing
│       ├── process-stacking.jpg # Stage 05: Four-edge squaring & acrylic seal
│       ├── process-transport.jpg # Stage 06: Steel-strapped seaworthy load-out
│       └── wechat-qr.png        # Official WeChat QR code placeholder
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx       # Root localized layout with fonts, Header, Footer & FloatingContact
│   │   │   ├── page.tsx         # Home page (Hero, Trust Strip, Process, Advantages, RFQ Banner)
│   │   │   ├── about/page.tsx   # About page (Mill capabilities, FSC commitment, verification table)
│   │   │   ├── products/
│   │   │   │   ├── page.tsx     # Products catalog with instant category filter
│   │   │   │   └── [slug]/page.tsx # Product detail page with spec tables and RFQ pre-fill
│   │   │   ├── quality/page.tsx # Quality & FSC page (5-point QC protocol & packaging standards)
│   │   │   ├── gallery/page.tsx # Gallery page (Masonry grid, lightbox & Instagram reels)
│   │   │   ├── contact/page.tsx # Contact / RFQ page with dual WhatsApp + API dispatch
│   │   │   └── not-found.tsx    # Custom 404 page
│   │   ├── api/
│   │   │   └── rfq/route.ts     # RFQ API route with server-side validation
│   │   ├── globals.css          # Design tokens, clamp typography, paper grain & CJK rules
│   │   ├── robots.ts            # Robots.txt generator
│   │   └── sitemap.ts           # Localized sitemap.xml generator with alternates
│   ├── components/
│   │   ├── Header.tsx           # Sticky shrinking header + full-screen mobile menu
│   │   ├── Footer.tsx           # Industrial footer with FSC badge and priority channels
│   │   ├── LanguageSwitcher.tsx # EN | 中文 switcher with cookie & query param persistence
│   │   ├── FloatingContact.tsx  # Floating WhatsApp button + WeChat QR modal trigger
│   │   ├── RfqForm.tsx          # Dual-action RFQ form (API logging + WhatsApp wa.me trigger)
│   │   ├── ProductCatalogView.tsx # Interactive client catalog with instant category switching
│   │   ├── GalleryView.tsx      # Masonry photo gallery + interactive Lightbox modal
│   │   └── ScrollReveal.tsx     # Motion reveal component respecting prefers-reduced-motion
│   ├── config/
│   │   └── company.ts           # Central config for all company details, contacts, and certificates
│   ├── data/
│   │   └── products.ts          # Central bilingual product catalog and spec definitions
│   ├── i18n/
│   │   ├── routing.ts           # next-intl routing definitions and navigation helpers
│   │   └── request.ts           # Server-side request locale loader
│   ├── lib/
│   │   └── seo.ts               # Metadata builder with hreflang and Open Graph support
│   └── middleware.ts            # Next.js i18n locale detector & redirection middleware
├── package.json
└── tailwind.config.ts
```

---

## 3. How to Run Locally

### Start Development Server
```bash
cd senweida
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build and Run for Production
```bash
cd senweida
npm run build
npm run start
```

---

## 4. How to Edit Company Profile, Phone Numbers, and Certificate Codes

All contact numbers, email addresses, WeChat IDs, factory addresses, and FSC certificate numbers are centralized in:
👉 `src/config/company.ts`

```typescript
export const companyConfig = {
  name: {
    en: "Senweida Trading Co., Ltd.",
    zh: "徐州森炜达贸易有限公司",
  },
  contact: {
    email: "export@senweidatrading.com",     // Update with your official email
    phone: "+86 (0) 516 8888 8888",         // Update with your mill phone
    whatsappNumber: "8618000000000",        // Format: country code + number (no + or spaces) for wa.me
    whatsappDisplay: "+86 180 0000 0000",   // Display format for visitors
    wechatId: "senweidaplywood",            // Update with your official WeChat ID
    wechatQrCodePath: "/images/wechat-qr.png",
    address: {
      en: "Industrial Park, Pizhou City, Xuzhou, Jiangsu Province, China",
      zh: "中国江苏省徐州市邳州林产工业园",
    },
    instagramUsername: "@senweidatradingc",
    instagramUrl: "https://www.instagram.com/senweidatradingc",
  },
  certifications: {
    fscCertificateNumber: "FSC-C000000",    // Insert your verified FSC certificate code
  },
  stats: {
    exportCountriesCount: 40,
    annualCapacityM3: "120,000 m³",
  },
};
```

Any changes made to this file immediately reflect across the Header, Footer, About page, Contact cards, and WhatsApp messages.

---

## 5. How to Replace Placeholder Photos and Logo

1. **Logo:**
   - Place your official logo at `/public/logo.png`.
   - The logo should be a circular badge (deep green `#14301F` with gold tree emblem `#B8924A`).
2. **WeChat QR Code:**
   - Place your official WeChat QR image at `/public/images/wechat-qr.png`.
3. **Factory & Product Photos:**
   - Replace files inside `/public/images/`:
     - `hero.jpg`: Main hero image of stacked plywood in workshop or loading dock.
     - `formwork-1.jpg`, `formwork-2.jpg`: Close-up of film faced formwork, mirror concrete finish, and sealed edges.
     - `hardwood-1.jpg`: Multi-ply birch, okoume, and wire-mesh anti-slip boards.
     - `h20-beam-1.jpg`: Yellow EN 13377 H20 timber beams.
     - `factory-1.jpg`, `factory-2.jpg`, `factory-3.jpg`: Production machinery (hot presses, sanding lines, beam assembly).
     - `qc-1.jpg`: Lab quality control and 72h boiling water tests.
     - `loading-1.jpg`: Container stuffing and forklift loading.
     - `process-cutting.jpg` through `process-transport.jpg`: The 6-stage vertical process images.

---

## 6. How to Edit Content, Products & Add New Languages

### Editing Existing Content
- **English UI Copy:** `/messages/en.json`
- **Chinese UI Copy:** `/messages/zh.json`
- **Product Catalog (Specs, Descriptions, Codes):** `src/data/products.ts`

### Adding Another Language (e.g. Spanish `/es` or Arabic `/ar`)
1. In `src/i18n/routing.ts`, add the new locale code:
   ```typescript
   export const routing = defineRouting({
     locales: ['en', 'zh', 'es'],
     defaultLocale: 'en',
     localePrefix: 'always'
   });
   ```
2. Create `/messages/es.json` with the translated message keys (copied from `/messages/en.json`).
3. In `src/components/LanguageSwitcher.tsx`, add the button for the new language.
4. Run `npm run build` to verify that Next.js automatically generates the new localized static routes.
