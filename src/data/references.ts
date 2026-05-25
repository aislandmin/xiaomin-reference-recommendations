import type { ContactDetails } from '../components/ContactList'

export interface Reference {
  name: string
  role: string
  organization: string
  relationship: string
  contact: ContactDetails
}

export const references: Reference[] = [
  {
    name: 'Narendra Pershad',
    role: 'Professor',
    organization: 'Centennial College',
    relationship:
      'Professor Pershad was my instructor for Networking for Software Developers course and Programming 3 course at Centennial College',
    contact: {
      address: '941 Progress Ave, Scarborough, ON M1G 3T8',
      email: 'NPershad@centennialcollege.ca',
    },
  },
  {
    name: 'Salima Alim Amlani',
    role: 'Professor',
    organization: 'Centennial College',
    relationship:
      'Professor Amlani was my instructor for Data Structures and Algorithms course at Centennial College',
    contact: {
      address: '941 Progress Ave, Scarborough, ON M1G 3T8',
      email: 'samlani6@my.centennialcollege.ca',
    },
  },
  {
    name: 'Jigisha Patel',
    role: 'Professor',
    organization: 'Centennial College',
    relationship:
      'Professor Patel was my instructor for Java Programming course at Centennial College',
    contact: {
      address: '941 Progress Ave, Scarborough, ON M1G 3T8',
      email: 'jpate501@my.centennialcollege.ca',
    },
  },
  {
    name: 'Richard Luo',
    role: 'Principal Consultant',
    organization: 'Advanced Process Control Corporation',
    relationship: 'Dr. Luo was the CEO when I worked at Molarray Research Inc.',
    contact: {
      address: '1625 Hollywell Ave, Mississauga, ON L5N 4P8',
      email: 'Lantianbaicloud@gmail.com',
      phone: '+1 (416) 660-3495',
    },
  },
]
