import type { Metadata } from 'next'
import DueDiligenceContent from './DueDiligenceContent'

export const metadata: Metadata = {
  title: 'Due Diligence Financiero | AB Advisory',
  description: 'Análisis financiero profundo para procesos de M&A, inversión o desinversión. Informes ejecutivos para directorio e inversionistas. Confidencialidad absoluta.',
  openGraph: {
    title: 'Due Diligence Financiero para M&A | AB Advisory',
    description: 'Análisis financiero profundo para procesos de M&A, inversión o desinversión. Informes ejecutivos para directorio e inversionistas. Confidencialidad absoluta.',
    url: 'https://www.abadvisory.cl/servicios/due-diligence',
    type: 'website',
  },
}

export default function Page() {
  return <DueDiligenceContent />
}
