import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainbowPigPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐷🌈 Rainbow Pig - Colorful Intelligent Friends"
      funFact="🌈 Fun Fact: Rainbow Pigs are just as smart as regular pigs (smarter than dogs!), and their rainbow colors shift slightly when they're happy or excited!"
    >
      <p className="text-lg text-gray-700 mb-6">
              The Rainbow Pig is an intelligent, social animal with skin or fur displaying beautiful 
              rainbow colors. These colorful companions combine the smarts and affectionate nature of 
              regular pigs with the visual delight of rainbow patterns, making them unique and charming pets.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Striped Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Bands of rainbow colors running around the body. Each stripe is distinct and 
                  vibrant, creating a cheerful appearance.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Spotted Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Multi-colored spots scattered across the body. Each spot is a different rainbow 
                  color, creating a playful, confetti-like pattern.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Gradient Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Smooth color transitions from snout to tail. Colors blend beautifully, creating 
                  an ombré effect across the entire body.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Mottled Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Marbled pattern where colors swirl together. Each pig has unique, organic 
                  color patterns making them one-of-a-kind.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Indoor space with outdoor access. Need room to roam, root, and explore. 
                    Fenced yard essential. Shelter from weather required.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥕</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Mini pig pellets, fresh vegetables, limited fruits. Avoid overfeeding as 
                    obesity is common. No dog or cat food. Same dietary needs as regular pigs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Training</h3>
                  <p className="text-gray-700">
                    Highly intelligent and trainable! Can learn tricks, use litter boxes, and walk 
                    on leashes. Positive reinforcement works best. Love showing off!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Skin Care</h3>
                  <p className="text-gray-700">
                    Regular moisturizing to keep rainbow colors vibrant. Protect from excessive sun. 
                    Provide mud wallows or pools for natural cooling and skin health.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainbowPigPage

export const Head: HeadFC = () => <title>Rainbow Pig - Animal Friends</title>
