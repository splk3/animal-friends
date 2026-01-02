import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const MerCatPage: React.FC = () => {
  return (
    <Layout pageTitle="🐱🧜‍♀️ MerCat - Aquatic Feline Magic">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The MerCat is a captivating blend of a curious cat and the graceful elegance of a mermaid. 
              These enchanting companions love both lounging in sunny spots and swimming in crystal-clear waters, 
              bringing the best of land and sea into your home.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">MerCat Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌊 Coral MerCat</h3>
                <p className="text-sm text-gray-700">
                  Orange tabby patterns with coral-pink fins. Independent yet affectionate, 
                  perfect for experienced aquatic pet owners.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💎 Crystal MerCat</h3>
                <p className="text-sm text-gray-700">
                  Silvery-white coat with translucent, shimmering tail fins. Elegant swimmers 
                  who love moonlit pools.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌺 Tropical MerCat</h3>
                <p className="text-sm text-gray-700">
                  Multi-colored calico patterns with vibrant fins. Playful and curious, 
                  they love exploring both land and water.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌙 Midnight MerCat</h3>
                <p className="text-sm text-gray-700">
                  Sleek black coat with deep blue iridescent fins. Mysterious and magical, 
                  excellent hunters in water.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Dual Habitat</h3>
                  <p className="text-gray-700">
                    MerCats need access to both dry land and water. A home with a pool or large 
                    aquarium attachment is ideal. They spend about 50% of time in each environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    High-quality cat food mixed with fresh fish and seafood. They love sushi-grade 
                    salmon and tuna treats. Fresh water always available (not saltwater for drinking).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Brush their fur regularly and keep their fins moisturized with special oil. 
                    They groom themselves but appreciate help with their tail scales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎣</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Entertainment</h3>
                  <p className="text-gray-700">
                    Provide both cat toys and aquatic toys. They enjoy fishing games, floating toys, 
                    and diving for treats. Very intelligent and need mental stimulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Fun Fact: MerCats can purr both on land and underwater, creating beautiful musical 
            bubbles when swimming. They're also known to befriend fish!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default MerCatPage

export const Head: HeadFC = () => <title>MerCat - Animal Friends</title>
