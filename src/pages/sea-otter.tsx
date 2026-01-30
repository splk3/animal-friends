import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const SeaOtterPage: React.FC = () => {
  return (
    <Layout pageTitle="🦦 Sea Otters - Adorable Ocean Engineers" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Sea otters are charismatic marine mammals known for their playful behavior, 
              tool use, and vital role in kelp forest ecosystems. While they're not pets, 
              they're beloved by wildlife enthusiasts worldwide for their adorable antics.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Sea Otter Characteristics</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦦 Physical Traits</h3>
                <p className="text-sm text-gray-700">
                  Dense fur (up to 1 million hairs per square inch!), webbed feet, and can weigh 45-90 lbs.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🛠️ Tool Users</h3>
                <p className="text-sm text-gray-700">
                  Use rocks to crack open shellfish - one of the few animals that uses tools!
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌊 Swimmers</h3>
                <p className="text-sm text-gray-700">
                  Spend most of their lives in water. Can dive 250 feet deep searching for food.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">👶 Social Behavior</h3>
                <p className="text-sm text-gray-700">
                  Often float in groups called rafts. Mothers and pups bond strongly.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Life in the Wild</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Kelp forests along the North Pacific coast. They wrap themselves in kelp 
                    to avoid drifting while sleeping.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦀</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Sea urchins, crabs, clams, mussels, and fish. They eat 25% of their body 
                    weight daily to maintain their metabolism!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌡️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Survival Adaptations</h3>
                  <p className="text-gray-700">
                    No blubber layer - rely on their incredibly dense fur for warmth. Groom 
                    constantly to maintain air pockets in their coat.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💚</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Conservation Status</h3>
                  <p className="text-gray-700">
                    Endangered species. Support conservation through habitat protection, 
                    reducing pollution, and supporting marine sanctuaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Sea otters hold hands while sleeping to keep from drifting apart - 
            it's one of the cutest behaviors in the animal kingdom!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SeaOtterPage

export const Head: HeadFC = () => <title>Sea Otters - Animal Friends</title>
