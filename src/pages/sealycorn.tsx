import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const SealycornPage: React.FC = () => {
  return (
    <Layout pageTitle="🦭🦄 Sealycorn - Aquatic Unicorn Seal">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Sealycorn is an enchanting blend of playful seal and magical unicorn. These 
              aquatic wonders have a seal's sleek body with a spiraled horn on their forehead, 
              combining marine mammal charm with unicorn magic. They're excellent swimmers who 
              spread joy and healing wherever they go!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Sealycorn Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌊 Ocean Sealycorn</h3>
                <p className="text-sm text-gray-700">
                  Silvery-grey coat with pearl-white horn. Live in open oceans. Can dive very 
                  deep. Most adventurous variety.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🏖️ Beach Sealycorn</h3>
                <p className="text-sm text-gray-700">
                  Sandy brown fur with golden horn. Love basking on beaches. Friendly with 
                  beachgoers. Most social type.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">❄️ Arctic Sealycorn</h3>
                <p className="text-sm text-gray-700">
                  Pure white with crystalline horn. Thrive in icy waters. Horn can create ice 
                  sculptures. Love playing in snow.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌺 Tropical Sealycorn</h3>
                <p className="text-sm text-gray-700">
                  Spotted pattern with rainbow horn. Live in warm coral reefs. Horn is adorned 
                  with natural sea flowers. Very colorful!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Magical Marine Care</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Need both water for swimming and land for resting. Large pool or ocean 
                    access ideal. Love rocky shores where they can haul out and sunbathe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Fish, squid, and magical sea plants. Some enjoy enchanted kelp treats. 
                    Need lots of fresh fish daily. Can catch their own in wild settings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦄</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Unicorn Powers</h3>
                  <p className="text-gray-700">
                    Horn can purify polluted waters. Create protective barriers around coral 
                    reefs. Heal sick sea creatures. Communicate with all marine life.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xml">🎪</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Personality</h3>
                  <p className="text-gray-700">
                    Playful, intelligent, and affectionate. Love performing tricks and playing 
                    with toys. Very social with both humans and other animals. Natural entertainers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Magical Fact: Sealycorns can breathe underwater for up to 40 minutes! Their horn 
            leaves a trail of sparkles in the water, and they often play with dolphins and whales!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SealycornPage

export const Head: HeadFC = () => <title>Sealycorn - Animal Friends</title>
