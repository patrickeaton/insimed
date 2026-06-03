---
name: write-a-prd
description: Draft a PRD (problem, solution, user stories, implementation decisions, out-of-scope) and save it to .claude/plans/. Use when the user wants to create a PRD, or as a follow-up to a grill-me session about a substantive code change.
---

This skill will be invoked when the user wants to create a PRD. You should go through the steps below. You may skip steps if you don't consider them necessary.

## Step 0 — Check for prior context

Before asking anything, check the conversation for context already gathered (especially from a prior `grill-me` session, an existing planning doc in `.claude/plans/`, or earlier exploration in this conversation).

- **If there's enough context to draft the PRD** (you can plausibly fill Problem Statement, Solution, a meaningful list of User Stories, and key Implementation Decisions from what's already been discussed): summarize what you have in 3–5 bullets and ask:
  > "I have enough to draft a PRD from our conversation. Want me to draft it now, or is there anything you'd like to add or change first?"
  - If the user says "draft it" → skip to step 4.
  - If the user has additions → incorporate them, then go to step 4.
  - **Off-ramp:** if the user says "not now" or wants to stop, end cleanly without writing a file.

- **If there's partial context but gaps** (e.g. solution is clear but user stories or scope are thin): list the specific gaps and ask only about those. Don't re-grill on things already settled.

- **If there's no prior context**: proceed to step 1.

## Steps

1. Ask the user for a long, detailed description of the problem they want to solve and any potential ideas for solutions.

2. Explore the repo to verify their assertions and understand the current state of the codebase.

3. Interview the user relentlessly about every aspect of this plan until you reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. **Skip this step if a `grill-me` session already covered the design tree in this conversation.**

4. Once you have a complete understanding of the problem and solution, use the template below to write the PRD. The PRD should be written to `.claude/plans/<prd-name>.md` (committed to the repo so it can be reviewed).

<prd-template>

## Problem Statement

The problem that the user is facing, from the user's perspective.

## Solution

The solution to the problem, from the user's perspective.

## User Stories

A LONG, numbered list of user stories. Each user story should be in the format of:

1. As an <actor>, I want a <feature>, so that <benefit>

<user-story-example>
1. As a mobile bank customer, I want to see balance on my accounts, so that I can make better informed decisions about my spending
</user-story-example>

This list of user stories should be extremely extensive and cover all aspects of the feature.

## Implementation Decisions

A list of implementation decisions that were made. This can include:

- The modules that will be built/modified
- The interfaces of those modules that will be modified
- Technical clarifications from the developer
- Architectural decisions
- Schema changes
- API contracts
- Specific interactions

Do NOT include specific file paths or code snippets. They may end up being outdated very quickly.

## Out of Scope

A description of the things that are out of scope for this PRD.

## Further Notes

Any further notes about the feature.

</prd-template>

## Step 5 — After the PRD is written, optional handoff to prd-to-plan

Once the PRD file is saved and the user has accepted it, ask **once**:

> "PRD saved. Want to break it into a phased implementation plan with `prd-to-plan`?"

Off-ramp: if the user declines or says "not now," end cleanly. Never ask twice.

If the user accepts, invoke the `prd-to-plan` skill. The PRD is in context (and on disk), so that skill will pick it up automatically.
