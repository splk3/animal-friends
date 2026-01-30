import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const HorsePage: React.FC = () => {
  return (
    <Layout pageTitle="🐴 Horses - Majestic Companions" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Horses have been human companions for thousands of years, serving as working animals, 
              athletes, and beloved pets. These intelligent, social animals form deep bonds with 
              their owners and require dedicated care and attention.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Horse Breeds</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🏇 Thoroughbred</h3>
                <p className="text-sm text-gray-700">
                  Known for racing and jumping. Athletic, spirited, and built for speed. 
                  Excel in competitive equestrian sports.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🤠 Quarter Horse</h3>
                <p className="text-sm text-gray-700">
                  America's most popular breed. Versatile, calm temperament. Excellent for 
                  Western riding and ranch work.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌟 Arabian</h3>
                <p className="text-sm text-gray-700">
                  One of oldest breeds with distinctive dished face. Endurance, intelligence, 
                  and friendly nature.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🦄 Miniature Horse</h3>
                <p className="text-sm text-gray-700">
                  Tiny horses under 38 inches tall. Great for small properties. Make wonderful 
                  companion animals.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Space & Shelter</h3>
                  <p className="text-gray-700">
                    Minimum 1-2 acres per horse for grazing. Need sturdy barn or run-in shed 
                    for weather protection. Secure fencing essential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Hay, pasture grass, and grain as needed. Fresh water always available. 
                    Supplements may be needed based on workload and age.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐴</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming & Health</h3>
                  <p className="text-gray-700">
                    Daily grooming strengthens bonds and checks health. Regular farrier visits 
                    every 6-8 weeks. Annual vet checkups and vaccinations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Daily turnout for running and playing. Regular riding or training sessions. 
                    Mental stimulation through varied activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Horses can sleep both lying down and standing up, and they only 
            need about 3 hours of sleep per day!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HorsePage

export const Head: HeadFC = () => <title>Horses - Animal Friends</title>
