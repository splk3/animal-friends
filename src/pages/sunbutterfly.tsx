import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const SunButterflyPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦋☀️ SunButterfly - Glittering Wings of Light"
      funFact={
        <><p className="text-purple-700 font-semibold">
            ✨ Fun Fact: SunButterfly glitter trails create natural pathways of light that other
            pollinators follow! They're like living fairy dust makers, spreading joy and sparkle everywhere.
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The SunButterfly is a magnificent butterfly that drops sparkly sunshine glitter as it flies, 
              creating trails of shimmering light wherever it goes. These enchanting creatures bring warmth, 
              beauty, and literal sparkle to any garden or space they grace with their presence.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">SunButterfly Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Golden SunButterfly</h3>
                <p className="text-sm text-gray-700">
                  Brilliant gold wings that shimmer in flight. Drops warm, golden glitter that 
                  dissolves into light. Most popular variety for gardens.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌅 Sunrise SunButterfly</h3>
                <p className="text-sm text-gray-700">
                  Orange and pink gradient wings. Glitter has peachy-coral tones. Creates beautiful 
                  dawn-like atmosphere wherever they fly.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">💫 Radiant SunButterfly</h3>
                <p className="text-sm text-gray-700">
                  Bright yellow with white highlights. Produces the most glitter with a dazzling, 
                  energetic sparkle trail. Very active flyers!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Amber SunButterfly</h3>
                <p className="text-sm text-gray-700">
                  Warm amber and bronze tones. Drops subtle, sophisticated glitter with a gentle 
                  glow. Perfect for calm, meditative gardens.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Creating a SunButterfly Garden</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌺</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Nectar Sources</h3>
                  <p className="text-gray-700">
                    Plant bright flowers that love sun: marigolds, zinnias, sunflowers, and lantana. 
                    SunButterflies prefer yellow, orange, and red blooms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Sunshine Glitter</h3>
                  <p className="text-gray-700">
                    The glitter they drop is biodegradable and beneficial! It provides energy to plants 
                    and creates a magical shimmer. Completely safe and disappears naturally in sunlight.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xml">☀️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Sunny Spaces</h3>
                  <p className="text-gray-700">
                    Need full sun exposure. They absorb solar energy and convert it to glitter. 
                    Provide basking stones and water sources for optimal health.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Host Plants</h3>
                  <p className="text-gray-700">
                    Include plants for caterpillars: parsley, dill, and fennel. SunButterfly 
                    caterpillars glow softly and are a delight to raise!
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default SunButterflyPage

export const Head: HeadFC = () => <title>SunButterfly - Animal Friends</title>
