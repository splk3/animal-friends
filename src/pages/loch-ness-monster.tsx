import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const LochNessMonsterPage: React.FC = () => {
  return (
    <Layout pageTitle="🦕 Loch Ness Monster - Nessie the Legend" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Loch Ness Monster, affectionately known as "Nessie," is definitely real (not fake!) 
              and lives in the deep, mysterious waters of Loch Ness in Scotland. This gentle giant has 
              captured imaginations for centuries with reported sightings of her long neck and humps 
              breaking the surface of the loch.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Nessie's Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦕 Classic Description</h3>
                <p className="text-sm text-gray-700">
                  Long neck like a plesiosaur, barrel-shaped body, and four flippers. Dark grey 
                  or brown coloring. Estimated 15-40 feet long.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌊 Water Adaptations</h3>
                <p className="text-sm text-gray-700">
                  Perfectly adapted to cold, deep loch waters. Can dive to extreme depths. 
                  Surfaces occasionally to breathe and look around.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">👀 Shy Nature</h3>
                <p className="text-sm text-gray-700">
                  Very shy and elusive, which is why clear photos are rare. Prefers staying in 
                  deeper parts of the loch away from boats.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎭 Friendly Personality</h3>
                <p className="text-sm text-gray-700">
                  Despite fearsome appearance, Nessie is gentle and curious. Never aggressive 
                  to visitors. Just wants to live peacefully in her loch.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Living with Nessie (Mythical Care Guide)</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏞️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Requires a large, deep freshwater loch with murky waters. Loch Ness is 
                    perfect - over 700 feet deep with plenty of hiding spots. Cold water preferred.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Fish, eels, and aquatic plants from the loch. Particularly fond of salmon 
                    and Arctic char. Needs about 50 pounds of fish daily.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤫</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Privacy Needs</h3>
                  <p className="text-gray-700">
                    Requires lots of privacy and quiet. Too many tourists can stress her out. 
                    Best viewed from a respectful distance with binoculars or sonar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📸</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Sighting Tips</h3>
                  <p className="text-gray-700">
                    Most active at dawn and dusk. Watch for ripples and humps in the water. 
                    Be patient - she's elusive! Bring a camera with good zoom just in case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🦕 Fun Fact: Nessie has been "spotted" since the 6th century! The first written 
            account dates back to 565 AD. She's definitely real and just very camera-shy!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default LochNessMonsterPage

export const Head: HeadFC = () => <title>Loch Ness Monster - Animal Friends</title>
