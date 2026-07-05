# Navina Ganapathy Amuthan - Personal Site

Premium personal brand site. Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Update content

All content lives in `/data`. Components never need touching for content changes:

- `data/personal.ts` - name, contact, badges, positioning
- `data/experience.ts` - timeline entries (challenge / actions / impact / lesson)
- `data/projects.ts` - projects, flagship flag on IGNITRIX
- `data/writing.ts` - article cards (add new objects for new posts)
- `data/awards.ts` - awards with hover stories
- `data/skills.ts`, `data/testimonials.ts`, `data/thinking.ts`, `data/productThinking.ts`

Replace `public/resume.pdf` with your real resume. Add your headshot to `/public` and swap the placeholder in `components/Hero.tsx`.

## Push to GitHub (your repo)

```bash
cd profile
git init
git add .
git commit -m "Personal brand site: Next.js, Tailwind, Framer Motion"
git branch -M main
git remote add origin https://github.com/navinaamuthan/profile.git
git push -u origin main --force
```

(`--force` only if the repo already has old content you want replaced. Drop it otherwise.)

## Deploy on Vercel

1. vercel.com -> Add New -> Project -> import `navinaamuthan/profile`
2. Framework preset: Next.js (auto-detected). No env vars needed.
3. Deploy. Done.

After deploy, update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` if you attach a custom domain.

## Built-in extras

- Recruiter Mode: "Press if you're hiring" button in the hero opens a 30-second summary
- Recruiter Quick Scan strip below the hero
- Interactive experience timeline (click to expand)
- Award cards flip to behind-the-scenes stories on hover
- Konami code (up up down down left right left right b a) unlocks developer notes in the footer
- Signature draws itself at the contact section
- Scroll progress bar, animated counters, reduced-motion support, WCAG-friendly focus states

## Analytics (optional, when ready)

- Vercel Analytics: `npm i @vercel/analytics`, add `<Analytics />` in `app/layout.tsx`
- Google Analytics / Microsoft Clarity: add their script tags in `app/layout.tsx`
