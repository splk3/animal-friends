import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import DesktopDropdown from '../DesktopDropdown'

// Mock gatsby's Link component
vi.mock('gatsby', () => ({
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

const mockLinks = [
  { to: '/link1', label: 'Link 1' },
  { to: '/link2', label: 'Link 2' },
]

describe('DesktopDropdown', () => {
  const defaultProps = {
    id: 'test',
    title: 'Dropdown Title',
    links: mockLinks,
  }

  it('renders the dropdown title', () => {
    render(<DesktopDropdown {...defaultProps} />)
    expect(screen.getByText(/Dropdown Title/i)).toBeInTheDocument()
  })

  it('does not show links by default', () => {
    render(<DesktopDropdown {...defaultProps} />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('shows links on mouse enter and hides on mouse leave', async () => {
    render(<DesktopDropdown {...defaultProps} />)
    const container = screen.getByText(/Dropdown Title/i).closest('div')!

    fireEvent.mouseEnter(container)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getByText('Link 1')).toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()

    fireEvent.mouseLeave(container)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('toggles links on button click', async () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole('button')

    await userEvent.click(button)
    expect(screen.getByRole('menu')).toBeInTheDocument()

    await userEvent.click(button)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('handles keyboard navigation - Enter key', async () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole('button')

    fireEvent.keyDown(button, { key: 'Enter' })
    expect(screen.getByRole('menu')).toBeInTheDocument()

    fireEvent.keyDown(button, { key: 'Enter' })
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('handles keyboard navigation - Space key', async () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole('button')

    fireEvent.keyDown(button, { key: ' ' })
    expect(screen.getByRole('menu')).toBeInTheDocument()

    fireEvent.keyDown(button, { key: ' ' })
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('handles keyboard navigation - Escape key', async () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole('button')

    fireEvent.keyDown(button, { key: 'Enter' })
    expect(screen.getByRole('menu')).toBeInTheDocument()

    fireEvent.keyDown(button, { key: 'Escape' })
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('sets accessibility attributes correctly', async () => {
    render(<DesktopDropdown {...defaultProps} />)
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-haspopup', 'true')
    expect(button).toHaveAttribute('aria-controls', 'desktop-test-menu')

    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    const menu = screen.getByRole('menu')
    expect(menu).toHaveAttribute('id', 'desktop-test-menu')

    const menuItems = screen.getAllByRole('menuitem')
    expect(menuItems).toHaveLength(2)
    expect(menuItems[0]).toHaveAttribute('href', '/link1')
  })

  it('applies right alignment class when align="right"', async () => {
    render(<DesktopDropdown {...defaultProps} align="right" />)
    const button = screen.getByRole('button')
    await userEvent.click(button)

    const menu = screen.getByRole('menu')
    expect(menu).toHaveClass('right-0')
  })
})
