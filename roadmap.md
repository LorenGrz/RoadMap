# RoadMap: Full-Stack TypeScript Developer

This repository contains my personal roadmap to become a full-stack TypeScript developer. The learning path is intentionally progressive:

```text
JavaScript -> Node.js -> TypeScript -> React -> NestJS -> Next.js -> React Native
```

The goal is not only to finish tutorials, but to build projects that grow in complexity and reuse the same product ideas across different technologies.

## Core Principles

- Learn fundamentals before frameworks.
- Build small projects before large projects.
- Rebuild the same idea across the stack to understand architectural differences.
- Practice English while documenting and explaining technical work.
- Prefer official documentation as the main source of truth.
- Use tests, linting, type checking, and clean architecture as early habits.

## Stage 1: JavaScript Fundamentals

Objective: understand the language deeply before depending on frameworks.

Topics:

- Variables, functions, objects, arrays, modules.
- Array methods: `map`, `filter`, `reduce`, `find`, `some`, `every`.
- Destructuring, spread/rest, optional chaining, nullish coalescing.
- Error handling with `try/catch`.
- Promises and `async/await`.
- DOM basics and browser events.

Practice projects:

- CLI calculator.
- Todo list using only JavaScript and local storage.
- Small quiz app.
- JSON data transformer.

Recommended main resource:

- MDN JavaScript learning path.

Recommended English video tutorials:

- freeCodeCamp: full JavaScript beginner courses and project-based practice.
- Traversy Media: practical JavaScript crash courses and DOM projects.
- Web Dev Simplified: short explanations for JavaScript concepts and common mistakes.

## Stage 2: Node.js

Objective: understand JavaScript outside the browser and learn backend fundamentals.

Topics:

- Node runtime and the event loop.
- npm scripts and package management.
- File system with `fs`.
- Environment variables.
- HTTP server basics.
- REST API fundamentals.
- Middleware concepts.
- Basic logging and error handling.

Practice projects:

- CLI task manager saved to a JSON file.
- Notes API using Node.js HTTP or Express.
- File organizer script.
- Simple URL shortener API.

Recommended project:

- Build a task manager API without advanced frameworks first. This makes NestJS easier later.

Recommended English video tutorials:

- freeCodeCamp: Node.js and Express full courses.
- Traversy Media: Node.js, Express, REST API, and backend crash courses.
- The Net Ninja: Node.js and Express playlists with clear beginner progression.

## Stage 3: TypeScript

Objective: make JavaScript safer and prepare for scalable full-stack development.

Topics:

- Primitive types, arrays, objects, tuples.
- `type` vs `interface`.
- Unions and discriminated unions.
- Generics.
- Utility types: `Pick`, `Omit`, `Partial`, `Readonly`, `Record`.
- `unknown` instead of unsafe `any`.
- Strict `tsconfig`.
- DTOs and API response types.
- Typed error/result patterns.

Practice projects:

- Rewrite the Node.js task manager API in TypeScript.
- Build a typed CLI app.
- Create shared domain types for tasks, users, and projects.

Recommended project:

- Convert the previous Node API into a strict TypeScript API.

Recommended English video tutorials:

- Matt Pocock / Total TypeScript: modern TypeScript patterns and type-level thinking.
- freeCodeCamp: TypeScript beginner-to-advanced courses.
- Jack Herrington: practical TypeScript with React and full-stack projects.

## Stage 4: React

Objective: build scalable client-side user interfaces.

Topics:

- Components, props, state, and events.
- Lists, keys, conditional rendering.
- Forms and validation.
- `useEffect` only when needed.
- Custom hooks.
- API clients.
- Loading, error, empty, and success states.
- Accessibility basics.
- Component composition.

Practice projects:

- React task dashboard consuming the TypeScript API.
- Project management board.
- Study tracker interface.
- Portfolio UI prototype.

Recommended project:

- Build a React dashboard for the task manager API. Focus on clean components and custom hooks.

Recommended English video tutorials:

- React official YouTube and React documentation talks for mental models.
- The Net Ninja: React playlists with project-based learning.
- Codevolution: React hooks, patterns, and component fundamentals.
- Web Dev Simplified: practical React patterns and common mistakes.

## Stage 5: NestJS

Objective: build scalable backend applications with TypeScript and clean architecture.

Topics:

- Modules, controllers, providers, services.
- DTOs, validation pipes, and error responses.
- Dependency injection.
- Guards and authentication.
- Repository pattern.
- Database integration.
- Migrations and seeds.
- Unit and integration tests.
- Clean architecture boundaries.

Architecture rules:

- Controllers handle HTTP input/output only.
- Use cases coordinate application behavior.
- Domain objects keep business rules.
- Repositories persist and retrieve data; they do not own business logic.
- DTOs should not leak into domain models.

Practice projects:

- Rebuild the task manager API with NestJS.
- Add users, authentication, projects, and permissions.
- Add PostgreSQL with migrations.

Recommended project:

- Build a project/task management API with users, projects, tasks, roles, and clean module boundaries.

Recommended English video tutorials:

- freeCodeCamp: NestJS full backend courses.
- Academind: NestJS architecture and backend fundamentals.
- Michael Guay: practical NestJS, authentication, and backend architecture content.

## Stage 6: Next.js

Objective: build production-ready SSR web applications with TypeScript.

Topics:

- App Router.
- Server components by default.
- Client components only when interactivity requires them.
- Layouts, pages, loading states, and error states.
- Metadata and SEO.
- Server-side data fetching.
- Route handlers and server actions.
- Caching and revalidation.
- Deployment workflow.

Practice projects:

- Personal portfolio.
- Project detail pages generated from typed data.
- Blog or learning journal.
- SSR dashboard connected to the NestJS API.

Recommended project:

- Build the portfolio first, then evolve it into a professional case-study site that explains each project and links to live demos and repositories.

Recommended English video tutorials:

- Vercel / Next.js official YouTube: App Router, server components, caching, and deployment.
- Lee Robinson: Next.js architecture, performance, and Vercel deployment.
- Jack Herrington: practical Next.js App Router examples.
- ByteGrad: beginner-friendly Next.js project tutorials.

## Stage 7: React Native

Objective: bring the product experience to mobile.

Topics:

- Expo and React Native basics.
- Native components: `View`, `Text`, `Pressable`, `FlatList`.
- Mobile navigation.
- Forms and keyboard handling.
- Permissions.
- Secure storage.
- API integration.
- Offline draft state.
- iOS and Android differences.

Practice projects:

- Mobile companion app for the task/study tracker.
- Notes app with local persistence.
- Mobile dashboard consuming the NestJS API.

Recommended project:

- Build a React Native companion app for the same product built in React, NestJS, and Next.js.

Recommended English video tutorials:

- Expo official YouTube: Expo Router, EAS, and modern React Native workflow.
- notJust.dev: React Native and Expo production-style projects.
- The Net Ninja: React Native beginner playlists.
- Code with Beto: practical React Native and Expo examples.

## Main Project Track

The strongest long-term option is to build one product through the whole roadmap:

```text
Study Tracker / Developer Progress Tracker
```

Evolution:

1. JavaScript CLI version.
2. Node.js REST API.
3. TypeScript REST API.
4. React web dashboard.
5. NestJS backend with auth and database.
6. Next.js SSR app and portfolio integration.
7. React Native mobile app.

This keeps the product idea stable while the architecture evolves.

## Portfolio Track

The portfolio should become the public proof of progress.

Planned sections:

- Home.
- About.
- Projects.
- Project case studies.
- Skills roadmap.
- Contact.

Each project should explain:

- Problem solved.
- Stack used.
- Architecture decisions.
- What I learned.
- Repository link.
- Live demo when available.

## Suggested Weekly Routine

- 60 percent building projects.
- 20 percent reading official documentation.
- 10 percent testing and refactoring.
- 10 percent writing notes in English.

For each topic:

1. Learn the concept.
2. Build a small exercise.
3. Add it to a real project.
4. Write a short English explanation.
5. Commit and push the work.

## Recommended Official Resources

- MDN JavaScript.
- Node.js Learn.
- TypeScript Handbook.
- React Learn.
- NestJS Documentation.
- Next.js Learn.
- React Native Documentation.
- Expo Documentation.

## Current Repository Purpose

This repository stores exercises, notes, and roadmap updates. It should be used as the central place for tracking progress before each topic becomes a dedicated project repository.
