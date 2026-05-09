const React = require("react")

const Link = ({ children, to, ...props }) =>
  React.createElement("a", { href: to, ...props }, children)

module.exports = {
  Link,
  graphql: () => {},
  StaticQuery: () => {},
  useStaticQuery: () => ({}),
}
