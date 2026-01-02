import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const CapybaraPage: React.FC = () => {
  return (
    <Layout pageTitle="🦫 Capybaras - Gentle Giants of the Rodent World">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Capybaras are the world's largest rodents and internet sensations known for their 
              calm, friendly nature. These semi-aquatic South American natives are highly social 
              and get along well with many other animals, earning them the nickname "nature's chairs."
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Capybara Characteristics</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">📏 Size & Appearance</h3>
                <p className="text-sm text-gray-700">
                  Can weigh up to 140 pounds and reach 2 feet tall. Look like giant guinea pigs 
                  with barrel-shaped bodies and short legs.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌊 Semi-Aquatic</h3>
                <p className="text-sm text-gray-700">
                  Excellent swimmers with webbed feet. Can hold breath underwater for up to 
                  5 minutes to hide from predators.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">👥 Highly Social</h3>
                <p className="text-sm text-gray-700">
                  Live in groups of 10-20 individuals. Need companionship and become stressed 
                  when alone. Very peaceful temperament.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🦷 Ever-Growing Teeth</h3>
                <p className="text-sm text-gray-700">
                  Like all rodents, their teeth never stop growing. Need to constantly gnaw on 
                  vegetation to keep teeth trimmed.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Care Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏊</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Habitat</h3>
                  <p className="text-gray-700">
                    Need large outdoor space with access to water for swimming. Require a pond 
                    or pool that's always available. Warm climate essential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Diet</h3>
                  <p className="text-gray-700">
                    Herbivores that eat grasses, aquatic plants, fruits, and vegetables. Need 
                    lots of roughage for digestion and dental health.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐾</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Companionship</h3>
                  <p className="text-gray-700">
                    Should never be kept alone - need at least one other capybara companion. 
                    Form strong social bonds and communicate with purrs, barks, and whistles.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Legal Considerations</h3>
                  <p className="text-gray-700">
                    Check local laws - capybaras are illegal or require permits in many areas. 
                    Need experienced exotic vet care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Capybaras are so chill that birds, monkeys, and other animals often 
            sit on them, and they don't mind at all!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default CapybaraPage

export const Head: HeadFC = () => <title>Capybaras - Animal Friends</title>
