# InSimEd — Company Context

> Extracted from the live site **https://www.insimeducation.com/** (a Wix site)
> on 2026-06-03. Source of truth for marketing copy, brand, and positioning.

## Identity

- **Name:** Industry Simulation Education
- **Short name / brand:** InSimEd
- **Tagline:** "Real-World Industry Simulation Competitions, Events, and Learning
  Opportunities for Students"
- **Contact:** contact@insimeducation.com
- **Primary CTA:** "Register Now"
- **Copyright:** © 2024 Industry Simulation Education

## Mission

> "We provide students a unique opportunity to develop their academic and
> business skills while fostering and igniting career aspirations, through
> unparalleled industry simulation events."

Students participate in industry simulation competitions where they tackle
real-world scenarios in team-based formats, developing both technical and
business competencies.

## Programs

| Level             | Offering                  | Status      | Notes |
| ----------------- | ------------------------- | ----------- | ----- |
| High School       | Space Design Competitions | Available   | High-tempo competitions designed to challenge students and prepare them for their futures. Scholarship opportunities + access to previous competition work. |
| Middle School     | Workshops / team activities | Coming Soon | Real-world industry scenarios. |
| Elementary School | Small-group competitions  | Coming Soon | For young achievers. |

The flagship event is the **SpaceSet International Finals** (referenced in a
2019 testimonial), aligning with the space-design / STEM theme.

## Audience

Students (elementary → high school), plus educators and parents.

## Value propositions

- Real-world industry scenarios (not textbook exercises)
- Team-based learning
- Career aspiration / exposure
- Scholarship opportunities
- Access to previous competition resources

## Testimonial

> "I've never seen my daughter so engaged and excited to be learning. What an
> opportunity for her!"
> — Parent, 2019 SpaceSet International Finals

## Brand & visual style

Aesthetic: corporate-yet-educational, STEM / space-forward, clean and modern.

### Color palette (extracted from the live Wix theme)

| Role                 | Hex       | RGB           | Notes |
| -------------------- | --------- | ------------- | ----- |
| Primary accent       | `#917151` | 145, 113, 81  | Warm tan / bronze |
| Primary accent dark  | `#6e5640` | —             | Hover / depth |
| Highlight gold       | `#f2c682` | 242, 198, 130 | Eyebrows, highlights |
| Soft gold            | `#f8daac` | 248, 218, 172 | — |
| Deep "space" navy    | `#0a151c` | 10, 21, 28    | Dark sections / contrast bg |
| Ink (primary text)   | `#2d2d2d` | 45, 45, 45    | Body text |
| Slate (muted text)   | `#575757` | 87, 87, 87    | Secondary text |
| Mist                 | `#ababab` | 171, 171, 171 | Borders / disabled |
| Paper                | `#ffffff` | 255, 255, 255 | Background |

### Typography

- **Display / headings:** Playfair Display (serif)
- **Body / UI:** Montserrat (sans-serif)
- Secondary faces seen on the live site: Avenir, DIN Next, Futura, Questrial.

### Imagery themes

Space-focused (satellites, sun, nebula), students in academic/scientific
settings, minimalist initials-based logo.

## How these tokens map into the codebase

The palette and fonts above are encoded as design tokens in
[`apps/marketing/src/styles/theme.css`](../apps/marketing/src/styles/theme.css).
Components reference **semantic** tokens (`bg-primary`, `text-muted`,
`bg-contrast`...), so re-theming is a matter of editing the `--c-*` variables —
see the `[data-theme="space"]` example for an alternate palette.
