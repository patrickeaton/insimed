# InSim

Monorepo for **Industry Simulation Education (InSimEd)** — real-world industry
simulation competitions, events, and learning opportunities for students.
Product/brand context lives in [docs/company-context.md](docs/company-context.md).

Managed with pnpm workspaces and deployed with SST v3 (AWS).

## Second brain (read this first)

This project keeps a committed knowledge base in `.claude/memory/` — the "second
brain." **At the start of a session, read [`.claude/memory/INDEX.md`](.claude/memory/INDEX.md)**
to load business, project, and decision context. As durable facts emerge while
building, capture them there so the project learns over time. See the
`second-brain` skill for how to read and update it.

## Packages

- `apps/marketing` — Vite + React 19 + Tailwind v4 marketing site. Styling is
  driven by swappable CSS-variable design tokens in `src/styles/theme.css`.
- `packages/` — shared packages (added as the platform grows).

## Deploys

- **Marketing site → GitHub Pages**: every push to `main` builds and publishes
  via `.github/workflows/deploy-pages.yml` (served at
  https://patrickeaton.github.io/insimed/).
- **SST → AWS**: `pnpm deploy` / `pnpm deploy:prod`.

## Dev ergonomics

- **Planning docs** (pitches, PRDs, plans) live in `.claude/plans/` and are
  **committed** so they can be reviewed. There is no external issue tracker —
  the skills work out of these docs.
- The `.claude/skills/` directory is committed — skills are a team artifact.
- No GraphQL codegen, no Linear/MCP tooling — skills are tool-agnostic and
  operate out of the repo and its planning docs.

## Skills

Available in `.claude/skills/` (chained workflow):

`create-a-pitch` → `grill-me` → `write-a-prd` → `prd-to-plan` → `do-work`,
plus `write-a-skill` for authoring new skills and `second-brain` for the
persistent knowledge base in `.claude/memory/`.
