import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowCowPage: React.FC = () => {
  return (
    <Layout pageTitle="🐄🌈 Rainbow Cow - Colorful Gentle Giants">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Cow is a magnificent bovine with a coat displaying beautiful rainbow colors. 
              These gentle giants combine the sweet, calm nature of regular cows with stunning prismatic 
              patterns, making them the most colorful addition to any farm or homestead.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Striped Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Wide horizontal stripes in rainbow order flowing across the body. Most common 
                  pattern, bold and beautiful on large bodies.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Patchy Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Large patches similar to regular spotted cows, but each spot is a different 
                  rainbow color. Creates a patchwork quilt effect.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Gradient Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Smooth color transitions from head to tail. Colors flow like a watercolor 
                  painting across their entire body.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Marbled Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Swirled patterns where rainbow colors blend together in organic, flowing 
                  designs. Each cow has unique marbling.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Space</h3>
                  <p className="text-gray-700">
                    Minimum 1-2 acres per cow with good fencing. Need pasture for grazing and 
                    shelter for weather protection. Social animals - keep in pairs or groups.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Primarily grass and hay. Mineral supplements and fresh water daily. Grain 
                    supplements as needed. Same nutritional needs as regular cows.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing helps maintain coat health and color vibrancy. Hoof trimming 
                    every 6-12 months. Enjoy the bonding time during grooming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xml">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Regular veterinary care, vaccinations, and deworming. Standard cow health needs. 
                    Lifespan 15-25 years with proper care and attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Cows' colors become more vivid when they're happy! They're known 
            to have best friends just like regular cows and love showing off their colors in sunshine.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowCowPage

export const Head: HeadFC = () => <title>Rainbow Cow - Animal Friends</title>
