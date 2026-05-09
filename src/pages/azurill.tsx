import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const AzurillPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="💧 Azurill - The Polka Dot Pokemon"
      funFact="💧 Fun Fact: Azurill's tail can stretch and bounce up to twice its body height! It uses its tail as a flotation device when tired from swimming."
    >
      <p className="text-lg text-gray-700 mb-6">
              Azurill is an adorable Water and Normal-type Pokemon known for its large, 
              bouncy tail filled with nutrients. This tiny Pokemon is playful and curious, 
              using its tail like a ball to bounce around and play with friends.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Azurill Characteristics</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎈 Bouncy Tail</h3>
                <p className="text-sm text-gray-700">
                  Its large tail is filled with nutrients and oil that makes it buoyant. 
                  Azurill uses it to bounce around and even float on water.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💙 Friendly Nature</h3>
                <p className="text-sm text-gray-700">
                  Known for being incredibly friendly and social. Loves playing with 
                  other Pokemon and forming close bonds with trainers.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">💦 Water Abilities</h3>
                <p className="text-sm text-gray-700">
                  Despite being small, can learn various Water-type moves. Excellent 
                  swimmer and enjoys spending time near water.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Evolution Line</h3>
                <p className="text-sm text-gray-700">
                  Evolves into Marill when happy enough, and eventually into Azumarill. 
                  Each evolution brings new abilities and strength.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍇</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Nutrition</h3>
                  <p className="text-gray-700">
                    Enjoys berries and Pokemon food designed for Water-types. Its tail 
                    needs proper nutrition to stay healthy and bouncy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏊</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Loves bouncing around and swimming. Needs access to water for play 
                    and exercise, plus space to practice its bouncing skills.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Thrives near water sources like ponds, lakes, or rivers. Can adapt 
                    to indoor living with access to a pool or water play area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Playtime</h3>
                  <p className="text-gray-700">
                    Highly playful and needs daily interaction. Enjoys games involving 
                    its tail-bouncing abilities and water activities.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default AzurillPage

export const Head: HeadFC = () => <title>Azurill - Animal Friends</title>
