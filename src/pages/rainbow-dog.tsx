import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RainbowDogPage: React.FC = () => {
  return (
    <Layout pageTitle="🐕🌈 Rainbow Dog - Spectrum of Loyalty" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The Rainbow Dog combines the unwavering loyalty and playful nature of dogs with stunning 
              rainbow-colored fur. These joyful companions bring color and happiness to every home, with 
              all the loving traits of regular dogs plus eye-catching rainbow patterns.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Full Spectrum Flow</h3>
                <p className="text-sm text-gray-700">
                  Rainbow colors flow smoothly from nose to tail. Each color blends seamlessly 
                  into the next creating a natural gradient.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Patchy Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Large patches of different rainbow colors distributed across the body. Each 
                  patch is bold and distinct, creating a patchwork quilt effect.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Rainbow Merle</h3>
                <p className="text-sm text-gray-700">
                  Mottled rainbow pattern similar to merle coloring. Creates a unique, marbled 
                  appearance with multiple colors swirling together.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Brindle Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Striped pattern with rainbow colors in thin bands throughout the coat. Creates 
                  a tiger-like effect with all spectrum colors.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Exercise</h3>
                  <p className="text-gray-700">
                    Daily walks, playtime, and mental stimulation. Exercise needs vary by size - 
                    30 minutes to 2+ hours daily. Love showing off their colors at the park!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Nutrition</h3>
                  <p className="text-gray-700">
                    High-quality dog food appropriate for size, age, and activity level. No special 
                    diet needed. Fresh water always available. Standard feeding schedule.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xml">✂️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing maintains coat health and color vibrancy. Long-haired breeds need 
                    more frequent grooming. Bath as needed to keep colors bright.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Same health needs as regular dogs. Regular vet visits, vaccinations, and 
                    preventive care. Lifespan and health similar to standard breeds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Dogs' tails create rainbow streaks in the air when they wag! 
            Their puppies inherit unique rainbow patterns making each one completely unique.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RainbowDogPage

export const Head: HeadFC = () => <title>Rainbow Dog - Animal Friends</title>
