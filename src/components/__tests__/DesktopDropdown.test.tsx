import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DesktopDropdown from "../DesktopDropdown"

describe("DesktopDropdown", () => {
  const defaultProps = {
    id: "test-desktop-dropdown",
    title: "Desktop Menu",
    links: [
      { to: "/desk-1", label: "Desk Link 1" },
      { to: "/desk-2", label: "Desk Link 2" },
    ],
  }

  it("renders correctly with dropdown title", () => {
    render(<DesktopDropdown {...defaultProps} />)
    expect(screen.getByText(/Desktop Menu/i)).toBeInTheDocument()
  })

  it("toggles menu when button is clicked", async () => {
    const user = userEvent.setup()
    render(<DesktopDropdown {...defaultProps} />)

    const button = screen.getByRole("button", { name: /Desktop Menu/i })
    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.getByText("Desk Link 1")).toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()
  })

  it("opens menu on mouse enter and closes on mouse leave", () => {
    const { container } = render(<DesktopDropdown {...defaultProps} />)
    const wrapper = container.firstChild as HTMLElement

    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()

    fireEvent.mouseEnter(wrapper)
    expect(screen.getByText("Desk Link 1")).toBeInTheDocument()

    fireEvent.mouseLeave(wrapper)
    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()
  })

  it("toggles on Enter key", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /Desktop Menu/i })

    button.focus()
    fireEvent.keyDown(button, { key: "Enter", code: "Enter" })
    expect(screen.getByText("Desk Link 1")).toBeInTheDocument()

    fireEvent.keyDown(button, { key: "Enter", code: "Enter" })
    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()
  })

  it("toggles on Space key", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /Desktop Menu/i })

    button.focus()
    fireEvent.keyDown(button, { key: " ", code: "Space" })
    expect(screen.getByText("Desk Link 1")).toBeInTheDocument()

    fireEvent.keyDown(button, { key: " ", code: "Space" })
    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()
  })

  it("closes on Escape key", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /Desktop Menu/i })

    button.focus()
    fireEvent.keyDown(button, { key: "Enter", code: "Enter" })
    expect(screen.getByText("Desk Link 1")).toBeInTheDocument()

    fireEvent.keyDown(button, { key: "Escape", code: "Escape" })
    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()
  })

  it("ignores other key presses", () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole("button", { name: /Desktop Menu/i })

    button.focus()
    fireEvent.keyDown(button, { key: "Tab", code: "Tab" })
    expect(screen.queryByText("Desk Link 1")).not.toBeInTheDocument()
  })

  it("applies right alignment class when align is 'right'", async () => {
    const user = userEvent.setup()
    render(<DesktopDropdown {...defaultProps} align="right" />)

    const button = screen.getByRole("button", { name: /Desktop Menu/i })
    fireEvent.click(button)

    const menu = screen.getByRole("menu")
    expect(menu).toHaveClass("right-0")
  })
})
