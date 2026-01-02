import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import DarkModeToggle from "./DarkModeToggle"

interface LayoutProps {
  children: React.ReactNode
  pageTitle?: string
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="min-h-screen">
      <nav className="bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg dark:from-purple-700 dark:to-pink-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white text-2xl font-bold hover:text-pink-100 transition">
              🐾 Animal Friends
            </Link>
            <div className="flex gap-4 items-center">
              <Link to="/" className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                Home
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-pink-100 transition px-3 py-2 rounded">
                  Real Pets ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px]">
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
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0">
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
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0">
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
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0">
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
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 min-w-[150px] right-0">
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