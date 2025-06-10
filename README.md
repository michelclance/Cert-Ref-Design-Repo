This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Referee Scheduling Platform — Design Repo

## Purpose

This repository contains the **Design Reference Prototype** for the Referee Scheduling Platform.

It is used to:

✅ Communicate and document product-level **UX/UI patterns**  
✅ Demonstrate intended **component architecture**  
✅ Showcase complete **user story flows** for both **Referee** and **Assignor** workflows  
✅ Serve as a visual and interaction reference for the Engineering Team when building the production application

**Important:**  
This is NOT a production codebase.  
This repo is not optimized for state management, data fetching, backend architecture, or performance.  
It is a Design Repo → the goal is to document and prototype product experience and component architecture.

---

## Current Scope

### Referee Workflow

- Available Games page → claim flow
- Claimed Games page → post-claim experience
- Profile page → editable personal info + availability
- Payment page → Stripe prototype integration

### Assignor Workflow

- Dashboard → command center architecture
- Games page → game management + Game Modal
- Assignments Feed → referee assignment visibility + Game Modal + Referee Modal
- Roster page → referee management + Referee Modal + certification logic
- Payments page → payment history with Expand
- Notifications page → send messages → searchable NotificationHistory → View Details modal

---

## UX Principles

- Assignor Dashboard → Command Center → surfacing key alerts + actionable insights
- Referee Workflow → Seamless, simple, mobile-first friendly → focus on game claiming + payment flow
- Consistent interaction patterns:
  - Modal architecture
  - Search experience
  - Component variants
- Mobile responsiveness → prototypes demonstrate expected mobile UX patterns

---

## Engineering Guidance

When building the production application:

- Use this Design Repo as a **visual and architectural reference only**.
- Do not copy code directly — component logic should be rebuilt cleanly in production repo.
- Maintain UX fidelity to these patterns unless product team provides updated guidance.
- Component naming and hierarchy can be adjusted in production repo for scalability and maintainability.
- All DB models, state management, and backend integrations should follow production engineering best practices.

---

## Ownership

**Product Owner:** Michel Clance  
**PM Documentation:** See Asana Project — Referee Scheduling Platform — Engineering Build

---

## License

MIT License (for educational and prototyping purposes only)

---