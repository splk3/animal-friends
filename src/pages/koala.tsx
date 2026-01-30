import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const KoalaPage: React.FC = () => {
  return (
    <Layout pageTitle="🐨 Koalas - Cuddly Eucalyptus Lovers" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Koalas are iconic Australian marsupials known for their adorable appearance and 
              laid-back lifestyle. While they're wild animals that belong in nature, learning about 
              koalas helps us understand the importance of protecting their eucalyptus forest habitats.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Koala Facts</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌿 Diet Specialist</h3>
                <p className="text-sm text-gray-700">
                  Koalas only eat eucalyptus leaves - up to 1 kilogram daily! They're very picky 
                  and prefer only certain eucalyptus species.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">😴 Sleep Champions</h3>
                <p className="text-sm text-gray-700">
                  Sleep 18-22 hours per day! This helps conserve energy since eucalyptus leaves 
                  are low in nutrition.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">👶 Joey Development</h3>
                <p className="text-sm text-gray-700">
                  Baby koalas (joeys) are born tiny and stay in mom's pouch for 6 months before 
                  riding on her back.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐻 Not Bears!</h3>
                <p className="text-sm text-gray-700">
                  Despite the nickname "koala bear," they're marsupials, not bears. More closely 
                  related to wombats and kangaroos.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Koala Life & Conservation</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌳</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Live in eucalyptus forests along Australia's east coast. Spend most of their 
                    lives in trees and rarely come down to the ground.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👃</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Adaptations</h3>
                  <p className="text-gray-700">
                    Large nose helps detect eucalyptus toxins. Strong claws for climbing. 
                    Opposable thumbs for gripping branches.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🗣️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Communication</h3>
                  <p className="text-gray-700">
                    Males make loud bellowing calls during breeding season. Mothers and joeys 
                    communicate with soft clicking sounds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Conservation</h3>
                  <p className="text-gray-700">
                    Vulnerable due to habitat loss, disease, and climate change. Support 
                    conservation by protecting eucalyptus forests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Koalas have fingerprints that are almost indistinguishable from 
            human fingerprints - even under a microscope!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default KoalaPage

export const Head: HeadFC = () => <title>Koalas - Animal Friends</title>
