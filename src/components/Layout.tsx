import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import DarkModeToggle from "./DarkModeToggle"

interface LayoutProps {
  children: React.ReactNode
  pageTitle?: string
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="relative group">
                <button className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                  Real Pets ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] z-50">
                  <Link to="/dogs" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Dogs
                  </Link>
                  <Link to="/cats" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Cats
                  </Link>
                  <Link to="/birds" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Birds
                  </Link>
                  <Link to="/fish" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Fish
                  </Link>
                  <Link to="/hamster" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Hamsters
                  </Link>
                  <Link to="/lizard" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Lizards
                  </Link>
                  <Link to="/rabbit" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rabbits
                  </Link>
                  <Link to="/seal" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Seals
                  </Link>
                  <Link to="/sea-otter" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Sea Otters
                  </Link>
                  <Link to="/turtle" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Turtles
                  </Link>
                  <Link to="/pig" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Pigs
                  </Link>
                  <Link to="/cow" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Cows
                  </Link>
                  <Link to="/duck" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Ducks
                  </Link>
                  <Link to="/lady-bug" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Lady Bugs
                  </Link>
                  <Link to="/butterfly" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Butterflies
                  </Link>
                  <Link to="/elephant" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Elephants
                  </Link>
                  <Link to="/panda" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Pandas
                  </Link>
                  <Link to="/seahorse" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Seahorses
                  </Link>
                  <Link to="/horse" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Horses
                  </Link>
                  <Link to="/koala" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Koalas
                  </Link>
                  <Link to="/capybara" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Capybaras
                  </Link>
                  <Link to="/kangaroo" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Kangaroos
                  </Link>
                  <Link to="/bilby" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Bilbies
                  </Link>
                  <Link to="/fox" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Foxes
                  </Link>
                  <Link to="/bear" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Bears
                  </Link>
                  <Link to="/deer" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Deer
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                  Mythical Pets ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0 z-50">
                  <Link to="/dragons" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Dragons
                  </Link>
                  <Link to="/unicorns" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Unicorns
                  </Link>
                  <Link to="/phoenixes" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Phoenixes
                  </Link>
                  <Link to="/triceratops" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Triceratops
                  </Link>
                  <Link to="/velociraptor" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Velociraptor
                  </Link>
                  <Link to="/loch-ness-monster" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Loch Ness Monster
                  </Link>
                  <Link to="/seacorn" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    SeaCorn
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                  Mixed Pets ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0 z-50">
                  <Link to="/merpup" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    MerPup
                  </Link>
                  <Link to="/kittycorn" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    KittyCorn
                  </Link>
                  <Link to="/unipup" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    UniPup
                  </Link>
                  <Link to="/mercat" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    MerCat
                  </Link>
                  <Link to="/rainpup" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    RainPup
                  </Link>
                  <Link to="/rainbird" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    RainBird
                  </Link>
                  <Link to="/sundog" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    SunDog
                  </Link>
                  <Link to="/sunbird" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    SunBird
                  </Link>
                  <Link to="/rainduck" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    RainDuck
                  </Link>
                  <Link to="/sunbug" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    SunBug
                  </Link>
                  <Link to="/sunbutterfly" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    SunButterfly
                  </Link>
                  <Link to="/muppy" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Muppy
                  </Link>
                  <Link to="/puuu-uuu-ppy" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Puuu-uuu-ppy
                  </Link>
                  <Link to="/ghost-bug" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Ghost Bug
                  </Link>
                  <Link to="/merala" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Merala
                  </Link>
                  <Link to="/bunnycorn" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    BunnyCorn
                  </Link>
                  <Link to="/deermaid" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    DeerMaid
                  </Link>
                  <Link to="/sealycorn" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Sealycorn
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                  Rainbow Pets ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0 z-50">
                  <Link to="/rainbow-dog" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Dog
                  </Link>
                  <Link to="/rainbow-cat" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Cat
                  </Link>
                  <Link to="/rainbow-bird" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Bird
                  </Link>
                  <Link to="/rainbow-duck" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Duck
                  </Link>
                  <Link to="/rainbow-lizard" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Lizard
                  </Link>
                  <Link to="/rainbow-cow" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Cow
                  </Link>
                  <Link to="/rainbow-pig" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Pig
                  </Link>
                  <Link to="/rainbow-dolphin" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Dolphin
                  </Link>
                  <Link to="/rainbow-pufferfish" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Pufferfish
                  </Link>
                  <Link to="/rainbow-ladybug" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Ladybug
                  </Link>
                  <Link to="/rainbow-seal" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Seal
                  </Link>
                  <Link to="/rainbow-butterfly" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Butterfly
                  </Link>
                  <Link to="/rainbow-turtle" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Turtle
                  </Link>
                  <Link to="/rainbow-otter" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Otter
                  </Link>
                  <Link to="/rainbow-hamster" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Hamster
                  </Link>
                  <Link to="/rainbow-fish" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Fish
                  </Link>
                  <Link to="/rainbow-elephant" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Elephant
                  </Link>
                  <Link to="/rainbow-bunny" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Bunny
                  </Link>
                  <Link to="/rainbow-fox" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Fox
                  </Link>
                  <Link to="/rainbow-deer" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Deer
                  </Link>
                  <Link to="/rainbow-bear" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Bear
                  </Link>
                  <Link to="/rainbow-panda" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Panda
                  </Link>
                  <Link to="/rainbow-capybara" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Capybara
                  </Link>
                  <Link to="/rainbow-bilby" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Bilby
                  </Link>
                  <Link to="/rainbow-kangaroo" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Kangaroo
                  </Link>
                  <Link to="/rainbow-seahorse" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Seahorse
                  </Link>
                  <Link to="/rainbow-horse" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Horse
                  </Link>
                  <Link to="/rainbow-koala" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Rainbow Koala
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                  Pokemon Pets ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0 z-50">
                  <Link to="/pikachu" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Pikachu
                  </Link>
                  <Link to="/deerling" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Deerling
                  </Link>
                  <Link to="/azurill" className="block px-4 py-2 text-purple-700 hover:bg-pink-100">
                    Azurill
                  </Link>
                </div>
              </div>
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
              
              {/* Real Pets Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('real')}
                  className="w-full text-left text-white hover:bg-white/10 transition px-3 py-2 rounded flex justify-between items-center"
                >
                  Real Pets
                  <span className={`transform transition-transform ${openDropdown === 'real' ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openDropdown === 'real' && (
                  <div className="bg-white/10 rounded-lg mt-1 py-1 ml-4">
                    <Link to="/dogs" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Dogs
                    </Link>
                    <Link to="/cats" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Cats
                    </Link>
                    <Link to="/birds" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Birds
                    </Link>
                    <Link to="/fish" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Fish
                    </Link>
                    <Link to="/hamster" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Hamsters
                    </Link>
                    <Link to="/lizard" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Lizards
                    </Link>
                    <Link to="/rabbit" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rabbits
                    </Link>
                    <Link to="/seal" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Seals
                    </Link>
                    <Link to="/sea-otter" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Sea Otters
                    </Link>
                    <Link to="/turtle" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Turtles
                    </Link>
                    <Link to="/pig" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Pigs
                    </Link>
                    <Link to="/cow" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Cows
                    </Link>
                    <Link to="/duck" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Ducks
                    </Link>
                    <Link to="/lady-bug" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Lady Bugs
                    </Link>
                    <Link to="/butterfly" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Butterflies
                    </Link>
                    <Link to="/elephant" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Elephants
                    </Link>
                    <Link to="/panda" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Pandas
                    </Link>
                    <Link to="/seahorse" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Seahorses
                    </Link>
                    <Link to="/horse" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Horses
                    </Link>
                    <Link to="/koala" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Koalas
                    </Link>
                    <Link to="/capybara" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Capybaras
                    </Link>
                    <Link to="/kangaroo" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Kangaroos
                    </Link>
                    <Link to="/bilby" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Bilbies
                    </Link>
                    <Link to="/fox" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Foxes
                    </Link>
                    <Link to="/bear" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Bears
                    </Link>
                    <Link to="/deer" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Deer
                    </Link>
                  </div>
                )}
              </div>

              {/* Mythical Pets Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mythical')}
                  className="w-full text-left text-white hover:bg-white/10 transition px-3 py-2 rounded flex justify-between items-center"
                >
                  Mythical Pets
                  <span className={`transform transition-transform ${openDropdown === 'mythical' ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openDropdown === 'mythical' && (
                  <div className="bg-white/10 rounded-lg mt-1 py-1 ml-4">
                    <Link to="/dragons" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Dragons
                    </Link>
                    <Link to="/unicorns" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Unicorns
                    </Link>
                    <Link to="/phoenixes" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Phoenixes
                    </Link>
                    <Link to="/triceratops" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Triceratops
                    </Link>
                    <Link to="/velociraptor" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Velociraptor
                    </Link>
                    <Link to="/loch-ness-monster" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Loch Ness Monster
                    </Link>
                    <Link to="/seacorn" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      SeaCorn
                    </Link>
                  </div>
                )}
              </div>

              {/* Mixed Pets Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mixed')}
                  className="w-full text-left text-white hover:bg-white/10 transition px-3 py-2 rounded flex justify-between items-center"
                >
                  Mixed Pets
                  <span className={`transform transition-transform ${openDropdown === 'mixed' ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openDropdown === 'mixed' && (
                  <div className="bg-white/10 rounded-lg mt-1 py-1 ml-4">
                    <Link to="/merpup" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      MerPup
                    </Link>
                    <Link to="/kittycorn" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      KittyCorn
                    </Link>
                    <Link to="/unipup" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      UniPup
                    </Link>
                    <Link to="/mercat" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      MerCat
                    </Link>
                    <Link to="/rainpup" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      RainPup
                    </Link>
                    <Link to="/rainbird" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      RainBird
                    </Link>
                    <Link to="/sundog" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      SunDog
                    </Link>
                    <Link to="/sunbird" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      SunBird
                    </Link>
                    <Link to="/rainduck" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      RainDuck
                    </Link>
                    <Link to="/sunbug" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      SunBug
                    </Link>
                    <Link to="/sunbutterfly" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      SunButterfly
                    </Link>
                    <Link to="/muppy" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Muppy
                    </Link>
                    <Link to="/puuu-uuu-ppy" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Puuu-uuu-ppy
                    </Link>
                    <Link to="/ghost-bug" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Ghost Bug
                    </Link>
                    <Link to="/merala" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Merala
                    </Link>
                    <Link to="/bunnycorn" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      BunnyCorn
                    </Link>
                    <Link to="/deermaid" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      DeerMaid
                    </Link>
                    <Link to="/sealycorn" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Sealycorn
                    </Link>
                  </div>
                )}
              </div>

              {/* Rainbow Pets Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('rainbow')}
                  className="w-full text-left text-white hover:bg-white/10 transition px-3 py-2 rounded flex justify-between items-center"
                >
                  Rainbow Pets
                  <span className={`transform transition-transform ${openDropdown === 'rainbow' ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openDropdown === 'rainbow' && (
                  <div className="bg-white/10 rounded-lg mt-1 py-1 ml-4 max-h-60 overflow-y-auto">
                    <Link to="/rainbow-dog" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Dog
                    </Link>
                    <Link to="/rainbow-cat" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Cat
                    </Link>
                    <Link to="/rainbow-bird" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Bird
                    </Link>
                    <Link to="/rainbow-duck" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Duck
                    </Link>
                    <Link to="/rainbow-lizard" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Lizard
                    </Link>
                    <Link to="/rainbow-cow" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Cow
                    </Link>
                    <Link to="/rainbow-pig" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Pig
                    </Link>
                    <Link to="/rainbow-dolphin" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Dolphin
                    </Link>
                    <Link to="/rainbow-pufferfish" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Pufferfish
                    </Link>
                    <Link to="/rainbow-ladybug" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Ladybug
                    </Link>
                    <Link to="/rainbow-seal" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Seal
                    </Link>
                    <Link to="/rainbow-butterfly" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Butterfly
                    </Link>
                    <Link to="/rainbow-turtle" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Turtle
                    </Link>
                    <Link to="/rainbow-otter" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Otter
                    </Link>
                    <Link to="/rainbow-hamster" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Hamster
                    </Link>
                    <Link to="/rainbow-fish" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Fish
                    </Link>
                    <Link to="/rainbow-elephant" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Elephant
                    </Link>
                    <Link to="/rainbow-bunny" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Bunny
                    </Link>
                    <Link to="/rainbow-fox" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Fox
                    </Link>
                    <Link to="/rainbow-deer" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Deer
                    </Link>
                    <Link to="/rainbow-bear" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Bear
                    </Link>
                    <Link to="/rainbow-panda" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Panda
                    </Link>
                    <Link to="/rainbow-capybara" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Capybara
                    </Link>
                    <Link to="/rainbow-bilby" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Bilby
                    </Link>
                    <Link to="/rainbow-kangaroo" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Kangaroo
                    </Link>
                    <Link to="/rainbow-seahorse" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Seahorse
                    </Link>
                    <Link to="/rainbow-horse" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Horse
                    </Link>
                    <Link to="/rainbow-koala" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Rainbow Koala
                    </Link>
                  </div>
                )}
              </div>

              {/* Pokemon Pets Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('pokemon')}
                  className="w-full text-left text-white hover:bg-white/10 transition px-3 py-2 rounded flex justify-between items-center"
                >
                  Pokemon Pets
                  <span className={`transform transition-transform ${openDropdown === 'pokemon' ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openDropdown === 'pokemon' && (
                  <div className="bg-white/10 rounded-lg mt-1 py-1 ml-4">
                    <Link to="/pikachu" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Pikachu
                    </Link>
                    <Link to="/deerling" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Deerling
                    </Link>
                    <Link to="/azurill" className="block px-4 py-2 text-white hover:bg-white/10" onClick={closeMobileMenu}>
                      Azurill
                    </Link>
                  </div>
                )}
              </div>

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