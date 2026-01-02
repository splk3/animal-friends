import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const DuckPage: React.FC = () => {
  return (
    <Layout pageTitle="🦆 Ducks - Charming Water Birds">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Ducks make delightful and entertaining pets with their playful personalities and 
              charming waddle. They're social, relatively low-maintenance, and provide fresh eggs 
              if you choose laying breeds.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Pet Duck Breeds</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎀 Pekin Duck</h3>
                <p className="text-sm text-gray-700">
                  Friendly, calm, and pure white. The classic domestic duck breed perfect for beginners.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Indian Runner</h3>
                <p className="text-sm text-gray-700">
                  Stands upright with a distinctive posture. Active, excellent egg layers, and amusing to watch.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">💙 Blue Swedish</h3>
                <p className="text-sm text-gray-700">
                  Beautiful blue-gray plumage. Calm, hardy, and dual-purpose for eggs and companionship.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🦆 Call Duck</h3>
                <p className="text-sm text-gray-700">
                  Bantam breed, smaller and cuter. Vocal but adorable, great for smaller yards.
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
                    Ducks need water to swim and clean themselves. A kiddie pool or pond works well. 
                    Fresh drinking water always available.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Duck pellets or crumbles, fresh greens, and occasional treats like peas and corn. 
                    Grit helps with digestion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Shelter</h3>
                  <p className="text-gray-700">
                    Secure coop or house for nighttime protection from predators. Bedding should be 
                    changed regularly. Minimum 3-4 sq ft per duck indoors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Social Needs</h3>
                  <p className="text-gray-700">
                    Ducks are social and need companions. Keep at least 2-3 ducks together. 
                    They bond strongly with their flock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Ducks are omnivores and excellent natural pest controllers, happily 
            eating slugs, snails, and insects from your garden!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default DuckPage

export const Head: HeadFC = () => <title>Ducks - Animal Friends</title>
