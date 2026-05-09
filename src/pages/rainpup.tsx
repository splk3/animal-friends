import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainPupPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐶☁️ RainPup - Rainy Day Companion"
      funFact="☁️ Fun Fact: RainPups' clouds can produce tiny rainbows on sunny days! Their rain is always the perfect temperature and helps gardens flourish wherever they play."
    >
      <p className="text-lg text-gray-700 mb-6">
              The RainPup is a unique puppy who brings their own personal rain cloud wherever they go. 
              These adorable companions love rainy weather and are perfect for those who enjoy the 
              soothing sound of rainfall and playing in puddles.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">RainPup Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">☁️ Drizzle Pup</h3>
                <p className="text-sm text-gray-700">
                  Creates gentle, soft rain perfect for indoor living. Their cloud is small and 
                  produces a calming mist that waters houseplants.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">⛈️ Thunder Pup</h3>
                <p className="text-sm text-gray-700">
                  Comes with occasional gentle thunder rumbles. Loves outdoor adventures and 
                  puddle jumping. Very energetic!
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌧️ Shower Pup</h3>
                <p className="text-sm text-gray-700">
                  Medium rain intensity, perfect for gardens. Their cloud follows at a comfortable 
                  distance and can be toggled on/off.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💧 Mist Pup</h3>
                <p className="text-sm text-gray-700">
                  Creates the lightest rain, almost like a gentle fog. Perfect for apartments 
                  and those who love cozy weather.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Waterproof Living</h3>
                  <p className="text-gray-700">
                    Ensure your home has water-resistant flooring or designated RainPup areas. 
                    Provide plenty of towels and a drainage system works well.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☔</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Rain Management</h3>
                  <p className="text-gray-700">
                    RainPups can control their cloud intensity based on mood and training. 
                    They automatically reduce rainfall when sleeping or eating.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    Standard high-quality dog food. They need extra hydration supplements to 
                    maintain their cloud. Fresh water always available despite the irony!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Love playing in rain and puddles! Outdoor activities are highly encouraged. 
                    They're great garden companions as their rain helps plants grow.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainPupPage

export const Head: HeadFC = () => <title>RainPup - Animal Friends</title>
