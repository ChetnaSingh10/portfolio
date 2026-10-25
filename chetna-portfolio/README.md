# Chetna Singh — Portfolio

Next.js 14 portfolio in a cute pink pixel style: "loading cute mode" intro, retro window cards (.exe / .sys), typing role line, and a working contact form.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit your content

Everything lives in `lib/content.ts` (name, links, projects, experience, skills, certifications).
Replace the placeholder GitHub and LinkedIn URLs there, and add project links (marked `isTodo`).
Roles in the hero and the About text are also in `lib/content.ts` (`ROLES`, `ABOUT`).

## Colours

The palette is the CSS variables at the top of `app/globals.css` (and the matching names in `tailwind.config.js`).

## Contact form

Needs Supabase + Resend (+ optional Upstash). Copy `.env.example` to `.env.local` and follow `BACKEND_SETUP.md`. Set `NEXT_PUBLIC_SITE_URL` to your live URL when you deploy.
