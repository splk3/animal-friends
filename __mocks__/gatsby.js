const React = require("react")

const Link = ({ children, to, onClick, ...props }) =>
  React.createElement(
    "a",
    {
      href: to,
      onClick: (e) => {
        e.preventDefault()
        if (onClick) onClick(e)
      },
      ...props,
    },
    children
  )

module.exports = {
  Link,
  graphql: () => {},
  StaticQuery: () => {},
  useStaticQuery: () => ({}),
}
