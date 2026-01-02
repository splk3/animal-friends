import * as React from "react"
import { type HeadFC } from "gatsby"
import Layout from "../components/Layout"

const KangarooPage: React.FC = () => {
  return (
    <Layout pageTitle="🦘 Kangaroos - Hopping Icons of Australia">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Kangaroos are iconic Australian marsupials famous for their powerful hind legs and 
              hopping locomotion. While they're wild animals that shouldn't be kept as typical pets, 
              learning about kangaroos helps us appreciate Australia's unique wildlife.
            </p>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Types of Kangaroos</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🦘 Red Kangaroo</h3>
                <p className="text-sm text-gray-700">
                  Largest marsupial species. Males can reach 6 feet tall and weigh 200 pounds. 
                  Found in Australia's arid interior.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌳 Eastern Grey</h3>
                <p className="text-sm text-gray-700">
                  Second largest species. Live in forests and grasslands. More social than red 
                  kangaroos, forming larger groups.
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-600 mb-2">🌾 Western Grey</h3>
                <p className="text-sm text-gray-700">
                  Found in southern Australia. Slightly smaller than eastern greys with darker 
                  coloring. Prefer open woodlands.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🌙 Wallaby</h3>
                <p className="text-sm text-gray-700">
                  Smaller relatives of kangaroos. Many species exist, ranging from 1-3 feet tall. 
                  More adaptable to various habitats.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">Kangaroo Facts & Behavior</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦘</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Amazing Hopping</h3>
                  <p className="text-gray-700">
                    Can hop at 35 mph and leap 25 feet in a single bound! Hopping is more 
                    energy-efficient than running at high speeds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👶</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Joeys & Pouches</h3>
                  <p className="text-gray-700">
                    Baby kangaroos (joeys) are born tiny - about 1 inch long! They crawl into 
                    mom's pouch and develop there for 6-8 months.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h3 className="font-semibold text-pink-600">Diet</h3>
                  <p className="text-gray-700">
                    Herbivores that graze on grasses and shrubs. Can survive long periods without 
                    water, getting moisture from plants.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🥊</span>
                <div>
                  <h3 className="font-semibold text-purple-600">Boxing Behavior</h3>
                  <p className="text-gray-700">
                    Males "box" by standing upright and striking with forepaws. This establishes 
                    dominance and wins breeding rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
          <p className="text-purple-700 font-semibold">
            💡 Did you know? Kangaroos can't walk backwards, which is why they appear on the 
            Australian coat of arms - symbolizing moving forward!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default KangarooPage

export const Head: HeadFC = () => <title>Kangaroos - Animal Friends</title>
