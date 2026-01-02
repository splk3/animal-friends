import * as React from "react"
import { Link, type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Welcome to Animal Friends!">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-purple-700 mb-6">
            Discover the perfect animal companion for your life! Whether you're looking for a 
            real-world pet, dreaming of mythical creatures, exploring magical mixed companions, 
            or training Pokemon, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-6xl text-center mb-4">🐕🐈🐦🐠</div>
            <h2 className="text-2xl font-bold text-purple-600 text-center mb-4">Real Pets</h2>
            <p className="text-gray-700 mb-6 text-center">
              Explore our comprehensive guides to traditional pets that bring joy and companionship 
              to millions of homes around the world.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/dogs" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐕 Dogs
              </Link>
              <Link 
                to="/cats" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🐈 Cats
              </Link>
              <Link 
                to="/birds" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐦 Birds
              </Link>
              <Link 
                to="/fish" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🐠 Fish
              </Link>
              <Link 
                to="/hamster" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐹 Hamsters
              </Link>
              <Link 
                to="/lizard" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦎 Lizards
              </Link>
              <Link 
                to="/seal" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🦭 Seals
              </Link>
              <Link 
                to="/sea-otter" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦦 Sea Otters
              </Link>
              <Link 
                to="/turtle" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐢 Turtles
              </Link>
              <Link 
                to="/pig" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🐷 Pigs
              </Link>
              <Link 
                to="/cow" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐄 Cows
              </Link>
              <Link 
                to="/duck" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦆 Ducks
              </Link>
              <Link 
                to="/lady-bug" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐞 Lady Bugs
              </Link>
              <Link 
                to="/butterfly" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦋 Butterflies
              </Link>
              <Link 
                to="/rabbit" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐰 Rabbits
              </Link>
              <Link 
                to="/elephant" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🐘 Elephants
              </Link>
              <Link 
                to="/panda" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐼 Pandas
              </Link>
              <Link 
                to="/seahorse" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🐴🌊 Seahorses
              </Link>
              <Link 
                to="/horse" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐴 Horses
              </Link>
              <Link 
                to="/koala" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🐨 Koalas
              </Link>
              <Link 
                to="/capybara" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🦫 Capybaras
              </Link>
              <Link 
                to="/kangaroo" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦘 Kangaroos
              </Link>
              <Link 
                to="/bilby" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐭 Bilbies
              </Link>
              <Link 
                to="/fox" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦊 Foxes
              </Link>
              <Link 
                to="/bear" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🐻 Bears
              </Link>
              <Link 
                to="/deer" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦌 Deer
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-6xl text-center mb-4">🐉🦄🔥</div>
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-4">Mythical Pets</h2>
            <p className="text-gray-700 mb-6 text-center">
              Dive into the magical world of legendary creatures! Learn about caring for these 
              extraordinary beings from folklore and fantasy.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/dragons" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🐉 Dragons
              </Link>
              <Link 
                to="/unicorns" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🦄 Unicorns
              </Link>
              <Link 
                to="/phoenixes" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🔥 Phoenixes
              </Link>
              <Link 
                to="/triceratops" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🦕 Triceratops
              </Link>
              <Link 
                to="/velociraptor" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦖 Velociraptor
              </Link>
              <Link 
                to="/loch-ness-monster" 
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-pink-600 transition font-semibold"
              >
                🦕 Loch Ness Monster
              </Link>
              <Link 
                to="/seacorn" 
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold"
              >
                🦄🌊 SeaCorn
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-6xl text-center mb-4">✨🐾💫</div>
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-4">Mixed Pets</h2>
            <p className="text-gray-700 mb-6 text-center">
              Discover imaginative creatures that blend the real with the mythical! These 
              magical hybrids bring together the best of both worlds.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/merpup" 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-3 rounded-lg text-center hover:from-cyan-500 hover:to-blue-600 transition font-semibold"
              >
                🐶🧜‍♀️ MerPup
              </Link>
              <Link 
                to="/kittycorn" 
                className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-pink-600 transition font-semibold"
              >
                🐱🦄 KittyCorn
              </Link>
              <Link 
                to="/unipup" 
                className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-purple-600 transition font-semibold"
              >
                🐶🦄 UniPup
              </Link>
              <Link 
                to="/mercat" 
                className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-4 py-3 rounded-lg text-center hover:from-cyan-500 hover:to-teal-600 transition font-semibold"
              >
                🐱🧜‍♀️ MerCat
              </Link>
              <Link 
                to="/rainpup" 
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:to-blue-600 transition font-semibold"
              >
                🐶💧 RainPup
              </Link>
              <Link 
                to="/rainbird" 
                className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:to-cyan-600 transition font-semibold"
              >
                🐦💧 RainBird
              </Link>
              <Link 
                to="/rainduck" 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-3 rounded-lg text-center hover:from-cyan-500 hover:to-blue-600 transition font-semibold"
              >
                🦆💧 RainDuck
              </Link>
              <Link 
                to="/sundog" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-3 rounded-lg text-center hover:from-yellow-500 hover:to-orange-600 transition font-semibold"
              >
                🐶☀️ SunDog
              </Link>
              <Link 
                to="/sunbird" 
                className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-4 py-3 rounded-lg text-center hover:from-orange-500 hover:to-yellow-600 transition font-semibold"
              >
                🐦☀️ SunBird
              </Link>
              <Link 
                to="/sunbug" 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-3 rounded-lg text-center hover:from-yellow-500 hover:to-orange-500 transition font-semibold"
              >
                🐞☀️ SunBug
              </Link>
              <Link 
                to="/sunbutterfly" 
                className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-4 py-3 rounded-lg text-center hover:from-orange-500 hover:to-amber-600 transition font-semibold"
              >
                🦋☀️ SunButterfly
              </Link>
              <Link 
                to="/muppy" 
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-3 rounded-lg text-center hover:from-amber-500 hover:to-orange-600 transition font-semibold"
              >
                🐶🏺 Muppy
              </Link>
              <Link 
                to="/puuu-uuu-ppy" 
                className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-indigo-600 transition font-semibold"
              >
                👻🐶 Puuu-uuu-ppy
              </Link>
              <Link 
                to="/ghost-bug" 
                className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-indigo-500 hover:to-purple-600 transition font-semibold"
              >
                👻🐛 Ghost Bug
              </Link>
              <Link 
                to="/merala" 
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-3 rounded-lg text-center hover:from-teal-500 hover:to-cyan-600 transition font-semibold"
              >
                🧜‍♀️🐨 Merala
              </Link>
              <Link 
                to="/bunnycorn" 
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:to-purple-500 transition font-semibold"
              >
                🐰🦄 BunnyCorn
              </Link>
              <Link 
                to="/deermaid" 
                className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-3 rounded-lg text-center hover:from-green-500 hover:to-teal-600 transition font-semibold"
              >
                🦌🧜‍♀️ DeerMaid
              </Link>
              <Link 
                to="/sealycorn" 
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:to-purple-600 transition font-semibold"
              >
                🦭🦄 Sealycorn
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-6xl text-center mb-4">🌈✨🎨</div>
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-4">Rainbow Pets</h2>
            <p className="text-gray-700 mb-6 text-center">
              Experience the vibrant world of rainbow-colored companions! These dazzling pets 
              shimmer with all the colors of the spectrum.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/rainbow-dog" 
                className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 text-white px-4 py-3 rounded-lg text-center hover:from-red-500 hover:via-yellow-500 hover:to-blue-500 transition font-semibold"
              >
                🌈🐕 Rainbow Dog
              </Link>
              <Link 
                to="/rainbow-cat" 
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition font-semibold"
              >
                🌈🐈 Rainbow Cat
              </Link>
              <Link 
                to="/rainbow-bird" 
                className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-white px-4 py-3 rounded-lg text-center hover:from-green-500 hover:via-blue-500 hover:to-purple-500 transition font-semibold"
              >
                🌈🐦 Rainbow Bird
              </Link>
              <Link 
                to="/rainbow-duck" 
                className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 text-white px-4 py-3 rounded-lg text-center hover:from-yellow-500 hover:via-green-500 hover:to-cyan-500 transition font-semibold"
              >
                🌈🦆 Rainbow Duck
              </Link>
              <Link 
                to="/rainbow-lizard" 
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition font-semibold"
              >
                🌈🦎 Rainbow Lizard
              </Link>
              <Link 
                to="/rainbow-cow" 
                className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-white px-4 py-3 rounded-lg text-center hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 transition font-semibold"
              >
                🌈🐄 Rainbow Cow
              </Link>
              <Link 
                to="/rainbow-pig" 
                className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition font-semibold"
              >
                🌈🐷 Rainbow Pig
              </Link>
              <Link 
                to="/rainbow-dolphin" 
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white px-4 py-3 rounded-lg text-center hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 transition font-semibold"
              >
                🌈🐬 Rainbow Dolphin
              </Link>
              <Link 
                to="/rainbow-pufferfish" 
                className="bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:via-yellow-500 hover:to-cyan-500 transition font-semibold"
              >
                🌈🐡 Rainbow Pufferfish
              </Link>
              <Link 
                to="/rainbow-ladybug" 
                className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-white px-4 py-3 rounded-lg text-center hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 transition font-semibold"
              >
                🌈🐞 Rainbow Ladybug
              </Link>
              <Link 
                to="/rainbow-seal" 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition font-semibold"
              >
                🌈🦭 Rainbow Seal
              </Link>
              <Link 
                to="/rainbow-butterfly" 
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition font-semibold"
              >
                🌈🦋 Rainbow Butterfly
              </Link>
              <Link 
                to="/rainbow-turtle" 
                className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 text-white px-4 py-3 rounded-lg text-center hover:from-green-500 hover:via-cyan-500 hover:to-blue-500 transition font-semibold"
              >
                🌈🐢 Rainbow Turtle
              </Link>
              <Link 
                to="/rainbow-otter" 
                className="bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 text-white px-4 py-3 rounded-lg text-center hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 transition font-semibold"
              >
                🌈🦦 Rainbow Otter
              </Link>
              <Link 
                to="/rainbow-hamster" 
                className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 text-white px-4 py-3 rounded-lg text-center hover:from-yellow-500 hover:via-green-500 hover:to-blue-500 transition font-semibold"
              >
                🌈🐹 Rainbow Hamster
              </Link>
              <Link 
                to="/rainbow-fish" 
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-white px-4 py-3 rounded-lg text-center hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 transition font-semibold"
              >
                🌈🐠 Rainbow Fish
              </Link>
              <Link 
                to="/rainbow-elephant" 
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-4 py-3 rounded-lg text-center hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition font-semibold"
              >
                🌈🐘 Rainbow Elephant
              </Link>
              <Link 
                to="/rainbow-bunny" 
                className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 text-white px-4 py-3 rounded-lg text-center hover:from-rose-500 hover:via-pink-500 hover:to-fuchsia-500 transition font-semibold"
              >
                🌈🐰 Rainbow Bunny
              </Link>
              <Link 
                to="/rainbow-fox" 
                className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white px-4 py-3 rounded-lg text-center hover:from-orange-500 hover:via-red-500 hover:to-pink-500 transition font-semibold"
              >
                🌈🦊 Rainbow Fox
              </Link>
              <Link 
                to="/rainbow-deer" 
                className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-white px-4 py-3 rounded-lg text-center hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 transition font-semibold"
              >
                🌈🦌 Rainbow Deer
              </Link>
              <Link 
                to="/rainbow-bear" 
                className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 text-white px-4 py-3 rounded-lg text-center hover:from-amber-500 hover:via-orange-500 hover:to-red-500 transition font-semibold"
              >
                🌈🐻 Rainbow Bear
              </Link>
              <Link 
                to="/rainbow-panda" 
                className="bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 text-white px-4 py-3 rounded-lg text-center hover:from-slate-500 hover:via-gray-500 hover:to-zinc-500 transition font-semibold"
              >
                🌈🐼 Rainbow Panda
              </Link>
              <Link 
                to="/rainbow-capybara" 
                className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 text-white px-4 py-3 rounded-lg text-center hover:from-lime-500 hover:via-green-500 hover:to-emerald-500 transition font-semibold"
              >
                🌈🦫 Rainbow Capybara
              </Link>
              <Link 
                to="/rainbow-bilby" 
                className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 text-white px-4 py-3 rounded-lg text-center hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 transition font-semibold"
              >
                🌈🐭 Rainbow Bilby
              </Link>
              <Link 
                to="/rainbow-kangaroo" 
                className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white px-4 py-3 rounded-lg text-center hover:from-yellow-500 hover:via-amber-500 hover:to-orange-500 transition font-semibold"
              >
                🌈🦘 Rainbow Kangaroo
              </Link>
              <Link 
                to="/rainbow-seahorse" 
                className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 text-white px-4 py-3 rounded-lg text-center hover:from-teal-500 hover:via-cyan-500 hover:to-sky-500 transition font-semibold"
              >
                🌈🐴🌊 Rainbow Seahorse
              </Link>
              <Link 
                to="/rainbow-horse" 
                className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 text-white px-4 py-3 rounded-lg text-center hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-500 transition font-semibold"
              >
                🌈🐴 Rainbow Horse
              </Link>
              <Link 
                to="/rainbow-koala" 
                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-white px-4 py-3 rounded-lg text-center hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 transition font-semibold"
              >
                🌈🐨 Rainbow Koala
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-6xl text-center mb-4">⚡🕹️🦌</div>
            <h2 className="text-2xl font-bold text-purple-600 text-center mb-4">Pokemon Pets</h2>
            <p className="text-gray-700 mb-6 text-center">
              Enter the exciting world of Pokemon! These amazing creatures have unique abilities 
              and personalities, making them wonderful companions for trainers everywhere.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                to="/pikachu" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-3 rounded-lg text-center hover:from-yellow-500 hover:to-yellow-600 transition font-semibold"
              >
                ⚡ Pikachu
              </Link>
              <Link 
                to="/deerling" 
                className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-3 rounded-lg text-center hover:from-green-500 hover:to-green-600 transition font-semibold"
              >
                🦌 Deerling
              </Link>
              <Link 
                to="/azurill" 
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:to-blue-600 transition font-semibold"
              >
                💧 Azurill
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            Why Choose Animal Friends?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <div className="text-4xl mb-2">📚</div>
              <h4 className="font-semibold text-purple-600 mb-2">Expert Guides</h4>
              <p className="text-sm text-gray-700">
                Comprehensive information about each animal type
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">❤️</div>
              <h4 className="font-semibold text-pink-600 mb-2">Care Tips</h4>
              <p className="text-sm text-gray-700">
                Everything you need to know about proper care
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">✨</div>
              <h4 className="font-semibold text-purple-600 mb-2">Fun & Magic</h4>
              <p className="text-sm text-gray-700">
                Both real and mythical companions covered
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Animal Friends</title>
