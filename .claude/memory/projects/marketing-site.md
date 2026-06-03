# Project: Marketing site

The first piece of the InSim platform — a marketing site for InSimEd.

- **Location:** `apps/marketing/`
- **Stack:** Vite 6 + React 19 + TypeScript + Tailwind v4
- **Theming:** CSS-variable design tokens in `src/styles/theme.css`; components use
  semantic utilities (`bg-primary`, `text-muted`, `bg-contrast`, `font-display`) so
  the whole site re-skins by editing variables. Ships a default + dark "space"
  palette, toggled live in the header.
- **Content:** data-driven from `src/content/site.ts` (copy sourced from the live
  insimeducation.com site).
- **Deploy:** GitHub Pages on every push to `main` (served at
  https://patrickeaton.github.io/insimed/). Also wired for SST `StaticSite` → AWS
  as an alternate path.

## Status (2026-06-03)

- Live single-page site: Header, Hero, What We Do, Programs, Why, Testimonial, CTA,
  Footer. Building and deploying successfully.

## Known follow-ups

- Other pages referenced in the old site nav not yet built: Our Team, Volunteer,
  Supporters, Scholarship, Events.
- Custom domain not yet pointed (still on Wix).
