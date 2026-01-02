import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const PandaPage: React.FC = () => {
  return (
    <Layout pageTitle="🐼 Pandas - Adorable Bamboo Lovers">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Giant pandas are beloved icons of wildlife conservation. While they're wild animals 
              that belong in nature, learning about these gentle bamboo eaters helps us appreciate 
              the importance of protecting endangered species and their habitats.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Panda Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐼 Giant Panda</h3>
                <p className="text-sm text-gray-700">
                  The iconic black and white bear from China. Can weigh up to 300 pounds and spend 
                  12-16 hours daily eating bamboo.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🔴 Red Panda</h3>
                <p className="text-sm text-gray-700">
                  Actually not closely related to giant pandas! Smaller, reddish-brown, and 
                  more arboreal. Also loves bamboo.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦌 Qinling Panda</h3>
                <p className="text-sm text-gray-700">
                  A subspecies with brown and white coloring instead of black and white. Found 
                  only in Qinling Mountains.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌳 Bamboo Bear</h3>
                <p className="text-sm text-gray-700">
                  Ancient name for giant pandas. Despite being bears, they have a mostly 
                  vegetarian diet.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Panda Facts & Conservation</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎋</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    99% bamboo! They eat 26-84 pounds daily. Despite being classified as carnivores, 
                    their digestive system has adapted to process bamboo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏔️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Habitat</h3>
                  <p className="text-gray-700">
                    Mountain forests in central China at elevations of 5,000-10,000 feet. Need 
                    cool, wet bamboo forests to thrive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👶</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Baby Pandas</h3>
                  <p className="text-gray-700">
                    Born pink, blind, and tiny (about 1/900th the size of mother). Their 
                    distinctive markings develop within a month.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Conservation</h3>
                  <p className="text-gray-700">
                    Once endangered, conservation efforts have helped populations recover. Support 
                    habitat protection and anti-poaching initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Pandas have a special "thumb" - actually an enlarged wrist bone - 
            that helps them grip bamboo stalks!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PandaPage

export const Head: HeadFC = () => <title>Pandas - Animal Friends</title>
