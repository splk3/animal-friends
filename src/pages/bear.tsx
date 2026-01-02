import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const BearPage: React.FC = () => {
  return (
    <Layout pageTitle="🐻 Bears - Powerful Wild Mammals">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Bears are powerful, intelligent wild animals that should never be kept as pets. 
              Learning about these magnificent creatures helps us understand the importance of 
              wildlife conservation and respecting nature's largest predators from a safe distance.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Bears</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐻 Brown Bear</h3>
                <p className="text-sm text-gray-700">
                  Includes grizzlies and Kodiaks. Can weigh up to 1,500 pounds. Found across 
                  North America, Europe, and Asia.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌑 Black Bear</h3>
                <p className="text-sm text-gray-700">
                  Smaller than brown bears. Can be black, brown, or cinnamon colored. Most 
                  common bear in North America.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">❄️ Polar Bear</h3>
                <p className="text-sm text-gray-700">
                  Largest bear species. Live in Arctic regions. Excellent swimmers and primarily 
                  hunt seals on sea ice.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐼 Panda Bear</h3>
                <p className="text-sm text-gray-700">
                  Gentle bamboo eaters from China. Despite being bears, they're mostly 
                  herbivorous. See our dedicated panda page!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Bear Facts & Conservation</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Strength & Abilities</h3>
                  <p className="text-gray-700">
                    Incredibly strong - can lift over 1,000 pounds. Excellent swimmers and 
                    climbers (except polar bears). Can run up to 35 mph.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Most are omnivores eating fish, berries, plants, and small animals. Polar 
                    bears are carnivores. Some eat up to 90 pounds daily before hibernation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">😴</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Hibernation</h3>
                  <p className="text-gray-700">
                    Many bear species hibernate in winter dens for 5-7 months. Heart rate drops 
                    dramatically. Cubs are born during hibernation!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Conservation</h3>
                  <p className="text-gray-700">
                    Many bear species are threatened by habitat loss and climate change. Support 
                    conservation through education and protecting wild spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Bears have an incredible sense of smell - up to 2,000 times better 
            than humans! They can smell food from miles away.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default BearPage

export const Head: HeadFC = () => <title>Bears - Animal Friends</title>
