# shadcn-starter-homework

Responsive landing page สำหรับ **Flowly** — สร้างจาก Figma design ด้วย Next.js 15, Tailwind CSS v4 และ TypeScript

## Tech Stack

| เทคโนโลยี | เวอร์ชัน |
|---|---|
| Next.js (App Router) | 16.x |
| React | 19.x |
| Tailwind CSS | v4 |
| TypeScript | 5.x |
| Font | Inter (Google Fonts) |

## โครงสร้างโปรเจกต์

```
web/
├── app/
│   ├── globals.css          # Design tokens (สี, radius, font) จาก Figma
│   ├── layout.tsx           # Root layout + Inter font
│   └── page.tsx             # หน้าหลัก — compose ทุก section
├── components/
│   ├── Navbar.tsx           # Sticky navbar + hamburger menu (mobile)
│   ├── HeroSection.tsx      # Hero 2-col layout + dashboard image
│   ├── FeaturesSection.tsx  # 4-col feature grid
│   ├── TestimonialsSection.tsx  # Side-by-side testimonials
│   ├── PricingSection.tsx   # Monthly/Annually toggle + 3 pricing cards
│   ├── FaqSection.tsx       # Accordion FAQ + Contact CTA
│   └── Footer.tsx           # Footer + email subscribe
└── public/
    └── assets/
        ├── logo.png
        ├── avatar.png
        └── hero.png
```

## Sections ในหน้าเว็บ

1. **Navbar** — Logo, nav links, Get started button, hamburger menu บน mobile
2. **Hero** — Heading 2 คอลัมน์, subtitle, CTA buttons, hero image
3. **Features** — "Why choose Flowly?" — 4 feature cards (Workflow automation, Collaboration, Insights, Integration)
4. **Testimonials** — 2 testimonial quotes แบบ side-by-side
5. **Pricing** — Toggle Monthly/Annually, 3 แผน (Starter/Free, Pro/$29, Enterprise/$129)
6. **FAQ** — Accordion 5 ข้อ + "Still have questions?" CTA card
7. **Footer** — Nav links, email subscribe, copyright

## Design Source

Figma: [AI-Class — Desktop Landing Page](https://www.figma.com/design/NDKu50eAf6g0YNmPJu0Rmw/AI-Class?node-id=5233-17721)

Design tokens ใน `globals.css` mirror จาก Figma ตรงๆ:

```css
--primary: #171717;
--muted-foreground: #737373;
--border: #e5e5e5;
--background: #ffffff;
```

## วิธีรัน

```bash
# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

## Responsive Breakpoints

| Breakpoint | ขนาดหน้าจอ |
|---|---|
| Mobile | < 640px |
| Tablet (sm) | ≥ 640px |
| Desktop (md) | ≥ 768px |
| Wide (lg) | ≥ 1024px |
