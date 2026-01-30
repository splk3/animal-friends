import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import DarkModeToggle from "./DarkModeToggle"
import MobileDropdown from "./MobileDropdown"
import DesktopDropdown from "./DesktopDropdown"
import { navigationData } from "../data/navigationData"

interface LayoutProps {
  children: React.ReactNode
  pageTitle?: string
  showBackButton?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle, showBackButton = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <div className="min-h-screen">
      <nav className="bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg dark:from-purple-700 dark:to-pink-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white text-2xl font-bold hover:text-pink-100 transition" onClick={closeMobileMenu}>
              🐾 Animal Friends
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-4 items-center">
              <Link to="/" className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                Home
              </Link>
              {navigationData.map((dropdown, index) => (
                <DesktopDropdown
                  key={dropdown.id}
                  id={dropdown.id}
                  title={dropdown.title}
                  links={dropdown.links}
                  align={index > 0 ? 'right' : 'left'}
                />
              ))}
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-white hover:bg-white/10 transition px-3 py-2 rounded"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              {navigationData.map((dropdown) => (
                <MobileDropdown
                  key={dropdown.id}
                  id={dropdown.id}
                  title={dropdown.title}
                  links={dropdown.links}
                  isOpen={openDropdown === dropdown.id}
                  onToggle={() => toggleDropdown(dropdown.id)}
                  onLinkClick={closeMobileMenu}
                />
              ))}

              <div className="pt-2 border-t border-white/20">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8 dark:text-gray-100">
        {pageTitle && (
          <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">
            {pageTitle}
          </h1>
        )}
        {showBackButton && (
          <div className="max-w-4xl mx-auto mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-pink-500 hover:to-purple-600 transition font-semibold shadow-md hover:shadow-lg"
              aria-label="Navigate back to home page"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        )}
        {children}
      </main>
      
      <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-12 dark:from-purple-800 dark:to-pink-800">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm">
            🐾 Animal Friends © {new Date().getFullYear()} - Discover Your Perfect Pet Companion
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
