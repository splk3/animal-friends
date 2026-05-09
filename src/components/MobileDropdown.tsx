import * as React from "react"
import { Link } from "gatsby"
import { DropdownLink } from "../data/navigationData"

interface MobileDropdownProps {
  id: string
  title: string
  links: DropdownLink[]
  isOpen: boolean
  onToggle: (id: string) => void
  onLinkClick: () => void
}

const MobileDropdown = React.memo<MobileDropdownProps>(({
  id,
  title,
  links,
  isOpen,
  onToggle,
  onLinkClick,
}) => {
  const handleToggle = React.useCallback(() => {
    onToggle(id)
  }, [id, onToggle])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle()
    }
  }

  return (
    <div>
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full text-left text-white hover:bg-white/10 transition px-3 py-2 rounded flex justify-between items-center"
        aria-expanded={isOpen}
        aria-controls={`mobile-${id}-menu`}
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div
          id={`mobile-${id}-menu`}
          className="bg-white/10 rounded-lg mt-1 py-1 ml-4 max-h-60 overflow-y-auto"
          role="menu"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-white hover:bg-white/10"
              onClick={onLinkClick}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
})

MobileDropdown.displayName = "MobileDropdown"

export default MobileDropdown
