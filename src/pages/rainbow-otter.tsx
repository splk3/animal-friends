import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowOtterPage: React.FC = () => {
  return (
    <Layout pageTitle="🌈🦦 Rainbow Otter - Playful Aquatic Colors" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Otter combines the playful, adorable nature of otters with spectacular 
              rainbow-colored fur. These social aquatic mammals bring joy with their antics while 
              creating colorful splashes and leaving rainbow trails in the water!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Coat Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Flowing Gradient</h3>
                <p className="text-sm text-gray-700">
                  Rainbow colors flow smoothly from head to tail. Especially beautiful when 
                  swimming - looks like a rainbow ribbon in water!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Shimmer Fur</h3>
                <p className="text-sm text-gray-700">
                  Dense otter fur shimmers with rainbow iridescence. Waterproof coat sparkles 
                  when wet, creating spectacular displays.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Patchy Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Large rainbow-colored patches across body. Each otter has unique pattern. 
                  Very distinctive and easy to identify!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Striped Spectrum</h3>
                <p className="text-sm text-gray-700">
                  Rainbow stripes run along body. Creates dynamic effect when they twist 
                  and play. Most energetic-looking variety!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Need clean water for swimming - river, pond, or large pool. Also need 
                    land area for denning and playing. Very active - space essential!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Fish, crustaceans, and aquatic invertebrates. Eat 15-25% of body weight 
                    daily! Excellent hunters and love to play with food.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Playful Nature</h3>
                  <p className="text-gray-700">
                    Extremely playful and social! Love slides, toys, and games. Best kept in 
                    pairs or groups. Highly intelligent and entertaining to watch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌈</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Ability</h3>
                  <p className="text-gray-700">
                    Create rainbow water splashes when diving! Hold hands while floating (extra 
                    cute with rainbow paws!). Leave colorful paw prints when wet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Otters use rocks as tools and pass favorite rocks down through 
            families! They create mini rainbows every time they shake water off their fur!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowOtterPage

export const Head: HeadFC = () => <title>Rainbow Otter - Animal Friends</title>
