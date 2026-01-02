import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowBirdPage: React.FC = () => {
  return (
    <Layout pageTitle="🐦🌈 Rainbow Bird - Colorful Wings of Joy">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Bird is a spectacular avian companion with feathers displaying all the colors 
              of the rainbow. These cheerful singers bring vibrant color and melodious songs to any home, 
              combining the beauty of a rainbow with the delightful personality of pet birds.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Spectrum Wings</h3>
                <p className="text-sm text-gray-700">
                  Each wing feather displays a different rainbow color, creating a full spectrum 
                  when wings are spread. Absolutely breathtaking in flight!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Layered Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Colors arranged in horizontal bands across the body. Each layer is a different 
                  rainbow color creating a striped effect.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Iridescent Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Feathers shimmer and change color based on angle and lighting. All rainbow 
                  colors visible with movement and light shifts.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Gradient Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Smooth color transitions from head to tail. Colors blend beautifully, creating 
                  a flowing rainbow effect across the entire body.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Spacious cage with perches at varying heights. Need room to spread wings and 
                    show off colors. Place near natural light but away from drafts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    High-quality bird seed mix, fresh fruits, and vegetables. Cuttlebone for calcium. 
                    Fresh water daily. Vary diet to maintain feather color vibrancy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Socialization</h3>
                  <p className="text-gray-700">
                    Very social birds that love interaction. Daily out-of-cage time recommended. 
                    Learn to mimic sounds and whistle. Thrive with companionship.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Enrichment</h3>
                  <p className="text-gray-700">
                    Provide toys, mirrors, and foraging opportunities. Rainbow Birds are intelligent 
                    and need mental stimulation. Enjoy showing off their plumage!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Birds sing in different tones that correspond to their feather colors! 
            Their songs create a beautiful, harmonious melody that sounds like happiness itself.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowBirdPage

export const Head: HeadFC = () => <title>Rainbow Bird - Animal Friends</title>
