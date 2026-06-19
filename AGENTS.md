<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Jeeyoung Han Portfolio — Agent Rules

## Purpose

This is a **personal branding site**, not a static resume.

- Present identity, taste, and point of view — not just a list of jobs and skills
- Design for the AI era: clear narrative, intentional motion, and a site that feels authored
- Every section should answer: *who is this person, and why should I care?*

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components) |
| UI | shadcn/ui (`radix-nova` style) |
| Icons | Lucide React |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |

### Conventions

- Use the App Router (`app/`). Prefer Server Components; add `"use client"` only when needed (interactivity, hooks, browser APIs)
- Add shadcn components via CLI: `bunx shadcn@latest add <component>`
- Import paths: `@/components`, `@/components/ui`, `@/lib/utils`
- Icons from `lucide-react` only — do not mix icon libraries

## Design Principles

### Apple-level cleanliness

- Generous whitespace; let content breathe
- Restrained palette — one accent color, neutral base
- Typography hierarchy over decoration
- No visual clutter: every element must earn its place

### Linear-level precision

- Consistent spacing scale (4 / 8 / 16 / 24 / 32 / 48 / 64)
- Aligned grids and predictable layout rhythm
- Subtle borders and shadows — never heavy or noisy
- Transitions: short (150–250ms), purposeful, never gratuitous

### shadcn/ui first

- Reach for existing shadcn components before building custom UI
- Extend via `className` and composition — avoid forking component internals
- Match the project's design tokens in `app/globals.css` (`--background`, `--foreground`, `--accent`, etc.)
- Dark theme only — no dark-mode toggle needed

## Code Guidelines

- **Minimal scope**: change only what the task requires
- **Match existing patterns**: read surrounding code before adding new files or abstractions
- **No over-engineering**: no premature abstractions, helpers, or error handling for unlikely edge cases
- **Comments**: only for non-obvious logic — code should be self-explanatory
- **Tests**: add only when requested or when they cover meaningful behavior

## File Structure

```
app/              # Pages, layouts, global styles
components/       # Shared components
components/ui/    # shadcn/ui components
lib/              # Utilities (cn, etc.)
public/           # Static assets
```

## Content

- Owner: **Jeeyoung Han** (한지영)
- Tagline: *20년째 꿈꾸는 UX designer*
- Contact: `@1day_1self`
