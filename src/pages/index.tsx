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
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold col-span-2"
              >
                🦖 Velociraptor
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
                className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition font-semibold col-span-2"
              >
                🌈🐷 Rainbow Pig
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-6xl text-center mb-4">⚡🎮🦌</div>
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
                to="/azuril" 
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-3 rounded-lg text-center hover:from-blue-500 hover:to-blue-600 transition font-semibold"
              >
                💧 Azuril
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
