import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const VelociraptorPage: React.FC = () => {
  return (
    <Layout pageTitle="🦖 Velociraptor - Clever Hunters" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Velociraptors were small but fierce carnivorous dinosaurs known for their 
              intelligence and pack hunting behavior. While they're extinct (and definitely not 
              suitable as pets!), they remain fascinating creatures from the Late Cretaceous 
              period.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Velociraptor Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">📏 Size</h3>
                <p className="text-sm text-gray-700">
                  About 6 feet long, 2 feet tall at hip, weighing 30-40 lbs. Turkey-sized, not movie-sized!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🦅 Feathered</h3>
                <p className="text-sm text-gray-700">
                  Had feathers! Not the scaly appearance shown in movies. Likely colorful plumage.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦶 Sickle Claw</h3>
                <p className="text-sm text-gray-700">
                  Distinctive curved claw on each foot, used for hunting and climbing.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🧠 Intelligent</h3>
                <p className="text-sm text-gray-700">
                  Large brain-to-body ratio. Likely hunted in coordinated packs.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Imaginary Care Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏜️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Would need large, secure enclosures with high walls. Desert or arid 
                    environment preferred. Strong climbing abilities mean extra security needed!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Carnivorous diet. Small animals, lizards, and mammals. Would need fresh meat 
                    and whole prey for enrichment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Social Structure</h3>
                  <p className="text-gray-700">
                    Likely lived in packs. Would need companions of their own species. 
                    Complex social dynamics and hierarchy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Safety Warning</h3>
                  <p className="text-gray-700">
                    Expert handlers only! Fast, intelligent, and equipped with deadly claws. 
                    Would require specialized training and extreme caution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Prehistoric Fact: Real Velociraptors were much smaller than portrayed in Jurassic 
            Park - the movie versions were actually based on the larger Deinonychus!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default VelociraptorPage

export const Head: HeadFC = () => <title>Velociraptor - Animal Friends</title>
