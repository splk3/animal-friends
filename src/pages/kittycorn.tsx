import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const KittyCornPage: React.FC = () => {
  return (
    <Layout pageTitle="🐱🦄 KittyCorn - Magical Feline Wonder" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The KittyCorn combines the independent charm of a kitten with the magical wonder 
              of a unicorn. These mystical felines possess a spiraling horn on their forehead 
              and often display shimmering, rainbow-hued fur that sparkles in the light.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">KittyCorn Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Sparkle KittyCorn</h3>
                <p className="text-sm text-gray-700">
                  Features glittering white fur with a crystal horn. Loves to play with 
                  shiny objects and sunbeams.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌸 Garden KittyCorn</h3>
                <p className="text-sm text-gray-700">
                  Has soft pastel fur that changes color with the seasons. Horn grows flowers 
                  that bloom monthly.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌙 Moonlight KittyCorn</h3>
                <p className="text-sm text-gray-700">
                  Silver-blue fur that glows softly at night. Most active during twilight 
                  hours.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌈 Prism KittyCorn</h3>
                <p className="text-sm text-gray-700">
                  Multi-colored fur in rainbow patterns. Horn refracts light into beautiful 
                  displays.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏰</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    KittyCorns need a peaceful, magical environment with plenty of soft surfaces 
                    and high perches. They appreciate gardens with flowers and crystals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥛</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Standard cat food enhanced with magical supplements like starlight essence 
                    and moonbeam milk. Fresh water infused with flower petals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Gentle brushing to maintain their shimmering coat. Horn needs polishing 
                    weekly with special enchanted oil to keep its glow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎀</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Enrichment</h3>
                  <p className="text-gray-700">
                    Provide magical toys, feather wands, and puzzle feeders. They enjoy 
                    practicing small spells and teleporting short distances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Fun Fact: A KittyCorn's purr has healing properties and their horn can glow 
            in different colors based on their mood!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default KittyCornPage

export const Head: HeadFC = () => <title>KittyCorn - Animal Friends</title>
