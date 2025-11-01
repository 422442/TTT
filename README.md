# HM Innovation - Architectural Glass Systems Website

A modern, responsive website for HM Innovation featuring an admin panel with Power BI analytics integration.

## 🚀 Features

- **Modern Landing Page** with golden fluid animation
- **Responsive Design** - Works on all devices
- **Admin Panel** with authentication
- **Power BI Integration** for analytics
- **Full CRUD Operations** for Products, News, Partners, Reviews
- **Dark Theme** with golden accents
- **SEO Optimized**

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.0 (App Router)
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.9
- **UI Components:** Radix UI
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Package Manager:** pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🌐 Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

### Option 2: Manual Deploy

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables (optional)
   - Click "Deploy"

### Option 3: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔐 Admin Panel

- **URL:** `/admin/login`
- **Default Credentials:**
  - Email: `admin@hminnovation.com`
  - Password: `admin123`

**⚠️ Important:** Change admin credentials in production!

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and update values:

```bash
cp .env.example .env.local
```

## 📂 Project Structure

```
code_2/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   │   ├── dashboard/
│   │   ├── analytics/
│   │   ├── products/
│   │   ├── news/
│   │   ├── partners/
│   │   ├── reviews/
│   │   ├── settings/
│   │   └── login/
│   ├── layout.tsx
│   └── page.tsx
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   ├── ui/               # Reusable UI components
│   └── ...               # Section components
├── public/               # Static assets
├── middleware.ts         # Authentication middleware
└── ...
```

## 🎨 Customization

### Update Contact Information

Edit these files:
- `components/contact-section.tsx`
- `components/footer.tsx`
- `app/admin/settings/page.tsx`

### Update Partner Logos

Place logos in `public/images/partners/` directory.

### Update Power BI Report

1. Get your Power BI embed URL
2. Update in `app/admin/analytics/page.tsx`

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔒 Security Features

- Cookie-based authentication
- Protected admin routes via middleware
- Security headers configured
- CSRF protection
- XSS protection

## 🚀 Performance Optimizations

- Image optimization enabled
- Code splitting
- Lazy loading
- CSS minification
- Gzip compression
- Standalone output for faster cold starts

## 📄 License

Private - All rights reserved by HM Innovation

## 👨‍💻 Support

For support, email: ishaankhanna@heritagemarketing.co.in

## 📞 Contact

- **Address:** SCO-15, Phase-9, Mohali, Punjab, India
- **Phone:** +91-9872711088, +91-9815011088
- **Email:** ishaankhanna@heritagemarketing.co.in

---

Built with ❤️ by HM Innovation Team
