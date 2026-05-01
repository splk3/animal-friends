import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainBirdPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐦☁️ RainBird - Blue Sky Shower"
      funFact={
        <><p className="text-purple-700 font-semibold">
            ☁️ Fun Fact: RainBirds' song is most melodious during rainfall, and their clouds
            produce micro-rainbows that shimmer around them as they fly!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The RainBird is a beautiful blue bird that travels with its own personal rain cloud. 
              These enchanting avian companions bring the soothing sounds of rainfall wherever they 
              fly, creating a peaceful atmosphere and helping gardens bloom.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">RainBird Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">💙 Sky Blue RainBird</h3>
                <p className="text-sm text-gray-700">
                  Classic azure plumage with a fluffy white cloud. Creates gentle rain perfect 
                  for indoor aviaries and gardens.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌊 Ocean RainBird</h3>
                <p className="text-sm text-gray-700">
                  Deep blue feathers with sea-green accents. Their rain has a refreshing ocean 
                  breeze scent. Very calming.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">⚡ Storm RainBird</h3>
                <p className="text-sm text-gray-700">
                  Dark blue with grey markings. Produces light thunder sounds and heavier rain. 
                  Dramatic and majestic in flight.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💧 Mist RainBird</h3>
                <p className="text-sm text-gray-700">
                  Pale blue with silver undertones. Creates the lightest mist, perfect for 
                  smaller spaces and indoor keeping.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Large aviary with waterproof flooring and good drainage. Outdoor aviaries work 
                    best. Indoor setups need proper ventilation and moisture control.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌧️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Cloud Management</h3>
                  <p className="text-gray-700">
                    RainBirds can control their rain intensity through mood and training. They 
                    naturally stop rainfall when roosting or during feeding time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    High-quality bird seed, fresh fruits, and vegetables. They need cloud-sustaining 
                    supplements. Fresh water daily, plus moisture-rich foods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Socialization</h3>
                  <p className="text-gray-700">
                    RainBirds are social and sing beautifully, especially during rainstorms. 
                    They enjoy the company of other birds and create rain symphonies together.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainBirdPage

export const Head: HeadFC = () => <title>RainBird - Animal Friends</title>
