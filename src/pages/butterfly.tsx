import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const ButterflyPage: React.FC = () => {
  return (
    <Layout pageTitle="🦋 Butterflies - Wings of Wonder">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Butterflies are enchanting creatures that bring beauty and magic to any garden. 
              While not traditional pets, they can be attracted to your yard and even raised from 
              caterpillars, offering a wonderful educational experience.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Garden Butterflies</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦋 Monarch Butterfly</h3>
                <p className="text-sm text-gray-700">
                  Orange and black wings. Famous for their incredible migration. Feed on milkweed plants.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💙 Blue Morpho</h3>
                <p className="text-sm text-gray-700">
                  Stunning iridescent blue wings. Large and striking, found in tropical regions.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🖤 Swallowtail</h3>
                <p className="text-sm text-gray-700">
                  Large with distinctive tail-like extensions. Many colorful species across continents.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🟡 Painted Lady</h3>
                <p className="text-sm text-gray-700">
                  Orange, black and white pattern. Found worldwide and easy to attract to gardens.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Creating a Butterfly Garden</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌺</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Nectar Plants</h3>
                  <p className="text-gray-700">
                    Plant butterfly-friendly flowers like zinnias, lantana, butterfly bush, coneflowers, 
                    and verbena. Butterflies prefer bright colors, especially purple, red, and yellow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Host Plants</h3>
                  <p className="text-gray-700">
                    Include plants for caterpillars: milkweed for monarchs, parsley for swallowtails, 
                    nettles for painted ladies. These are essential for the butterfly lifecycle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Sunny Spots</h3>
                  <p className="text-gray-700">
                    Butterflies are cold-blooded and need sunny areas to warm up. Provide flat stones 
                    for basking and shallow water sources for drinking.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <h3 className="font-semibold text-purple-600">No Pesticides</h3>
                  <p className="text-gray-700">
                    Avoid all pesticides and herbicides. These chemicals harm butterflies and caterpillars. 
                    Embrace natural pest control methods instead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Butterflies taste with their feet! They have taste receptors on their legs 
            that help them identify plants for laying eggs.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ButterflyPage

export const Head: HeadFC = () => <title>Butterflies - Animal Friends</title>
