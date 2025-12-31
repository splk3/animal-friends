# Copilot Instructions for Animal Friends

## Project Overview
Animal Friends is a static website built with Gatsby 5.x that provides information about animals as pets. The site features both real-world pets (dogs, cats, birds, fish, etc.) and mythical creatures (dragons, unicorns, phoenixes, etc.) in a fun and colorful design.

## Tech Stack
- **Framework**: Gatsby 5.x (Static Site Generator)
- **UI Library**: React 18.3
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 3.x
- **Build Tools**: PostCSS, Autoprefixer
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure
```
src/
├── components/
│   └── Layout.tsx           # Main layout with navigation and footer
├── pages/
│   ├── index.tsx            # Homepage
│   └── [animal].tsx         # Individual animal pages
└── styles/
    └── global.css           # Global styles with Tailwind imports
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
- Color scheme: Pink and purple gradient theme
  - Primary colors: pink-500, purple-500, pink-600, purple-600
  - Background gradients: from-pink-50 to purple-50, from-pink-100 to purple-100
  - Navigation: gradient from pink-500 to purple-500
  - Hover states: use lighter shades (pink-100, purple-100)
- Responsive design: Use Tailwind's `md:` prefix for tablet/desktop breakpoints
- Card styling: white background, rounded-lg, shadow-lg, with hover effects (shadow-2xl, transform, -translate-y-1)

### Page Layout Patterns
- Use `max-w-4xl mx-auto` for main content containers
- Apply consistent spacing: `mb-8` between major sections, `mb-6` within sections
- Grid layouts: `grid md:grid-cols-2 gap-8` for two-column layouts
- Buttons/Links: Use gradient backgrounds alternating between pink and purple:
  - Pink: `bg-gradient-to-r from-pink-400 to-pink-500`
  - Purple: `bg-gradient-to-r from-purple-400 to-purple-500`

### Navigation
- Main navigation includes Home, Real Pets dropdown, and Mythical Pets dropdown
- Dropdown menus should use: `group` parent with `group-hover:block` children
- All navigation links should include hover transitions
- Use emojis in navigation for visual appeal

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
1. Create new file in `src/pages/` with kebab-case naming
2. Import Layout component and necessary types
3. Use functional component with React.FC type
4. Wrap content in Layout with appropriate pageTitle
5. Export Head component with page title
6. Add navigation link in `Layout.tsx` under appropriate dropdown menu
7. Follow existing page structure and styling patterns

## Best Practices
- Maintain consistent color scheme (pink/purple theme)
- Use semantic HTML elements within Tailwind classes
- Keep components simple and focused
- Follow existing patterns for consistency
- Ensure all pages are accessible from navigation
- Use emojis to add personality and visual interest
- Test builds before deploying (`npm run build`)

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
