import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const FoxPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦊 Foxes - Clever and Wild"
      funFact="💡 Did you know? Foxes use their fluffy tails as a warm blanket in cold weather and for balance when running!"
    >
      <p className="text-lg text-gray-700 mb-6">
              Foxes are intelligent, adaptable wild animals known for their cunning nature and 
              beautiful fur. While wild foxes should never be kept as pets, domesticated fox 
              programs exist. Learning about foxes helps us appreciate these remarkable canines.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Foxes</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦊 Red Fox</h3>
                <p className="text-sm text-gray-700">
                  Most common species worldwide. Distinctive red-orange coat with white-tipped 
                  tail. Highly adaptable to various environments.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">❄️ Arctic Fox</h3>
                <p className="text-sm text-gray-700">
                  Pure white winter coat for camouflage. Lives in Arctic tundra. Changes to 
                  brown/grey in summer.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🏜️ Fennec Fox</h3>
                <p className="text-sm text-gray-700">
                  Tiny desert fox with enormous ears. Smallest fox species. Those big ears help 
                  dissipate heat and hear prey.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌫️ Grey Fox</h3>
                <p className="text-sm text-gray-700">
                  Only fox that can climb trees! Found in North America. Salt-and-pepper grey 
                  coat with rusty coloring.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Fox Facts & Behavior</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Intelligence</h3>
                  <p className="text-gray-700">
                    Highly intelligent problem-solvers. Use Earth's magnetic field to hunt. 
                    Can jump very high to pounce on prey.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦴</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Omnivores that eat small animals, birds, insects, fruits, and berries. 
                    Cache food for later consumption. Hunt mostly at dawn and dusk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🗣️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Communication</h3>
                  <p className="text-gray-700">
                    Use over 40 different vocalizations! From barks to screams to gekkering. 
                    Also communicate through scent marking and body language.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Wild Nature</h3>
                  <p className="text-gray-700">
                    Wild foxes are not suitable pets - they're untamed, have strong odors, and 
                    specific needs. Domesticated fox programs exist but require special permits.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default FoxPage

export const Head: HeadFC = () => <title>Foxes - Animal Friends</title>
