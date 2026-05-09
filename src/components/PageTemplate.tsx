import * as React from "react"
import Layout from "./Layout"

interface PageTemplateProps {
  pageTitle: string
  funFact?: string
  children: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({ pageTitle, funFact, children }) => {
  return (
    <Layout pageTitle={pageTitle} showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            {children}
          </div>
        </div>

        {funFact && (
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 text-center">
            <p className="text-purple-700 font-semibold">
              {funFact}
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default PageTemplate
