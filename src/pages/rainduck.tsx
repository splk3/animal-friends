import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainDuckPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦆☁️ RainDuck - Swimming in Showers"
      funFact="☁️ Fun Fact: RainDucks quack differently when it's raining - they create a melodious, echo-like sound that harmonizes with the rainfall. They're nature's rainy day orchestra!"
    >
      <p className="text-lg text-gray-700 mb-6">
              The RainDuck is a delightful waterfowl that loves swimming in the rain - which is quite 
              fortunate since they bring their own personal rain cloud everywhere they go! These charming 
              ducks are perfect for water lovers and those who enjoy the peaceful patter of rainfall.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">RainDuck Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌧️ Puddle Duck</h3>
                <p className="text-sm text-gray-700">
                  Creates gentle, steady rain perfect for ponds and pools. Loves splashing and 
                  creating ripples. Great for beginners!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">⛈️ Storm Duck</h3>
                <p className="text-sm text-gray-700">
                  Brings heavier rainfall with occasional rumbles. Very energetic and loves to dive. 
                  Perfect for outdoor ponds and large gardens.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">💧 Drizzle Duck</h3>
                <p className="text-sm text-gray-700">
                  Light misting rain, almost fog-like. Calm temperament. Ideal for indoor water 
                  features and smaller spaces with good drainage.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌈 Rainbow Duck</h3>
                <p className="text-sm text-gray-700">
                  Rain produces miniature rainbows! Multi-colored feathers that shimmer when wet. 
                  Playful and loves to entertain.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Water Access</h3>
                  <p className="text-gray-700">
                    Needs a pond, pool, or large water feature. RainDucks love swimming in their 
                    own rain! Ensure proper drainage systems to manage the constant precipitation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☁️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Rain Management</h3>
                  <p className="text-gray-700">
                    The cloud automatically adjusts - lighter rain indoors, fuller rain outdoors. 
                    Stops completely during sleep. Can be trained to reduce intensity on command.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    Duck pellets, aquatic plants, and water-loving vegetables. They need moisture 
                    supplements to maintain their cloud. Love eating in the rain!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Benefits</h3>
                  <p className="text-gray-700">
                    Perfect for gardeners! Their rain is perfectly pH-balanced for plants. 
                    They're excellent at keeping gardens watered and thriving.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainDuckPage

export const Head: HeadFC = () => <title>RainDuck - Animal Friends</title>
