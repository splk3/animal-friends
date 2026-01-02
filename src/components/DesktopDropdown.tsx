import * as React from "react"
import { Link } from "gatsby"

interface DropdownLink {
  to: string
  label: string
}

interface DesktopDropdownProps {
  id: string
  title: string
  links: DropdownLink[]
  align?: 'left' | 'right'
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  id,
  title,
  links,
  align = 'left',
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen(!isOpen)
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleMouseEnter = () => setIsOpen(true)
  const handleMouseLeave = () => setIsOpen(false)

  const alignmentClass = align === 'right' ? 'right-0' : ''

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-white hover:text-pink-100 transition px-3 py-2 rounded"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`desktop-${id}-menu`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        {title} ▾
      </button>
      <div
        id={`desktop-${id}-menu`}
        className={`absolute ${isOpen ? 'block' : 'hidden'} group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] z-50 ${alignmentClass}`}
        role="menu"
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-4 py-2 text-purple-700 hover:bg-pink-100"
            role="menuitem"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DesktopDropdown
