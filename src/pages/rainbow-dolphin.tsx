import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowDolphinPage: React.FC = () => {
  return (
    <Layout pageTitle="🌈🐬 Rainbow Dolphin - Spectrum of the Sea">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Dolphin combines the intelligence and playfulness of dolphins with stunning 
              rainbow-colored patterns. These joyful marine mammals create colorful splashes when they 
              leap from the water, spreading happiness wherever they swim.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Full Spectrum Flow</h3>
                <p className="text-sm text-gray-700">
                  Colors flow from red at the rostrum through the full rainbow to violet at 
                  the tail flukes. Creates stunning displays when leaping.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Shimmer Pattern</h3>
                <p className="text-sm text-gray-700">
                  Scales shimmer and shift through rainbow colors as they move. Appears to 
                  change color based on angle and lighting.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Striped Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Bold rainbow stripes run horizontally along the body. Each stripe is a 
                  distinct bright color. Very eye-catching!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💫 Sparkle Spots</h3>
                <p className="text-sm text-gray-700">
                  Covered in rainbow-colored spots that sparkle in sunlight. Creates a 
                  dazzling effect underwater and in the air.
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
                    Need large ocean spaces or enormous tanks. Highly social - must live with 
                    other dolphins. Prefer warm, clear waters where colors show best.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Fish, squid, and crustaceans. Need about 30 pounds of food daily. 
                    Same dietary needs as regular dolphins - no special rainbow nutrition required!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Intelligence</h3>
                  <p className="text-gray-700">
                    Extremely intelligent like regular dolphins. Love learning tricks and playing 
                    games. Can communicate with clicks, whistles, and body language.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎪</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Features</h3>
                  <p className="text-gray-700">
                    When they breach, they leave rainbow mist in the air! Their echolocation 
                    clicks have a musical quality. Natural performers who love showing off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Dolphins can create actual mini rainbows with their splash! 
            When they swim in groups, they create a moving rainbow wave in the ocean!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowDolphinPage

export const Head: HeadFC = () => <title>Rainbow Dolphin - Animal Friends</title>
