# Alvor Healthcare

A corporate website for a global pharmaceutical company built with Next.js 16, React 19, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** react-hook-form + Zod
- **Icons:** lucide-react
- **Testing:** Vitest + React Testing Library

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Non-developer content updates are documented in [CONTENT_EDITING.md](./CONTENT_EDITING.md).

The form-based editor is available at `/admin`. Production authentication setup is documented in [CMS_SETUP.md](./CMS_SETUP.md).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run validate:content` | Validate editor-managed JSON and referenced assets |
| `npm run typecheck` | Run TypeScript checks |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest tests |
| `npm run check` | Run content, TypeScript, tests, and lint checks |

## GitHub Pages

Pushes to `main` are exported and deployed by `.github/workflows/deploy-pages.yml`.
In the repository settings, set **Pages > Build and deployment > Source** to
**GitHub Actions**. Project repositories are automatically served under their
repository base path, such as `/alvorhealthcare/`.

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # React components
│   ├── animations/
│   ├── layout/    # Header, Footer
│   ├── home/      # Homepage sections
│   ├── about/     # About page sections
│   ├── products/  # Product listing & detail
│   └── ui/        # Reusable UI components
├── data/          # Editor-managed site, page, company, catalog, and news content
├── types/         # TypeScript interfaces
└── middleware.ts  # Security headers & CSP
```
