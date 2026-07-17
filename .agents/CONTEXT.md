# Repository Context

## Purpose

- Personal learning roadmap repository for becoming a full-stack TypeScript developer.
- Tracks exercises, notes, and the learning sequence from JavaScript to React Native.

## Stack

- Current exercises use JavaScript and Node.js.
- Jest is used for testing in `js/hello-javascript`.
- Planned learning stack: JavaScript, Node.js, TypeScript, React, NestJS, Supabase, WebSockets, Next.js, and React Native.

## Project Structure

- `README.md`: main roadmap notes and learning material.
- `js/hello-javascript/`: JavaScript fundamentals and intermediate exercises.
- `js/hello-javascript/Basic/`: basic JavaScript lessons and exercises.
- `js/hello-javascript/Intermediate/`: intermediate JavaScript lessons, DOM examples, async/API work, and Jest tests.
- `.agents/CONTEXT.md`: repository-specific context for agents.

## Package Manager And Scripts

- Root uses `pnpm-lock.yaml` and `pnpm-workspace.yaml`.
- Root `package.json` currently has a `jest` dependency but no scripts.
- `js/hello-javascript/package.json` uses npm lockfile and has `npm test` for Jest.
- `node_modules/` is intentionally ignored and must not be committed.

## Architecture Rules

- Keep exercises grouped by topic or stage.
- Prefer small, focused exercises before framework projects.
- Document learning notes in English when practical.
- Promote mature exercises into dedicated repositories when they become real projects.

## Testing And Verification

- `cd js/hello-javascript && npm test` runs Jest for the JavaScript exercise subproject.
- Verify JavaScript exercises manually with `node` when applicable.
- Verify shell scripts manually in a safe local environment.

## Local Development Services

- No Docker Compose or local backend services detected.

## Agent Notes

- This repository is the central roadmap, not the final home for every project.
- The recommended long-term product track is a Study Tracker / Developer Progress Tracker.
- The public portfolio should later link to mature projects from this roadmap.
- On 2026-07-17, commit `bf83f1e` removed previously tracked `node_modules/` files and added a root `.gitignore`; keep dependency directories untracked.

## Last Reviewed

- 2026-07-17: Updated after dependency cleanup. Inspected root manifests, `js/hello-javascript/package.json`, `.gitignore`, tracked `node_modules` state, and latest commit.
