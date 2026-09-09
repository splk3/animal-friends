import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
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

  it("renders correctly with menu closed", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /test menu/i })
    expect(button).toHaveAttribute("aria-expanded", "false")
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("toggles the menu on button click", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button")

    fireEvent.click(button)
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(button).toHaveAttribute("aria-expanded", "true")

    fireEvent.click(button)
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  it("handles keyboard navigation", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /test menu/i })
    button.focus()
    expect(button).toHaveFocus()

    fireEvent.keyDown(button, { key: "Enter", code: "Enter" })
    expect(screen.getByRole("menu")).toBeInTheDocument()

    fireEvent.keyDown(button, { key: "Escape", code: "Escape" })
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()

    fireEvent.keyDown(button, { key: " ", code: "Space" })
    expect(screen.getByRole("menu")).toBeInTheDocument()
  })

  it("shows the menu on hover", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /test menu/i })
    const dropdownContainer = button.parentElement
    expect(dropdownContainer).not.toBeNull()
    if (!dropdownContainer) {
      throw new Error("Dropdown container not found")
    }

    fireEvent.mouseEnter(dropdownContainer)
    expect(screen.getByRole("menu")).toBeInTheDocument()

    fireEvent.mouseLeave(dropdownContainer)
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()
  })

  it("renders links correctly when open", () => {
    render(<DesktopDropdown {...defaultProps} />)
    fireEvent.click(screen.getByRole("button"))

    const links = screen.getAllByRole("menuitem")
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute("href", "/link-1")
    expect(links[1]).toHaveAttribute("href", "/link-2")
  })

  it("applies the alignment class correctly", () => {
    const { rerender } = render(<DesktopDropdown {...defaultProps} align="left" />)
    fireEvent.click(screen.getByRole("button"))
    expect(screen.getByRole("menu")).not.toHaveClass("right-0")

    rerender(<DesktopDropdown {...defaultProps} align="right" />)
    expect(screen.getByRole("menu")).toHaveClass("right-0")
  })
})
