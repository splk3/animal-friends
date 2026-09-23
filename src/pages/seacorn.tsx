import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const SeaCornPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦄🌊 SeaCorn - Ocean Unicorn Magic"
      funFact="🌊 Mythical Fact: When SeaCorns gallop across the ocean surface, they leave bioluminescent hoofprints that glow for hours! Sailors consider them signs of good fortune."
    >
      <p className="text-lg text-gray-700 mb-6">
              The SeaCorn is a magnificent unicorn blessed with powerful ocean and sea magic. These 
              enchanting creatures combine the grace and purity of unicorns with mastery over water, 
              tides, and marine life. They can breathe underwater and command the seas with their 
              shimmering aquatic horns.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">SeaCorn Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌊 Wave SeaCorn</h3>
                <p className="text-sm text-gray-700">
                  Masters of wave manipulation. Can create or calm ocean waves. Coat shimmers 
                  with foam-white and deep blue hues.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐚 Coral SeaCorn</h3>
                <p className="text-sm text-gray-700">
                  Guardians of coral reefs. Can heal damaged corals and communicate with all 
                  reef creatures. Iridescent pink and orange coloring.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">⚡ Storm SeaCorn</h3>
                <p className="text-sm text-gray-700">
                  Control weather over oceans. Can summon or disperse storms. Dark grey coat 
                  with lightning-blue horn and mane.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌙 Tide SeaCorn</h3>
                <p className="text-sm text-gray-700">
                  Connected to moon and tides. Silver-white with flowing mane like seafoam. 
                  Most active during full and new moons.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Ocean Powers & Care</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Water Breathing</h3>
                  <p className="text-gray-700">
                    Can breathe both air and water effortlessly. Swim at incredible speeds 
                    through oceans. Leave trails of sparkling bubbles in their wake.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐠</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Marine Communication</h3>
                  <p className="text-gray-700">
                    Speak with all ocean creatures from whales to tiny seahorses. Often mediate 
                    between different sea species. Dolphins are their closest friends.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏖️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Need access to both land and sea. Coastal caves, underwater grottos, or 
                    beachside sanctuaries. Moonlight and ocean spray essential for wellbeing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Ocean Magic</h3>
                  <p className="text-gray-700">
                    Can purify polluted waters with their horn. Create protective barriers 
                    around marine sanctuaries. Their tears become healing pearls.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default SeaCornPage

export const Head: HeadFC = () => <title>SeaCorn - Animal Friends</title>
