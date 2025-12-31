import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const SealPage: React.FC = () => {
  return (
    <Layout pageTitle="🦭 Seals - Playful Marine Mammals">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              While seals aren't traditional pets (they're wild marine mammals!), learning about 
              them can inspire conservation efforts. Seals are intelligent, social, and fascinating 
              creatures that play a vital role in marine ecosystems.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Seals</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦭 Harbor Seal</h3>
                <p className="text-sm text-gray-700">
                  Most common seal species. Found in coastal waters of the Northern Hemisphere.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">❄️ Harp Seal</h3>
                <p className="text-sm text-gray-700">
                  Known for their adorable white pups. Live in Arctic and North Atlantic waters.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐘 Elephant Seal</h3>
                <p className="text-sm text-gray-700">
                  The largest seals. Males have distinctive trunk-like noses and can weigh up to 8,800 lbs.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌊 Leopard Seal</h3>
                <p className="text-sm text-gray-700">
                  Antarctic predator. Named for their spotted coat and powerful jaws.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Seal Facts & Conservation</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Seals live in oceans worldwide, from polar regions to temperate coasts. 
                    They haul out on beaches, rocks, and ice to rest and give birth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Carnivores that eat fish, squid, and crustaceans. They're excellent hunters 
                    and can dive hundreds of feet deep.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤿</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Special Abilities</h3>
                  <p className="text-gray-700">
                    Can hold breath for up to 2 hours, dive to 1,500 feet, and see well in 
                    murky water. Their whiskers detect prey vibrations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Conservation</h3>
                  <p className="text-gray-700">
                    Support seal conservation by reducing ocean pollution, protecting marine 
                    habitats, and respecting wildlife viewing guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Seals can sleep underwater and automatically come up for air 
            without waking up!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SealPage

export const Head: HeadFC = () => <title>Seals - Animal Friends</title>
