import * as React from "react"
import Layout from "../components/Layout"

const PhoenixesPage = () => {
  return (
    <Layout pageTitle="🔥 Phoenixes - Eternal Flames of Rebirth">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Phoenix is a magnificent bird of flame and rebirth, known for its ability to 
              rise from its own ashes. These immortal creatures symbolize renewal, transformation, 
              and the eternal cycle of life.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Phoenix Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🔥 Fire Phoenix</h3>
                <p className="text-sm text-gray-700">
                  Classic phoenix with crimson and gold plumage. Burns brightest and is most 
                  dramatic in rebirth.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">❄️ Frost Phoenix</h3>
                <p className="text-sm text-gray-700">
                  Rare variant with ice-blue flames. Reborn from frost and brings cooling 
                  presence.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">⚡ Storm Phoenix</h3>
                <p className="text-sm text-gray-700">
                  Electric purple and silver. Controls lightning and is reborn from 
                  thunderstorms.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Cosmic Phoenix</h3>
                <p className="text-sm text-gray-700">
                  Shimmers with starlight. Born from cosmic energy and incredibly ancient.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Mythical Care Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Phoenixes nest in high places - mountain peaks, tall towers, or sacred 
                    temples. They need open sky for flight.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Energy Source</h3>
                  <p className="text-gray-700">
                    Phoenixes absorb energy from their element - sunlight, fire, or cosmic 
                    forces. They rarely need traditional food.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">♻️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Rebirth Cycle</h3>
                  <p className="text-gray-700">
                    Every 500-1000 years, a phoenix builds a nest and is reborn from flames. 
                    This is a sacred time requiring solitude.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎶</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Connection</h3>
                  <p className="text-gray-700">
                    Phoenix song can heal and inspire. They bond deeply with those who respect 
                    their eternal nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Mythical Fact: Phoenix tears have powerful healing properties and can cure any 
            wound or illness!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PhoenixesPage

export const Head = () => <title>Phoenixes - Animal Friends</title>
