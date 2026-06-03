---
name: create-a-pitch
description: Guides the user through drafting a Shape Up pitch (problem, appetite, solution, rabbit holes, no-gos) and saves it as a planning doc in .claude/plans/ with status "shaping". Use when the user wants to draft a pitch, shape a new piece of work, or mentions "create-a-pitch".
---

# Create a Pitch (Shape Up Pitch → Planning Doc)

Walk the user through the five Shape Up pitch components one at a time. For each: show the definition, collect their input (any level of detail), draft the content, and get approval before moving on. Only after the full pitch is accepted do you save it as a planning doc in `.claude/plans/`.

## Before you start: aim for an MLP

Before the first component, briefly coach the user to shape this pitch around a **Minimum Lovable Product (MLP)** — the smallest version that people will genuinely love, not just tolerate. Keep scope tight enough to ship within the appetite while still delivering something worth using. Reference: https://www.aha.io/roadmapping/guide/plans/what-is-a-minimum-lovable-product

Keep this short — one or two sentences so the user has MLP framing in mind as they describe the problem and solution. Revisit the MLP lens explicitly when drafting **Solution** and **No-gos**.

## Workflow

For each of the five components below, in order:

1. Present the **definition block** (see below) so the user knows what's expected.
2. Ask the user for their input — they may give a rough list, a few ideas, or detailed prose.
3. **Verbosity check:** If the user's input feels long-winded or over-detailed for the component, gently remind them: *"Shape Up pitches are meant to be tight and scannable — want to trim this yourself, or should I draft a tighter version for you to review?"* Use your best judgement — there is no specific length limit, just the question "is this scannable?" If they opt for self-edit, echo their original content back in a fenced code block so they can copy, edit, and resubmit, then go back to step 2. If they opt for your rewrite, proceed to step 4.
4. Draft polished content for that component based on their input.
5. Show the draft and ask for approval or edits. If the draft still reads long, flag it and offer another tightening pass. Iterate until they approve.
6. Move to the next component.

After all five are approved:

1. Present the **full draft pitch** in a single message for final review.
2. On acceptance, save the pitch as a planning doc (see "Saving the pitch").

Do not write the file until the user has approved the full assembled pitch.

## The five components

### 1. Problem

> The raw idea, use case, or thing we've seen that motivates work. State the specific problem, who has it, and why it matters now. One or two short paragraphs. Concrete beats abstract.

### 2. Appetite

> How much time we want to spend. Appetite is a constraint on the solution, not an estimate. Frame it as **big batch** (one full cycle) or **small batch** (a few days to a week). One sentence.

**Set your cycle length.** Shape Up's default cycle is 6 weeks; many teams run shorter (2–3 week) cycles. Use whatever your team has agreed on — if none is set yet, assume one cycle ≈ a few weeks and note the assumption.

**Scope check:** If the user's suggested appetite exceeds one cycle, prompt them to consider reducing scope so the pitch fits within a single cycle. Frame it around the MLP lens (see top of this skill) — what is the smallest lovable version?

If the user declines to reduce scope, accept their appetite as-is, but tell them: *"Plan to raise this when presenting the pitch — the goal in discussion should be to carve the pitch down to a minimum lovable project."* Then continue.

### 3. Solution

> The core elements of the solution, shaped at the right level of abstraction — rough enough to leave room for the builders, concrete enough that everyone understands what we're building. Describe the key flows or components. Fat-marker sketches in words. Avoid UI minutiae.

**Remind the user:** Don't design *how* the builders should build the solution — describe *what* the solution should do. High-level ideas framed as possibilities are welcome (e.g. "maybe this… maybe that…"); prescriptive implementation details are not. Leave room for the team to figure out the how.

**Sketches (optional but encouraged):** Shape Up pitches often include hand-drawn artifacts — **breadboards** (flows as connected components with affordances) and **fat-marker sketches** (rough UI at low fidelity, deliberately imprecise). Ask the user if they have any breadboards, fat-marker sketches, flow diagrams, or other visuals they'd like to include.

Accept:

- **Publicly-accessible URLs** (hosted images, Figma, Excalidraw, Miro, Loom, etc.) — embed as markdown images or links in the Solution section.
- **Local image files** — copy or reference them alongside the planning doc and link them with a relative markdown path.
- **A description in words** if they'd rather you describe the sketch.

If they decline, move on — sketches are not required.

### 4. Rabbit holes

> Specific things that could sink the project — technical traps, scope creep risks, ambiguous areas — and how we're avoiding them. Bullet list of "risk → how we dodge it".

### 5. No-gos

> Things explicitly out of scope. What we are deliberately *not* doing in this pitch, to keep the appetite honest. Bullet list.

## Saving the pitch

Once the user approves the full pitch:

1. Derive a short kebab-case slug from the problem (confirm the title with the user if unclear).
2. Create `.claude/plans/` if it doesn't exist. Plans are committed to the repo so they can be reviewed.
3. Write the pitch to `.claude/plans/<slug>-pitch.md` using the template below.
4. Report the file path back to the user.

<pitch-template>
# Pitch: <Title>

> Status: Shaping

## Problem

...

## Appetite

...

## Solution

...

## Rabbit holes

- ...

## No-gos

- ...
</pitch-template>

Write markdown content directly — use real newlines, not `\n` escapes.

**Implicit approval:** Acceptance of the full assembled pitch counts as approval to write the planning doc. Within this skill only, do not stop to re-confirm the file write — save the pitch and report the result. (Tool-level permission prompts from the harness are separate and still apply.)

## Notes

- If the user gives sparse input for a component, draft something reasonable and flag assumptions explicitly so they can correct them.
- Never skip the approval step for an individual component, and never skip the final full-pitch approval before saving the doc.
- Keep the drafted pitch tight. Shape Up pitches are meant to be scannable.
