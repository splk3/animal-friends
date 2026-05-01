import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainbowButterflyPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🌈🦋 Rainbow Butterfly - Wings of Spectrum"
      funFact={
        <><p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Butterflies can taste with their feet! When they land on flowers,
            they know immediately if the nectar is sweet enough. Their wings never fade!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The Rainbow Butterfly showcases nature's most spectacular colors on delicate wings. 
              These enchanting insects flutter through gardens creating living rainbows, bringing 
              joy, pollinating flowers, and leaving sparkle trails in their wake.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Wing Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Full Spectrum Wings</h3>
                <p className="text-sm text-gray-700">
                  Each wing displays complete rainbow from red to violet. Colors blend 
                  beautifully creating gradient effect when wings beat.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Stained Glass</h3>
                <p className="text-sm text-gray-700">
                  Wings divided into sections like stained glass, each a different rainbow 
                  color. Sunlight through wings creates colorful shadows.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Ombre Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Subtle rainbow gradient across wings. Soft, pastel tones or bold vivid 
                  colors depending on variety. Very elegant!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💫 Holographic Shimmer</h3>
                <p className="text-sm text-gray-700">
                  Wings shimmer with rainbow iridescence that shifts with movement. Like 
                  flying opals or soap bubbles. Absolutely mesmerizing!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care & Habitat</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌸</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Garden Environment</h3>
                  <p className="text-gray-700">
                    Need flower-rich gardens with nectar sources. Variety of blooming plants 
                    essential. Provide sunny spots and wind protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍯</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Nectar from flowers is main food source. Also enjoy fruit juices and 
                    tree sap. Help pollinate gardens while feeding!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦋</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Life Cycle</h3>
                  <p className="text-gray-700">
                    Transform from rainbow caterpillar to rainbow chrysalis to beautiful 
                    butterfly. Each stage displays rainbow colors. Magical to watch!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Traits</h3>
                  <p className="text-gray-700">
                    Leave rainbow dust trails when flying! Their presence makes flowers bloom 
                    more vibrantly. Gentle and bring peaceful energy to gardens.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainbowButterflyPage

export const Head: HeadFC = () => <title>Rainbow Butterfly - Animal Friends</title>
