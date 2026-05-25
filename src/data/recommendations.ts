import type { ContactDetails } from '../components/ContactList'

export interface Recommendation {
  name: string
  role: string
  organization: string
  relationship: string
  pdf: string
  contact: ContactDetails
}

export const recommendations: Recommendation[] = [
  {
    name: 'Brian Hu',
    role: 'Professor',
    organization: 'Centennial College',
    relationship:
      'Professor Hu was my instructor for Emerging Technologies course at Centennial College',
    pdf: '/files/brian-hu-letter.pdf',
    contact: {
      address: '941 Progress Ave, Scarborough, ON M1G 3T8',
      email: 'BHu@centennialcollege.ca',
      phone: '+1 (647) 833-5011',
    },
  },
  {
    name: 'Jin Li',
    role: 'Professor',
    organization: 'Centennial College',
    relationship:
      'Professor Li was my instructor for Software Project 2 course at Centennial College',
    pdf: '/files/jin-li-letter.pdf',
    contact: {
      address: '941 Progress Ave, Scarborough, ON M1G 3T8',
      email: 'jli329@my.centennialcollege.ca',
    },
  },
  {
    name: 'Yuri Vanegas',
    role: 'Professor',
    organization: 'Centennial College',
    relationship:
      'Professor Vanegas was my instructor for Advanced Database course at Centennial College',
    pdf: '/files/yuri-vanegas-letter.pdf',
    contact: {
      address: '941 Progress Ave, Scarborough, ON M1G 3T8',
      email: 'yvanega1@my.centennialcollege.ca',
    },
  },
]
