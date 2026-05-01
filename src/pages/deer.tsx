import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const DeerPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦌 Deer - Graceful Forest Dwellers"
      funFact={
        <><p className="text-purple-700 font-semibold">
            💡 Did you know? Deer have excellent night vision and can see ultraviolet light,
            helping them spot predators and find food in low light!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              Deer are elegant wild animals known for their grace, beauty, and distinctive antlers. 
              While they're wild animals that shouldn't be kept as traditional pets, learning about 
              deer helps us appreciate these gentle herbivores that inhabit forests and grasslands worldwide.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Deer</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦌 White-tailed Deer</h3>
                <p className="text-sm text-gray-700">
                  Most common in North America. Named for white underside of tail that flashes 
                  when running. Medium-sized and adaptable.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🏔️ Mule Deer</h3>
                <p className="text-sm text-gray-700">
                  Named for large mule-like ears. Found in western North America. Strong jumpers 
                  that can leap 8 feet high.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦌 Red Deer</h3>
                <p className="text-sm text-gray-700">
                  One of largest deer species. Found across Europe and Asia. Males (stags) have 
                  impressive antlers and loud roar.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">❄️ Reindeer/Caribou</h3>
                <p className="text-sm text-gray-700">
                  Arctic species where both males and females grow antlers. Some populations are 
                  semi-domesticated in northern regions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Deer Facts & Behavior</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦴</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Antlers</h3>
                  <p className="text-gray-700">
                    Male deer (bucks) grow antlers from spring to fall, then shed them in winter. 
                    Antlers are bone and regrow larger each year. Covered in velvet while growing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Herbivores that browse on leaves, twigs, fruits, and nuts. Have four-chambered 
                    stomachs like cows. Most active feeding at dawn and dusk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏃</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Speed & Agility</h3>
                  <p className="text-gray-700">
                    Can run up to 40 mph and jump 10 feet high! Excellent swimmers. Use speed 
                    and agility to escape predators.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👶</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Fawns</h3>
                  <p className="text-gray-700">
                    Baby deer are born with white spots for camouflage. Mothers hide fawns in 
                    grass while foraging. Spots fade as they mature.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default DeerPage

export const Head: HeadFC = () => <title>Deer - Animal Friends</title>
