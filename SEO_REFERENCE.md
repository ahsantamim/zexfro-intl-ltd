# Zexfro — SEO Reference (All Pages)

Every public page uses the `generatePageSEO()` helper from `src/lib/seo.ts`, which outputs:

- `<title>` — format: **`{Title} | Zexfro`**
- `<meta name="description">`
- `<meta name="keywords">`
- `<link rel="canonical">` — `https://www.zexfrointl.com/{locale}/{path}`
- `<link rel="alternate" hreflang="...">` — all 4 locales + `x-default`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image` 1200x630, `og:type`, `og:locale`, `og:site_name`)
- Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:site`, `twitter:creator`)
- Robots: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`

Each page has a **unique OG image** matching its hero/primary visual (1200x630 crop). Default fallback: `/home/hero.avif`.

**Total public pages: 26** (+ dynamic blog posts and product detail pages)

---

## Global Defaults (Locale Layout)

| Field | Value |
|-------|-------|
| **File** | `src/app/[locale]/layout.tsx` |
| **Method** | `export const metadata = generateSEOMetadata()` |
| **Title** | Zexfro - Global Trade Made Simple |
| **Description** | Secure. Compliant. Global Trade Made Simple. Connect with verified partners in Europe. |
| **Keywords** | global trade, international trade, import export, verified partners, trade compliance, European trade, B2B marketplace, secure trading platform |
| **JSON-LD** | Organization schema + WebSite schema (with SearchAction) |

---

## Static Pages

| # | Route | Title | OG Image | File |
|---|-------|-------|----------|------|
| 1 | `/{locale}` | Global Trade Made Simple - Import & Export Solutions | `/home/hero.avif` | `(main)/page.tsx` |
| 2 | `/{locale}/about` | About Us - Our Story & Mission in Global Trade | `unsplash/photo-1454165804606` | `about/layout.tsx` |
| 3 | `/{locale}/board-of-directors` | Board of Directors - Leadership Team | `unsplash/photo-1552664730` | `board-of-directors/layout.tsx` |
| 4 | `/{locale}/vision-mission-values` | Vision, Mission & Core Values | `unsplash/photo-1519389950473` | `vision-mission-values/layout.tsx` |
| 5 | `/{locale}/careers` | Careers - Join Our Global Trade Team | `unsplash/photo-1522071820081` | `careers/layout.tsx` |
| 6 | `/{locale}/faq` | FAQ - Frequently Asked Questions About Global Trade | `unsplash/photo-1516321318423` | `faq/layout.tsx` |
| 7 | `/{locale}/glossary` | Trade Glossary - International Trade Terms & Definitions | `unsplash/photo-1457369804613` | `glossary/layout.tsx` |
| 8 | `/{locale}/case-study` | Case Study - Import Export Success Story | `unsplash/photo-1460925895917` | `case-study/page.tsx` |
| 9 | `/{locale}/contact` | Contact Us - Get in Touch | `unsplash/photo-1486406146926` | `contact/page.tsx` |
| 10 | `/{locale}/payment-methods` | Payment Methods - Secure Trade Transactions | `unsplash/photo-1556155092` | `payment-methods/page.tsx` |
| 11 | `/{locale}/privacy-policy` | Privacy Policy - Data Protection & Privacy | `unsplash/photo-1563986768609` | `privacy-policy/page.tsx` |
| 12 | `/{locale}/benefits-for-supplier` | Benefits for Suppliers - Grow Your Business Globally | `unsplash/photo-1556761175-b413da4baf72` | `benefits-for-supplier/layout.tsx` |

## Service Pages

| # | Route | Title (en) | OG Image | File |
|---|-------|------------|----------|------|
| 13 | `/{locale}/services` | Our Services | `unsplash/photo-1586528116311` | `services/page.tsx` |
| 14 | `/{locale}/global-service` | Global Service (i18n) | `unsplash/photo-1526304640581` | `global-service/page.tsx` |
| 15 | `/{locale}/local-service` | Local Service (i18n) | `unsplash/photo-1578575437130` | `local-service/page.tsx` |
| 16 | `/{locale}/advantages` | Advantages (i18n) | `unsplash/photo-1521737711867` | `advantages/layout.tsx` |
| 17 | `/{locale}/competitive-advantages` | Competitive Advantages (i18n) | `unsplash/photo-1460925895917` | `competitive-advantages/page.tsx` |

## Logistics & Supply Chain Pages

| # | Route | Title | OG Image | File |
|---|-------|-------|----------|------|
| 18 | `/{locale}/logistic-supply-chain` | Logistics & Supply Chain Management | `unsplash/photo-1586528116311` | `logistic-supply-chain/layout.tsx` |
| 19 | `/{locale}/logistics-support` | Logistics Support (i18n) | `unsplash/photo-1494412574643` | `logistics-support/page.tsx` |
| 20 | `/{locale}/resources/logistics-supply-chain` | Logistics & Supply Chain Resources | `unsplash/photo-1586528116311` | `resources/logistics-supply-chain/page.tsx` |

## Compliance & Documentation Pages

| # | Route | Title (en) | OG Image | File |
|---|-------|------------|----------|------|
| 21 | `/{locale}/compliance-standards` | Compliance Standards (i18n) | `unsplash/photo-1589829545856` | `compliance-standards/page.tsx` |
| 22 | `/{locale}/documentation-compliance` | Documentation Compliance (i18n) | `unsplash/photo-1450101499163` | `documentation-compliance/page.tsx` |
| 23 | `/{locale}/quality-assurance` | Quality Assurance (i18n) | `unsplash/photo-1556761175-b413da4baf72` | `quality-assurance/page.tsx` |
| 24 | `/{locale}/hs-code` | HS Code (i18n) | `unsplash/photo-1454165804606` | `hs-code/page.tsx` |
| 25 | `/{locale}/terms-conditions` | Terms & Conditions (i18n) | `unsplash/photo-1589829545856` | `terms-conditions/page.tsx` |

## Product Pages

| # | Route | Title | OG Image | File |
|---|-------|-------|----------|------|
| 26 | `/{locale}/products` | Products - Import & Export Product Catalog | `unsplash/photo-1578575437130` | `products/layout.tsx` |
| — | `/{locale}/products/{slug}` | Dynamic: `{product.name}` | Dynamic: product primary image | `products/[slug]/layout.tsx` |
| — | `/{locale}/products/categories/{slug}` | Dynamic: `{category.name}` | Fallback to default | `products/categories/[slug]/layout.tsx` |

## Blog Pages

| # | Route | Title | OG Image | File |
|---|-------|-------|----------|------|
| — | `/{locale}/blog` | Blog - Trade Insights & Industry News | `unsplash/photo-1499750310107` | `blog/page.tsx` |
| — | `/{locale}/blog/{slug}` | Dynamic: `{post.title}` (type: article) | Dynamic: `post.coverImage` | `blog/[slug]/page.tsx` |

---

## Detailed Descriptions & Keywords Per Page

### 1. Home (`/{locale}`)
- **Description:** Zexfro connects businesses with verified trade partners across Europe and beyond. Secure, compliant import and export services with end-to-end logistics support.
- **Keywords:** global trade, import export, international trade platform, verified trade partners, European trade, B2B marketplace, trade compliance, logistics solutions, supply chain management, cross-border trade

### 2. About (`/{locale}/about`)
- **Description:** Learn about Zexfro International Limited — our journey since 2018, our commitment to quality, verified trade partnerships, and how we simplify global commerce for businesses worldwide.
- **Keywords:** about Zexfro, international trade company, global trade partner, import export company Bangladesh, verified trade partnerships, Zexfro International Limited, trade company history, B2B trade platform

### 3. Board of Directors (`/{locale}/board-of-directors`)
- **Description:** Meet the experienced leadership team at Zexfro International Limited. Our board of directors brings decades of expertise in international trade, logistics, and business management.
- **Keywords:** Zexfro leadership, board of directors, trade company management, Zexfro team, corporate governance, international trade leaders

### 4. Vision, Mission & Values (`/{locale}/vision-mission-values`)
- **Description:** Discover Zexfro's vision for global trade excellence, our mission to simplify international commerce, and the core values of integrity, innovation, and customer-centricity that drive us.
- **Keywords:** Zexfro vision, company mission, core values, trade excellence, business integrity, global commerce vision, customer-centric trade

### 5. Careers (`/{locale}/careers`)
- **Description:** Explore career opportunities at Zexfro International Limited. Join a growing international trade company that values innovation, integrity, and professional development.
- **Keywords:** Zexfro careers, trade company jobs, international trade jobs, import export careers, logistics jobs Bangladesh, Zexfro job openings, trade industry careers

### 6. FAQ (`/{locale}/faq`)
- **Description:** Find answers to common questions about Zexfro's import and export services, trade compliance, shipping, payment methods, and how to start trading with us.
- **Keywords:** trade FAQ, import export questions, international trade help, shipping FAQ, trade compliance questions, Zexfro help center, global trade support

### 7. Glossary (`/{locale}/glossary`)
- **Description:** Comprehensive glossary of international trade terminology. Learn key terms like Bill of Lading, Incoterms, Letter of Credit, HS Code, FOB, CIF, and more.
- **Keywords:** trade glossary, international trade terms, import export terminology, Incoterms definitions, Bill of Lading, trade definitions, HS code meaning, FOB CIF explained, trade dictionary

### 8. Case Study (`/{locale}/case-study`)
- **Description:** Discover how Zexfro International Limited successfully scaled its import-export operations, achieving 40% growth in distribution network and 35% export revenue contribution.
- **Keywords:** trade case study, import export success, business growth story, distribution network growth, export revenue, Zexfro success

### 9. Contact (`/{locale}/contact`)
- **Description:** Contact Zexfro International Limited for import/export inquiries, trade partnership opportunities, or general questions. Reach us by phone, email, or visit our office in Dhaka.
- **Keywords:** contact Zexfro, trade inquiry, import export contact, business partnership, trade consultation, Zexfro office location

### 10. Payment Methods (`/{locale}/payment-methods`)
- **Description:** Learn about Zexfro International Limited's payment methods. Secure and flexible payment processing including bank transfers and manual verification for international trade transactions.
- **Keywords:** trade payment methods, international payment, secure trade payment, bank transfer trade, import export payment, trade transaction security

### 11. Privacy Policy (`/{locale}/privacy-policy`)
- **Description:** Learn how Zexfro protects your personal information and maintains your privacy. Our commitment to data security and transparency in international trade.
- **Keywords:** privacy policy, data protection, personal information security, trade data privacy, GDPR compliance

### 12. Benefits for Suppliers (`/{locale}/benefits-for-supplier`)
- **Description:** Discover the advantages of partnering with Zexfro as a supplier. Access global markets, secure payments, logistics support, and dedicated account management for your export business.
- **Keywords:** supplier benefits, export partner advantages, global market access, supplier partnership, trade supplier program, secure trade payments, export growth opportunities

### 13. Services (`/{locale}/services`)
- **Description (en):** End-to-end export-import solutions to help your business succeed in global markets
- **Keywords:** trade services, import export services, logistics services, customs clearance, trade compliance, supply chain management, freight forwarding

### 14. Global Service (`/{locale}/global-service`)
- **Description (en):** i18n — from `globalServicePage.pageDescription`
- **Keywords:** global trade services, international sourcing, worldwide import export, cross-border trade, global logistics

### 15. Local Service (`/{locale}/local-service`)
- **Description (en):** i18n — from `localServicePage.pageDescription`
- **Keywords:** local trade services, domestic distribution, local sourcing, Bangladesh trade services, local logistics

### 16. Advantages (`/{locale}/advantages`)
- **Description (en):** i18n — from `advantages.metaDescription`
- **Keywords:** trade advantages, Zexfro benefits, import export advantages, trade partner benefits, global trade platform

### 17. Competitive Advantages (`/{locale}/competitive-advantages`)
- **Description (en):** i18n — from `competitiveAdvantagesPage.pageDescription`
- **Keywords:** competitive advantages, trade partner benefits, why choose Zexfro, trade platform advantages, import export benefits

### 18. Logistic Supply Chain (`/{locale}/logistic-supply-chain`)
- **Description:** Comprehensive logistics and supply chain management solutions from global sourcing to last-mile delivery. International freight, customs brokerage, warehousing, and B2B distribution services.
- **Keywords:** logistics, supply chain management, international freight, customs brokerage, warehousing, last-mile delivery, B2B distribution

### 19. Logistics Support (`/{locale}/logistics-support`)
- **Description (en):** i18n — from `logisticsSupport.metaDescription`
- **Keywords:** logistics support, shipping support, freight management, cargo tracking, delivery logistics, trade logistics

### 20. Resources: Logistics Supply Chain (`/{locale}/resources/logistics-supply-chain`)
- **Description:** Comprehensive resources for logistics and supply chain management, including guides, whitepapers, case studies, and industry insights for international trade.
- **Keywords:** logistics resources, supply chain guides, trade whitepapers, logistics case studies, industry insights, supply chain best practices

### 21. Compliance Standards (`/{locale}/compliance-standards`)
- **Description (en):** i18n — from `complianceStandards.metaDescription`
- **Keywords:** trade compliance, compliance standards, import export regulations, trade certifications, regulatory compliance, quality standards

### 22. Documentation Compliance (`/{locale}/documentation-compliance`)
- **Description (en):** i18n — from `documentationCompliance.metaDescription`
- **Keywords:** trade documentation, compliance documentation, import export documents, customs documentation, trade compliance, shipping documents

### 23. Quality Assurance (`/{locale}/quality-assurance`)
- **Description (en):** i18n — from `qualityAssurance.metaDescription`
- **Keywords:** quality assurance, product quality control, trade quality standards, inspection services, quality certification, product testing

### 24. HS Code (`/{locale}/hs-code`)
- **Description (en):** i18n — from `hsCode.metaDescription`
- **Keywords:** HS code, harmonized system code, customs classification, tariff codes, product classification, import export codes, customs tariff

### 25. Terms & Conditions (`/{locale}/terms-conditions`)
- **Description (en):** i18n — from `termsConditions.metaDescription`
- **Keywords:** terms and conditions, trade terms, service agreement, user agreement, trade platform terms

### 26. Products (`/{locale}/products`)
- **Description:** Browse Zexfro's comprehensive range of import and export products. From electronics and machinery to garments and agricultural goods — connecting businesses across borders.
- **Keywords:** import products, export products, trade product catalog, international goods, wholesale products, B2B product sourcing, import export goods, global product marketplace

### Blog Index (`/{locale}/blog`)
- **Description:** Stay informed with Zexfro's latest articles on international trade, import/export best practices, logistics insights, compliance updates, and global market trends.
- **Keywords:** trade blog, import export insights, international trade news, logistics articles, global trade trends, trade compliance updates

### Blog Post (`/{locale}/blog/{slug}`) — Dynamic
- **Description:** `{post.excerpt}` or fallback `Read {post.title} on the Zexfro blog.`
- **Type:** `article` with `publishedTime` and `modifiedTime`
- **Image:** `post.coverImage`
- **Keywords:** trade blog, international trade, {post.category}

### Product Detail (`/{locale}/products/{slug}`) — Dynamic
- **Description:** `{product.short_description}` or fallback with product name and origin
- **Image:** Product primary image (fetched from API)
- **Keywords:** trade product, import product, export product, product specifications, international trade goods

### Product Category (`/{locale}/products/categories/{slug}`) — Dynamic
- **Description:** `{category.description}` or fallback with category name
- **Keywords:** product category, trade products, import category, export category, product catalog

---

## Sitemap

**File:** `src/app/sitemap.ts` → `/sitemap.xml`

All 27 static routes included, each with 4 locale variants and hreflang alternates. Priority: `1.0` (home) → `0.3` (legal pages).

## Robots

**File:** `src/app/robots.ts` → `/robots.txt`

- **Allow:** `/`
- **Disallow:** `/api/`, `/admin/`, `/_next/`, `/private/`, `/login`
- **Sitemap:** `https://www.zexfrointl.com/sitemap.xml`

---

## Known Issue: Double `| Zexfro` in i18n Titles

Some translation strings already include `| Zexfro` in meta titles. Since `generatePageSEO` appends `| Zexfro` automatically, these produce `... | Zexfro | Zexfro`. Fix by removing `| Zexfro` from these translation keys:

- `advantages.metaTitle`
- `complianceStandards.metaTitle`
- `documentationCompliance.metaTitle`
- `qualityAssurance.metaTitle`
- `hsCode.metaTitle`
- `termsConditions.metaTitle`
- `logisticsSupport.metaTitle`
- `globalServicePage.pageTitle`
- `localServicePage.pageTitle`
- `competitiveAdvantagesPage.pageTitle`
