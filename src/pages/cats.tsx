import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const CatsPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐈 Cats - Independent Companions"
      funFact={
        <><p className="text-purple-700 font-semibold">
            💡 Did you know? Cats spend 70% of their lives sleeping, which means a 9-year-old cat
            has been awake for only three years of its life!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              Cats are beloved for their independent nature, playful antics, and affectionate 
              personalities. These graceful creatures make perfect companions for those who 
              appreciate a pet with a mind of their own.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Popular Cat Breeds</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">😺 Persian</h3>
                <p className="text-sm text-gray-700">
                  Gentle, quiet, and sweet-natured. Known for their luxurious long coats.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">😸 Siamese</h3>
                <p className="text-sm text-gray-700">
                  Social, vocal, and intelligent. Love to interact with their humans.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">😻 Maine Coon</h3>
                <p className="text-sm text-gray-700">
                  Large, friendly, and dog-like. Known as the "gentle giants" of cats.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">😽 British Shorthair</h3>
                <p className="text-sm text-gray-700">
                  Calm, easy-going, and affectionate. Perfect for apartment living.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍽️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Nutrition</h3>
                  <p className="text-gray-700">
                    High-protein diet with quality cat food. Cats are obligate carnivores and 
                    need meat in their diet. Always provide fresh water.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎾</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Play & Exercise</h3>
                  <p className="text-gray-700">
                    Interactive play sessions with toys. Cats need mental stimulation and 
                    physical activity to stay healthy and happy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧹</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Litter Box</h3>
                  <p className="text-gray-700">
                    Clean litter box daily. Cats are naturally clean animals and prefer a 
                    tidy bathroom area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💅</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Grooming</h3>
                  <p className="text-gray-700">
                    Regular brushing to prevent hairballs and matting. Nail trimming and 
                    dental care are also important.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default CatsPage

export const Head: HeadFC = () => <title>Cats - Animal Friends</title>
