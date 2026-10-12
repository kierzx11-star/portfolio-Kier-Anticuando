# Kier Whensel Anticuando — Developer Portfolio

A responsive portfolio for showcasing web development projects, services, skills, and background. The site includes Home, Work, Services, About, and Contact pages, with project screenshots and reduced-motion-aware scroll and page transitions.

## Built with

- React 19 and TypeScript
- Vite
- React Router
- CSS
- Lucide icons

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Available commands

```bash
npm run build    # Type-check and create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Project structure

- `src/App.tsx` — routes, page components, navigation, and shared project presentation
- `src/data/projects.ts` — project information and portfolio content
- `src/index.css` and `src/App.css` — global styles, responsive layouts, and motion
- `public/images/` — captured website screenshots used in project showcases
- `docs/` — supporting project notes

The contact form prepares a message for the visitor to copy; it does not send or store submissions.
