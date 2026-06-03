# Brand & visual identity

Aesthetic: **corporate-yet-educational, STEM / space-forward**, clean and modern.
Imagery themes: space (satellites, sun, nebula), students in academic/scientific
settings; minimalist initials-based logo.

## Color palette (extracted from the live Wix theme)

| Role                | Hex       | Notes |
| ------------------- | --------- | ----- |
| Primary accent      | `#917151` | Warm tan / bronze |
| Primary accent dark | `#6e5640` | Hover / depth |
| Highlight gold      | `#f2c682` | Eyebrows, highlights |
| Soft gold           | `#f8daac` | — |
| Deep "space" navy   | `#0a151c` | Dark sections / contrast bg |
| Ink (primary text)  | `#2d2d2d` | Body text |
| Slate (muted text)  | `#575757` | Secondary text |
| Paper               | `#ffffff` | Background |

## Typography

- **Display / headings:** Playfair Display (serif)
- **Body / UI:** Montserrat (sans-serif)

## In the codebase

These tokens are implemented as swappable CSS variables in
`apps/marketing/src/styles/theme.css` (semantic tokens like `--c-primary`,
`--c-contrast`). Re-theming = editing those variables; an alternate dark "space"
palette ships as `[data-theme="space"]`.
