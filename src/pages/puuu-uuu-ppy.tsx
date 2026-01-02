import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const PuuuUuuPpyPage: React.FC = () => {
  return (
    <Layout pageTitle="👻🐶 Puuu-uuu-ppy - Spooky Yet Adorable Ghost Puppy">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Puuu-uuu-ppy is an enchanting blend of ghost and puppy - spooky and yet still 
              incredibly cute! These ethereal companions float through walls, glow in the dark, and 
              give the softest, most supernatural cuddles. Their "puuu-uuu" barks are both haunting 
              and heartwarming.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Ghost Puppy Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">👻 Classic White Ghost</h3>
                <p className="text-sm text-gray-700">
                  Traditional white and translucent. Glow softly in darkness. Leave ectoplasmic 
                  paw prints that fade after a few minutes.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌙 Shadow Puuu-uuu-ppy</h3>
                <p className="text-sm text-gray-700">
                  Dark purple or black with glowing eyes. Blend into shadows. Only visible 
                  outline when moving. Very mysterious!
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Sparkle Ghost</h3>
                <p className="text-sm text-gray-700">
                  Shimmer with colorful spectral lights. Like living aurora borealis. Change 
                  colors based on mood and emotions.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌫️ Mist Puuu-uuu-ppy</h3>
                <p className="text-sm text-gray-700">
                  Made of swirling mist and fog. Can change shape slightly. Often surrounded 
                  by gentle clouds. Extra cuddly!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Supernatural Care Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏚️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Can pass through walls so no cage needed! Enjoy cozy ghost houses or 
                    floating beds. Prefer dimly lit spaces. Love attics and basements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Eat regular dog food but it phases through them (comically!). Actually 
                    nourished by love, attention, and moonlight. Zero cleanup required!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👻</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Special Abilities</h3>
                  <p className="text-gray-700">
                    Float and fly through air and walls. Become invisible at will. Can carry 
                    small objects with telekinesis. Glow brighter when happy!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎃</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Temperament</h3>
                  <p className="text-gray-700">
                    Despite spooky appearance, they're sweet and gentle! Love playing with 
                    ghost toys. Protective but never scary to family. Perfect Halloween companions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            👻 Spooky Fact: Puuu-uuu-ppies say "puuu-uuu" instead of "woof"! Their howls sound 
            like gentle wind chimes. They can sense spirits and always know when Halloween is coming!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PuuuUuuPpyPage

export const Head: HeadFC = () => <title>Puuu-uuu-ppy - Animal Friends</title>
