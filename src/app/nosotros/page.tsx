import type { Metadata } from 'next'
import NosotrosContent from './NosotrosContent'

export const metadata: Metadata = {
  title: 'Nosotros | AB Advisory — Firma Boutique de Asesoría Financiera',
  description: 'Conoce a Andrés Bustos A., fundador de AB Advisory. 20+ años en finanzas corporativas, IFRS y reestructuración de deuda. Santiago de Chile.',
  openGraph: {
    title: 'Andrés Bustos A. — Fundador & Director | AB Advisory',
    description: '20+ años en finanzas corporativas, IFRS y reestructuración de deuda. Ex-Head of Corporate Accounting en LATAM Airlines Group. Firma boutique en Santiago, Chile.',
    url: 'https://www.abadvisory.cl/nosotros',
    type: 'profile',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrés Bustos A.',
  jobTitle: 'Founder & Director Ejecutivo',
  worksFor: { '@type': 'Organization', name: 'AB Advisory', url: 'https://www.abadvisory.cl' },
  url: 'https://www.abadvisory.cl/nosotros',
  sameAs: ['https://linkedin.com/in/andresbustosant'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Universidad de Chile' },
    { '@type': 'CollegeOrUniversity', name: 'Universidad Tecnológica Metropolitana' },
    { '@type': 'CollegeOrUniversity', name: 'Universidad Adolfo Ibáñez' },
  ],
  knowsAbout: ['Finanzas Corporativas', 'IFRS', 'Reestructuración de Deuda', 'Compliance Corporativo', 'Auditoría'],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <NosotrosContent />
    </>
  )
}