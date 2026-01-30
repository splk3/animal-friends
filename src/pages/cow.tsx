import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const CowPage: React.FC = () => {
  return (
    <Layout pageTitle="🐄 Cows - Gentle Giants" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Cows are gentle, intelligent animals that have been domesticated for thousands of years. 
              While traditionally farm animals, miniature cows have become increasingly popular as pets 
              for those with adequate land and resources.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Pet Cows</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌟 Mini Highland Cow</h3>
                <p className="text-sm text-gray-700">
                  Adorable fluffy coats and gentle temperament. Perfect for small farms and homesteads.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎀 Dexter Cow</h3>
                <p className="text-sm text-gray-700">
                  Small dual-purpose breed. Friendly, hardy, and perfect for small properties.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Mini Jersey</h3>
                <p className="text-sm text-gray-700">
                  Sweet-natured and calm. Known for their large, gentle eyes and affectionate nature.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💝 Miniature Zebu</h3>
                <p className="text-sm text-gray-700">
                  Compact size with distinctive hump. Intelligent and easily trained.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Space</h3>
                  <p className="text-gray-700">
                    Minimum 1-2 acres per cow. Need shelter, fencing, and room to graze. 
                    Cows are herd animals and do best with companions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Primarily grass and hay. Mineral supplements and fresh water daily. 
                    Grain supplements may be needed depending on pasture quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing helps with bonding. Hoof trimming every 6-12 months. 
                    Highland cows need occasional hair maintenance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Regular veterinary checkups, vaccinations, and deworming. Lifespan 15-25 years 
                    with proper care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Cows have best friends and can become stressed when separated from them. 
            They also have excellent memories and can recognize faces!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default CowPage

export const Head: HeadFC = () => <title>Cows - Animal Friends</title>
