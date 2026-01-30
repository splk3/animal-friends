import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const MuppyPage: React.FC = () => {
  return (
    <Layout pageTitle="🐶🏺 Muppy - Ancient Puppy Wrapped in Mystery" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Muppy is an adorable mix of a mummy and a puppy - combining ancient Egyptian mystique 
              with puppy playfulness. These bandage-wrapped companions are loyal, energetic, and come 
              with thousands of years of wisdom (though they still love chasing their tails).
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Muppy Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🏺 Pharaoh Muppy</h3>
                <p className="text-sm text-gray-700">
                  Golden bandages with hieroglyphic patterns. Regal bearing but still loves belly 
                  rubs. Often wears tiny golden collars.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">📜 Papyrus Muppy</h3>
                <p className="text-sm text-gray-700">
                  Wrapped in ancient papyrus scrolls instead of bandages. Each scroll contains 
                  forgotten wisdom. Very scholarly!
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">💎 Tomb Muppy</h3>
                <p className="text-sm text-gray-700">
                  Adorned with jewels and amulets woven into bandages. Protected by ancient 
                  magic. Excellent guard dogs despite being cute.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌙 Night Muppy</h3>
                <p className="text-sm text-gray-700">
                  Dark blue or black bandages. More active at night. Glow softly under moonlight 
                  like ancient spirits.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Environment</h3>
                  <p className="text-gray-700">
                    Prefer warm, dry climates (like ancient Egypt!). Need a cozy tomb-like space 
                    to sleep in. Enjoy being surrounded by artifacts and ancient decorations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦴</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Regular dog food works perfectly! Some enjoy treats shaped like pyramids. 
                    Don't need to eat much - sustained partly by ancient magic.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎀</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Bandage Maintenance</h3>
                  <p className="text-gray-700">
                    Bandages are self-cleaning and never smell! May need rewrapping occasionally 
                    if they get too enthusiastic during play. Use cotton or linen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Activities</h3>
                  <p className="text-gray-700">
                    Love playing fetch with ancient relics (toy ones!). Enjoy learning tricks 
                    from hieroglyphic command cards. Surprisingly athletic despite bandages!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Fun Fact: Muppies can understand all ancient languages! They sometimes bark in 
            hieroglyphics when excited. Their tail wags leave trails of golden dust!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default MuppyPage

export const Head: HeadFC = () => <title>Muppy - Animal Friends</title>
