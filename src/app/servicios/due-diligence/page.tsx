import type { Metadata } from 'next'
import DueDiligenceContent from './DueDiligenceContent'

export const metadata: Metadata = {
  title: 'Due Diligence Financiero | AB Advisory',
  description: 'Análisis financiero profundo para procesos de M&A, inversión o desinversión. Informes ejecutivos para directorio e inversionistas. Confidencialidad absoluta.',
  alternates: { canonical: 'https://www.abadvisory.cl/servicios/due-diligence' },
  openGraph: {
    title: 'Due Diligence Financiero para M&A | AB Advisory',
    description: 'Análisis financiero profundo para procesos de M&A, inversión o desinversión. Informes ejecutivos para directorio e inversionistas. Confidencialidad absoluta.',
    url: 'https://www.abadvisory.cl/servicios/due-diligence',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Due Diligence Financiero M&A | AB Advisory', description: 'Análisis financiero profundo para M&A, inversión y desinversión. Informes para directorio. Confidencialidad absoluta.' },
}

export default function Page() {
  return <DueDiligenceContent />
}
