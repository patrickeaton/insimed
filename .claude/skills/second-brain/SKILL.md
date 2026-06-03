---
name: second-brain
description: Read and maintain the project's persistent knowledge base (the "second brain") in .claude/memory/. Use at the start of work to load context, when the user says to remember/store/capture/note something, asks "what do we know about X", or when a durable business/project/decision fact emerges that should persist across sessions.
---

# Second Brain

A persistent, repo-committed knowledge base in `.claude/memory/`. It lets the
project accumulate context about the business, its projects, and its decisions so
future sessions start informed instead of cold. Start from
[.claude/memory/INDEX.md](../../memory/INDEX.md).

## Always start here

At the start of a task, read `.claude/memory/INDEX.md`, then open the topic files
relevant to the work. Treat stored facts as background context for everything you do.

## Capturing knowledge

Capture a fact when it is **durable** — true beyond this conversation and likely to
matter later: a business fact, a strategic/architectural decision, a project detail,
a domain term, or a resolved/newly-raised open question.

Do **not** capture: transient task state, things the codebase already records (code
is its own source of truth), or speculation.

Procedure:

1. Read `INDEX.md` to find the right home for the fact.
2. Pick the file by category:
   - `business/*` — what InSimEd is (company, audience, programs, brand)
   - `projects/*` — what we're building (one file per project)
   - `decisions/log.md` — why things are the way they are (append, dated)
   - `glossary.md` — domain & methodology terms
   - `open-questions.md` — unknowns (move the fact to its real home once resolved)
3. **Merge, don't duplicate.** If a related fact exists, update it in place. If new
   info contradicts an old fact, correct the old one and note the change.
4. Keep entries atomic and scannable — a sentence or two, not a transcript.
5. Date `decisions/log.md` and `open-questions.md` entries (`YYYY-MM-DD`).
6. If you added a new file or topic, link it in `INDEX.md` and bump its
   "Last updated" date.

## Retrieving knowledge

When asked "what do we know about X" (or you need context to proceed): read
`INDEX.md`, open the relevant files, and answer from them. If the brain has nothing
on it, say so plainly rather than guessing.

## Consolidation

Periodically — or when a file grows long or messy — do a reflective pass: merge
duplicates, fix stale facts, tighten wording, prune the index. A second brain is
only useful if it stays lean and trustworthy.

## Conventions

- Markdown files, committed to the repo (reviewable by the team).
- Prefer many small topic files over one giant file.
- Plain, present-tense prose. Cite a source or date when it adds confidence.
