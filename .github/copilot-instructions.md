# Copilot Instructions for Animal Friends

## Build, test, and lint commands

Run from repository root:

```bash
npm ci
npm run develop   # or: npm start
npm run build
npm run serve
npm run clean
```

Testing (Jest + React Testing Library):

```bash
npm run test
npm run test -- src/components/__tests__/MobileDropdown.test.tsx
npm run test -- -t "calls onToggle when button is clicked"
```

Linting:

- No lint script/config is currently defined in this repository.

## High-level architecture

- Gatsby file-based routing is used (`src/pages/*.tsx` => routes), with one large static homepage (`src/pages/index.tsx`) and many individual animal pages.
- Most animal pages use the shared `PageTemplate` component (`src/components/PageTemplate.tsx`), which wraps `Layout` and standardizes card + optional fun-fact callout structure.
- `Layout` (`src/components/Layout.tsx`) is the shared app shell for nav, footer, and optional page title/back button.
- Navigation data is centralized in `src/data/navigationData.ts`, then rendered by both desktop and mobile nav components:
  - `DesktopDropdown.tsx`
  - `MobileDropdown.tsx`
- Dark mode is controlled in `DarkModeToggle.tsx` by toggling `document.documentElement.classList` (`dark`) and persisting preference in `localStorage` under `theme`. Global dark/light styling is in `src/styles/global.css`.
- Deployment is GitHub Pages-oriented:
  - `gatsby-config.ts` sets `pathPrefix: "/animal-friends"` and `flags.DEV_SSR = false`
  - `.github/workflows/deploy.yml` builds with `PREFIX_PATHS=true` and deploys `public/`.

## Key conventions for this codebase

- Import React as `import * as React from "react"` in components/pages.
- Pages export a `Head` typed with Gatsby `HeadFC` for document titles.
- Keep page filenames kebab-case (`sea-otter.tsx`) so route path matches file name (`/sea-otter`).
- For new animal pages, use `PageTemplate` and follow existing content structure (title, sections/cards, optional fun fact).
- Update `src/data/navigationData.ts` whenever adding/removing/renaming animal routes. Navigation dropdowns are driven from this file.
- Also update homepage links in `src/pages/index.tsx` when relevant: homepage sections are manually hardcoded and are not generated from `navigationData`.
- Navigation link objects should follow `{ to: "/route", label: "Label" }` and be placed in the correct dropdown id (`real`, `mythical`, `mixed`, `rainbow`, `pokemon`).
- Jest tests rely on Gatsby API mocks in `__mocks__/gatsby.js` (`Link`, `graphql`, `useStaticQuery`); keep these in sync with test needs.

## MCP server setup guidance

- Recommended MCP servers for this repository:
  - **Playwright MCP**: use for validating navigation flows and desktop/mobile menu behavior after UI changes.
  - **GitHub MCP**: use for checking PR metadata, CI runs, workflow logs, and related repository context.
- For UI changes, prefer a short Playwright smoke flow:
  - Open `/`
  - Verify top-nav dropdowns render and links are reachable
  - Verify mobile menu toggle and dropdown expansion behavior
- Keep MCP checks focused on changed surfaces (for example, nav components and affected pages) instead of broad full-site traversal.

Example MCP config snippet (adapt to your machine and token sources):

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
```

- Put this into your Copilot/MCP client config file.
- Ensure `GITHUB_PERSONAL_ACCESS_TOKEN` is exported in your shell (or replace with your client's secret mechanism).

## LSP guidance

- Use TypeScript/TSX language-server features first for symbol lookup and references in `src/components`, `src/pages`, and `src/data`.
- Prefer rename/refactor through LSP when changing:
  - `NavigationDropdown` / `DropdownLink` types
  - Shared component props (`Layout`, `PageTemplate`, dropdown components)
- When updating routes or labels, use LSP/find-references from `navigationData.ts` to catch all usage sites (layout rendering, dropdown props, tests, and page imports where applicable).
- Use diagnostics as a fast gate after edits in TS/TSX files, then run npm run test / npm run build.

## Security Guidelines

- Never commit secrets, API keys, or credentials to the repository.
- Do not commit build artifacts (public/, .cache/) or node_modules/.
- Review all generated code to ensure no sensitive data or insecure patterns are introduced.
