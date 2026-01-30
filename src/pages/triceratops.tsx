import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const TriceratopsPage: React.FC = () => {
  return (
    <Layout pageTitle="🦕 Triceratops - Three-Horned Giants" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Triceratops were magnificent herbivorous dinosaurs that lived during the Late 
              Cretaceous period. With their distinctive three horns and large frill, they're one 
              of the most recognizable prehistoric creatures - and would make impressive (if 
              imaginary) companions!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Triceratops Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦴 Physical Size</h3>
                <p className="text-sm text-gray-700">
                  30 feet long, 10 feet tall, weighing 6-12 tons. As big as an elephant!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">⚔️ Three Horns</h3>
                <p className="text-sm text-gray-700">
                  Two large brow horns (3 feet long) and one smaller nasal horn for defense.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🛡️ Neck Frill</h3>
                <p className="text-sm text-gray-700">
                  Large bony frill protected neck and may have been used for display.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌿 Herbivore</h3>
                <p className="text-sm text-gray-700">
                  Ate low-lying plants with their powerful beak-like mouth and shearing teeth.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Imaginary Care Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏞️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Would need several acres of grassland with sturdy fencing. Prefer warm, 
                    temperate climates similar to Late Cretaceous period.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Hundreds of pounds of plants daily! Ferns, palms, cycads, and other 
                    vegetation. Modern hay and browse might work.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Social Behavior</h3>
                  <p className="text-gray-700">
                    May have lived in herds. Likely protective and territorial. Approach with 
                    respect and caution around those horns!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Enrichment</h3>
                  <p className="text-gray-700">
                    Need space to roam and graze. Dust bathing areas, shade trees, and water 
                    sources. Mental stimulation through varied terrain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Prehistoric Fact: Triceratops means "three-horned face" in Greek, and they lived 
            alongside T. rex 68-66 million years ago!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default TriceratopsPage

export const Head: HeadFC = () => <title>Triceratops - Animal Friends</title>
