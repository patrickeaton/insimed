# InSim

Monorepo for **Industry Simulation Education (InSimEd)**, deployed with
[SST v3](https://sst.dev) on AWS.

## Layout

```
insim/
├── apps/
│   └── marketing/        # Vite + React + Tailwind v4 marketing site
├── packages/             # shared packages (added as the platform grows)
├── docs/
│   └── company-context.md  # brand, copy, and positioning reference
└── sst.config.ts         # SST app — deploys the marketing site as a StaticSite
```

## Prerequisites

- Node 20+ (`.nvmrc` pins 20)
- pnpm 9 (`corepack enable && corepack prepare pnpm@9.15.0 --activate`)
- AWS credentials configured for SST deploys

## Getting started

```bash
pnpm install

# Run the marketing site locally (plain Vite dev server)
pnpm marketing:dev

# Or run the full SST dev environment
pnpm dev
```

## Deploy

### GitHub Pages (marketing site)

Every push to `main` builds the marketing site and publishes it to GitHub Pages
via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).
The project site is served at **https://patrickeaton.github.io/insimed/** — the
workflow sets `BASE_PATH=/insimed/` so asset URLs resolve under that sub-path.
Pages source must be set to **GitHub Actions** (Settings → Pages).

### SST (AWS)

```bash
pnpm deploy              # default/personal stage
pnpm deploy:prod         # production stage
```

## Theming

Styling is driven by design tokens in
[`apps/marketing/src/styles/theme.css`](apps/marketing/src/styles/theme.css).
Components only reference semantic Tailwind utilities (`bg-primary`,
`text-muted`, `bg-contrast`, `font-display`, …), so the whole site can be
re-skinned by editing CSS variables — no component changes. An alternate dark
"space" palette ships as a `[data-theme="space"]` example, toggled live by the
header theme switch.
