import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const PigPage: React.FC = () => {
  return (
    <Layout pageTitle="🐷 Pigs - Intelligent Farm Friends" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Pigs are highly intelligent, social animals that have become increasingly popular 
              as pets. Mini pigs especially make loving companions for those with adequate space 
              and commitment to their care needs.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Pet Pigs</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐷 Mini Pig</h3>
                <p className="text-sm text-gray-700">
                  Smaller breeds (50-150 lbs). Intelligent, clean, and affectionate companions.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎀 Teacup Pig</h3>
                <p className="text-sm text-gray-700">
                  Marketing term - still grow larger than expected. Research breeders carefully.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌟 Potbelly Pig</h3>
                <p className="text-sm text-gray-700">
                  Vietnamese breed. Gentle, smart, and typically 100-150 lbs when full grown.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🏆 KuneKune Pig</h3>
                <p className="text-sm text-gray-700">
                  Small, friendly, and docile. Excellent for families with proper outdoor space.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Indoor space with outdoor access. Pigs need room to roam, root, and explore. 
                    Fenced yard is essential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥕</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Mini pig pellets, fresh vegetables, and limited fruits. Avoid overfeeding - 
                    obesity is common. No dog food or cat food.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Training</h3>
                  <p className="text-gray-700">
                    Highly trainable! Can learn tricks, use litter boxes, and walk on leashes. 
                    Positive reinforcement works best.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Spaying/neutering recommended. Regular hoof trims, tusk maintenance (males), 
                    and vaccinations. Lifespan 12-20 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Pigs are smarter than dogs and 3-year-old children, capable of 
            playing video games and solving complex puzzles!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PigPage

export const Head: HeadFC = () => <title>Pigs - Animal Friends</title>
