import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const SunDogPage: React.FC = () => {
  return (
    <Layout pageTitle="🐕☀️ SunDog - Radiant Warmth Companion" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The SunDog is a remarkable canine companion that radiates light and warmth like the sun itself. 
              These glowing pups bring endless sunshine and cozy warmth to any home, making them perfect 
              for those who love bright, cheerful energy and perpetual warmth.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">SunDog Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">☀️ Golden SunDog</h3>
                <p className="text-sm text-gray-700">
                  Brilliant golden coat that glows with warm light. Perfect family companion with 
                  a gentle, constant warmth like morning sunshine.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌅 Dawn SunDog</h3>
                <p className="text-sm text-gray-700">
                  Orange and pink hues in their fur. Glow is softest in mornings, gradually 
                  brightening throughout the day. Very gentle.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌞 Noon SunDog</h3>
                <p className="text-sm text-gray-700">
                  Bright yellow coat with intense radiance. Most energetic variety, perfect for 
                  active families. Produces strong, cheerful warmth.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌇 Sunset SunDog</h3>
                <p className="text-sm text-gray-700">
                  Deep amber and crimson tones. Their glow is calming and warm, perfect for 
                  evening cuddles and creating cozy atmospheres.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Light Management</h3>
                  <p className="text-gray-700">
                    SunDogs naturally dim their glow when sleeping. Provide sunglasses for visitors 
                    who are sensitive to bright light. They can control intensity with training.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌡️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Temperature Control</h3>
                  <p className="text-gray-700">
                    Maintain good home ventilation. SunDogs keep rooms naturally warm (75-80°F). 
                    Great for reducing heating bills in winter! Air conditioning helpful in summer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    High-quality dog food with vitamin D supplements. They absorb energy from 
                    sunlight but still need regular meals. Plenty of water to stay hydrated.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Love outdoor activities, especially sunny days! They can recharge by basking 
                    in sunlight. Evening walks show off their beautiful glow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ☀️ Fun Fact: SunDogs can photosynthesize a small amount of energy from sunlight, and 
            their presence helps houseplants grow faster. They're living sunshine!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SunDogPage

export const Head: HeadFC = () => <title>SunDog - Animal Friends</title>
