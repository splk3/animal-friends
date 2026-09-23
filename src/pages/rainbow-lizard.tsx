import * as React from "react"
import { type HeadFC } from "gatsby"
import PageTemplate from "../components/PageTemplate"

const RainbowLizardPage: React.FC = () => {
  return (
    <PageTemplate
      pageTitle="🦎🌈 Rainbow Lizard - Colorful Scale Magic"
      funFact="🌈 Fun Fact: Rainbow Lizards' colors become more vibrant when they're happy and healthy! They're also excellent climbers and love to show off their colors in the sun."
    >
      <p className="text-lg text-gray-700 mb-6">
              The Rainbow Lizard is a stunning reptile that displays vibrant rainbow colors across its scales. 
              While they don't have special magical powers, their incredible color-changing patterns make them 
              one of the most beautiful and sought-after pets in the rainbow category.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Rainbow Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌈 Full Spectrum</h3>
                <p className="text-sm text-gray-700">
                  Classic pattern showing all rainbow colors in order from red to violet. 
                  Colors shift along the body creating a flowing rainbow effect.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Striped Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Distinct rainbow stripes running lengthwise. Each stripe maintains its vibrant 
                  color, creating a bold, striking appearance.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">✨ Spotted Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Multi-colored spots in rainbow hues scattered across the body. Each spot can 
                  be a different color, creating a confetti-like effect.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌟 Gradient Rainbow</h3>
                <p className="text-sm text-gray-700">
                  Smooth color transitions that blend seamlessly. Colors appear to flow and 
                  shimmer as the lizard moves in the light.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Spacious terrarium with proper temperature gradient (75-90°F). Include climbing 
                    branches, hiding spots, and basking areas. UVB lighting essential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦗</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Insectivorous - feed crickets, mealworms, and dubia roaches. Dust with calcium 
                    and vitamin supplements. Some enjoy occasional fruits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Humidity & Water</h3>
                  <p className="text-gray-700">
                    Maintain 50-70% humidity. Provide water dish and mist daily. Rainbow colors 
                    are most vibrant when properly hydrated.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌡️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Temperature</h3>
                  <p className="text-gray-700">
                    Basking spot at 90-95°F, cool side 75-80°F. Night temperature can drop to 
                    70-75°F. Monitor with thermometers at both ends.
                  </p>
                </div>
              </div>
            </div>
    </PageTemplate>
  )
}

export default RainbowLizardPage

export const Head: HeadFC = () => <title>Rainbow Lizard - Animal Friends</title>
