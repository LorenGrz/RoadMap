# RoadMap: Full-Stack TypeScript Developer

This repository tracks my learning path to become a full-stack TypeScript developer.

The path is progressive:

```text
JavaScript -> Node.js -> TypeScript -> React -> NestJS -> Supabase + WebSockets -> Next.js -> React Native
```

The goal is to build real projects while improving fundamentals, architecture, testing, documentation, and English technical communication.

## Current Focus

- JavaScript fundamentals.
- Shell and terminal practice.
- Small exercises committed consistently.
- Building habits around Git, GitHub, and documentation.

## Repository Structure

```text
ejercicios/
  js/          Older JavaScript practice files
  exercises/   Older exercise copies
js/
  hello-javascript/  Fork of mouredev/hello-javascript for course work
shell/
  scripting/   Shell scripting exercises
```

`js/hello-javascript` is tracked as a Git submodule. After cloning this repository, initialize it with:

```bash
git submodule update --init --recursive
```

## Learning Principles

- Learn fundamentals before frameworks.
- Build small projects before large projects.
- Rebuild the same product idea across different technologies.
- Prefer official documentation as the main source of truth.
- Use tests, linting, type checking, and clean architecture as early habits.
- Write short explanations in English for projects and decisions.

## Roadmap

### 1. JavaScript

Focus on language fundamentals, browser basics, async code, arrays, objects, modules, and DOM events.

Practice:

- CLI calculator.
- Todo list with local storage.
- Small quiz app.
- JSON data transformer.

### 2. Node.js

Focus on backend fundamentals outside the browser: npm, files, environment variables, HTTP, REST APIs, middleware, logging, and error handling.

Practice:

- CLI task manager saved to JSON.
- Notes API.
- File organizer script.
- URL shortener API.

### 3. TypeScript

Focus on safer JavaScript for scalable applications: strict configuration, unions, generics, utility types, DTOs, API response types, and typed errors.

Practice:

- Rewrite the Node.js API in TypeScript.
- Build a typed CLI app.
- Create shared domain types.

### 4. React

Focus on scalable user interfaces: components, props, state, events, lists, forms, custom hooks, API clients, and accessibility.

Practice:

- React task dashboard.
- Project management board.
- Study tracker interface.
- Portfolio UI prototype.

### 5. NestJS

Focus on structured backend applications with modules, controllers, services, DTOs, validation, dependency injection, authentication, repositories, databases, migrations, and tests.

Practice:

- Rebuild the task manager API with NestJS.
- Add users, authentication, projects, roles, and permissions.
- Add PostgreSQL with migrations.

### 6. Supabase And WebSockets

Focus on backend services and realtime communication: Supabase Auth, PostgreSQL, Row Level Security, Storage, edge functions, realtime subscriptions, WebSocket fundamentals, event-driven APIs, presence, notifications, and chat-style updates.

Learn the difference:

- Use Supabase when you want a managed PostgreSQL backend with authentication, database access, file storage, and realtime features without building every backend feature yourself.
- Use a custom NestJS backend when you need full control over business logic, complex permissions, integrations, background jobs, or a backend architecture you own completely.
- Use WebSockets when the application needs server-to-client updates without waiting for refreshes or repeated polling.
- Prefer normal REST or server actions when the user only needs request/response flows like loading a page, submitting a form, or saving settings.
- Supabase Realtime can cover many realtime use cases, but custom WebSockets are better when the realtime rules, scaling model, or event format must be fully controlled.

Practice:

- Add Supabase Auth to the study tracker.
- Store profiles, projects, and progress in Supabase PostgreSQL.
- Configure Row Level Security policies.
- Build a realtime activity feed with Supabase Realtime.
- Build a small WebSocket chat or notification service with NestJS.
- Compare REST polling, Supabase Realtime, and custom WebSockets for the same feature.

### 7. Next.js

Focus on production-ready web applications with App Router, server components, layouts, metadata, server-side data fetching, route handlers, caching, and deployment.

Practice:

- Personal portfolio.
- Project detail pages.
- Blog or learning journal.
- SSR dashboard connected to the NestJS API or Supabase.

### 8. React Native

Focus on mobile development with Expo, native components, navigation, forms, permissions, secure storage, API integration, and platform differences.

Practice:

- Mobile companion app for the study tracker.
- Notes app with local persistence.
- Mobile dashboard consuming the NestJS API or Supabase.

## Main Project Track

The main long-term product idea is:

```text
Study Tracker / Developer Progress Tracker
```

Evolution:

1. JavaScript CLI version.
2. Node.js REST API.
3. TypeScript REST API.
4. React web dashboard.
5. NestJS backend with auth and database.
6. Supabase version with auth, database, storage, and realtime activity.
7. Custom WebSocket notifications or chat in the NestJS backend.
8. Next.js SSR app and portfolio integration.
9. React Native mobile app.

## Portfolio Track

The portfolio is the public proof of progress. Each project should explain:

- Problem solved.
- Stack used.
- Architecture decisions.
- What I learned.
- Repository link.
- Live demo when available.

## Official Resources

- MDN JavaScript.
- Node.js Learn.
- TypeScript Handbook.
- React Learn.
- NestJS Documentation.
- Supabase Documentation.
- MDN WebSocket API.
- Socket.IO Documentation.
- Next.js Learn.
- React Native Documentation.
- Expo Documentation.
