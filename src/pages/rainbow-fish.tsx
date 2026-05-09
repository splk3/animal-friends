import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainbowFishPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🌈🐠 Rainbow Fish - Aquarium Spectrum"
      funFact="🌈 Fun Fact: Rainbow Fish can see ultraviolet light! Their scales contain special crystals that create the rainbow effect. Schools move in perfect rainbow harmony!"
    >
      <p className="text-lg text-gray-700 mb-6">
              The Rainbow Fish brings spectacular color to any aquarium with scales that shimmer 
              in all rainbow hues. These peaceful freshwater fish are perfect for community tanks, 
              adding living rainbows to your underwater world!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Scale Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Full Spectrum Scales</h3>
                <p className="text-sm text-gray-700">
                  Each scale reflects a different rainbow color. Creates mosaic effect. 
                  Under aquarium lights, absolutely dazzling!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Iridescent Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Scales shimmer and change colors with movement and light angle. Like 
                  liquid rainbows swimming. Most popular variety!
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Gradient Flow</h3>
                <p className="text-sm text-gray-700">
                  Color transitions smoothly from head to tail. Red at head flows through 
                  spectrum to violet at tail. Very elegant!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Metallic Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Scales have metallic finish in rainbow colors. Sparkle brilliantly. 
                  Fins especially vibrant and flowing.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Tank Setup</h3>
                  <p className="text-gray-700">
                    Minimum 20-gallon tank for school of 6+. Need plants, hiding spots, and 
                    open swimming space. Good filtration and stable water parameters essential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍤</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Omnivores - quality flakes, pellets, frozen/live foods. Variety maintains 
                    vibrant colors. Feed small amounts 2-3 times daily.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Social Behavior</h3>
                  <p className="text-gray-700">
                    Peaceful schooling fish. Keep in groups of 6+ for happiness. Get along 
                    well with other peaceful community fish. Active swimmers!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌈</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Feature</h3>
                  <p className="text-gray-700">
                    School creates moving rainbow effect in tank! Males display brighter colors 
                    during courtship. Colors intensify when happy and healthy.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainbowFishPage

export const Head: HeadFC = () => <title>Rainbow Fish - Animal Friends</title>
