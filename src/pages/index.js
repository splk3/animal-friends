import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Animal Friends!">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-purple-700 mb-6">
            Discover the perfect animal companion for your life! Whether you're looking for a 
            real-world pet or dreaming of mythical creatures, we've got you covered.
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
                className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-3 rounded-lg text-center hover:from-purple-500 hover:to-purple-600 transition font-semibold col-span-2"
              >
                🔥 Phoenixes
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

export const Head = () => <title>Home - Animal Friends</title>
