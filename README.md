# Ortho-pedi — NewWay Orthodontic

A clean, modern, single-page website for **NewWay – Centre for Craniofacial Pain and Orthodontia**, a specialist dental & orthodontic clinic in Chandigarh and Mohali.

Built with **Next.js (App Router)** and **Tailwind CSS v4**. Fully responsive, SEO-friendly, and optimized for turning visitors into booked appointments.

> _Changing Lives One Smile At A Time!_

---

## ✨ Features

| Section | What it does |
| --- | --- |
| **Hero** | Clinic tagline, key highlights, click-to-call & WhatsApp CTAs, and a live stats strip |
| **About** | Clinic story, specialist credentials, and both clinic locations |
| **Services** | 9 treatments — Braces, Invisalign, Teeth Whitening, Dental Implants, Pediatric Dentistry, Root Canal, Veneers, Crowns & Bridges, Emergency Care |
| **Why NewWay** | Trust factors (Black Diamond Invisalign provider, PGIMER/AIIMS-trained doctors, etc.) |
| **Doctors** | Profile cards with names, qualifications, roles, and bios |
| **Before & After Gallery** | Interactive drag-to-compare slider for each case |
| **Testimonials** | Patient reviews with star ratings |
| **Contact** | Clinic hours, addresses, phone, email, and an embedded Google Map |

**Always-available contact:** floating WhatsApp button, click-to-call, and `mailto:` links throughout the page.

---

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- `next/image` for optimized images · `next/font` (Manrope)

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the codebase
```

---

## 📁 Project Structure

```
adi/
├── app/
│   ├── layout.tsx        # Root layout, metadata & fonts
│   ├── page.tsx          # Home page — composes all sections
│   └── globals.css       # Tailwind theme & brand colors
├── components/           # Navbar, Hero, About, Services, Doctors,
│                         # Gallery, Testimonials, Contact, Footer, etc.
├── lib/
│   └── data.ts           # All clinic content (services, doctors,
│                         # testimonials, contact details)
└── next.config.ts        # Image remote patterns (Unsplash)
```

## ✏️ Editing Content

All text, treatments, doctors, testimonials, and contact details live in a **single file** — [`lib/data.ts`](lib/data.ts). Update the clinic's real photos, phone numbers, and copy there; no component changes needed.

> **Note:** Doctor photos, testimonial portraits, and before/after images currently use royalty-free stock placeholders from Unsplash. Swap the image URLs in `lib/data.ts` with the clinic's real photos before going live.

---

## ☁️ Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new). Import this repository, and Vercel auto-detects the Next.js settings — no configuration needed.

---

_Built for NewWay Orthodontic · Chandigarh & Mohali_
