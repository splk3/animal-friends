import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const UnicornsPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦄 Unicorns - Pure and Magical"
      funFact={
        <><p className="text-purple-700 font-semibold">
            ✨ Mythical Fact: Unicorn horns (called alicorns) were believed to have powerful
            healing properties and could neutralize poison!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              Unicorns are symbols of purity, grace, and magic. These elegant creatures with their 
              distinctive single horn are known for their healing powers and connection to nature. 
              They represent everything beautiful and good in the world.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Unicorns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌸 Forest Unicorns</h3>
                <p className="text-sm text-gray-700">
                  Dwell in enchanted forests. Their horns can purify water and heal sickness. 
                  Shy but kind.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌙 Moon Unicorns</h3>
                <p className="text-sm text-gray-700">
                  Silver-white with luminescent manes. Appear at night and bring prophetic 
                  dreams.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Rainbow Unicorns</h3>
                <p className="text-sm text-gray-700">
                  Multicolored and playful. They spread joy and can create rainbows with their 
                  magic.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">⭐ Celestial Unicorns</h3>
                <p className="text-sm text-gray-700">
                  Star-blessed and incredibly rare. They can fly and navigate by starlight.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Mythical Care Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌳</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Environment</h3>
                  <p className="text-gray-700">
                    Pristine natural settings - enchanted glades, moonlit meadows, or crystal 
                    caves. They cannot thrive in polluted areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌺</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Pure spring water, wildflowers, moonbeams, and starlight. Some legends say 
                    they can subsist entirely on magic.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💖</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Bonding</h3>
                  <p className="text-gray-700">
                    Unicorns only appear to those pure of heart. Approach with kindness, honesty, 
                    and respect for nature.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Magic Care</h3>
                  <p className="text-gray-700">
                    Their horn must never be damaged. Brush their mane with silver combs and 
                    speak words of kindness daily.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default UnicornsPage

export const Head: HeadFC = () => <title>Unicorns - Animal Friends</title>
