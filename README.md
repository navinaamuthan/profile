# Navina Ganapathy Amuthan - Personal Site

Personal site. Next.js 14 (App Router), TypeScript, TailwindCSS. No client-side JS beyond what Next ships; the whole page is statically rendered.

The previous, more animated version of the site lives on the `old-ui` branch.

## Run locally

```bash
npm install
npm run dev
```

## Update content

All content lives in `/data`. Components never need touching for content changes:

- `data/personal.ts` - name, contact, intro paragraphs, work authorisation
- `data/experience.ts` - one entry per role (company / role / period / summary)
- `data/projects.ts` - projects; `flagship`/`featured` control which get the full write-up
- `data/writing.ts` - articles (add new objects for new posts)
- `data/awards.ts` - recognition list
- `data/skills.ts` - skill groups

Replace `public/resume.pdf` to update the CV link, and `public/img.jpg` for the photo.

## Deploy

Pushing to `main` deploys via Vercel. If a custom domain is attached later, update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.

## Analytics (optional, when ready)

- Vercel Analytics: `npm i @vercel/analytics`, add `<Analytics />` in `app/layout.tsx`
- Google Analytics / Microsoft Clarity: add their script tags in `app/layout.tsx`
