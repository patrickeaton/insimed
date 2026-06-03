# Decision log

Append-only-ish record of notable decisions and *why*. Newest at the bottom.
Correct an entry in place if a decision is later reversed (and note the reversal).

---

### 2026-06-03 — Repo & deploy foundations

- **Monorepo** managed with **pnpm workspaces** (pnpm 9 via Corepack; Node 20).
  Layout: `apps/*` + `packages/*`.
- **SST v3** as the deploy framework (home: `aws`, region `us-east-1`,
  `production` stage protected/retained). Marketing wired as an `sst.aws.StaticSite`.
- **Marketing app** built with **Vite + React 19 + Tailwind v4**. Chosen for
  ecosystem size and low-friction theming. (User picked React + Tailwind v4.)
- **Theming approach:** Tailwind v4 CSS-first design tokens + CSS variables, so
  styling is easy to adjust without touching components. Semantic tokens mapped via
  `@theme inline`; swappable `[data-theme]` palettes.
- **Marketing hosting:** **GitHub Pages**, published by a GitHub Actions workflow on
  push to `main`. Repo is `patrickeaton/insimed` (public). Vite `base` set via
  `BASE_PATH=/insimed/` for the project sub-path. SST/AWS kept as an alternate path.

### 2026-06-03 — Skills & process

- Ported 6 planning/dev skills from `farmshare-partners`, genericized: **no Linear
  / MCP tooling** — skills work out of **committed planning docs in `.claude/plans/`**.
- **Skipped** the `farmshare-worktree` skill (too stack-specific; revisit if the
  repo grows multiple long-lived apps).
- **Planning docs are committed** (not gitignored) so the team can review them.

### 2026-06-03 — Second brain

- Added this persistent knowledge base in `.claude/memory/`, committed to the repo,
  so the project accumulates business/project/decision context across sessions.
