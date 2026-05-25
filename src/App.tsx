import Hero from './components/Hero'
import RecommendationCard from './components/RecommendationCard'
import ReferenceCard from './components/ReferenceCard'
import SectionTitle from './components/SectionTitle'
import { recommendations } from './data/recommendations'
import { references } from './data/references'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0F19] text-[#F9FAFB]">
      <Hero />

      <section className="bg-[#0D1422]">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="border-b border-white/10 pb-8">
            <p className="border-l-2 border-blue-400 pl-5 text-lg leading-8 text-[#9CA3AF]">
              This page organizes Xiaomin's professional references, recommendation letters, and
              supporting contact details for hiring review.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1422]">
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <SectionTitle
            eyebrow="Recommendation Letters"
            title="Featured Recommendation Providers"
            description="Featured recommendation letters from Centennial College professors who worked closely with Xiaomin across AI, software project, and database courses."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard
                key={recommendation.name}
                recommendation={recommendation}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0B0F19]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionTitle
            eyebrow="Professional References"
            title="Additional References"
            description="Additional academic and professional references connected to Xiaomin's software engineering, programming, and industry experience."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {references.map((reference, index) => (
              <ReferenceCard key={reference.name} reference={reference} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
