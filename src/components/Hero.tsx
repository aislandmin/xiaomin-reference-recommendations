import { Code2, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M5.3 8.9H1.8v11.3h3.5V8.9ZM3.5 3.3a2 2 0 1 0 0 4.1 2 2 0 0 0 0-4.1Zm15.3 5.3a4 4 0 0 0-3.6 2h-.1V8.9h-3.4v11.3h3.5v-5.6c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3v5.5h3.5V14c0-3-.6-5.4-4.2-5.4Z"
      />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/xiaomin-guo-88713934/',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aislandmin?tab=repositories',
    icon: Code2,
  },
]

function Hero() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),linear-gradient(135deg,#0B0F19_0%,#111827_54%,#0B0F19_100%)]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent" />

      <div className="mx-auto grid min-h-[400px] w-full max-w-7xl items-center gap-8 px-5 py-8 sm:px-8 md:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/20 blur-2xl" />
            <img
              src="/images/profile.jpg"
              alt="Xiaomin (Aileen) Guo"
              className="relative h-40 w-40 rounded-[1.5rem] border border-white/15 object-cover shadow-2xl shadow-black/40 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
            Professional References
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-[#F9FAFB] sm:text-4xl md:whitespace-nowrap lg:text-4xl">
            Xiaomin (Aileen) Guo
          </h1>
          <p className="mt-3 text-xl font-medium text-blue-100 sm:text-2xl">
            Software Engineer | AI & Full-Stack Developer
          </p>
          <p className="mt-3 inline-flex items-center justify-center gap-2 text-[#9CA3AF] lg:justify-start">
            <MapPin className="h-5 w-5 text-blue-400" aria-hidden="true" />
            Toronto, Ontario, Canada
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={label}
                title={label}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-[#F9FAFB] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/15 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
              >
                <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
