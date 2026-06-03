---
name: do-work
description: Drive a task end-to-end: triage type, plan, implement, validate, and commit. Use when the user invokes /do-work or asks the agent to take a task from intent to committed change.
---

# do-work

End-to-end task driver. Runs the loop: **triage → plan → implement → validate → commit**.

## Workflow

1. **Triage** — ask: *is this a bug / small product issue, or a feature / enhancement?*

   - **Bug or small product issue**: ask the user to describe the bug, or point you to a note/planning doc in `.claude/plans/` if one exists. Gather enough detail to reproduce or locate it, then proceed to **Plan**.
   - **Feature or enhancement (significant work)**: ask if the user has an existing PRD and plan in `.claude/plans/`.
     - **No PRD, no plan** → encourage `/write-a-prd` first. Explain: writing a PRD refines the work, surfaces user stories, and the follow-on `/prd-to-plan` produces tracer-bullet phases that guide AI-assisted implementation.
     - **PRD but no plan** → encourage `/prd-to-plan` to break the PRD into phases.
     - **PRD and plan** → proceed to **Plan** using them.
     - **User declines** → proceed, but remind them once that a PRD + plan substantially improves AI-assisted development quality. Don't nag again.

2. **Plan** — gather context, draft approach, get user agreement before implementing.
   - **Has a plan file** → follow it; flag any deviation.
   - **Small** (single file, <~50 LOC, no design choices) → state the approach in one sentence and the scope boundary, confirm, proceed.
   - **Non-trivial without a plan file** → draft a short approach inline (goal, scope boundary, anchor) and confirm with the user.
   - **Insufficient context** (the planning doc is thin, no PRD/plan, or the problem/solution isn't clear) → run `/grill-me` to surface the underlying issue and solution before drafting an approach. Don't guess — grill first.

3. **Implement** — execute the plan. Keep changes scoped; don't refactor adjacent code unless required.

4. **Validate** — before declaring done:
   - Run type checks / linters relevant to changed packages
   - Run tests covering the change
   - For UI changes, exercise the feature in a browser
   - Report what was checked and what wasn't

5. **Commit** — only after validation passes and the user confirms. Write a focused commit message. Do not push or open a PR unless asked.

## Rules

- Always start with triage — don't assume bug vs feature.
- Only encourage PRD/plan creation **once** per task. Respect a "no" and move on.
- Never commit without explicit user approval.
- If validation fails, fix root cause; don't bypass hooks (`--no-verify`) or weaken tests.
- If scope grows mid-task, pause and re-confirm rather than expanding silently.
