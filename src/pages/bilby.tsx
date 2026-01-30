import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const BilbyPage: React.FC = () => {
  return (
    <Layout pageTitle="🐰 Bilbies - Australia's Easter Bunny" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Bilbies are adorable Australian marsupials with long ears and silky fur. Often called 
              "rabbit-eared bandicoots," these nocturnal creatures are an important part of Australia's 
              ecosystem and a symbol of conservation efforts.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Bilby Characteristics</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">👂 Distinctive Ears</h3>
                <p className="text-sm text-gray-700">
                  Large rabbit-like ears help them hear predators and prey. Also help regulate 
                  body temperature in hot desert environments.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌙 Nocturnal Lifestyle</h3>
                <p className="text-sm text-gray-700">
                  Active at night to avoid desert heat. Spend days in deep, spiral burrows that 
                  can be up to 6 feet deep.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">👃 Excellent Digger</h3>
                <p className="text-sm text-gray-700">
                  Strong forelimbs with claws for digging. Create extensive burrow systems that 
                  benefit other animals too.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🦘 Marsupial Features</h3>
                <p className="text-sm text-gray-700">
                  Females have backward-facing pouches so dirt doesn't get in while digging. 
                  Can carry up to 3 joeys.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Bilby Life & Conservation</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏜️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Live in arid and semi-arid regions of Australia. Prefer areas with sandy soil 
                    for digging burrows. Once widespread, now endangered.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦗</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Omnivores that eat insects, larvae, seeds, bulbs, and fungi. Use their 
                    long snout and keen sense of smell to find food.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐰</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Easter Bilby Campaign</h3>
                  <p className="text-gray-700">
                    In Australia, bilbies are promoted as an alternative to Easter bunnies. 
                    Chocolate bilbies raise awareness and funds for conservation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Conservation Status</h3>
                  <p className="text-gray-700">
                    Endangered due to habitat loss and predators. Conservation programs breed 
                    bilbies and protect remaining wild populations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Bilby burrows can be used by over 45 other species, making them 
            "ecosystem engineers" in the Australian desert!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default BilbyPage

export const Head: HeadFC = () => <title>Bilbies - Animal Friends</title>
