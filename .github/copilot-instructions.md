# Copilot Instructions for Animal Friends

## Project Overview
Animal Friends is a static website built with Gatsby 5.x that provides information about animals as pets. The site features real-world pets, mythical creatures, magical mixed pets, rainbow-themed variants, and Pokemon pets in a fun and colorful design with dark mode support.

## Tech Stack
- **Framework**: Gatsby 5.x (Static Site Generator)
- **UI Library**: React 18.3
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4.x
- **Build Tools**: PostCSS, Autoprefixer
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure
```
src/
├── components/
│   ├── Layout.tsx              # Main layout with navigation and footer
│   ├── DarkModeToggle.tsx      # Dark mode toggle component
│   ├── DesktopDropdown.tsx     # Desktop navigation dropdown
│   └── MobileDropdown.tsx      # Mobile navigation dropdown
├── data/
│   └── navigationData.ts       # Centralized navigation structure
├── pages/
│   ├── index.tsx               # Homepage
│   └── [animal].tsx            # Individual animal pages (82 animal pages + 1 homepage = 83 total)
└── styles/
    └── global.css              # Global styles with Tailwind imports
```

## Development Commands

### Prerequisites
- Node.js 18+ must be installed
- Run `npm install` before first use or after dependency changes

### Available Scripts
- `npm run develop` (or `npm start`) - Start development server at http://localhost:8000
- `npm run build` - Build static site for production
- `npm run serve` - Serve production build locally at http://localhost:9000
- `npm run clean` - Clean Gatsby cache and public directory

## Coding Conventions

### TypeScript & React
- Use TypeScript for all components and configuration files
- Use functional components with React.FC type
- Import React as: `import * as React from "react"`
- Use Gatsby's `Link` component for internal navigation
- Export `HeadFC` for page metadata: `export const Head: HeadFC = () => <title>Page Title</title>`

### Component Structure
- All page components should use the `Layout` component wrapper
- Pass `pageTitle` prop to Layout for consistent page headers
- Use TypeScript interfaces for component props
- Place interfaces directly above the component definition

### Styling Guidelines
- Use Tailwind CSS utility classes exclusively (no custom CSS unless necessary)
- Color scheme: Pink and purple gradient theme with dark mode support
  - Primary colors: pink-500, purple-500, pink-600, purple-600
  - Dark mode colors: purple-700, pink-700
  - Background gradients: from-pink-50 to purple-50, from-pink-100 to purple-100
  - Navigation: gradient from pink-500 to purple-500 (dark: from purple-700 to pink-700)
  - Hover states: use lighter shades (pink-100, purple-100)
  - Dark mode backgrounds: gray-800, gray-900
  - Dark mode text: gray-100
- Responsive design: Use Tailwind's `md:` prefix for tablet/desktop breakpoints
- Card styling: white background (dark: gray-800), rounded-lg, shadow-lg, with hover effects (shadow-2xl, transform, -translate-y-1)

### Page Layout Patterns
- Use `max-w-4xl mx-auto` for main content containers
- Apply consistent spacing: `mb-8` between major sections, `mb-6` within sections
- Grid layouts: `grid md:grid-cols-2 gap-8` for two-column layouts
- Buttons/Links: Use gradient backgrounds alternating between pink and purple:
  - Pink: `bg-gradient-to-r from-pink-400 to-pink-500`
  - Purple: `bg-gradient-to-r from-purple-400 to-purple-500`

### Navigation
- The navigation structure is centralized in `src/data/navigationData.ts`
- Main navigation includes Home and five dropdown menus:
  - **Real Pets** - Real-world animals (dogs, cats, birds, fish, hamsters, lizards, rabbits, seals, sea otters, turtles, pigs, cows, ducks, lady bugs, butterflies, elephants, pandas, seahorses, horses, koalas, capybaras, kangaroos, bilbies, foxes, bears, deer)
  - **Mythical Pets** - Fantasy creatures (dragons, unicorns, phoenixes, triceratops, velociraptor, loch ness monster, seacorn)
  - **Mixed Pets** - Hybrid/magical combinations (merpup, kittycorn, unipup, mercat, rainpup, rainbird, sundog, sunbird, rainduck, sunbug, sunbutterfly, muppy, puuu-uuu-ppy, ghost bug, merala, bunnycorn, deermaid, sealycorn)
  - **Rainbow Pets** - Rainbow-themed variants (rainbow-dog, rainbow-cat, rainbow-bird, rainbow-duck, rainbow-lizard, rainbow-cow, rainbow-pig, rainbow-dolphin, rainbow-pufferfish, rainbow-ladybug, rainbow-seal, rainbow-butterfly, rainbow-turtle, rainbow-otter, rainbow-hamster, rainbow-fish, rainbow-elephant, rainbow-bunny, rainbow-fox, rainbow-deer, rainbow-bear, rainbow-panda, rainbow-capybara, rainbow-bilby, rainbow-kangaroo, rainbow-seahorse, rainbow-horse, rainbow-koala)
  - **Pokemon Pets** - Pokemon characters (pikachu, deerling, azurill)
- Desktop navigation uses the `DesktopDropdown` component with `group` parent and `group-hover:block` children
- Mobile navigation uses the `MobileDropdown` component with accordion-style toggles
- All navigation links should include hover transitions
- Use emojis in navigation for visual appeal
- **CRITICAL**: When adding a new page, you MUST add a corresponding link in `src/data/navigationData.ts` under the appropriate category

### Content Guidelines
- Each animal page should include:
  - Page title with emoji
  - Introduction paragraph
  - Key information sections (breeds/types, care requirements, fun facts)
  - Consistent color-coded cards (alternating pink-50 and purple-50 backgrounds)
  - Fun fact callout at the bottom with gradient background

### File Naming
- Use kebab-case for page files: `sea-otter.tsx`, `dragons.tsx`
- Component files use PascalCase: `Layout.tsx`
- Route paths match file names: `/sea-otter` for `sea-otter.tsx`

## Build & Deployment
- Site is configured for GitHub Pages deployment via `.github/workflows/deploy.yml`
- Path prefix is set to `/animal-friends` in `gatsby-config.ts`
- Builds are triggered on push to main branch
- No server-side rendering (SSR is disabled for GitHub Pages compatibility)

## Adding New Pages
**IMPORTANT**: When adding a new page, you MUST update the navigation in `src/data/navigationData.ts` - this is not optional!

Follow these steps in order:
1. Create new file in `src/pages/` with kebab-case naming (e.g., `sea-otter.tsx`)
2. Import Layout component and necessary types (`import { HeadFC } from "gatsby"`)
3. Use functional component with React.FC type
4. Wrap content in Layout with appropriate pageTitle
5. Export Head component with page title
6. **REQUIRED**: Add navigation link in `src/data/navigationData.ts` under the appropriate category:
   - `real` - Real Pets dropdown for real-world animals
   - `mythical` - Mythical Pets dropdown for fantasy creatures
   - `mixed` - Mixed Pets dropdown for hybrid/magical combinations
   - `rainbow` - Rainbow Pets dropdown for rainbow-themed variants
   - `pokemon` - Pokemon Pets dropdown for Pokemon characters
7. Follow the existing link pattern: `{ to: '/page-name', label: 'Display Name' }`
8. Follow existing page structure and styling patterns
9. Test the navigation menu works by running `npm run develop` and clicking through the menu

**Navigation Update Checklist**:
- [ ] Navigation link added to `src/data/navigationData.ts`
- [ ] Link uses correct route path matching filename (without .tsx extension)
- [ ] Link placed in appropriate dropdown menu category
- [ ] Link follows existing data structure pattern
- [ ] Navigation tested in browser (both desktop and mobile views)

## Best Practices
- Maintain consistent color scheme (pink/purple theme)
- Use semantic HTML elements within Tailwind classes
- Keep components simple and focused
- Follow existing patterns for consistency
- **ALWAYS update navigation in `src/data/navigationData.ts` when adding new pages** - this is a critical requirement
- Ensure all pages are accessible from navigation (verify by testing in browser)
- Use emojis to add personality and visual interest
- Test builds before deploying (`npm run build`)
- **Double-check** that new pages appear in the navigation dropdown before considering the task complete

## Security Guidelines
- Never commit secrets, API keys, or credentials to the repository
- Do not commit build artifacts (public/, .cache/) - these are in .gitignore
- Do not commit node_modules/ directory - it's in .gitignore
- Review all changes before committing to ensure no sensitive data is included

## Development Workflow
1. Run `npm install` to install dependencies (first time or after package.json changes)
2. Use `npm run develop` to start the development server
3. Make changes and test locally in the browser at http://localhost:8000
4. Run `npm run build` to verify the production build works
5. Commit changes with descriptive commit messages
6. Build artifacts and dependencies are automatically excluded via .gitignore
