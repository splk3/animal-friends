import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const DogsPage: React.FC = () => {
  return (
    <Layout pageTitle="🐕 Dogs - Man's Best Friend">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Dogs have been loyal companions to humans for thousands of years. Known for their 
              unwavering loyalty, playful nature, and diverse personalities, dogs make wonderful pets 
              for families, singles, and everyone in between.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Dog Breeds</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦮 Golden Retriever</h3>
                <p className="text-sm text-gray-700">
                  Friendly, intelligent, and devoted. Perfect for families with children.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐕‍🦺 German Shepherd</h3>
                <p className="text-sm text-gray-700">
                  Loyal, confident, and courageous. Excellent working and protection dogs.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐩 Poodle</h3>
                <p className="text-sm text-gray-700">
                  Intelligent, active, and hypoallergenic. Great for allergy sufferers.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐕 Labrador</h3>
                <p className="text-sm text-gray-700">
                  Outgoing, even-tempered, and gentle. America's most popular breed.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Nutrition</h3>
                  <p className="text-gray-700">
                    High-quality dog food appropriate for their age, size, and activity level. 
                    Fresh water should always be available.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Daily walks and playtime. Exercise needs vary by breed - from 30 minutes 
                    for small breeds to 2+ hours for working breeds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✂️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing, nail trimming, and bathing. Long-haired breeds need more 
                    frequent grooming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Regular vet checkups, vaccinations, and preventive care for fleas, ticks, 
                    and heartworm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Dogs can understand up to 250 words and gestures, making them one of 
            the most intelligent pets!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default DogsPage

export const Head: HeadFC = () => <title>Dogs - Animal Friends</title>
