import { ExternalLink, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactList from './ContactList'
import type { Recommendation } from '../data/recommendations'

interface RecommendationCardProps {
  recommendation: Recommendation
  index: number
}

function RecommendationCard({ recommendation, index }: RecommendationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex min-h-[420px] flex-col rounded-lg border border-white/10 bg-[#111827] p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-blue-950/30"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-500/12 text-blue-300 ring-1 ring-blue-400/20">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-7 text-[#F9FAFB]">
              {recommendation.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-300">{recommendation.role}</p>
          </div>
        </div>

        <p className="mt-5 text-sm text-[#9CA3AF]">{recommendation.organization}</p>

        <a
          href={recommendation.pdf}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold leading-5 text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[#111827]"
        >
          View Recommendation Letter
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>

        <div className="mt-6 flex-1 border-t border-white/10 pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
            Relationship
          </p>
          <p className="mt-3 text-base leading-7 text-gray-300">{recommendation.relationship}</p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
            Contact
          </p>
          <ContactList contact={recommendation.contact} />
        </div>
      </div>
    </motion.article>
  )
}

export default RecommendationCard
