import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const UniPupPage: React.FC = () => {
  return (
    <Layout pageTitle="🦄🐶 UniPup - Magical Puppy Companion" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              The UniPup is a delightful fusion of a loyal puppy and the mystical magic of a unicorn. 
              With their spiraling horn and playful nature, UniPups bring both enchantment and 
              unconditional love to any home.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">UniPup Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Golden UniPup</h3>
                <p className="text-sm text-gray-700">
                  Combines the friendly nature of Golden Retrievers with a shimmering golden horn. 
                  Perfect for families seeking both magic and loyalty.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌸 Sparkle UniPup</h3>
                <p className="text-sm text-gray-700">
                  Features a pearlescent white coat with a glittering rainbow horn. Their tail 
                  leaves sparkles wherever they wag.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">💜 Twilight UniPup</h3>
                <p className="text-sm text-gray-700">
                  Purple-tinted fur with a silver spiral horn. Calm, wise, and perfect for evening cuddles.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Stardust UniPup</h3>
                <p className="text-sm text-gray-700">
                  Blue merle coat with constellation patterns and a crystal horn that glows at night.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦄</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Horn Care</h3>
                  <p className="text-gray-700">
                    The unicorn horn requires gentle polishing weekly with a soft cloth. It may glow 
                    when the UniPup is happy or excited, which is perfectly normal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍖</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    High-quality dog food with a sprinkle of edible glitter for coat health. 
                    They also enjoy rainbow carrots and star-shaped treats.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing to maintain their magical shimmer. Baths with special sparkle-safe 
                    shampoo once a month. Their coat naturally repels dirt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Exercise</h3>
                  <p className="text-gray-700">
                    Daily walks and playtime. UniPups love chasing rainbow balls and playing in 
                    enchanted gardens. They can levitate slightly when very excited!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            ✨ Fun Fact: UniPups can sense when their owners are sad and will nuzzle them with their 
            horn, which has mild healing properties that boost happiness!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default UniPupPage

export const Head: HeadFC = () => <title>UniPup - Animal Friends</title>
