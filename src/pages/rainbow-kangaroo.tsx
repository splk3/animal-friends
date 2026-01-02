import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowKangarooPage: React.FC = () => {
  return (
    <Layout pageTitle="🌈🦘 Rainbow Kangaroo - Colorful Kangaroos">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Kangaroo combines the characteristics of kangaroos with stunning 
              rainbow-colored patterns. These magnificent creatures display all the colors of the 
              spectrum, bringing joy and wonder wherever they go!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Full Spectrum</h3>
                <p className="text-sm text-gray-700">
                  Colors flow smoothly across the body creating a beautiful gradient effect 
                  from head to tail.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Shimmer Pattern</h3>
                <p className="text-sm text-gray-700">
                  Coat shimmers with rainbow iridescence that shifts and sparkles with 
                  movement and light.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Color Patches</h3>
                <p className="text-sm text-gray-700">
                  Large patches of different rainbow colors distributed across the body. 
                  Each one is unique!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Rainbow Stripes</h3>
                <p className="text-sm text-gray-700">
                  Bold rainbow stripes create a dynamic, eye-catching appearance. Very 
                  distinctive and beautiful!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Needs similar environment to regular kangaroos with appropriate space, 
                    shelter, and enrichment. Rainbow coloring doesn't change care requirements!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍽️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Same nutritional needs as regular kangaroos. Balanced diet maintains 
                    health and vibrant rainbow coloring.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💖</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Temperament</h3>
                  <p className="text-gray-700">
                    Same personality as regular kangaroos. The rainbow colors just make them 
                    even more special and eye-catching!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌈</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Feature</h3>
                  <p className="text-gray-700">
                    Leave rainbow trails when moving! Colors become more vibrant when happy 
                    and healthy. Bring extra joy to everyone around them!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Kangaroos create colorful displays wherever they go! 
            Their presence makes the environment more vibrant and joyful!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowKangarooPage

export const Head: HeadFC = () => <title>Rainbow Kangaroo - Animal Friends</title>
