# Animal Friends 🐾

A fun and colorful website about animals that make good pets, featuring real-world companions, mythical creatures, and magical mixed pets! Built with Gatsby 5.15.0 and Tailwind CSS 4.1.18.

## 🌟 Features

- **Modern Tech Stack**: Gatsby 5.15.0 static site generator with React 18.3.1 and TypeScript 5.9.3
- **Type-Safe Development**: Full TypeScript support for components and configuration
- **Beautiful Design**: Light pink and purple color palette with Tailwind CSS 4.1.18
- **Comprehensive Content**: 
  - Real pets: Dogs, Cats, Birds, Fish, Hamsters, Lizards, Rabbits, Seals, Sea Otters, Turtles, Pigs, Cows, Ducks, Lady Bugs, Butterflies, Elephants, Pandas, Seahorses, Horses, Koalas, Capybaras, Kangaroos, Bilbies, Foxes, Bears, and Deer
  - Mythical creatures: Dragons, Unicorns, Phoenixes, Triceratops, Velociraptor, Loch Ness Monster, and SeaCorn
  - Mixed pets: Magical hybrids like MerPup, KittyCorn, UniPup, MerCat, RainPup, RainBird, SunDog, SunBird, RainDuck, SunBug, SunButterfly, Muppy, Puuu-uuu-ppy, Ghost Bug, Merala, BunnyCorn, DeerMaid, and Sealycorn
  - Rainbow pets: Rainbow variants of dogs, cats, birds, ducks, lizards, cows, pigs, dolphins, pufferfish, ladybugs, seals, butterflies, turtles, otters, hamsters, fish, elephants, bunnies, foxes, deer, bears, pandas, capybaras, bilbies, kangaroos, seahorses, horses, and koalas
  - Pokemon pets: Pikachu, Deerling, and Azurill
- **GitHub Pages Ready**: Automated deployment workflow included
- **Fully Static**: No server-side rendering, perfect for hosting on GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js >=24 <25 (24 LTS)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## 📦 Available Scripts

- `npm run develop` - Start development server at http://localhost:8000
- `npm run build` - Build static site for production
- `npm run serve` - Serve production build locally at http://localhost:9000
- `npm run clean` - Clean Gatsby cache and public directory

## 🎨 Theme

The site features a custom light color palette with pink and purple gradients:
- Background: Gradient from pink-50 through purple-50 to pink-100
- Navigation: Pink-500 to purple-500 gradient
- Interactive elements use both pink and purple accent colors

## 🌐 Deployment

The site includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. Ensure your repository has GitHub Pages enabled
2. Push to the main branch
3. The workflow will automatically build and deploy

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Layout.tsx              # Main layout component with navigation
│   │   ├── DarkModeToggle.tsx      # Dark mode toggle component
│   │   ├── DesktopDropdown.tsx     # Desktop navigation dropdown
│   │   └── MobileDropdown.tsx      # Mobile navigation dropdown
│   ├── data/
│   │   └── navigationData.ts       # Centralized navigation structure
│   ├── pages/
│   │   ├── index.tsx               # Homepage
│   │   ├── Real Pets (26 pages)
│   │   │   ├── dogs.tsx, cats.tsx, birds.tsx, fish.tsx
│   │   │   ├── hamster.tsx, lizard.tsx, rabbit.tsx
│   │   │   ├── seal.tsx, sea-otter.tsx, turtle.tsx
│   │   │   ├── pig.tsx, cow.tsx, duck.tsx
│   │   │   ├── lady-bug.tsx, butterfly.tsx
│   │   │   ├── elephant.tsx, panda.tsx, seahorse.tsx, horse.tsx
│   │   │   ├── koala.tsx, capybara.tsx, kangaroo.tsx, bilby.tsx
│   │   │   └── fox.tsx, bear.tsx, deer.tsx
│   │   ├── Mythical Pets (7 pages)
│   │   │   ├── dragons.tsx, unicorns.tsx, phoenixes.tsx
│   │   │   ├── triceratops.tsx, velociraptor.tsx
│   │   │   └── loch-ness-monster.tsx, seacorn.tsx
│   │   ├── Mixed Pets (18 pages)
│   │   │   ├── merpup.tsx, kittycorn.tsx, unipup.tsx, mercat.tsx
│   │   │   ├── rainpup.tsx, rainbird.tsx, sundog.tsx, sunbird.tsx
│   │   │   ├── rainduck.tsx, sunbug.tsx, sunbutterfly.tsx
│   │   │   ├── muppy.tsx, puuu-uuu-ppy.tsx, ghost-bug.tsx
│   │   │   └── merala.tsx, bunnycorn.tsx, deermaid.tsx, sealycorn.tsx
│   │   ├── Rainbow Pets (28 pages)
│   │   │   ├── rainbow-dog.tsx, rainbow-cat.tsx, rainbow-bird.tsx
│   │   │   ├── rainbow-duck.tsx, rainbow-lizard.tsx, rainbow-cow.tsx
│   │   │   ├── rainbow-pig.tsx, rainbow-dolphin.tsx, rainbow-pufferfish.tsx
│   │   │   ├── rainbow-ladybug.tsx, rainbow-seal.tsx, rainbow-butterfly.tsx
│   │   │   ├── rainbow-turtle.tsx, rainbow-otter.tsx, rainbow-hamster.tsx
│   │   │   ├── rainbow-fish.tsx, rainbow-elephant.tsx, rainbow-bunny.tsx
│   │   │   ├── rainbow-fox.tsx, rainbow-deer.tsx, rainbow-bear.tsx
│   │   │   ├── rainbow-panda.tsx, rainbow-capybara.tsx, rainbow-bilby.tsx
│   │   │   └── rainbow-kangaroo.tsx, rainbow-seahorse.tsx, rainbow-horse.tsx, rainbow-koala.tsx
│   │   └── Pokemon Pets (3 pages)
│   │       └── pikachu.tsx, deerling.tsx, azurill.tsx
│   └── styles/
│       └── global.css              # Global styles with Tailwind imports
├── gatsby-config.ts                # Gatsby configuration (TypeScript)
├── postcss.config.js               # PostCSS and Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── .github/
    └── workflows/
        └── deploy.yml              # GitHub Pages deployment workflow
```

## 🛠️ Technologies Used

### Core Technologies
- [Gatsby 5.15.0](https://www.gatsbyjs.com/) - Static site generator
- [React 18.3.1](https://react.dev/) - UI library
- [React DOM 18.3.1](https://react.dev/) - React renderer for the web
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Type-safe JavaScript

### Styling
- [Tailwind CSS 4.1.18](https://tailwindcss.com/) - Utility-first CSS framework
- [@tailwindcss/postcss 4.1.18](https://tailwindcss.com/docs/installation/using-postcss) - Tailwind PostCSS plugin
- [PostCSS 8.5.6](https://postcss.org/) - CSS processor
- [Autoprefixer 10.4.23](https://github.com/postcss/autoprefixer) - CSS vendor prefixing

### Gatsby Plugins
- [gatsby-plugin-postcss 6.15.0](https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/) - PostCSS integration for Gatsby

### Type Definitions
- @types/react 18.3.27
- @types/react-dom 18.3.7
- @types/node 24.12.4

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
