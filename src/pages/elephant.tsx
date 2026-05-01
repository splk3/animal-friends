import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const ElephantPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐘 Elephants - Majestic Giants"
      funFact={
        <><p className="text-purple-700 font-semibold">
            💡 Did you know? Elephants are pregnant for 22 months - the longest gestation period
            of any mammal!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              While elephants aren't traditional pets (they're magnificent wild animals!), learning about 
              them helps us appreciate these intelligent, social giants and support conservation efforts. 
              Elephants are the largest land mammals and display remarkable intelligence and emotional depth.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Elephants</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌍 African Elephant</h3>
                <p className="text-sm text-gray-700">
                  The largest land animal. Features large ears shaped like the African continent and 
                  both males and females have tusks.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌏 Asian Elephant</h3>
                <p className="text-sm text-gray-700">
                  Smaller than African elephants with smaller, rounded ears. Only males typically 
                  have prominent tusks.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌳 Forest Elephant</h3>
                <p className="text-sm text-gray-700">
                  Found in dense African forests. Smaller with straighter, downward-pointing tusks 
                  adapted for forest life.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🏜️ Desert Elephant</h3>
                <p className="text-sm text-gray-700">
                  Adapted to arid conditions in Namibia and Mali. Can travel long distances and 
                  survive with limited water.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Elephant Facts & Conservation</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Intelligence</h3>
                  <p className="text-gray-700">
                    Elephants have exceptional memories, can recognize themselves in mirrors, and 
                    show empathy. They use tools and have complex social structures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Herbivores that consume up to 300 pounds of vegetation daily including grasses, 
                    leaves, bark, and fruits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐘</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Special Features</h3>
                  <p className="text-gray-700">
                    Their trunk contains over 40,000 muscles! Used for breathing, smelling, drinking, 
                    grabbing objects, and communication.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Conservation</h3>
                  <p className="text-gray-700">
                    Support elephant conservation by combating poaching, protecting habitats, and 
                    supporting ethical wildlife tourism.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default ElephantPage

export const Head: HeadFC = () => <title>Elephants - Animal Friends</title>
