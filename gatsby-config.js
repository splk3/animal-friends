/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/animal-friends",
  siteMetadata: {
    title: "Animal Friends - Your Guide to Perfect Pets",
    description: "Discover the best animal companions, from real pets to mythical creatures!",
    siteUrl: "https://splk3.github.io/animal-friends",
  },
  plugins: [
    "gatsby-plugin-postcss",
  ],
  // Disable server-side rendering for GitHub Pages
  flags: {
    DEV_SSR: false,
  },
}
