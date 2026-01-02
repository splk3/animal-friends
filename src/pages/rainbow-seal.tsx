import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowSealPage: React.FC = () => {
  return (
    <Layout pageTitle="🌈🦭 Rainbow Seal - Aquatic Rainbow Beauty">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Seal combines the playful charm of seals with stunning rainbow-colored 
              fur. These marine mammals create colorful waves when they swim and bring joy to 
              everyone who sees them diving and playing in the water!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌊 Flowing Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Rainbow colors flow from nose to tail flippers. Creates beautiful gradient 
                  effect especially visible when wet.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Shimmer Coat</h3>
                <p className="text-sm text-gray-700">
                  Fur shimmers with rainbow iridescence. Sparkles in sunlight when they 
                  haul out on rocks or ice.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Patchy Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Large patches of different rainbow colors. Each seal has unique pattern 
                  like fingerprints. Very distinctive!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Spotted Spectrum</h3>
                <p className="text-sm text-gray-700">
                  Covered in rainbow-colored spots over lighter base color. Spots sparkle 
                  when they dive and surface.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Need ocean or large pool access plus land for resting. Like both temperate 
                    and cold waters. Enjoy rocky shores and beaches.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Fish, squid, and crustaceans. Same diet as regular seals. Need about 
                    5-6% of body weight in food daily. Excellent hunters.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎪</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Behavior</h3>
                  <p className="text-gray-700">
                    Playful, intelligent, and social. Love swimming in groups creating rainbow 
                    waves. Can be trained and enjoy interacting with caretakers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌈</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Feature</h3>
                  <p className="text-gray-700">
                    Leave rainbow trails in the water when swimming! When they breach, water 
                    droplets create mini rainbows. Natural water show performers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Seals can hold their breath for up to 30 minutes! Their whiskers 
            shimmer with rainbow colors and help them detect prey in murky water!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowSealPage

export const Head: HeadFC = () => <title>Rainbow Seal - Animal Friends</title>
