import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const LizardPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦎 Lizards - Fascinating Reptile Companions"
      funFact="💡 Did you know? Some lizards can drop their tails when threatened and grow them back - it's called autotomy!"
    >
      <p className="text-lg text-gray-700 mb-6">
              Lizards are captivating reptiles that make unique and low-maintenance pets. 
              With their diverse colors, interesting behaviors, and relatively simple care 
              requirements, they're perfect for reptile enthusiasts.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Pet Lizards</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦎 Bearded Dragon</h3>
                <p className="text-sm text-gray-700">
                  Docile, friendly, and easy to handle. One of the best pet lizards for beginners.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌿 Leopard Gecko</h3>
                <p className="text-sm text-gray-700">
                  Small, gentle, and colorful. Low maintenance with simple care requirements.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Crested Gecko</h3>
                <p className="text-sm text-gray-700">
                  Nocturnal and arboreal. Easy to care for and comes in beautiful color morphs.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌴 Blue Tongue Skink</h3>
                <p className="text-sm text-gray-700">
                  Calm and hardy. Known for their distinctive blue tongue and gentle nature.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏜️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Species-appropriate terrarium with proper temperature gradient (75-95°F), 
                    UVB lighting, and hiding spots.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦗</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Varies by species: insects (crickets, mealworms), vegetables, and fruits. 
                    Some are omnivores, others insectivores.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌡️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Temperature Control</h3>
                  <p className="text-gray-700">
                    Basking spots, heat lamps, and thermostats to maintain proper temperature. 
                    UVB lighting is essential for most species.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Regular shed monitoring, calcium supplementation, and annual vet checkups. 
                    Watch for metabolic bone disease.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default LizardPage

export const Head: HeadFC = () => <title>Lizards - Animal Friends</title>
