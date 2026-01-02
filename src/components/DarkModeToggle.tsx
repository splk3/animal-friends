import * as React from "react"

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Only run on client side after mount
  React.useEffect(() => {
    setMounted(true)
    
    // Check localStorage first, then system preference
    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark)
    
    setIsDark(shouldBeDark)
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button className="text-white p-2 rounded-lg hover:bg-white/10 transition">
        <span className="text-xl">🌙</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="text-white p-2 rounded-lg hover:bg-white/10 transition"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
    </button>
  )
}

export default DarkModeToggle
