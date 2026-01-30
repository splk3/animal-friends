import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowDuckPage: React.FC = () => {
  return (
    <Layout pageTitle="🦆🌈 Rainbow Duck - Prismatic Waterfowl" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Duck is a delightful waterfowl with feathers displaying vibrant rainbow colors. 
              These charming ducks combine the playful nature and easy care of regular ducks with the 
              stunning visual appeal of rainbow plumage that shimmers beautifully on water.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Classic Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Full spectrum of colors flowing from head to tail feathers. Colors arranged in 
                  natural rainbow order, creating perfect harmony.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Mallard Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Rainbow-colored head with iridescent neck ring and multi-colored body. Wing 
                  feathers display spectrum when spread in flight.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Spotted Rainbow</h3>
                <p className="text-sm text-gray-700">
                  White base with colorful rainbow spots throughout. Creates a confetti-like 
                  appearance that looks magical on water.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Gradient Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Smooth color blending from one hue to another. Feathers shimmer with different 
                  colors as the duck moves and dives.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Water Access</h3>
                  <p className="text-gray-700">
                    Need pond, pool, or large water container for swimming. Rainbow colors look 
                    most stunning on water! Fresh drinking water separate from swimming area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Duck pellets, fresh greens, and occasional treats. Can forage for insects 
                    naturally. Grit helps digestion. Same needs as regular ducks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Shelter</h3>
                  <p className="text-gray-700">
                    Secure nighttime housing to protect from predators. Clean, dry bedding. 
                    Minimum 3-4 square feet per duck. Good ventilation essential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Social Needs</h3>
                  <p className="text-gray-700">
                    Keep at least 2-3 ducks together as they're social birds. Rainbow Ducks are 
                    friendly and entertaining to watch, especially in groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Ducks create colorful ripples on water when they swim! Their 
            feathers are water-resistant like regular ducks, making their rainbow colors permanent.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowDuckPage

export const Head: HeadFC = () => <title>Rainbow Duck - Animal Friends</title>
