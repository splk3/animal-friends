import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const SeahorsePage: React.FC = () => {
  return (
    <Layout pageTitle="🐴🌊 Seahorses - Enchanting Ocean Dancers" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Seahorses are fascinating marine fish known for their unique appearance and behaviors. 
              While keeping seahorses requires advanced aquarium skills, these magical creatures 
              captivate with their horse-like heads and upright swimming style.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Seahorses</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌿 Dwarf Seahorse</h3>
                <p className="text-sm text-gray-700">
                  One of the smallest species, less than 1 inch long. Perfect for nano aquariums 
                  with experienced keepers.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">👑 Lined Seahorse</h3>
                <p className="text-sm text-gray-700">
                  Popular species with distinctive lines. Can grow up to 6 inches. Changes color 
                  to match surroundings.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐉 Leafy Seadragon</h3>
                <p className="text-sm text-gray-700">
                  Related to seahorses with elaborate leaf-like appendages. Native to Australia 
                  and protected by law.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌊 Pacific Seahorse</h3>
                <p className="text-sm text-gray-700">
                  Large species up to 12 inches. Found along the Pacific coast from California 
                  to Peru.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Seahorse Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Tall aquarium (minimum 30 gallons) with gentle water flow. Need hitching 
                    posts like macroalgae or coral to grip with their tails.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦐</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Live or frozen mysis shrimp. Need to be fed multiple times daily. Require 
                    target feeding due to poor eyesight and slow swimming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👨‍👩‍👦</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Unique Reproduction</h3>
                  <p className="text-gray-700">
                    Male seahorses carry and birth the babies! Females deposit eggs in the 
                    male's pouch where they develop.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Water Quality</h3>
                  <p className="text-gray-700">
                    Pristine water conditions required. Need stable temperature, salinity, and 
                    excellent filtration. Regular testing essential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Seahorses are monogamous and perform elaborate daily greeting 
            dances with their partners!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SeahorsePage

export const Head: HeadFC = () => <title>Seahorses - Animal Friends</title>
