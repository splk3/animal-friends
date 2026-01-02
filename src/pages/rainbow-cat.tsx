import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowCatPage: React.FC = () => {
  return (
    <Layout pageTitle="🐱🌈 Rainbow Cat - Prismatic Feline Beauty">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Cat is a stunning feline with fur that displays beautiful rainbow colors. 
              These colorful companions have all the personality and charm of regular cats, but with 
              the added visual delight of rainbow patterns that shimmer and shift as they move.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Striped Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Tabby-like stripes in full rainbow spectrum. Colors flow from head to tail in 
                  beautiful bands. Most common pattern.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Color Block</h3>
                <p className="text-sm text-gray-700">
                  Distinct patches of different rainbow colors, similar to calico pattern. Each 
                  section is a bold, vibrant hue.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Gradient Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Smooth transitions between colors creating an ombré effect. Colors blend 
                  seamlessly from one to another.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Spotted Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Multi-colored spots like a rainbow leopard. Each spot can be a different color, 
                  creating a unique, playful appearance.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Environment</h3>
                  <p className="text-gray-700">
                    Indoor living recommended to protect their unique coloring. Provide scratching 
                    posts, cat trees, and cozy spots. Same needs as regular cats.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    High-quality cat food - wet and dry. Same nutritional needs as regular cats. 
                    Fresh water always available. No special supplements needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✂️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing maintains fur luster and color vibrancy. Long-haired varieties 
                    need daily brushing. They groom themselves normally.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Enrichment</h3>
                  <p className="text-gray-700">
                    Interactive toys, puzzle feeders, and play sessions. Rainbow Cats are curious 
                    and intelligent, needing mental stimulation daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Cats purr in perfect harmony with all colors of their fur! 
            Their unique coloring is permanent and doesn't fade, passing down to their kittens.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowCatPage

export const Head: HeadFC = () => <title>Rainbow Cat - Animal Friends</title>
