import { Mail, MapPin, Phone } from 'lucide-react'

export interface ContactDetails {
  address?: string
  email?: string
  phone?: string
}

interface ContactListProps {
  contact: ContactDetails
}

const contactItems = [
  { key: 'address', label: 'Address', icon: MapPin },
  { key: 'email', label: 'Email', icon: Mail },
  { key: 'phone', label: 'Phone', icon: Phone },
] as const

type ContactKey = (typeof contactItems)[number]['key']

function getContactHref(key: ContactKey, value: string) {
  if (key === 'address') {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`
  }

  if (key === 'email') {
    return `mailto:${value}`
  }

  return `tel:${value.replace(/[^\d+]/g, '')}`
}

function ContactList({ contact }: ContactListProps) {
  return (
    <dl className="space-y-3">
      {contactItems.map(({ key, label, icon: Icon }) => {
        const value = contact[key]

        if (!value) {
          return null
        }

        return (
          <div key={key} className="flex gap-3 text-sm leading-5">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" aria-hidden="true" />
            <div>
              <dt className="font-medium text-[#9CA3AF]">{label}</dt>
              <dd className="mt-0.5 break-words text-gray-300">
                <a
                  href={getContactHref(key, value)}
                  target={key === 'address' ? '_blank' : undefined}
                  rel={key === 'address' ? 'noreferrer' : undefined}
                  className="transition hover:text-blue-200 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#111827]"
                >
                  {value}
                </a>
              </dd>
            </div>
          </div>
        )
      })}
    </dl>
  )
}

export default ContactList
