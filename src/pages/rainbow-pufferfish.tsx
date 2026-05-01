import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainbowPufferfishPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🌈🐡 Rainbow Pufferfish - Colorful Water Balloon"
      funFact={
        <><p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Pufferfish can puff up in under 2 seconds! Their rainbow water
            spray is completely harmless and actually helps clean nearby decorations!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The Rainbow Pufferfish is an adorable aquatic companion that combines the unique defense 
              mechanism of pufferfish with spectacular rainbow coloring. When threatened, they puff up 
              into a rainbow ball and shoot out rainbow-colored water - making them both protective 
              and beautiful!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Full Rainbow Puffer</h3>
                <p className="text-sm text-gray-700">
                  Every color of the rainbow covers their body. When puffed up, looks like 
                  a perfect rainbow sphere. Shoots multi-colored water streams.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Pastel Rainbow Puffer</h3>
                <p className="text-sm text-gray-700">
                  Softer, pastel rainbow tones. When puffed, releases soft pink, blue, and 
                  lavender colored water. Very gentle looking.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌟 Neon Rainbow Puffer</h3>
                <p className="text-sm text-gray-700">
                  Bright, glowing neon rainbow colors. Shoots fluorescent colored water that 
                  glows briefly. Most vibrant variety!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎪 Spotted Rainbow Puffer</h3>
                <p className="text-sm text-gray-700">
                  Covered in rainbow-colored spots on white body. Each spot is a different 
                  color. Water spray comes out in colorful spurts.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Aquarium Setup</h3>
                  <p className="text-gray-700">
                    Need minimum 30-gallon tank with plenty of hiding spots. Good filtration 
                    essential. Stable water parameters crucial for health and color vibrancy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦐</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Carnivorous - eat snails, shrimp, crabs, and mollusks. Need hard-shelled 
                    foods to keep their beak trimmed. Feed 2-3 times daily.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Rainbow Water Ability</h3>
                  <p className="text-gray-700">
                    When they puff up, they can shoot rainbow-colored water! It's harmless and 
                    beautiful - like a living water fountain. Only do this when startled or playing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">😊</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Personality</h3>
                  <p className="text-gray-700">
                    Intelligent and interactive. Recognize owners and beg for food. Can be 
                    trained. Have individual personalities. Some are shy, others are bold!
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainbowPufferfishPage

export const Head: HeadFC = () => <title>Rainbow Pufferfish - Animal Friends</title>
