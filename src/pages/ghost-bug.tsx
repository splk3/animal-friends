import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const GhostBugPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="👻🐛 Ghost Bug - Ethereal Insect Friend"
      funFact={
        <><p className="text-purple-700 font-semibold">
            ✨ Magical Fact: Ghost Bugs can sense emotions and will glow extra bright to cheer
            you up when you're sad! A group of ghost bugs is called a "whisper."
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The Ghost Bug is a delightful combination of a bug and a ghost - tiny, translucent, 
              and adorably spooky! These miniature spectral insects float through the air, glow 
              softly, and bring a magical ambiance to any space. Perfect for those who love both 
              bugs and supernatural creatures.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Ghost Bug Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦋 Phantom Butterfly</h3>
                <p className="text-sm text-gray-700">
                  Translucent wings that shimmer with rainbow colors. Leave glowing trails as 
                  they flutter. Most colorful ghost bug type.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🐞 Spectral Ladybug</h3>
                <p className="text-sm text-gray-700">
                  Ethereal red shell with glowing spots. Bring extra good luck! Can phase 
                  through plants while protecting them.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌟 Firefly Ghost</h3>
                <p className="text-sm text-gray-700">
                  Combine firefly bioluminescence with ghost glow. Create stunning light shows. 
                  Shine in multiple colors at once.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">👻 Spirit Beetle</h3>
                <p className="text-sm text-gray-700">
                  Small, iridescent, and floaty. Can carry tiny messages between ghost bugs. 
                  Love collecting ethereal flowers.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Spectral Bug Care</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Need an ethereal terrarium or simply a moonlit room. Can pass through glass. 
                    Love flowers (real or ghostly). Prefer gentle breezes and soft lighting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌸</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Feed on spectral nectar and moonbeams. Also sustained by positive energy 
                    and kind thoughts. Don't need traditional bug food!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Behavior</h3>
                  <p className="text-gray-700">
                    Gentle and curious. Float gracefully rather than flying traditionally. 
                    Social creatures that enjoy being in small groups. Very peaceful.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💫</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Features</h3>
                  <p className="text-gray-700">
                    Glow in different colors based on mood. Can become completely invisible. 
                    Their presence makes plants grow better. Bring calm, peaceful energy.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default GhostBugPage

export const Head: HeadFC = () => <title>Ghost Bug - Animal Friends</title>
