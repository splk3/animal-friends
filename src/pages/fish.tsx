import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const FishPage: React.FC = () => {
  return (
    <Layout pageTitle="🐠 Fish - Serene Aquatic Friends">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Fish offer a peaceful, low-maintenance pet option that brings beauty and tranquility 
              to any space. Watching fish swim has been shown to reduce stress and promote 
              relaxation.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Aquarium Fish</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐡 Goldfish</h3>
                <p className="text-sm text-gray-700">
                  Hardy, beautiful, and can live for decades with proper care. Classic starter 
                  fish.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐠 Betta Fish</h3>
                <p className="text-sm text-gray-700">
                  Vibrant colors and flowing fins. Low maintenance and perfect for small tanks.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐟 Guppies</h3>
                <p className="text-sm text-gray-700">
                  Colorful, active, and easy to breed. Great community fish for beginners.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎏 Tetras</h3>
                <p className="text-sm text-gray-700">
                  Small, peaceful schooling fish. Best kept in groups of 6 or more.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏺</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Tank Setup</h3>
                  <p className="text-gray-700">
                    Appropriate sized tank with filter, heater (for tropical fish), and proper 
                    lighting. Never put fish in a bowl!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Water Quality</h3>
                  <p className="text-gray-700">
                    Regular water testing and changes. Maintain proper pH, temperature, and 
                    chemical balance for your fish species.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍤</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Feeding</h3>
                  <p className="text-gray-700">
                    Species-appropriate food once or twice daily. Don't overfeed - this is the 
                    #1 cause of fish health problems.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Environment</h3>
                  <p className="text-gray-700">
                    Live or silk plants, hiding spots, and appropriate decorations to create a 
                    natural, stress-free habitat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Fish can recognize their owners and may swim to the front of the tank 
            when they see you!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default FishPage

export const Head: HeadFC = () => <title>Fish - Animal Friends</title>
