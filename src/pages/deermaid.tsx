import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const DeerMaidPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦌🧜‍♀️ DeerMaid - Forest and Sea United"
      funFact="✨ Magical Fact: DeerMaids can call forest animals and sea creatures simultaneously! Their antlers grow coral and flowers at the same time, creating stunning natural crowns!"
    >
      <p className="text-lg text-gray-700 mb-6">
              The DeerMaid is a graceful fusion of deer elegance and mermaid mystique. These 
              beautiful creatures have the upper body of a deer with majestic antlers and the lower 
              body of a mermaid with flowing tail fins. They navigate both forest streams and 
              coastal waters with equal grace.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">DeerMaid Varieties</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌲 Forest Stream DeerMaid</h3>
                <p className="text-sm text-gray-700">
                  Brown fur with emerald green tail. Small antlers adorned with flowers. 
                  Live in forest rivers and creeks. Very peaceful.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌊 Coastal DeerMaid</h3>
                <p className="text-sm text-gray-700">
                  Golden-tan coat with azure blue tail. Coral-adorned antlers. Navigate 
                  between beaches and woodlands. Social and friendly.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">❄️ Arctic DeerMaid</h3>
                <p className="text-sm text-gray-700">
                  White fur with icy blue tail. Crystalline antlers. Thrive in cold northern 
                  waters and snowy forests. Most majestic type.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌸 Spring DeerMaid</h3>
                <p className="text-sm text-gray-700">
                  Reddish-brown coat with pink-purple tail. Antlers bloom with real flowers. 
                  Appear during spring. Bring renewal energy.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Hybrid Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏞️</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Need access to both forest areas and water bodies. Ideal: wooded property 
                    with pond or stream access. Love shallow waters near trees.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Aquatic plants, fresh leaves, and underwater vegetation. Some enjoy small 
                    fish. Browse forest plants while also grazing in water. Very adaptable diet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦌</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Antler Care</h3>
                  <p className="text-gray-700">
                    Males shed and regrow antlers annually. During growth, antlers are covered 
                    in velvet. Sometimes decorated with seaweed and flowers naturally.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Behavior</h3>
                  <p className="text-gray-700">
                    Gentle, shy, but curious. Communicate with soft calls that work both above 
                    and underwater. Most active at dawn and dusk. Form small herds.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default DeerMaidPage

export const Head: HeadFC = () => <title>DeerMaid - Animal Friends</title>
