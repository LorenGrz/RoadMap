# AGENTS.md

Single source of truth for humans and AI agents (Codex, Cursor, Claude, others) working on **RoadMap**. If this file and the code disagree, the code wins - fix this file.

## Documentation map (read this instead of the code)

1. `AGENTS.md` (this file) - map, how we work, workflow contract.
2. `.agents/CONTEXT.md` - current stack/architecture snapshot and repo facts.
3. `docs/plans/HANDOFF.md` - current state and how to resume, read first if work is mid-flight.
4. `docs/decisions/` - ADRs: why a non-trivial trade-off was decided the way it was.

## Purpose

This repository tracks my learning path to become a full-stack TypeScript developer.

## Stack

- package.json (pnpm) - scripts: none

## Commands

- `package.json (pnpm) - scripts: none`

## Workflow contract

These rules describe this repo's CURRENT reality, detected by `project-init`'s `adopt.sh` on 2026-10-10 - not an aspiration. If a row says "nothing (convention only)", that rule is not mechanically enforced today.

| Rule | Documented | Enforced by |
|---|---|---|
| Single branch flow - `master` is both base and release branch | this section | nothing (convention only) |
| No consistent branch naming convention observed | this section | nothing (convention only) |
| Direct commits to `master` observed (26 of last 28 commits, no PR/merge-commit flow for most of them) | this section | nothing (convention only) |
| ~7% of the last 28 commit subjects on `master` are Conventional Commits | this section | nothing (convention only) |
| No CI configured | this section | nothing (convention only) |
| Repo allows: squash=true, merge-commit=true, rebase=true; delete-branch-on-merge=false | this section | GitHub repo settings (`gh repo view`) |

Changing any rule above: update this table and every enforcement point in the same change, and record it in `docs/decisions/`.

### Recommended (not enforced yet)
- Branch protection on `master` (required status checks, no force-push).
- CI that runs lint/typecheck/tests on every PR.
- A PR template and/or Conventional Commit enforcement (commit style is inconsistent today).


## Documentation rules

- Any decision with a real trade-off (architecture, a hard-to-reverse library/service choice, data model, security trade-off) gets a new ADR under the ADR directory above.
- When work pauses mid-flight, update `docs/plans/HANDOFF.md` before stopping, not after.
- A change that alters architecture, env vars, commands, or deploy updates `AGENTS.md` and `.agents/CONTEXT.md` in the same change.
- Changing any "Workflow contract" rule updates every enforcement point in the same change, per that section above.
