import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const TurtlePage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐢 Turtles - Ancient Shelled Companions"
      funFact="💡 Did you know? Some turtles can live over 100 years, making them pets that can be passed down through generations!"
    >
      <p className="text-lg text-gray-700 mb-6">
              Turtles are reptiles with protective shells that have existed for over 200 million 
              years. These calm, long-lived creatures make fascinating pets for those willing to 
              commit to their specialized care requirements.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Pet Turtles</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐢 Red-Eared Slider</h3>
                <p className="text-sm text-gray-700">
                  Most popular pet turtle. Semi-aquatic, active, and can live 20-40 years.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌴 Box Turtle</h3>
                <p className="text-sm text-gray-700">
                  Land-dwelling turtle with hinged shell. Docile and can live 50+ years.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Painted Turtle</h3>
                <p className="text-sm text-gray-700">
                  Beautiful markings. Active swimmers that love basking in the sun.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">⭐ Musk Turtle</h3>
                <p className="text-sm text-gray-700">
                  Small and mostly aquatic. Good for smaller setups, hardy species.
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
                    Large aquatic tank (40+ gallons) with basking area, water filter, and heat 
                    lamp. Land turtles need spacious terrariums.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥬</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Omnivorous diet: commercial turtle pellets, leafy greens, vegetables, and 
                    occasional protein (fish, insects).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">UVB Lighting</h3>
                  <p className="text-gray-700">
                    Essential UVB lighting 10-12 hours daily for shell and bone health. Basking 
                    area should reach 85-90°F.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Regular shell inspections, water quality monitoring, and annual vet checkups. 
                    Watch for respiratory infections and shell rot.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default TurtlePage

export const Head: HeadFC = () => <title>Turtles - Animal Friends</title>
