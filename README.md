# Animal Friends 🐾

A fun and colorful website about animals that make good pets, featuring real-world companions, mythical creatures, and magical mixed pets! Built with Gatsby 5.x and Tailwind CSS 3.x.

## 🌟 Features

- **Modern Tech Stack**: Gatsby 5.x static site generator with React 18.3 and TypeScript
- **Type-Safe Development**: Full TypeScript support for components and configuration
- **Beautiful Design**: Light pink and purple color palette with Tailwind CSS 3.x
- **Comprehensive Content**: 
  - Real pets: Dogs, Cats, Birds, Fish, and more
  - Mythical creatures: Dragons, Unicorns, Phoenixes, and more
  - Mixed pets: Magical hybrids like MerPup and KittyCorn
- **GitHub Pages Ready**: Automated deployment workflow included
- **Fully Static**: No server-side rendering, perfect for hosting on GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
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
│   │   └── Layout.tsx          # Main layout component with navigation
│   ├── pages/
│   │   ├── index.tsx           # Homepage
│   │   ├── dogs.tsx            # Dogs page
│   │   ├── cats.tsx            # Cats page
│   │   ├── birds.tsx           # Birds page
│   │   ├── fish.tsx            # Fish page
│   │   ├── dragons.tsx         # Dragons page
│   │   ├── unicorns.tsx        # Unicorns page
│   │   ├── phoenixes.tsx       # Phoenixes page
│   │   ├── merpup.tsx          # MerPup page (mixed pet)
│   │   └── kittycorn.tsx       # KittyCorn page (mixed pet)
│   └── styles/
│       └── global.css          # Global styles with Tailwind imports
├── gatsby-config.ts            # Gatsby configuration (TypeScript)
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Pages deployment workflow
```

## 🛠️ Technologies Used

- [Gatsby 5.x](https://www.gatsbyjs.com/) - Static site generator
- [React 18.3](https://react.dev/) - UI library
- [TypeScript 5.7](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS 3.x](https://tailwindcss.com/) - Utility-first CSS framework
- [PostCSS](https://postcss.org/) - CSS processor
- [Autoprefixer](https://github.com/postcss/autoprefixer) - CSS vendor prefixing

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
