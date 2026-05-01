import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const BirdsPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐦 Birds - Colorful Companions"
      funFact={
        <><p className="text-purple-700 font-semibold">
            💡 Did you know? Some parrot species can live for over 50 years, making them
            lifelong companions!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              Birds bring color, song, and personality to any home. From small finches to 
              magnificent parrots, these feathered friends offer unique companionship and 
              endless entertainment.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Pet Birds</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦜 Parrots</h3>
                <p className="text-sm text-gray-700">
                  Intelligent, social, and can learn to talk. Need lots of interaction and 
                  mental stimulation.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐦 Budgies</h3>
                <p className="text-sm text-gray-700">
                  Small, cheerful, and easy to care for. Great starter birds for beginners.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦅 Cockatiels</h3>
                <p className="text-sm text-gray-700">
                  Affectionate, gentle, and love to whistle. Excellent family pets.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🕊️ Finches</h3>
                <p className="text-sm text-gray-700">
                  Social, active, and melodious. Best kept in pairs or small groups.
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
                    Spacious cage appropriate for species size. Birds need room to spread 
                    their wings and move around comfortably.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌰</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Varied diet of seeds, pellets, fresh fruits, and vegetables. Different 
                    species have different nutritional needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Social Interaction</h3>
                  <p className="text-gray-700">
                    Daily interaction and out-of-cage time. Many birds are highly social and 
                    need companionship.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧼</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Maintenance</h3>
                  <p className="text-gray-700">
                    Regular cage cleaning, fresh water daily, and perch/toy rotation to keep 
                    them engaged.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default BirdsPage

export const Head: HeadFC = () => <title>Birds - Animal Friends</title>
