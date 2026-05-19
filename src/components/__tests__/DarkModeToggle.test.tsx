import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DarkModeToggle from '../DarkModeToggle'
import { renderToString } from 'react-dom/server'

describe('DarkModeToggle', () => {
  let mockMatchMedia: jest.Mock

  beforeEach(() => {
    // Reset localStorage
    localStorage.clear()

    // Reset document classes
    document.documentElement.className = ''

    // Setup matchMedia mock
    mockMatchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
    window.matchMedia = mockMatchMedia
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders disabled button before mounting (testing hydration)', () => {
    // Uses renderToString to simulate the initial HTML sent from the server before useEffect mounts
    const htmlString = renderToString(<DarkModeToggle />)

    expect(htmlString).toContain('disabled=""')
    expect(htmlString).toContain('aria-label="Loading color theme preference"')
    expect(htmlString).toContain('aria-busy="true"')
    expect(htmlString).toContain('opacity-60')
    expect(htmlString).toContain('cursor-not-allowed')
  })

  it('defaults to light mode when no localStorage or system preference', () => {
    render(<DarkModeToggle />)

    const button = screen.getByRole('button', { name: /switch to dark mode/i })
    expect(button).toBeInTheDocument()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('defaults to dark mode when localStorage is set to dark', () => {
    localStorage.setItem('theme', 'dark')
    render(<DarkModeToggle />)

    const button = screen.getByRole('button', { name: /switch to light mode/i })
    expect(button).toBeInTheDocument()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('defaults to dark mode when system preference is dark and no localStorage', () => {
    mockMatchMedia.mockImplementation((query: string) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))

    render(<DarkModeToggle />)

    const button = screen.getByRole('button', { name: /switch to light mode/i })
    expect(button).toBeInTheDocument()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles from light to dark mode correctly', () => {
    render(<DarkModeToggle />)

    // Initial state is light
    const button = screen.getByRole('button', { name: /switch to dark mode/i })

    // Click toggle
    fireEvent.click(button)

    // Now it should be dark
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('toggles from dark to light mode correctly', () => {
    localStorage.setItem('theme', 'dark')
    render(<DarkModeToggle />)

    // Initial state is dark
    const button = screen.getByRole('button', { name: /switch to light mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    // Click toggle
    fireEvent.click(button)

    // Now it should be light
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
