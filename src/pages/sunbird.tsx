import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const SunBirdPage: React.FC = () => {
  return (
    <Layout pageTitle="🐦☀️ SunBird - Radiant Feathered Light" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The SunBird is a magnificent avian companion that radiates warmth and light like a miniature sun. 
              These luminous birds bring perpetual sunshine to any space, filling homes with their gentle glow, 
              cheerful songs, and toasty warmth year-round.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">SunBird Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌅 Dawn SunBird</h3>
                <p className="text-sm text-gray-700">
                  Peach and coral plumage with a soft morning glow. Gentle warmth perfect for 
                  waking up. Sings the most beautiful dawn chorus.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">☀️ Radiant SunBird</h3>
                <p className="text-sm text-gray-700">
                  Brilliant golden feathers that shine intensely. Brings powerful warmth and bright 
                  light. Most energetic and vibrant variety.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌞 Amber SunBird</h3>
                <p className="text-sm text-gray-700">
                  Orange and yellow plumage with steady, comforting warmth. Perfect balance of 
                  light and heat. Excellent for indoor aviaries.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🔆 Noon SunBird</h3>
                <p className="text-sm text-gray-700">
                  Pure yellow with white highlights. Brightest glow at midday. Highly active 
                  and fills spaces with cheerful energy.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Large, well-ventilated aviary. Heat-resistant materials recommended. They glow 
                    24/7 but dim at night. Provide good air circulation for comfort.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Light & Heat</h3>
                  <p className="text-gray-700">
                    SunBirds maintain ambient temperature of 75-80°F in their vicinity. No additional 
                    heating needed. Can help reduce energy bills in winter!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    Quality bird seed, nectar, and solar-enriched supplements. Fresh fruits daily. 
                    They can absorb some energy from light but still need regular nutrition.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Behavior</h3>
                  <p className="text-gray-700">
                    Very social and love to sing. Their songs have a warming effect on listeners. 
                    They're happiest with companion birds and lots of attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ☀️ Fun Fact: SunBirds can boost the growth of nearby plants with their radiant energy, 
            and their feathers naturally repel darkness, making them natural nightlights!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SunBirdPage

export const Head: HeadFC = () => <title>SunBird - Animal Friends</title>
