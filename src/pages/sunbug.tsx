import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const SunBugPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐞☀️ SunBug - Sparkly Solar Ladybug"
      funFact={
        <><p className="text-purple-700 font-semibold">
            ☀️ Fun Fact: SunBugs can produce tiny sparkle bursts when happy, creating miniature
            firework displays in your garden! Their glow is brightest when they find aphids to eat.
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The SunBug is a magical ladybug variety that sparkles and shines like the sun itself. 
              These delightful insects bring both natural pest control and radiant sunshine to gardens, 
              creating a dazzling display wherever they go with their luminous, glittering appearance.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">SunBug Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Golden SunBug</h3>
                <p className="text-sm text-gray-700">
                  Bright golden shell with a warm, gentle glow. Most common variety. Perfect for 
                  gardens and greenhouses with a steady, comforting shine.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💛 Amber SunBug</h3>
                <p className="text-sm text-gray-700">
                  Deep amber coloring with orange sparkles. Creates a warm afternoon glow. 
                  Excellent for fruit gardens and vegetable patches.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌟 Radiant SunBug</h3>
                <p className="text-sm text-gray-700">
                  Brilliant yellow with the brightest sparkle. High-energy variety that produces 
                  noticeable warmth. Great for large outdoor gardens.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌞 Dawn SunBug</h3>
                <p className="text-sm text-gray-700">
                  Soft peach and gold tones with a gentle sunrise glow. Calmer disposition. 
                  Perfect for indoor plants and terrariums.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care & Habitat</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌻</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Environment</h3>
                  <p className="text-gray-700">
                    Thrives in sunny gardens with diverse flowering plants. Their glow supplements 
                    sunlight on cloudy days! No special housing needed - just healthy gardens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Feed on aphids, mites, and garden pests just like regular ladybugs. They also 
                    photosynthesize a bit of energy from sunlight, staying active longer than regular ladybugs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Special Qualities</h3>
                  <p className="text-gray-700">
                    Leave trails of sparkles as they walk and fly. Their glow helps plants grow and 
                    deters many pests naturally. Absolutely magical to watch at dusk!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Garden Benefits</h3>
                  <p className="text-gray-700">
                    Double benefit: pest control AND plant growth boost! Their gentle warmth and 
                    light extend growing seasons. A single SunBug can support a small garden area.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default SunBugPage

export const Head: HeadFC = () => <title>SunBug - Animal Friends</title>
