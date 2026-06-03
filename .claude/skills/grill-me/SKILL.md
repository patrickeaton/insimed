---
name: grill-me
description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions "grill me".
---

## Step 0 — Optional: pull in planning-doc context

Before grilling, ask the user: **"Is there a planning doc (pitch, PRD, or plan) tied to this?"**

- If **no** (or they skip): proceed straight to the interview.
- If **yes**: ask for the file. If they don't know it, list the Markdown files in `.claude/plans/` and present them so the user can pick one. Once identified, read it and use that context to inform your questions — cite specific decisions, user stories, or open questions already captured there rather than re-asking.

Keep this step lightweight; don't block the interview if no planning doc exists or the user declines.

## Interview

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time.

If a question can be answered by exploring the codebase, explore the codebase instead.

## After the interview — optional handoff to write-a-prd

When the interview reaches a natural stopping point AND the topic is a substantive change to the InSim codebase (a new feature, meaningful refactor, schema change, new integration, etc.), ask the user **once**:

> "Want to turn this into a PRD? The grill-me context will carry over."

Off-ramp: if the user declines, says "not now," or the topic isn't a code/product change (process discussion, hiring, scoping a pitch, etc.), do **not** ask — just end the session. Never ask twice.

If the user accepts, invoke the `write-a-prd` skill. The grill-me transcript is already in the conversation, so that skill will pick it up automatically.
