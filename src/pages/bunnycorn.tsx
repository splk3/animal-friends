import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const BunnyCornPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐰🦄 BunnyCorn - Hopping Magic"
      funFact={
        <><p className="text-purple-700 font-semibold">
            🦄 Magical Fact: BunnyCorns can hop so high they briefly touch clouds! When they're
            extremely happy, their horn sparkles and they leave glowing paw prints for hours!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The BunnyCorn is an absolutely adorable fusion of bunny cuteness and unicorn magic. 
              These fluffy friends have a spiraled horn on their forehead, can hop incredible 
              distances, and spread joy wherever they bounce. They're as gentle as rabbits with 
              the magical abilities of unicorns!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">BunnyCorn Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌸 Meadow BunnyCorn</h3>
                <p className="text-sm text-gray-700">
                  Soft white and pastel-colored fur. Rose-gold horn. Leave trails of wildflowers 
                  when they hop. Most gentle variety.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌈 Rainbow BunnyCorn</h3>
                <p className="text-sm text-gray-700">
                  Multi-colored fluffy fur that shimmers. Opalescent horn. Can create small 
                  rainbows when they're happy. Very playful!
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌙 Moon BunnyCorn</h3>
                <p className="text-sm text-gray-700">
                  Silvery-white fur that glows softly at night. Crystal horn. Most active during 
                  full moons. Bring prophetic dreams.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌺 Garden BunnyCorn</h3>
                <p className="text-sm text-gray-700">
                  Earthy browns and greens with flower patterns. Wooden-looking horn. Make 
                  gardens grow beautifully wherever they live.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Magical Care Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Need spacious areas for hopping - indoor pens or outdoor gardens. Love 
                    burrows decorated with crystals and soft bedding. Magical wards keep them safe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥕</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Fresh vegetables (especially magical carrots!), hay, and enchanted greens. 
                    Unicorn pellets provide extra nutrition. Fresh water infused with starlight.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Magic Powers</h3>
                  <p className="text-gray-700">
                    Horn can purify water and heal minor wounds. Super jumps up to 20 feet high! 
                    Create sparkle trails when hopping. Sense danger and protect loved ones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💖</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Temperament</h3>
                  <p className="text-gray-700">
                    Gentle, affectionate, and playful. Love cuddles and chin scratches. Do happy 
                    "binkies" that create magical sparkles. Bond deeply with kind owners.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default BunnyCornPage

export const Head: HeadFC = () => <title>BunnyCorn - Animal Friends</title>
