import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const DragonsPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐉 Dragons - Majestic Fire Breathers"
      funFact={
        <><p className="text-purple-700 font-semibold">
            ✨ Mythical Fact: In many legends, dragons can live for thousands of years and
            accumulate vast wisdom and magical knowledge!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              Dragons are legendary creatures known for their intelligence, power, and magical 
              abilities. While they may be mythical, caring for a dragon (in imagination or 
              fantasy) requires dedication, courage, and respect.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Dragons</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🔥 Fire Dragons</h3>
                <p className="text-sm text-gray-700">
                  Classic dragons that breathe fire. Live in volcanic regions and hoard treasure. 
                  Very protective and loyal.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">❄️ Ice Dragons</h3>
                <p className="text-sm text-gray-700">
                  Breathe freezing breath and prefer cold climates. Calm and wise, but fierce 
                  when threatened.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">⚡ Storm Dragons</h3>
                <p className="text-sm text-gray-700">
                  Masters of lightning and weather. Unpredictable but incredibly powerful and 
                  intelligent.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌊 Water Dragons</h3>
                <p className="text-sm text-gray-700">
                  Aquatic dragons that control water and tides. Graceful, mysterious, and 
                  ancient.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Mythical Care Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏔️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Dragons need vast territories - mountain caves, volcanic lairs, or ocean 
                    depths. Ensure plenty of space for flying and hoarding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥩</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Large prey animals, though some dragons enjoy gems and precious metals. 
                    Young dragons may start with sheep.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Bonding</h3>
                  <p className="text-gray-700">
                    Build trust through respect and communication. Dragons are highly 
                    intelligent and value honor and loyalty.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚔️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Training</h3>
                  <p className="text-gray-700">
                    Never try to "tame" a dragon - work with them as equals. They can learn 
                    complex commands and even human speech.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default DragonsPage

export const Head: HeadFC = () => <title>Dragons - Animal Friends</title>
