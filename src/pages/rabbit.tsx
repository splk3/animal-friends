import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const RabbitPage: React.FC = () => {
  return (
    <Layout pageTitle="🐰 Rabbits - Gentle Hoppers" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Rabbits are charming, social pets that make wonderful companions for dedicated owners. 
              These intelligent animals can be litter-trained, learn tricks, and form strong bonds 
              with their families. They require daily attention and proper care to thrive.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Rabbit Breeds</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐇 Holland Lop</h3>
                <p className="text-sm text-gray-700">
                  Small breed with floppy ears. Friendly, playful, and perfect for families. 
                  Typically weigh 2-4 pounds.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🦁 Lionhead</h3>
                <p className="text-sm text-gray-700">
                  Distinguished by their fluffy mane. Energetic and friendly. Require extra 
                  grooming for their long fur.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🐰 Flemish Giant</h3>
                <p className="text-sm text-gray-700">
                  One of the largest breeds, can weigh 15+ pounds! Gentle giants with calm, 
                  docile temperaments.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎀 Mini Rex</h3>
                <p className="text-sm text-gray-700">
                  Known for incredibly soft, velvety fur. Friendly and calm. Great for first-time 
                  rabbit owners.
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
                    Large cage or pen (minimum 4x4 feet). Need daily supervised exercise time 
                    outside cage. Rabbit-proof your home!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥬</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Unlimited hay (80% of diet), fresh vegetables daily, limited pellets, and 
                    always fresh water. Avoid iceberg lettuce and sugary treats.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✂️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing (daily for long-haired breeds). Nail trims every 4-6 weeks. 
                    Never bathe rabbits unless medically necessary.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Healthcare</h3>
                  <p className="text-gray-700">
                    Annual vet checkups with rabbit-savvy vet. Spay/neuter recommended. Watch for 
                    dental issues and GI stasis. Lifespan: 8-12 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Rabbits can jump 3 feet high and 10 feet long! They also do a happy 
            dance called a "binky" when they're excited.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default RabbitPage

export const Head: HeadFC = () => <title>Rabbits - Animal Friends</title>
