import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactList from './ContactList'
import type { Reference } from '../data/references'

interface ReferenceCardProps {
  reference: Reference
  index: number
}

function ReferenceCard({ reference, index }: ReferenceCardProps) {
  const Icon = reference.role === 'Professor' ? GraduationCap : BriefcaseBusiness

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      className="flex h-full flex-col rounded-lg border border-white/10 bg-[#111827]/90 p-6 shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#111827]"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-500/12 text-blue-300 ring-1 ring-blue-400/20">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-7 text-[#F9FAFB]">{reference.name}</h3>
            <p className="mt-1 text-sm font-medium text-blue-300">{reference.role}</p>
          </div>
        </div>

        <p className="mt-5 text-sm text-[#9CA3AF]">{reference.organization}</p>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
            Relationship
          </p>
          <p className="mt-3 text-base leading-7 text-gray-300">{reference.relationship}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-white/10 pt-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
          Contact
        </p>
        <ContactList contact={reference.contact} />
      </div>
    </motion.article>
  )
}

export default ReferenceCard
