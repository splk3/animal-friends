import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const PikachuPage: React.FC = () => {
  return (
    <Layout pageTitle="⚡ Pikachu - The Electric Mouse Pokemon">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Pikachu is an adorable Electric-type Pokemon known for its bright yellow fur, 
              rosy cheeks, and lightning bolt-shaped tail. This iconic Pokemon is friendly, 
              loyal, and makes an excellent companion for trainers of all ages.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Pikachu Types & Forms</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">⚡ Standard Pikachu</h3>
                <p className="text-sm text-gray-700">
                  The classic yellow mouse Pokemon with electric powers. Stores electricity 
                  in its rosy cheeks and releases it through its tail.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎩 Cosplay Pikachu</h3>
                <p className="text-sm text-gray-700">
                  Special Pikachu that can wear different costumes and learn unique moves. 
                  Loves performing and entertaining.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">⚡ Gigantamax Pikachu</h3>
                <p className="text-sm text-gray-700">
                  A special form that resembles its original evolution, growing much larger 
                  with enhanced electric abilities.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🧢 Partner Pikachu</h3>
                <p className="text-sm text-gray-700">
                  A special Pikachu that forms a deep bond with its trainer and can learn 
                  exclusive partner moves.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍎</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    Pikachu loves berries, especially Oran and Pecha berries. They also 
                    enjoy ketchup (surprisingly!) and other Pokemon-friendly treats.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Regular training sessions to help control electric powers. Enjoys running, 
                    climbing, and electric discharge practice in safe areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Prefers forests and grassy areas but adapts well to indoor living. 
                    Needs grounded electrical outlets for safe charging.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">❤️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Bonding</h3>
                  <p className="text-gray-700">
                    Forms strong emotional bonds with trainers. Show affection through 
                    gentle petting and spending quality time together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ⚡ Fun Fact: A group of Pikachu can generate enough electricity to cause a 
            lightning storm! They communicate through electrical waves.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PikachuPage

export const Head: HeadFC = () => <title>Pikachu - Animal Friends</title>
