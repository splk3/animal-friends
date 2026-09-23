import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const LadyBugPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🐞 Lady Bugs - Garden Guardians"
      funFact="💡 Did you know? Lady bugs are considered symbols of good luck in many cultures! They also taste terrible to predators, which is why they have such bright warning colors."
    >
      <p className="text-lg text-gray-700 mb-6">
              Lady bugs, also known as ladybirds or ladybird beetles, are delightful insects that 
              bring good luck and natural pest control to gardens. These charming beetles are popular 
              with children and adults alike for their bright colors and beneficial nature.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Lady Bugs</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🔴 Seven-Spotted Ladybug</h3>
                <p className="text-sm text-gray-700">
                  Classic red with seven black spots. The most common and recognizable species. 
                  Excellent aphid predators.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🟡 Asian Lady Beetle</h3>
                <p className="text-sm text-gray-700">
                  Variable colors from yellow to red. Very effective at pest control but can be invasive.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🟠 Two-Spotted Ladybug</h3>
                <p className="text-sm text-gray-700">
                  Small, red or orange with two black spots. Native to North America and very beneficial.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">⚫ Fourteen-Spotted</h3>
                <p className="text-sm text-gray-700">
                  Yellow body with 14 rectangular black spots. Specialized in controlling psyllids and aphids.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care & Habitat</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌸</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Environment</h3>
                  <p className="text-gray-700">
                    Lady bugs thrive in gardens with diverse plants. They prefer areas with plenty 
                    of flowers and vegetation. No special enclosure needed - just a healthy garden!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦟</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Lady bugs feed on aphids, mites, scale insects, and other garden pests. 
                    A single ladybug can eat up to 5,000 aphids in its lifetime!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Attracting Lady Bugs</h3>
                  <p className="text-gray-700">
                    Plant flowers like dill, fennel, yarrow, and marigolds. Avoid pesticides. 
                    Provide shelter with leaves and mulch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">❄️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Seasonal Care</h3>
                  <p className="text-gray-700">
                    Lady bugs hibernate in winter, often clustering in protected areas. Leave leaf 
                    litter and provide ladybug houses for overwintering.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default LadyBugPage

export const Head: HeadFC = () => <title>Lady Bugs - Animal Friends</title>
