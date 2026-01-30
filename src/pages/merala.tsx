import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const MeralaPage: React.FC = () => {
  return (
    <Layout pageTitle="🧜‍♀️🐨 Merala - Aquatic Koala Hybrid" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Merala is an enchanting blend of mermaid grace and koala cuteness. These adorable 
              aquatic marsupials combine the mermaid's love of water with the koala's gentle, 
              laid-back personality. They're excellent swimmers who still enjoy a good eucalyptus 
              leaf snack!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Merala Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌊 Ocean Merala</h3>
                <p className="text-sm text-gray-700">
                  Sleek silver-grey fur with shimmering aqua tail. Prefer saltwater. Expert at 
                  diving deep to find the best seaweed eucalyptus.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🏝️ Lagoon Merala</h3>
                <p className="text-sm text-gray-700">
                  Tropical colors - blue-green tail with golden fur. Live in calm lagoons. 
                  Most social type, often found in groups.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌿 Freshwater Merala</h3>
                <p className="text-sm text-gray-700">
                  Darker grey with green-tinted tail. Prefer rivers and lakes. Love floating 
                  among lily pads and river plants.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🦦 Reef Merala</h3>
                <p className="text-sm text-gray-700">
                  Fluffy light grey fur with coral-colored tail. Live near coral reefs. 
                  Befriend all reef creatures easily.
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
                    Need both water access and trees! Ideal setup: pool or pond with overhanging 
                    eucalyptus trees. Love floating branches to nap on.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Eucalyptus leaves (their favorite!), seaweed, kelp, and aquatic plants. 
                    Some enjoy small fish. Need fresh water for drinking despite living in water.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">😴</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Sleep Habits</h3>
                  <p className="text-gray-700">
                    Still sleep 18-20 hours like koalas! Can sleep floating on water or 
                    in underwater caves. Incredibly peaceful sleepers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Personality</h3>
                  <p className="text-gray-700">
                    Gentle, calm, and friendly. Love cuddles but waterproof! Make soft singing 
                    sounds underwater. Get along well with other marine creatures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🐨 Fun Fact: Meralas can hold their breath for up to 30 minutes! They often nap 
            while floating on their backs, holding eucalyptus leaves on their bellies like sea otters!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default MeralaPage

export const Head: HeadFC = () => <title>Merala - Animal Friends</title>
