import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainbowHamsterPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🌈🐹 Rainbow Hamster - Tiny Colorful Cuteness"
      funFact={
        <><p className="text-purple-700 font-semibold">
            🌈 Fun Fact: Rainbow Hamsters can fit incredible amounts of food in their cheeks -
            each cheek pouch extends to their hips! They glow slightly in moonlight!
          </p></>
      }
    >
      <p className="text-lg text-gray-700 mb-6">
              The Rainbow Hamster is an adorable small pet with fur that displays all the colors 
              of the rainbow. These tiny companions are perfect for families, combining the 
              easy care of regular hamsters with spectacular rainbow coloring!
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Coat Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Gradient Fur</h3>
                <p className="text-sm text-gray-700">
                  Smooth color transition from head to tail through rainbow spectrum. Each 
                  cheek pouch a different color - adorable when stuffed with food!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">✨ Patchy Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Distinct patches of different rainbow colors. Like a tiny patchwork quilt! 
                  Each hamster has unique pattern.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🎨 Banded Colors</h3>
                <p className="text-sm text-gray-700">
                  Rainbow bands encircle body like stripes. Creates striking appearance 
                  especially when running on wheel!
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Sparkle Coat</h3>
                <p className="text-sm text-gray-700">
                  Fur shimmers with rainbow iridescence. Under light, looks like living 
                  gemstone. Most magical variety!
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Housing</h3>
                  <p className="text-gray-700">
                    Spacious cage with solid bottom. Exercise wheel essential! Provide hideouts, 
                    tunnels, and toys. Clean bedding weekly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥕</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Hamster pellets, fresh vegetables, occasional fruits. Love nuts and seeds. 
                    Always have fresh water. Watch those adorable stuffed cheeks!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌙</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Behavior</h3>
                  <p className="text-gray-700">
                    Nocturnal - most active at night. Solitary by nature. Enjoy gentle handling 
                    once tamed. Love running, burrowing, and hoarding food!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌈</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Special Feature</h3>
                  <p className="text-gray-700">
                    Leave tiny rainbow footprints on clear surfaces! Running on wheel creates 
                    rainbow blur. Extra cute when grooming their colorful fur.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainbowHamsterPage

export const Head: HeadFC = () => <title>Rainbow Hamster - Animal Friends</title>
