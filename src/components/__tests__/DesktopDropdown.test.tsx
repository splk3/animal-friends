import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DesktopDropdown from "../DesktopDropdown"

describe("DesktopDropdown", () => {
  const defaultProps = {
    id: "test-dropdown",
    title: "Test Menu",
    links: [
      { to: "/link-1", label: "Link 1" },
      { to: "/link-2", label: "Link 2" },
    ],
  }

  it("renders the dropdown title", () => {
    render(<DesktopDropdown {...defaultProps} />)
    expect(screen.getByText(/test menu/i)).toBeInTheDocument()
  })

  it("does not show links by default", () => {
    render(<DesktopDropdown {...defaultProps} />)
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("shows links on mouse enter and hides on mouse leave", async () => {
    const user = userEvent.setup()
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /test menu/i })
    const container = button.parentElement

    expect(container).not.toBeNull()
    if (!container) {
      throw new Error("Dropdown container not found")
    }

    await user.hover(container)
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByText("Link 1")).toBeInTheDocument()
    expect(screen.getByText("Link 2")).toBeInTheDocument()

    await user.unhover(container)
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("toggles links on button click", async () => {
    const user = userEvent.setup({ skipHover: true })
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button")

    await user.click(button)
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(button).toHaveAttribute("aria-expanded", "true")

    await user.click(button)
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  it("handles keyboard navigation with Enter", async () => {
    const user = userEvent.setup()
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button")

    button.focus()
    await user.keyboard("{Enter}")
    expect(screen.getByRole("menu")).toBeInTheDocument()

    await user.keyboard("{Enter}")
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("handles keyboard navigation with Space", async () => {
    const user = userEvent.setup()
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button")

    button.focus()
    await user.keyboard(" ")
    expect(screen.getByRole("menu")).toBeInTheDocument()

    await user.keyboard(" ")
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("handles keyboard navigation with Escape", async () => {
    const user = userEvent.setup()
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button")

    button.focus()
    await user.keyboard("{Enter}")
    expect(screen.getByRole("menu")).toBeInTheDocument()

    await user.keyboard("{Escape}")
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("sets accessibility attributes correctly", async () => {
    const user = userEvent.setup({ skipHover: true })
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button")

    expect(button).toHaveAttribute("aria-expanded", "false")
    expect(button).toHaveAttribute("aria-haspopup", "true")
    expect(button).toHaveAttribute("aria-controls", "desktop-test-dropdown-menu")

    await user.click(button)
    expect(button).toHaveAttribute("aria-expanded", "true")

    const menu = screen.getByRole("menu")
    expect(menu).toHaveAttribute("id", "desktop-test-dropdown-menu")

    const menuItems = screen.getAllByRole("menuitem")
    expect(menuItems).toHaveLength(2)
    expect(menuItems[0]).toHaveAttribute("href", "/link-1")
  })

  it("applies right alignment class when align=right", async () => {
    const user = userEvent.setup({ skipHover: true })
    render(<DesktopDropdown {...defaultProps} align="right" />)
    const button = screen.getByRole("button")

    await user.click(button)

    const menu = screen.getByRole("menu")
    expect(menu).toHaveClass("right-0")
  })
})
