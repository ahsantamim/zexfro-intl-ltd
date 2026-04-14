# Zexfro - Global Trade Platform

## Project Overview

Zexfro is a modern, professional web platform for global trade, built with **Next.js 16** and **React 19**. The application serves as a company profile and trade facilitation platform, offering services for importers and exporters with features like product listings, blog posts, user registration, contact management, and internationalization support.

### Tech Stack

- **Framework**: Next.js 16.0.7 (App Router)
- **Frontend**: React 19.2.0, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth v5 (beta)
- **Internationalization**: next-intl
- **Email**: Nodemailer (Gmail SMTP)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Storage**: Supabase (for images)

## Project Structure

```
zexfro/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── [locale]/           # Internationalized routes
│   │   ├── api/                # API routes (register, test-email, etc.)
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Root page (redirects to locale)
│   │   ├── robots.ts           # robots.txt generation
│   │   └── sitemap.ts          # sitemap.xml generation
│   ├── components/             # React components
│   │   └── layout/             # Layout components (Header, Footer, etc.)
│   ├── config/                 # Configuration files
│   ├── i18n/                   # Internationalization setup
│   ├── lib/                    # Utility libraries
│   │   └── mail/               # Email services and templates
│   ├── styles/                 # Global styles
│   ├── types/                  # TypeScript type definitions
│   ├── auth.ts                 # NextAuth configuration
│   ├── auth.config.ts          # Auth configuration
│   └── middleware.ts           # Next.js middleware
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Database migrations
├── public/                     # Static assets
├── scripts/                    # Utility scripts
├── docs/                       # Documentation
├── UI_GUIDELINES.md            # Comprehensive UI design guidelines
├── VISUAL_GUIDE.md             # Visual design guide
├── EMAIL_SETUP_GUIDE.md        # Email configuration guide
└── competitve_advantesg.json   # Competitive advantages data
```

## Database Schema

The application uses PostgreSQL with the following models:

- **Product** - Product listings with categories, pricing, and stock status
- **BlogPost** - Blog/content management system
- **Registration** - User registration and approval workflow
- **User** - User accounts with role-based access (user/admin)
- **ContactMessage** - Contact form submissions
- **MailLog** - Email sending logs

## Building and Running

### Prerequisites

- Node.js 20+
- PostgreSQL database
- `.env.local` file (see `.env.example` for required variables)

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database and email credentials
   ```

3. Set up the database:
   ```bash
   npm run db:push       # Push schema to database
   # or
   npm run db:sync       # Generate Prisma client + push schema
   ```

### Development

```bash
npm run dev            # Start development server (localhost:3000)
```

### Build & Production

```bash
npm run build          # Generate Prisma client + build Next.js app
npm start              # Start production server
```

### Database Commands

```bash
npm run db:generate    # Generate Prisma client
npm run db:push        # Push schema changes to database
npm run db:pull        # Pull schema from database
npm run db:studio      # Open Prisma Studio (database GUI)
npm run db:sync        # Generate + push (sync database)
```

### Linting

```bash
npm run lint           # Run ESLint
```

## Development Conventions

### Code Style

- **TypeScript**: Strict mode enabled
- **Path Aliases**: `@/*` maps to `./src/*`
- **Component Files**: `.tsx` extension for React components
- **API Routes**: Located in `src/app/api/`
- **Module Resolution**: bundler mode for ES modules

### UI Guidelines

The project follows detailed UI design guidelines documented in `UI_GUIDELINES.md`:

- **Color Palette**: Primary blue (#0A4D96), navy (#1800ad), green CTA (#0AFF72)
- **Typography**: System font stack with Poppins for hero CTAs
- **Components**: Navigation, hero sections, feature cards, stats, CTAs, footer
- **Animations**: Fade-in, parallax, typewriter effects, count-up animations
- **Responsive Design**: Mobile-first with breakpoints for tablet and desktop

### Internationalization

- Uses `next-intl` for multi-language support
- Routes are structured with `[locale]` parameter
- Configuration in `src/i18n/request.ts`

### Email System

- Configured with Gmail SMTP (see `EMAIL_SETUP_GUIDE.md`)
- Templates in `src/lib/mail/templates.ts`
- API endpoints for testing: `/api/test-email`
- Registration confirmations sent automatically

### Authentication

- NextAuth v5 (beta) for authentication
- Role-based access control (user/admin)
- Configuration in `src/auth.ts` and `src/auth.config.ts`

## Key Features

- 🌍 **Internationalization**: Multi-language support
- 📧 **Email System**: Automated registration confirmations
- 📊 **Admin Dashboard**: User and content management
- 🛡️ **Security**: Form validation (Zod), XSS protection (DOMPurify)
- 🎨 **Modern UI**: Tailwind CSS, shadcn/ui, Framer Motion animations
- 📱 **Responsive**: Mobile-first design
- 🗄️ **Database**: PostgreSQL with Prisma ORM
- 📝 **Blog**: Content management system
- 📦 **Products**: Product catalog with categories and stock tracking
- 🌐 **SEO**: Dynamic sitemap and robots.txt generation

## Environment Variables

See `.env.example` for the full list. Key variables include:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` and `NEXTAUTH_SECRET` - NextAuth configuration
- `SMTP_*` - Gmail SMTP configuration for emails
- `NEXT_PUBLIC_APP_NAME` and `NEXT_PUBLIC_APP_URL` - App configuration

## Deployment

Deployed on **Vercel**. Configuration files:

- `.vercelignore` - Files to exclude from deployment
- `next.config.ts` - Next.js configuration including image domains

Before deploying, ensure all environment variables are set in Vercel dashboard.
