import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const HamsterPage: React.FC = () => {
  return (
    <Layout pageTitle="🐹 Hamsters - Adorable Pocket Pets" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Hamsters are small, furry rodents that make delightful pets. Known for their 
              pouches where they store food, their love of running wheels, and their gentle 
              nature, hamsters are perfect for apartment living and first-time pet owners.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Hamster Breeds</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐹 Syrian Hamster</h3>
                <p className="text-sm text-gray-700">
                  The largest and most popular breed. Solitary, friendly, and great for handling.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐭 Dwarf Hamster</h3>
                <p className="text-sm text-gray-700">
                  Tiny and active. Can sometimes be kept in pairs. Very entertaining to watch.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Roborovski Hamster</h3>
                <p className="text-sm text-gray-700">
                  The smallest breed. Very fast and social. Best for observation rather than handling.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Chinese Hamster</h3>
                <p className="text-sm text-gray-700">
                  Slender with a longer tail. Gentle and calm, making them easy to handle.
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
                    Minimum 450 square inches of floor space. Provide bedding, hideouts, 
                    and a running wheel for exercise.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Quality hamster pellets, fresh vegetables, and occasional treats like 
                    seeds and nuts. Always provide fresh water.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Exercise</h3>
                  <p className="text-gray-700">
                    Hamsters need to run! Provide a solid-surface wheel (8-12 inches) and 
                    supervised playtime outside the cage.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Regular check for overgrown teeth and nails. Watch for wet tail and 
                    respiratory issues. Lifespan is 2-3 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Hamsters can run up to 5 miles per night on their wheel - that's 
            impressive for such tiny creatures!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HamsterPage

export const Head: HeadFC = () => <title>Hamsters - Animal Friends</title>
