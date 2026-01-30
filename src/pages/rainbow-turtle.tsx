import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowTurtlePage: React.FC = () => {
  return (
    <Layout pageTitle="🌈🐢 Rainbow Turtle - Slow and Colorful" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Turtle is a gentle companion with a shell painted in all the colors of 
              the rainbow. These calm, long-lived pets combine the peaceful nature of turtles with 
              spectacular rainbow patterns that bring joy and tranquility to any home.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Shell Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Scute Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Each scute (shell plate) is a different rainbow color. Creates beautiful 
                  mosaic pattern. Center plates often brightest colors.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Gradient Shell</h3>
                <p className="text-sm text-gray-700">
                  Shell transitions smoothly through rainbow spectrum from front to back. 
                  Like a rainbow arched across their back!
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Striped Pattern</h3>
                <p className="text-sm text-gray-700">
                  Rainbow stripes run across shell. Each stripe a distinct color. Creates 
                  vibrant, eye-catching appearance.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">💫 Iridescent Shine</h3>
                <p className="text-sm text-gray-700">
                  Shell shimmers with rainbow iridescence. Changes appearance with light 
                  and angle. Like living gemstone!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Aquatic turtles need tank with water and basking area. Terrestrial types 
                    need terrarium with appropriate substrate. UV lighting essential for all.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥬</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Omnivores - leafy greens, vegetables, protein sources. Diet varies by 
                    species. Rainbow colors maintained through healthy, balanced nutrition.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐢</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Temperament</h3>
                  <p className="text-gray-700">
                    Calm, peaceful, and patient. Great for quiet observation. Can live 50+ 
                    years! Form bonds with owners over time. Very low-stress pets.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌈</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Feature</h3>
                  <p className="text-gray-700">
                    Shell colors become more vibrant when happy and healthy! Swimming rainbow 
                    turtles create colorful ripples. Bring calming, peaceful energy to homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Turtles' shells grow more beautiful with age! Older turtles 
            have the most vivid, deep rainbow colors. Some live over 100 years!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowTurtlePage

export const Head: HeadFC = () => <title>Rainbow Turtle - Animal Friends</title>
