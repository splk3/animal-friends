import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainbowLadybugPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🌈🐞 Rainbow Ladybug - Tiny Colorful Friend"
      funFact="🌈 Fun Fact: Rainbow Ladybugs can create tiny rainbows when sunlight hits their wings! A group of them in flight looks like a flying rainbow!"
    >
      <p className="text-lg text-gray-700 mb-6">
              The Rainbow Ladybug is an adorable tiny companion with a shell painted in all the 
              colors of the rainbow. These beneficial insects bring good luck and garden health 
              while dazzling with their spectacular spectrum colors!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Gradient Shell</h3>
                <p className="text-sm text-gray-700">
                  Shell transitions smoothly through rainbow colors from head to abdomen. 
                  Black spots overlay the colors creating perfect contrast.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Color Block</h3>
                <p className="text-sm text-gray-700">
                  Shell divided into color sections - each spot is a different rainbow color. 
                  Creates a patchwork rainbow effect.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Holographic</h3>
                <p className="text-sm text-gray-700">
                  Shell shimmers with iridescent rainbow effect. Changes appearance based on 
                  angle of light. Like living jewelry!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Metallic Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Shell has metallic finish in rainbow colors. Sparkles in sunlight. Most 
                  brilliant variety!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care & Benefits</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Garden Habitat</h3>
                  <p className="text-gray-700">
                    Perfect for gardens! Need flowers, plants, and natural spaces. Create small 
                    shelter areas with leaves and stones. Love sunny spots.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦗</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Eat aphids and garden pests - natural pest control! Also enjoy pollen, 
                    nectar, and honeydew. Help keep gardens healthy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍀</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Good Luck Charm</h3>
                  <p className="text-gray-700">
                    Bring extra good luck with their rainbow colors! Landing on you is 
                    considered especially fortunate. Make gardens more cheerful.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Ability</h3>
                  <p className="text-gray-700">
                    Leave tiny rainbow sparkle trails when they fly! Their presence makes 
                    plants grow healthier and more colorful. Natural garden enhancers!
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainbowLadybugPage

export const Head: HeadFC = () => <title>Rainbow Ladybug - Animal Friends</title>
