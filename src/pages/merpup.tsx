import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const MerPupPage: React.FC = () => {
  return (
    <Layout pageTitle="🐶🧜‍♀️ MerPup - Aquatic Puppy Magic">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The MerPup is an enchanting blend of a loyal puppy and the mystical grace of a 
              mermaid. These adorable aquatic companions bring the best of land and sea together, 
              offering playful energy above water and elegant swimming below the waves.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">MerPup Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌊 Golden MerPup</h3>
                <p className="text-sm text-gray-700">
                  Combines the friendly nature of Golden Retrievers with shimmering golden scales. 
                  Perfect for beach families.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐠 Coral MerPup</h3>
                <p className="text-sm text-gray-700">
                  Features vibrant coral-colored fins and loves to play among tropical reefs. 
                  Very social and energetic.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌙 Pearl MerPup</h3>
                <p className="text-sm text-gray-700">
                  Has an elegant white coat with pearlescent tail fins. Gentle and calm 
                  temperament.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌈 Rainbow MerPup</h3>
                <p className="text-sm text-gray-700">
                  Sports a multi-colored tail that sparkles in sunlight. Playful and loves 
                  attention.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    MerPups need both land and water access. A home with a large pool or 
                    near the ocean is ideal. Indoor setups should include a swimming area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    A balanced diet of high-quality dog food and fresh fish. They love seafood 
                    treats and kelp supplements for healthy scales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing of fur and gentle cleaning of scales. Keep their fins 
                    moisturized when on land for extended periods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚓</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Daily swimming sessions and beach walks. They enjoy fetch in water and 
                    diving for toys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Fun Fact: MerPups can hold their breath for up to 30 minutes and communicate 
            using both barks and melodic underwater songs!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default MerPupPage

export const Head: HeadFC = () => <title>MerPup - Animal Friends</title>
