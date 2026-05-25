interface SectionTitleProps {
  eyebrow: string
  title: string
  description: string
}

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="w-full">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-[#F9FAFB] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#9CA3AF] sm:text-lg">{description}</p>
    </div>
  )
}

export default SectionTitle
