import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const DeerlingPage: React.FC = () => {
  return (
    <Layout pageTitle="🦌 Deerling - The Season Pokemon" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Deerling is a charming Grass and Normal-type Pokemon that resembles a small deer. 
              This Pokemon is unique for changing its appearance with the seasons, making it a 
              delightful companion that reflects nature's beauty year-round.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Seasonal Forms</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌸 Spring Form</h3>
                <p className="text-sm text-gray-700">
                  Pink flowers bloom on its coat during spring. This form is playful and 
                  energetic, full of life and new beginnings.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">☀️ Summer Form</h3>
                <p className="text-sm text-gray-700">
                  Bright green foliage covers its fur in summer. This form is active and 
                  loves spending time outdoors in warm weather.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🍂 Autumn Form</h3>
                <p className="text-sm text-gray-700">
                  Orange and brown leaves adorn its body in autumn. This form becomes more 
                  contemplative and enjoys the crisp fall air.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">❄️ Winter Form</h3>
                <p className="text-sm text-gray-700">
                  Bare branches and white accents appear in winter. This form is calm and 
                  resilient, adapted to cold climates.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    Primarily herbivorous, enjoys fresh grass, berries, and leafy greens. 
                    Needs access to natural vegetation and clean water.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Requires daily running and jumping in open spaces. Loves forest trails 
                    and meadows where it can practice Grass-type moves.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌲</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Thrives in forested areas with changing seasons. Needs access to 
                    outdoor spaces to properly experience seasonal transformations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Seasonal Care</h3>
                  <p className="text-gray-700">
                    Be prepared for form changes with the seasons. Each form has slightly 
                    different needs and behaviors to accommodate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌿 Fun Fact: Deerling's body temperature changes with the seasons! It can sense 
            seasonal changes before they happen and prepare accordingly.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default DeerlingPage

export const Head: HeadFC = () => <title>Deerling - Animal Friends</title>
